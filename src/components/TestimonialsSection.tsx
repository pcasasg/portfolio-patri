"use client";

import { useState } from "react";
import SectionTitle from "./ui/SectionTitle";
import TestimonialCard from "./ui/TestimonialCard";
import AnimatedSection from "./ui/AnimatedSection";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="What Colleagues Say"
          gradientWord="Colleagues"
          subtitle="Feedback from people I've worked with"
        />

        <AnimatedSection>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="w-full flex-shrink-0 px-2">
                  <TestimonialCard testimonial={t} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === current
                    ? "bg-purple-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
