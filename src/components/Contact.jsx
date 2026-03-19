"use client";
import React from 'react';
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "1b573802-b7c2-4762-bf5c-f2230cc33e74");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Message sent successfully!");
      event.target.reset();
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 pt-32 pb-10 sm:pb-32 bg-black">
      
      {/* Header Section */}
      <div className="mb-4 sm:mb-20">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm font-bold tracking-[0.3em] text-sky-400 uppercase">
            Inquiry
          </span>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <h3 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
            Let's Build <br /> 
            <span className="text-zinc-600 italic font-medium">Together.</span>
          </h3>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT SIDE: Contact Information */}
        <div className="lg:col-span-4 space-y-4">
          {[
            { icon: Mail, label: "Email", value: "puskarsimkhada4554@gmail.com", href: "mailto:puskarsimkhada4554@gmail.com" },
            { icon: Phone, label: "Phone", value: "+977 9865429962", href: "tel:+9779865429962" },
            { icon: MapPin, label: "Location", value: "Chitwan, Nepal" }
          ].map((item, i) => (
            <motion.a 
              key={i}
              href={item.href}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="block p-6 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-sky-500/30 transition-all group"
            >
              <item.icon size={20} className="text-sky-400 mb-4" />
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">{item.label}</p>
              <p className="text-lg font-medium text-white group-hover:text-sky-400 transition-colors">{item.value}</p>
            </motion.a>
          ))}
        </div>

        {/* RIGHT SIDE: The Form */}
        <motion.div 
          className="lg:col-span-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <form 
            onSubmit={onSubmit}
            className="bg-zinc-900/40 border border-white/10 p-4 sm:p-8 md:p-12 rounded-[1.5rem] backdrop-blur-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.2em] ml-1">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Enter your name"
                  className="w-full bg-white/5 border border-zinc-400 rounded-2xl p-4 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-300 focus:border-zinc-300 transition-all"
                />
              </div>
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.2em] ml-1">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  required
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-zinc-400 rounded-2xl p-4 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-sky-500 transition-all"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2 mb-8">
              <label className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.2em] ml-1">Message</label>
              <textarea 
                name="message" 
                required
                rows={5} 
                placeholder="Write your message here..."
                className="w-full bg-white/5 border border-zinc-400 rounded-2xl p-4 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-sky-500 transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="group relative overflow-hidden w-full md:w-auto px-10 py-4 bg-gradient-to-r from-sky-500 to-emerald-500  rounded-full text-black font-black uppercase text-xs tracking-[0.2em] transition-all hover:bg-gradient-to-r from-sky-600 to-emerald-600 active:scale-95 cursor-pointer"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Submit Message <Send size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;