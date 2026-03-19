"use client";
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-zinc-900 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side: Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.3em]">
            © {currentYear} <span className="text-white">Puskar Simkhada</span>
          </p>
          <div className="hidden md:block h-1 w-1 rounded-full bg-zinc-800" />
          <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-medium">
            CO-founder - Loopix Creations
          </p>
        </div>

        {/* Right Side: Social Links */}
        <div className="flex items-center gap-8">
          {[
            { name: "LinkedIn", href: "https://www.linkedin.com/in/puskarsimkhada11/" },
            { name: "GitHub", href: "https://github.com/puskarsimkhada" },
          ].map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold text-zinc-400 hover:text-white uppercase tracking-widest transition-all flex items-center gap-1 group"
            >
              {link.name}
              <ArrowUpRight size={10} className="text-zinc-400 group-hover:text-sky-400 group-hover:-translate-y-0.5 transition-all" />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}