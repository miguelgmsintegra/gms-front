import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { Products } from "@/components/landing/products";
import { AboutWorkshop } from "@/components/landing/about-workshop";
import { ProcessSteps } from "@/components/landing/process-steps";
import { AnatomySection } from "@/components/landing/anatomy-section";
import { Faq } from "@/components/landing/faq";
import { SiteFooter } from "@/components/landing/site-footer";
import { FloatingCta } from "@/components/landing/floating-cta";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Products />
        <AboutWorkshop />
        <ProcessSteps />
        <AnatomySection />
        <Faq />
      </main>
      <SiteFooter />
      <FloatingCta />
    </>
  );
}









