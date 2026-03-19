"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, x: "-50%" }}
      animate={{ y: 0, x: "-50%" }}
      className="fixed top-6 left-1/2 z-50 w-[95%] max-w-4xl"
    >
      {/* Outer Glow Wrapper */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>

        <div className="relative flex items-center justify-between px-6 py-3 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
          {/* Logo with Gradient Text */}
          <a href="#" className="group cursor-pointer">
            <div className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-emerald-400 transition-all duration-300 group-hover:opacity-80">
              Puskar
              <span className="text-white group-hover:text-emerald-400 transition-colors">
                .
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-zinc-400">
            {["About", "Projects", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-sky-400 transition-colors duration-300 relative group/link"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-emerald-400 transition-all duration-300 group-hover/link:w-full"></span>
              </a>
            ))}
          </div>

          {/* Connect Button with Solid Gradient */}
          <a
            href="#contact"
            className="relative px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-[0.1em] overflow-hidden group/btn inline-block text-center transition-all active:scale-95"
          >
            {/* The Animated Background */}
            <span className="absolute inset-0 bg-gradient-to-r from-sky-500 to-emerald-500 transition-transform duration-300 group-hover/btn:scale-110"></span>

            {/* The Text */}
            <span className="relative text-white flex items-center gap-2">
              Connect With Me
            </span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
