import {
  Target,
  AlertCircle,
  Wand2,
  Tags,
  ArrowUpRight,
} from "lucide-react";
export function AIPreview({ analysis }) {
  if (!analysis) return null;

  return (
    <section
      id="preview"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full glass px-3 py-1 text-xs text-muted-foreground">
            AI Analysis Preview
          </span>

          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            A complete report,{" "}
            <span className="text-gradient">
              instantly
            </span>
          </h2>

          <p className="mt-4 text-muted-foreground">
            Every analysis includes ATS scoring,
            skill gaps, keywords, and resume
            improvement suggestions.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-primary opacity-15 blur-3xl" />

          <div className="glass-strong rounded-3xl p-4 sm:p-6 shadow-[var(--shadow-card)]">
            <div className="grid grid-cols-12 gap-4">
              {/* ATS SCORE CARD */}
              <div className="col-span-12 md:col-span-4 glass rounded-2xl p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    ATS Score
                  </span>

                  <Target className="h-4 w-4 text-[var(--cyan)]" />
                </div>

                <div className="mt-4 grid place-items-center">
                  <div
                    className="relative grid h-40 w-40 place-items-center rounded-full"
                    style={{
                      background: `conic-gradient(
                        oklch(0.72 0.19 265) 0deg,
                        oklch(0.65 0.24 305) ${
                          analysis.atsScore * 3.6
                        }deg,
                        oklch(1 0 0 / 0.07) ${
                          analysis.atsScore * 3.6
                        }deg
                      )`,
                    }}
                  >
                    <div className="grid h-32 w-32 place-items-center rounded-full bg-[oklch(0.16_0.03_270)]">
                      <div className="text-center">
                        <div className="text-3xl font-semibold text-gradient">
                          {analysis.atsScore}%
                        </div>

                        <div className="text-[10px] text-muted-foreground">
                          ATS Score
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-white/[0.03] p-3 text-center">
                  <div className="text-xl font-semibold">
                    {analysis.matchScore}%
                  </div>

                  <div className="text-xs text-muted-foreground">
                    Resume Match Score
                  </div>
                </div>
              </div>

              {/* RIGHT SECTION */}
              <div className="col-span-12 md:col-span-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Missing Skills */}
                <div className="glass rounded-2xl p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Missing Skills
                    </span>

                    <AlertCircle className="h-4 w-4 text-[oklch(0.82_0.18_70)]" />
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {analysis.missingSkills?.map(
                      (skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Suggested Keywords */}
                <div className="glass rounded-2xl p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Suggested Keywords
                    </span>

                    <Tags className="h-4 w-4 text-[var(--cyan)]" />
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {analysis[
                      "Suggested Keywords"
                    ]?.map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full bg-white/[0.04] px-2.5 py-1 text-xs text-foreground/90 ring-1 ring-white/10"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Resume Improvements Full Width */}
                <div className="glass rounded-2xl p-5 sm:col-span-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Resume Improvements
                    </span>

                    <Wand2 className="h-4 w-4 text-[var(--purple)]" />
                  </div>

                  <ul className="mt-4 space-y-3 text-sm">
                    {analysis.resumeImprovements?.map(
                      (item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--electric)]" />

                          <span>{item}</span>
                        </li>
                      )
                    )}
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