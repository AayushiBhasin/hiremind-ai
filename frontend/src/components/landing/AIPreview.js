import { Target, AlertCircle, Wand2, Tags, MessageSquare, ArrowUpRight } from "lucide-react";

export function AIPreview() {
  return (
    <section id="preview" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full glass px-3 py-1 text-xs text-muted-foreground">AI Analysis Preview</span>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            A complete report, <span className="text-gradient">instantly</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every analysis includes ATS scoring, skill gaps, rewrites, and a full interview pack.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-primary opacity-15 blur-3xl" />
          <div className="glass-strong rounded-3xl p-4 sm:p-6 shadow-[var(--shadow-card)]">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-4 glass rounded-2xl p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">ATS Score</span>
                  <Target className="h-4 w-4 text-[var(--cyan)]" />
                </div>
                <div className="mt-4 grid place-items-center">
                  <div
                    className="relative grid h-40 w-40 place-items-center rounded-full"
                    style={{
                      background:
                        "conic-gradient(oklch(0.72 0.19 265) 0deg, oklch(0.65 0.24 305) 295deg, oklch(1 0 0 / 0.07) 295deg)",
                    }}
                  >
                    <div className="grid h-32 w-32 place-items-center rounded-full bg-[oklch(0.16_0.03_270)]">
                      <div className="text-center">
                        <div className="text-3xl font-semibold text-gradient">82%</div>
                        <div className="text-[10px] text-muted-foreground">Match</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px]">
                  <div className="rounded-lg bg-white/[0.03] p-2">
                    <div className="text-foreground">94%</div>
                    <div className="text-muted-foreground">Keywords</div>
                  </div>
                  <div className="rounded-lg bg-white/[0.03] p-2">
                    <div className="text-foreground">88%</div>
                    <div className="text-muted-foreground">Format</div>
                  </div>
                  <div className="rounded-lg bg-white/[0.03] p-2">
                    <div className="text-foreground">71%</div>
                    <div className="text-muted-foreground">Impact</div>
                  </div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="glass rounded-2xl p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Missing Skills</span>
                    <AlertCircle className="h-4 w-4 text-[oklch(0.82_0.18_70)]" />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Kubernetes", "System Design", "GraphQL", "Terraform", "Redis"].map((s) => (
                      <span key={s} className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="glass rounded-2xl p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Resume Improvements</span>
                    <Wand2 className="h-4 w-4 text-[var(--purple)]" />
                  </div>
                  <ul className="mt-3 space-y-2 text-xs">
                    {[
                      "Quantify outcomes in 3 bullets (e.g. -38% latency)",
                      "Move 'AWS' to top 5 skills",
                      "Tighten summary to 2 lines",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2 text-muted-foreground">
                        <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--electric)]" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass rounded-2xl p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Suggested Keywords</span>
                    <Tags className="h-4 w-4 text-[var(--cyan)]" />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["distributed systems", "event-driven", "observability", "TypeScript", "CI/CD", "AB testing"].map((s) => (
                      <span key={s} className="rounded-full bg-white/[0.04] px-2.5 py-1 text-xs text-foreground/90 ring-1 ring-white/10">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="glass rounded-2xl p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Top Interview Questions</span>
                    <MessageSquare className="h-4 w-4 text-[var(--electric)]" />
                  </div>
                  <ul className="mt-3 space-y-2 text-xs text-foreground/90">
                    <li className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">Design a rate limiter for a public API.</li>
                    <li className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">Describe a 0→1 product you owned end-to-end.</li>
                    <li className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">How do you handle conflicting stakeholders?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
