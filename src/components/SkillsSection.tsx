"use client";

import SectionTitle from "./ui/SectionTitle";
import SkillCard from "./ui/SkillCard";
import AnimatedSection from "./ui/AnimatedSection";
import { skills } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Skills & Expertise"
          gradientWord="Expertise"
          subtitle="The tools and strategies I use to deliver results"
        />

        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
