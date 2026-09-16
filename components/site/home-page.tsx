import { AboutSection } from "@/components/site/about-section";
import { ContactSection } from "@/components/site/contact-section";
import { HeroSection } from "@/components/site/hero-section";
import { ServicesSection } from "@/components/site/services-section";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}