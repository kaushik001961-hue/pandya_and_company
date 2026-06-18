import ContactHero from "@/components/ContactHero";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import OfficeLocation from "@/components/OfficeLocation";
import BusinessHours from "@/components/BusinessHours";
import FAQContact from "@/components/FAQContact";
import ContactCTA from "@/components/ContactCTA";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <OfficeLocation />
      <BusinessHours />
      <FAQContact />
      <ContactCTA />
    </>
  );
}