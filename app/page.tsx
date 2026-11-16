import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Portfolio } from "@/components/Portfolio";
import { TechStack } from "@/components/TechStack";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <TechStack />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
