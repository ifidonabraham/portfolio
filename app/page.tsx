import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { BackToTop } from "@/components/back-to-top";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { Articles } from "@/components/articles";
import { SectionDivider } from "@/components/section-divider";
import { SITE_URL } from "@/lib/site";

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ifidon Abraham Ayomide",
    jobTitle: "Software Developer & AI Enthusiast",
    url: SITE_URL,
    email: "ifidonabraham249@gmail.com",
    sameAs: [
      "https://github.com/ifidonabraham",
      "https://www.linkedin.com/in/abraham-ifidon-4279b2402",
      "https://x.com/don_atyaservice",
      "https://ifidonabraham.substack.com",
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <Testimonials />
        <Articles />
        <Experience />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </div>
  );
}
