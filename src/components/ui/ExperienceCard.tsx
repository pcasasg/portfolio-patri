import { CheckCircle, MapPin, Calendar } from "lucide-react";
import type { Experience } from "@/data/experience";

export default function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div className="relative bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border-l-4 border-transparent"
      style={{ borderImage: "linear-gradient(to bottom, #ec4899, #9333ea) 1" }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
          <p className="text-purple-600 font-semibold text-lg">{exp.company}</p>
        </div>
        <div className="flex flex-col gap-1 mt-2 md:mt-0 md:text-right">
          <span className="flex items-center gap-1.5 text-gray-500 text-sm">
            <Calendar className="w-4 h-4" />
            {exp.period}
          </span>
          <span className="flex items-center gap-1.5 text-gray-500 text-sm">
            <MapPin className="w-4 h-4" />
            {exp.location}
          </span>
        </div>
      </div>
      <p className="text-gray-600 mb-6">{exp.description}</p>
      <ul className="space-y-3">
        {exp.achievements.map((achievement, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
            <span className="text-gray-700">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
