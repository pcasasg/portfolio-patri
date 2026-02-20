"use client";

import { useEffect, useRef, useState } from "react";
import type { Skill } from "@/data/skills";

export default function SkillCard({ skill }: { skill: Skill }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{skill.emoji}</span>
          <span className="font-semibold text-gray-900">{skill.name}</span>
        </div>
        <span className="text-sm font-bold bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full">
          {skill.percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.percentage}%` : "0%",
            background: "linear-gradient(90deg, #ec4899, #9333ea)",
          }}
        />
      </div>
    </div>
  );
}
