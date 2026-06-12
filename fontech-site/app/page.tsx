import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { StatsMarquee } from "@/components/stats-marquee";
import { Services } from "@/components/services";
import { Industries } from "@/components/industries";
import { Showcase } from "@/components/showcase";
import { Benefits } from "@/components/benefits";
import { Process } from "@/components/process";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <StatsMarquee />
      <Services />
      <Industries />
      <Showcase />
      <StatsMarquee />
      <Benefits />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
