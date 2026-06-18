import AboutHero from "@/components/AboutHero";
import CompanyStory from "@/components/CompanyStory";
import MissionVision from "@/components/MissionVision";
import FounderSection from "@/components/FounderSection";
import CompanyStats from "@/components/CompanyStats";
import WhyChooseAbout from "@/components/WhyChooseAbout";
import BankingPartners from "@/components/BankingPartners";
import AboutCTA from "@/components/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <FounderSection />
      <CompanyStats />
      <WhyChooseAbout />
      <BankingPartners />
      <AboutCTA />
    </>
  );
}