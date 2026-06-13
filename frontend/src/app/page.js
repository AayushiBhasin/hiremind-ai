import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { AIPreview } from "@/components/landing/AIPreview";
import { InterviewPrep } from "@/components/landing/InterviewPrep";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <AIPreview />
        <InterviewPrep />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
