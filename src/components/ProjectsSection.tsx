"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import ProjectCard from "./ui/ProjectCard";
import AnimatedSection from "./ui/AnimatedSection";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));

  return (
    <section
      id="projects"
      className="py-20 px-4"
      style={{
        background: "linear-gradient(180deg, #f9fafb 0%, #faf5ff 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Featured Projects"
          gradientWord="Projects"
          subtitle="Highlights from my professional portfolio"
        />

        <AnimatedSection>
          <div className="relative">
            {/* Carousel */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {projects.map((project) => (
                  <div key={project.title} className="w-full flex-shrink-0 px-2">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-purple-600 hover:shadow-lg transition-all"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-purple-600 hover:shadow-lg transition-all"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === current
                      ? "bg-purple-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
