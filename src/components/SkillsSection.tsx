"use client";

import SectionTitle from "./ui/SectionTitle";
import AnimatedSection from "./ui/AnimatedSection";
import { toolCategories } from "@/data/tools";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Herramientas & Tecnologías"
          gradientWord="Tecnologías"
          subtitle="El stack que utilizo para ejecutar estrategias de marketing digital"
        />

        <AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {toolCategories.map((category) => (
              <div
                key={category.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.emoji}</span>
                  <h3 className="text-lg font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool) => (
                    <span
                      key={tool.name}
                      className="inline-flex items-center gap-1.5 px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors cursor-default"
                    >
                      <span>{tool.icon}</span>
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
