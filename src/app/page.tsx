import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { Products } from "@/components/landing/products";
import { Series } from "@/components/landing/series";
import { Faq } from "@/components/landing/faq";
import { Contact } from "@/components/landing/contact";
import { SiteFooter } from "@/components/landing/site-footer";
import { FloatingCta } from "@/components/landing/floating-cta";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Products />
        <Series />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingCta />
    </>
  );
}
