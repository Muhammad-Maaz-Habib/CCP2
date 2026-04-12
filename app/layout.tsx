import type { Metadata } from 'next';
import './globals.css';
import { createClient } from '@/lib/supabase/server';
import TopNav from '@/components/TopNav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Voice AI Coach',
  description: 'A voice-based AI coach for career and academic goals',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <TopNav email={user?.email ?? null} />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
