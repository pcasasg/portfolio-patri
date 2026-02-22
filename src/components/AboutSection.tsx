"use client";

import Image from "next/image";
import AnimatedSection from "./ui/AnimatedSection";
import SectionTitle from "./ui/SectionTitle";

const tags = [
  "Digital Marketing Strategy",
  "Trend Research & Creative Ideation",
  "Community Management",
  "Content Creation & Copywriting",
  "Social Media Management",
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
                I&apos;m a passionate Digital Marketing Strategist based in Madrid,
                with over 4 years of experience in content creation, social media
                management, and digital communications. My journey in digital
                marketing began with a strong foundation in journalism, which gave
                me a unique perspective on storytelling and audience engagement.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Currently at BBVA Creative, I lead content strategies that reach
                millions of users monthly. I specialize in creating data-driven
                content that resonates with audiences while achieving measurable
                business objectives.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I&apos;m not crafting digital strategies, you can find me
                exploring the latest trends in digital communication, attending
                industry events, or mentoring aspiring marketers.
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
