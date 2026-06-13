import { Code2, Users, FolderGit2, Brain } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Technical",
    color: "var(--electric)",
    qs: [
      "Explain event loop & microtasks in JS.",
      "Design Twitter's timeline service.",
      "How would you debug a memory leak?",
    ],
  },
  {
    icon: Users,
    title: "HR",
    color: "var(--purple)",
    qs: [
      "Why are you leaving your current role?",
      "Where do you see yourself in 3 years?",
      "What's your expected compensation?",
    ],
  },
  {
    icon: FolderGit2,
    title: "Project-Based",
    color: "var(--cyan)",
    qs: [
      "Walk me through your last shipped feature.",
      "What trade-offs did you make and why?",
      "How did you measure success?",
    ],
  },
  {
    icon: Brain,
    title: "Behavioral",
    color: "var(--electric)",
    qs: [
      "Tell me about a conflict you resolved.",
      "Describe a failure and what you learned.",
      "When did you push back on a decision?",
    ],
  },
];

export function InterviewPrep() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full glass px-3 py-1 text-xs text-muted-foreground">Interview Preparation</span>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Practice the questions <span className="text-gradient">they'll actually ask</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {groups.map(({ icon: Icon, title, qs, color }) => (
            <div key={title} className="glass rounded-2xl p-5 transition-transform hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/[0.04]" style={{ boxShadow: `0 0 30px -8px ${color}` }}>
                    <Icon className="h-4 w-4" style={{ color }} />
                  </span>
                  <h3 className="text-base font-semibold">{title}</h3>
                </div>
                <span className="text-[10px] text-muted-foreground">{qs.length} sample</span>
              </div>
              <ul className="mt-4 space-y-2">
                {qs.map((q) => (
                  <li key={q} className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-xs text-foreground/90">
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
