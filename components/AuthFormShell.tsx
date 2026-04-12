type AuthFormShellProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function AuthFormShell({ title, subtitle, children }: AuthFormShellProps) {
  return (
    <div className="flex min-h-0 flex-1 flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-indigo-100/80 bg-white/95 p-8 shadow-xl backdrop-blur">
        <h1 className="text-center text-2xl font-semibold text-indigo-950">{title}</h1>
        {subtitle ? (
          <p className="mt-2 text-center text-sm text-slate-600">{subtitle}</p>
        ) : null}
        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
}
