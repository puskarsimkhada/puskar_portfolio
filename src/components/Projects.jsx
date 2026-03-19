"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";

const projectData = [
  { 
    title: "Menuhood", 
    cat: "MERN SaaS Platform", 
    desc: "Transforming the dining experience across Nepal with premium digital menu solutions.",
    tags: ["MongoDB", "ExpressJS", "React", "NodeJS"],
    img: "/menuhood.png",
    color: "text-sky-400",
    liveLink: "https://menuhood.vercel.app/", 
    isLive: true
  },
  { 
    title: "Loopix Creations", 
    cat: "Agency Portfolio", 
    desc: "The digital identity of Loopix, focusing on modern startup aesthetics and high-performance user interfaces.",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    img: "/loopix.png",
    color: "text-purple-400",
    liveLink: "https://loopixcreations.com.np/", 
    isLive: true
  },
  { 
    title: "Oxford Blog", 
    cat: "Educational Hub", 
    desc: "A college blogging platform designed for academic sharing and collaborative content management.",
    tags: ["React", "Tailwind CSS"],
    img: "/blog1.png",
    color: "text-blue-400",
    liveLink: "https://www.blog.oxfordcollege.edu.np/crearelist", 
    isLive: true
  },
  { 
    title: "Satya Khabar", 
    cat: "News Portal", 
    desc: "Satya Khabar is a fully dynamic news website with a custom admin panel. It allows you to easily create and manage different categories content",
    tags: ["PHP", "MySQL", "EJS", "Tailwind CSS"],
    img: "/homepage.png",
    color: "text-orange-400",
    liveLink: "#", 
    isLive: false 
  },
  { 
    title: "Bus Location Tracker", 
    cat: "Real-time Tracking", 
    desc: "Provides real-time bus locations for users and a full CRUD dashboard to manage data for the mobile application.",
    tags: ["Tailwind CSS", "React", "API Integration"],
    img: "/busadmin.png",
    color: "text-emerald-400",
    liveLink: "#",
    isLive: false 
  }
];

export default function Projects() {
  // Logic to show 5 projects by default
  const [visibleCount, setVisibleCount] = useState(5);
  const showMore = () => setVisibleCount((prev) => prev + 3);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-16 sm:py-32 bg-black">
      
      {/* --- HEADER SECTION --- */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm font-bold tracking-[0.3em] text-sky-400 uppercase">
            Portfolio
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h3 className="text-4xl sm:5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
            Selected <br /> 
            <span className="text-zinc-500 italic font-medium">Projects.</span>
          </h3>
          <p className="text-zinc-500 max-w-[360px] text-sm leading-relaxed border-l border-zinc-800 sm:pl-6">
            Crafting <span className="text-zinc-300 font-bold">modern web experiences</span> through 
            <span className="text-zinc-300"> clean code</span> and <span className="text-zinc-300"> functional design</span>.
          </p>
        </div>
      </div>

      {/* --- PROJECTS LIST --- */}
      <div className="space-y-[10vh] md:space-y-[20vh]">
        <AnimatePresence mode="wait">
          {projectData.slice(0, visibleCount).map((p, i) => (
            <motion.div 
              key={p.title} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col lg:flex-row gap-12 lg:gap-20"
            >
              {/* Left Side: Sticky Information */}
              <div className="lg:w-1/3 lg:sticky lg:top-40 h-fit">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-zinc-500 font-black text-3xl sm:text-5xl">0{i + 1}</span>
                    <div className="h-[2px] w-12 bg-sky-400" />
                  </div>
                  
                  <h4 className={`text-3xl sm:text-5xl font-black uppercase tracking-tighter ${p.color}`}>
                    {p.title}
                  </h4>
                  
                  <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {p.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* STICKY REVEAL BUTTON: Only renders if isLive is true */}
                  {p.isLive ? (
                    <a 
                      href={p.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-[10px] pt-8 group cursor-pointer"
                    >
                      Launch Application
                      <div className="p-2 rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300">
                        <ArrowUpRight size={14} />
                      </div>
                    </a>
                  ) : null}
                </div>
              </div>

              {/* Right Side: Full Vertical Scrolling Image */}
              <div className="lg:w-2/3">
                <motion.div 
                  whileHover={{ scale: 0.995 }}
                  className="relative rounded-[1rem] overflow-hidden border border-white/5 bg-zinc-900 group shadow-2xl"
                >
                  <div className="relative w-full">
                    <img 
                      src={p.img} 
                      alt={p.title}
                      className="w-full h-auto object-cover transition-all duration-1000 grayscale-[50%] group-hover:grayscale-0"
                    />
                  </div>
                  {/* Visual overlay to help readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* --- LOAD MORE SECTION --- */}
      {visibleCount < projectData.length && (
        <div className="mt-40 flex justify-center">
          <button 
            onClick={showMore}
            className="group flex flex-col items-center gap-4 text-zinc-500 hover:text-white transition-colors"
          >
            <div className="p-6 rounded-full border border-zinc-800 group-hover:border-sky-400 transition-all duration-500">
              <Plus size={32} className="group-hover:rotate-90 transition-transform duration-500" />
            </div>
            <span className="text-xs font-black uppercase tracking-[0.3em]">Explore More Archive</span>
          </button>
        </div>
      )}
    </section>
  );
}