import ServicesHero from "@/components/ServicesHero";
import ServicesGrid from "@/components/ServicesGrid";
import LoanServices from "@/components/LoanServices";
import CAServices from "@/components/CAServices";
import ServicesCTA from "@/components/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <LoanServices />
      <CAServices />
      <ServicesCTA />
    </>
  );
}