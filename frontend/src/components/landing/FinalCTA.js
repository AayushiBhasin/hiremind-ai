import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="cta" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute -inset-32 -z-10 aurora-bg opacity-80" />
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
          <h2 className="text-4xl font-semibold leading-tight sm:text-6xl">
            Your next job starts with{" "}
            <span className="text-gradient">better preparation</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Join thousands of candidates using InterviewIQ AI to ship resumes that get interviews — and ace them.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-7 py-3.5 text-sm font-medium text-primary-foreground glow-primary transition-transform hover:scale-[1.03]"
            >
              Start For Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-xl glass px-7 py-3.5 text-sm font-medium hover:bg-white/5"
            >
             Try Now 
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
