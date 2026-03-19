"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, FileText } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-black">
      {/* 1. Dynamic Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-sky-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      {/* 2. Profile Avatar (Floating Style) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mb-8"
      >
        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-tr from-sky-400 to-emerald-400 shadow-lg shadow-sky-500/20">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-black relative">
            <Image 
              src="/PuskarProfile.jpg" 
              alt="Puskar" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
        {/* Status Indicator */}
        <div className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 border-4 border-black rounded-full shadow-lg" />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center px-6 z-10"
      >
        {/* 3. Sub-heading with Badge Style */}
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <span className="text-xs font-bold tracking-widest uppercase text-sky-400">
            Available for Freelance
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85] uppercase">
          I'm <span className="text-sky-400">Puskar</span> <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-emerald-400 to-sky-400">
            WEB DEVELOPER
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl mb-12 leading-relaxed">
          Based in Chitwan, Nepal. I specialize in crafting 
          <span className="text-white"> high-performance web solutions </span> 
          with a focus on modern, aesthetic user experiences.
        </p>

        {/* 4. Refined Buttons */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
  {/* VIEW PROJECTS: Smooth scroll to the #projects section */}
  <a 
    href="#projects" 
    className="group relative w-full sm:w-auto px-10 py-4 rounded-2xl font-bold overflow-hidden transition-all text-center block"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-emerald-500 group-hover:scale-105 transition-transform duration-300" />
    <span className="relative flex items-center justify-center gap-2 text-white">
      View My Projects <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    </span>
  </a>
  
  {/* MY RESUME: Opens the PDF in a new tab */}
  <a 
    href="/Puskar_Resume.pdf" // Ensure your PDF is in the 'public' folder and named exactly this
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-auto bg-transparent border border-white/20 hover:border-white/40 text-white px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all backdrop-blur-sm hover:bg-white/5"
  >
    <FileText size={18} className="text-zinc-400" />
    My Resume
  </a>
</div>
      </motion.div>

      {/* 5. Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 rounded-full border-2 border-zinc-700 flex justify-center p-1">
          <div className="w-1 h-2 bg-sky-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}