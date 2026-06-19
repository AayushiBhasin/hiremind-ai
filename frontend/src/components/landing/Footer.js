import { Brain, Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 md:grid-cols-5">
        <div className="col-span-2 md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary">
              <Brain className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="font-display text-base font-semibold">
              InterviewIQ <span className="text-gradient">AI</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            AI-powered resume analysis & interview preparation for the next generation of talent.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-lg glass text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {[
          { title: "Product", links: ["Features", "Pricing", "Roadmap", "Changelog"] },
          { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
          { title: "Legal", links: ["Privacy", "Terms", "Security", "DPA"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold">{col.title}</h4>
            <ul className="mt-4 space-y-2">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} InterviewIQ AI. All rights reserved.</span>
          <span>Built with AI, for ambitious humans.</span>
        </div>
      </div>
    </footer>
  );
}
