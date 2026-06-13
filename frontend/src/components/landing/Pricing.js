import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    blurb: "Try the core analysis. No credit card.",
    features: ["3 resume analyses / mo", "Basic ATS score", "10 interview questions", "Cover letter (1)"],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$19",
    blurb: "For serious job seekers.",
    features: [
      "Unlimited analyses",
      "Advanced ATS + rewrites",
      "Mock AI interviews",
      "Skill gap + roadmap",
      "Priority AI models",
    ],
    cta: "Go Pro",
    highlight: true,
  },
  {
    name: "Recruiter",
    price: "$49",
    blurb: "Screen candidates 10× faster.",
    features: [
      "Bulk resume scoring",
      "Candidate ranking",
      "Custom JD templates",
      "Team workspace",
      "API access",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full glass px-3 py-1 text-xs text-muted-foreground">Pricing</span>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Simple plans. <span className="text-gradient">Serious leverage.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl ${p.highlight ? "p-[1px]" : ""}`}
            >
              {p.highlight && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-80 blur-[1px]" />
              )}
              <div
                className={`relative h-full rounded-2xl p-7 ${
                  p.highlight ? "glass-strong glow-purple" : "glass"
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-primary px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-primary-foreground glow-primary">
                    <Sparkles className="h-3 w-3" /> Most Popular
                  </span>
                )}
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                </div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold">{p.price}</span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>

                <a
                  href="#cta"
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition-transform hover:scale-[1.02] ${
                    p.highlight
                      ? "bg-gradient-primary text-primary-foreground glow-primary"
                      : "glass text-foreground hover:bg-white/5"
                  }`}
                >
                  {p.cta}
                </a>

                <ul className="mt-6 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--cyan)]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
