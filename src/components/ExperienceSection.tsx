"use client";

import SectionTitle from "./ui/SectionTitle";
import ExperienceCard from "./ui/ExperienceCard";
import AnimatedSection from "./ui/AnimatedSection";
import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Professional Experience"
          gradientWord="Experience"
          subtitle="Where I've made an impact"
        />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <AnimatedSection key={exp.company} delay={i * 0.2}>
              <ExperienceCard exp={exp} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
