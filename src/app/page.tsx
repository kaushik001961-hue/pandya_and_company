import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ServiceCategories from "@/components/ServiceCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutSection from "@/components/AboutSection";
import Calculators from "@/components/Calculators";
import ProcessTimeline from "@/components/ProcessTimeline";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    // 🚀 FIXED: Added layout clipping classes to protect the mobile viewport boundaries
    <main className="bg-slate-950 text-white w-full overflow-x-hidden">
      <Hero />
      <AboutSection />
      <Stats />
      <ServiceCategories />
      <WhyChooseUs />
      <Calculators/>
      <Testimonials />
      <ProcessTimeline />
      <Team />
      <FAQ />
      <ContactCTA />
    </main>
  );
}