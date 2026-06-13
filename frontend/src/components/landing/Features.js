import {
  FileSearch,
  Gauge,
  Wand2,
  MessageSquare,
  Mic,
  Layers,
  Map,
  Mail,
} from "lucide-react";

const features = [
  { icon: FileSearch, title: "Resume vs JD Analysis", desc: "Side-by-side semantic comparison of your resume against any job description." },
  { icon: Gauge, title: "ATS Score Checker", desc: "Get a precise compatibility score and know exactly what's holding you back." },
  { icon: Wand2, title: "AI Resume Suggestions", desc: "Rewrites, keyword optimizations and impact-driven bullet rewording." },
  { icon: MessageSquare, title: "Interview Question Generator", desc: "Tailored technical, HR and behavioral questions from the role." },
  { icon: Mic, title: "Mock AI Interviews", desc: "Practice with a realtime AI interviewer that scores your answers." },
  { icon: Layers, title: "Skill Gap Detection", desc: "Pinpoint missing skills and exactly what to learn next." },
  { icon: Map, title: "AI Career Roadmap", desc: "Personalized 90-day plans to bridge gaps and land the role." },
  { icon: Mail, title: "Cover Letter Generator", desc: "Job-specific cover letters in your voice in under 10 seconds." },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full glass px-3 py-1 text-xs text-muted-foreground">
            Capabilities
          </span>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Everything you need to <span className="text-gradient">get hired faster</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A complete AI toolkit built around the way modern recruiting actually works.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl glass p-5 transition-all hover:-translate-y-1 hover:border-white/15"
            >
              <div className="relative">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary glow-primary">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
