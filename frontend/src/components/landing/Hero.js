"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  FileText,
  Target,
  MessageSquare,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { useRouter } from "next/navigation";

export function Hero() {
  let router = useRouter();
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div className="pointer-events-none absolute left-[10%] top-32 h-64 w-64 rounded-full bg-[var(--electric)] opacity-[0.04] blur-3xl" />
      <div className="pointer-events-none absolute right-[12%] top-20 h-48 w-48 rounded-full bg-[var(--cyan)] opacity-[0.03] blur-3xl" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle, oklch(1 0 0 / 0.12) 1px, transparent 1px)`,
          backgroundSize: `40px 40px`,
          maskImage: `radial-gradient(ellipse 70% 50% at 50% 0%, black 20%, transparent 70%)`,
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-[var(--cyan)]" />
          AI-powered career intelligence • Now in public beta
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mx-auto max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Land Your{" "}
          <span className="text-[var(--electric)]">Dream Job</span>
          <br className="hidden sm:block" /> with AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          Upload your resume and job description to get instant AI-powered
          resume analysis, ATS optimization, and personalized interview
          preparation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <button
            onClick={()=>router.push("/analyze")}
            className="group inline-flex items-center gap-2 rounded-xl bg-[var(--electric)] px-6 py-3 text-sm font-medium text-[var(--primary-foreground)] shadow-lg shadow-[var(--electric)]/20 transition-all hover:shadow-[var(--electric)]/30 hover:scale-[1.03]"
          >
            Analyze Resume
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <a
            href="#preview"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.06]"
          >
            Demo
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-muted-foreground"
        >
          <span className="inline-flex items-center gap-1.5">
            <Zap className="h-3.5 w-3.5 text-[var(--cyan)]" /> AI Powered
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-[var(--electric)]" /> ATS Optimized
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-[var(--purple)]" /> Interview Ready
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="absolute -inset-x-4 -top-4 -bottom-4 -z-10 rounded-3xl border border-white/[0.04] bg-white/[0.01]" />
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3 shadow-2xl shadow-black/40 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 px-2 pb-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.65_0.22_25)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.82_0.18_85)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.72_0.19_150)]" />
              <span className="ml-3 text-[10px] text-muted-foreground">
                app.InterviewIQ.ai/analyze
              </span>
            </div>
            <div className="grid grid-cols-12 gap-3 rounded-xl bg-[oklch(0.16_0.03_270)] p-4 text-left">
              <div className="col-span-12 md:col-span-4 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">ATS Score</span>
                  <Target className="h-4 w-4 text-[var(--cyan)]" />
                </div>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-4xl font-semibold text-[var(--electric)]">82</span>
                  <span className="mb-1 text-sm text-muted-foreground">/ 100</span>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-[82%] rounded-full bg-[var(--electric)]" />
                </div>
                <p className="mt-3 text-[11px] text-muted-foreground">
                  Strong match — refine 3 keywords to reach 95+
                </p>
              </div>

              <div className="col-span-12 md:col-span-5 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Skill Match</span>
                  <TrendingUp className="h-4 w-4 text-[var(--electric)]" />
                </div>
                <div className="mt-4 flex h-28 items-end gap-2">
                  {[55, 72, 60, 88, 76, 92, 81, 68, 95].map((v, i) => (
                    <div
                      key={i}
                      style={{ height: `${v}%` }}
                      className="flex-1 rounded-md bg-[var(--electric)] opacity-70"
                    />
                  ))}
                </div>
                <div className="mt-3 flex justify-between text-[10px] text-muted-foreground">
                  <span>React</span><span>TS</span><span>Node</span><span>SQL</span>
                  <span>AWS</span><span>K8s</span><span>CI</span><span>GraphQL</span><span>AI</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">AI Insights</span>
                  <Sparkles className="h-4 w-4 text-[var(--purple)]" />
                </div>
                <ul className="mt-3 space-y-2 text-[11px]">
                  {[
                    "Add 'system design'",
                    "Quantify 3 results",
                    "Mention CI/CD pipeline",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-1.5">
                      <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-[var(--cyan)]" />
                      <span className="text-muted-foreground">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-12 md:col-span-7 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Generated Interview Questions
                  </span>
                  <MessageSquare className="h-4 w-4 text-[var(--electric)]" />
                </div>
                <div className="mt-3 space-y-2">
                  {[
                    "Walk me through how you'd design a multi-tenant analytics pipeline.",
                    "Tell me about a time you reduced infra cost by 30%+.",
                    "Why are you switching roles right now?",
                  ].map((q) => (
                    <div
                      key={q}
                      className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-xs text-foreground/90"
                    >
                      {q}
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-12 md:col-span-5 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Resume parsed</span>
                  <FileText className="h-4 w-4 text-[var(--cyan)]" />
                </div>
                <div className="mt-3 space-y-2 text-[11px] text-muted-foreground">
                  <div className="flex justify-between"><span>Experience</span><span className="text-foreground">5.2 yrs</span></div>
                  <div className="flex justify-between"><span>Top skill</span><span className="text-foreground">React / TS</span></div>
                  <div className="flex justify-between"><span>Missing</span><span className="text-foreground">Kubernetes</span></div>
                  <div className="flex justify-between"><span>Keywords matched</span><span className="text-foreground">38 / 47</span></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
