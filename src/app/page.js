import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";    
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";  
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience/>
      <Contact />
      <Footer />
    </div>
  );
}