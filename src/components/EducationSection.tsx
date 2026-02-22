"use client";

import SectionTitle from "./ui/SectionTitle";
import EducationCard from "./ui/EducationCard";
import AnimatedSection from "./ui/AnimatedSection";
import { education } from "@/data/education";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Education & Training"
          gradientWord="Training"
          subtitle="My academic foundation and continuous learning journey"
        />

        <AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-6">
            {education.map((edu) => (
              <EducationCard key={edu.degree} {...edu} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
