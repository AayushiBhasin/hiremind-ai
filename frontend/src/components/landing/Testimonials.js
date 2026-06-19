import { Star } from "lucide-react";

const items = [
  {
    name: "Aarav Mehta",
    role: "Senior SWE → Stripe",
    quote: "InterviewIQ's ATS score jumped me from 58 to 94. Got 4 offers in 3 weeks.",
    initials: "AM",
  },
  {
    name: "Priya Shah",
    role: "PM → Notion",
    quote: "The mock interviews felt scarily real. The behavioral feedback alone is worth it.",
    initials: "PS",
  },
  {
    name: "Diego Alvarez",
    role: "Data Scientist → Anthropic",
    quote: "Skill gap detection nailed exactly what I needed to learn. Roadmap delivered.",
    initials: "DA",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full glass px-3 py-1 text-xs text-muted-foreground">Loved by candidates</span>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Real candidates. <span className="text-gradient">Real offers.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((t) => (
            <div key={t.name} className="relative rounded-2xl p-[1px]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-40 blur-[2px]" />
              <div className="relative glass-strong rounded-2xl p-6">
                <div className="flex items-center gap-1 text-[var(--cyan)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-foreground/90">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-xs font-semibold text-primary-foreground">
                    {t.initials}
                  </span>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
