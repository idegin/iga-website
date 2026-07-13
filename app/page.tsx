import { AboutSnapshot } from "@/components/sections/about-snapshot";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Insights } from "@/components/sections/insights";
import { Leadership } from "@/components/sections/leadership";
import { Opportunities } from "@/components/sections/opportunities";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { WhyChoose } from "@/components/sections/why-choose";
import { WhyNigeria } from "@/components/sections/why-nigeria";
import { FAQS } from "@/lib/content";
import { faqSchema, JsonLd } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSnapshot />
      <Services />
      <WhyChoose />
      <Opportunities />
      <Process />
      <WhyNigeria />
      <Leadership />
      <Insights />
      <Faq />
      <CtaBanner />
      <JsonLd schema={faqSchema(FAQS)} />
    </>
  );
}
