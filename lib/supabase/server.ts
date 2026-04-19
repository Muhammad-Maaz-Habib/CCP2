import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export function createClient() {
  const cookieStore = cookies();

  const client = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Called from a Server Component without mutable cookies; middleware will refresh session.
          }
        },
      },
    }
  );

  const originalGetUser = client.auth.getUser.bind(client.auth);
  client.auth.getUser = (async (...args: Parameters<typeof originalGetUser>) => {
    try {
      return await originalGetUser(...args);
    } catch (error: any) {
      const message = String(error?.message || '');
      if (/invalid refresh token|refresh token not found/i.test(message)) {
        return { data: { user: null }, error: null } as unknown as Awaited<ReturnType<typeof originalGetUser>>;
      }
      throw error;
    }
  }) as typeof client.auth.getUser;

  return client;
}
