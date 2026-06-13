import { Brain } from "lucide-react";

export function Nav() {
  const links = [
    { href: "#features", label: "Features" },
    { href: "#how", label: "How it works" },
    { href: "#preview", label: "AI Preview" },
    { href: "#pricing", label: "Pricing" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <nav className="glass-strong flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
          <a href="#" className="flex items-center gap-2">
            <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary glow-primary">
              <Brain className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="font-display text-base font-semibold tracking-tight">
              HireMind <span className="text-gradient">AI</span>
            </span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#cta"
              className="hidden rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
            >
              Sign in
            </a>
            <a
              href="#cta"
              className="rounded-lg bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] glow-primary"
            >
              Get started
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
