import { Upload, ClipboardList, Sparkles } from "lucide-react";

const steps = [
  { icon: Upload, title: "Upload Resume", desc: "Drop in your PDF or DOCX. We parse it in seconds." },
  { icon: ClipboardList, title: "Paste Job Description", desc: "Add the role you're targeting. Any company, any seniority." },
  { icon: Sparkles, title: "Get AI Insights", desc: "Receive ATS score, fixes, and a full interview prep pack." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full glass px-3 py-1 text-xs text-muted-foreground">How it works</span>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            From resume to <span className="text-gradient">offer-ready</span> in 3 steps
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px md:block">
            <div className="mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-[var(--electric)] to-transparent opacity-50" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="relative glass rounded-2xl p-6 text-center">
                <div className="relative mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary glow-primary">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                  <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full glass-strong text-[10px] font-semibold">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
