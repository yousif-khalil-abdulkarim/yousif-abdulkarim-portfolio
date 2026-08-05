import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import CertificatesSection from "@/components/certificates-section";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <CertificatesSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
