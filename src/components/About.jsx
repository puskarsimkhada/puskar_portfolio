"use client";
import { motion } from "framer-motion";
import Image from 'next/image';

const skills = [
  { name: "Frontend", tools: "React, Next.js, Tailwind", level: "80%" },
  { name: "Backend", tools: "Node, Express, MongoDB", level: "50%" },
  { name: "Tools", tools: "VS Code, Postman, Android Studio", level: "70%" },
];

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-12 sm:py-32">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-10 sm:mb-16 gap-4">
        <div className="max-w-2xl">
          <h2 className="text-sm font-bold tracking-[0.2em] text-sky-400 uppercase mb-4">Web Developer</h2>
          <h3 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-none">
            TURNING VISION <br /> <span className="text-zinc-500">INTO REALITY.</span>
          </h3>
        </div>
        <p className="text-zinc-400 max-w-sm text-lg leading-relaxed">
          I bridge the gap between complex backend logic and pixel-perfect frontend experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Image Card - Bento Style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="lg:col-span-7 relative group h-[450px] overflow-hidden rounded-[1.5rem] border border-white/5"
        >
          <Image 
            src="/PuskarPro.png" 
            alt="Puskar"
            fill
            className="object-cover sm:grayscale sm:group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-4 sm:bottom-8 sm:left-8">
            <p className="text-white font-bold text-2xl tracking-tight">Puskar Simkhada</p>
            <p className="text-sky-400 text-sm font-medium">Founder @ Loopix Creations</p>
          </div>
        </motion.div>

        {/* Skills Card - Bento Style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-5 bg-zinc-900/40 backdrop-blur-3xl border border-white/5 p-2 sm:p-10 rounded-[2.5rem] flex flex-col justify-center "
        >
          <h4 className="text-xl font-bold mb-8">Technical Proficiency</h4>
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-end mb-3">
                  <div>
                    <span className="block text-white font-bold text-lg">{skill.name}</span>
                    <span className="text-xs text-zinc-500 uppercase tracking-widest">{skill.tools}</span>
                  </div>
                  <span className="text-sky-400 font-mono font-bold">{skill.level}</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="h-full bg-gradient-to-r from-sky-400 to-emerald-400"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats Grid - Bottom Row */}
        <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {[
            { label: "MERN Projects", value: "01+" },
            { label: "Completed Projects", value: "10+" },
            { label: "Clients", value: "02+" },
            { label: "Location", value: "Nepal" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-3 sm:p-8 rounded-[2rem] bg-zinc-900/20 border border-white/5 text-center hover:bg-white/5 transition-colors"
            >
              <span className="block text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}