"use client";

import Image from "next/image";
import AnimatedSection from "./ui/AnimatedSection";
import SectionTitle from "./ui/SectionTitle";

const tags = [
  "Digital Marketing Strategy",
  "Content Strategy & Creation",
  "Copywriting & Brand Storytelling",
  "Social Media Strategy & Management",
  "UX Writing & Content Architecture",
  "SEO & GEO Optimization",
  "Project Management",
  "AI-Assisted Workflows",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="About Me"
          gradientWord="Me"
          subtitle="Getting to know the person behind the strategy"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="group">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200">
              <Image
                src="/images/profile.jpg"
                alt="Alba Patricia Casas González"
                width={500}
                height={625}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                I&apos;m a Digital Marketing and Communications Strategist with
                experience across content, social media, and digital ecosystems,
                combining creative thinking with strategic execution. I&apos;ve
                worked on end-to-end digital projects, translating brand and
                business objectives into clear, engaging communication across
                platforms and formats.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My background includes content strategy, advertising copywriting,
                and the development of SEO- and GEO-oriented web content, with a
                strong focus on UX architecture and UX writing for website
                redesigns. I&apos;ve led social media initiatives from trend
                research and ideation to scripting, production, publishing, and
                performance analysis, often taking an active on-camera role when
                needed.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I have experience managing project-based teams and collaborators,
                ensuring alignment, efficiency, and quality delivery. Artificial
                intelligence is fully integrated into my daily workflow, supporting
                research, creativity, and optimization.
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-purple-100 text-purple-700 text-sm px-4 py-2 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
