"use client";

import { ArrowDown, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4"
      style={{
        background: "linear-gradient(135deg, #faf5ff 0%, #fdf2f8 50%, #f0f9ff 100%)",
      }}
    >
      <div className="text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 w-28 h-28 rounded-full flex items-center justify-center text-3xl font-bold text-white"
          style={{
            background: "linear-gradient(135deg, #ec4899, #9333ea)",
            boxShadow: "0 0 0 4px white, 0 0 0 8px #c084fc",
          }}
        >
          AC
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          <span className="text-gray-900">Alba Patricia </span>
          <span className="text-gradient">Casas González</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Digital Marketing Strategist specializing in content creation and social
          media management. Passionate about crafting compelling narratives that
          drive engagement and business growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-3 rounded-full text-white font-semibold transition-all hover:opacity-90 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #ec4899, #9333ea)",
            }}
          >
            Get In Touch
          </a>
          <a
            href="https://www.linkedin.com/in/apcasas/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border-2 border-purple-600 text-purple-600 font-semibold hover:bg-purple-50 transition-colors inline-flex items-center gap-2"
          >
            <Linkedin className="w-5 h-5" />
            View LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16"
        >
          <a href="#about" className="inline-block animate-bounce-slow">
            <ArrowDown className="w-6 h-6 text-purple-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
