import {
  Code2,
  Users,
  FolderGit2,
  Brain,
} from "lucide-react";

export function InterviewPrep({ analysis }) {
  if (!analysis) return null;

  const groups = [
    {
      icon: Code2,
      title: "Technical",
      color: "var(--electric)",
      qs: analysis.technicalQuestions || [],
    },
    {
      icon: Users,
      title: "HR",
      color: "var(--purple)",
      qs: analysis.hrQuestions || [],
    },
    {
      icon: FolderGit2,
      title: "Project-Based",
      color: "var(--cyan)",
      qs: analysis.projectBasedQuestions || [],
    },
    {
      icon: Brain,
      title: "Behavioral",
      color: "var(--electric)",
      qs: analysis.BehavioralQuestions || [],
    },
  ];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full glass px-3 py-1 text-xs text-muted-foreground">
            Interview Preparation
          </span>

          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Practice the questions{" "}
            <span className="text-gradient">
              they'll actually ask
            </span>
          </h2>

          <p className="mt-4 text-muted-foreground">
            Personalized questions generated from
            your resume and job description.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {groups.map(
            ({ icon: Icon, title, qs, color }) => (
              <div
                key={title}
                className="glass rounded-2xl p-5 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="grid h-9 w-9 place-items-center rounded-xl bg-white/[0.04]"
                      style={{
                        boxShadow: `0 0 30px -8px ${color}`,
                      }}
                    >
                      <Icon
                        className="h-4 w-4"
                        style={{ color }}
                      />
                    </span>

                    <h3 className="text-base font-semibold">
                      {title}
                    </h3>
                  </div>

                  <span className="text-[10px] text-muted-foreground">
                    {qs.length} questions
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {qs.map((question, index) => (
                    <li
                      key={index}
                      className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-xs text-foreground/90"
                    >
                      {question}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}