import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Databases from "@/components/Databases";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import CV from "@/components/CV";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Databases />
        <Journey />
        <Certifications />
        <CV />
        <Contact />
      </main>
      <Footer />
      <FloatingSocial />
    </>
  );
}
