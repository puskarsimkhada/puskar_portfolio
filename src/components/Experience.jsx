"use client";
import React from 'react';
import { motion } from "framer-motion";
import { Briefcase, Calendar, Award, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Loopix Creations",
    role: "Founder & Web Developer",
    duration: "2026 — Present",
    desc: "Leading the digital architecture and frontend strategy for startup-focused web applications. Specialized in MERN stack delivery and modern UI/UX principles.",
    skills: ["React", "Next.js", "Tailwind CSS", "Project Lead"],
    isCurrent: true,
    certificate: null 
  },
  {
    company: "OCEM",
    role: "Web Development Intern",
    duration: "2 Months",
    desc: "Developed a production-ready college blog and the Pragya Academy website. Received formal certification for full-stack contribution and database management.",
    skills: ["MERN Stack", "PHP", "MySQL", "EJS"],
    isCurrent: false,
    certificate: "/certificates/ocem-internship.pdf" // Link to your file
  },
  {
    company: "Encryptix",
    role: "Web Development Intern",
    duration: "4 Weeks",
    desc: "Focused on high-fidelity frontend clones and responsive architecture. Certified for excellence in JavaScript-based web solutions.",
    skills: ["HTML5", "CSS3", "JavaScript", "Optimization"],
    isCurrent: false,
    certificate: "/certificates/encryptix-internship.pdf" // Link to your file
  }
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 py-4 sm:py-32 bg-black">
      
      {/* Header */}
      <div className="mb-10 sm:mb-24">
        <h2 className="text-sm font-bold tracking-[0.2em] text-sky-500 uppercase mb-4">
          Professional Timeline
        </h2>
        <h3 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
          Experience<span className="text-zinc-600">.</span>
        </h3>
      </div>

      <div className="relative border-l border-zinc-900 ml-4 md:ml-12 space-y-10 sm:space-y-20">
        {experiences.map((exp, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-6 sm:pl-12 group"
          >
            {/* Timeline Dot with Glow for Current Role */}
            <div className={`absolute -left-[9px] h-4 w-4 rounded-full bg-zinc-950 border-2 transition-all duration-500 
              ${exp.isCurrent 
                ? "border-sky-500 shadow-[0_0_15px_rgba(56,189,248,0.8)]" 
                : "border-sky-800 group-hover:border-sky-500 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]"
              }`} 
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 sm:gap-8 items-start">
              
              {/* Role & Company */}
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3 text-sky-400 mb-2">
                  <Calendar size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{exp.duration}</span>
                </div>
                <h4 className="text-xl sm:text-3xl font-black text-white uppercase tracking-tighter mb-1">
                  {exp.company}
                </h4>
                <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest italic">
                  {exp.role}
                </p>

                {/* CERTIFICATION LINK: Only shows if certificate exists */}
                {/* {exp.certificate && (
                  <a 
                    href={exp.certificate}
                    target="_blank"
                    className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold text-zinc-400 hover:text-sky-400 uppercase tracking-widest transition-colors border border-zinc-800 px-3 py-1.5 rounded-lg bg-zinc-900/50"
                  >
                    <Award size={12} /> View Certificate <ExternalLink size={10} />
                  </a>
                )} */}
              </div>

              {/* Description Card */}
              <div className={`lg:col-span-8 p-2 sm:p-8 rounded-3xl backdrop-blur-sm transition-all duration-500 border 
                ${exp.isCurrent 
                  ? "bg-sky-500/5 border-sky-500/20" 
                  : "bg-zinc-900/20 border-white/5 group-hover:bg-zinc-900/40 group-hover:border-white/10"
                }`}
              >
                <p className="text-zinc-400 text-sm leading-relaxed mb-4 sm:mb-8 font-medium">
                  {exp.desc}
                </p>

                <div className="flex flex-wrap gap-3">
                  {exp.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-black border border-zinc-800 rounded-full">
                      <div className="h-1 w-1 rounded-full bg-sky-500" />
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}