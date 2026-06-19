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
      <div className="mx-auto mt-4 max-w-7xl px-4">
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 backdrop-blur-2xl supports-[backdrop-filter]:bg-black/30 shadow-xl px-5 py-3 transition-all duration-300">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/30">
              <Brain className="h-5 w-5 text-white" />
            </span>

            <span className="text-lg font-bold tracking-tight text-white">
              HireMind <span className="text-cyan-400">AI</span>
            </span>
          </a>

          {/* Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 transition-all duration-300 hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#cta"
              className="hidden rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition hover:text-white sm:block"
            >
              Sign In
            </a>

            <a
              href="#cta"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition duration-300 hover:scale-105 hover:shadow-cyan-400/50"
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}