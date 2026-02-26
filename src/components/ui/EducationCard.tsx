import type { ElementType } from "react";
import { GraduationCap, BookOpen, Award, Search, Briefcase, Sparkles } from "lucide-react";
import type { Education } from "@/data/education";

type IconName = Education["icon"];

const iconMap: Record<IconName, ElementType> = {
  GraduationCap,
  BookOpen,
  Award,
  Search,
  Briefcase,
  Sparkles,
};

export default function EducationCard({
  degree,
  institution,
  year,
  description,
  icon,
}: Education) {
  const Icon = iconMap[icon];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
        <Icon className="w-6 h-6 text-purple-600" />
      </div>
      <h3 className="font-bold text-gray-900 mb-1">{degree}</h3>
      <p className="text-purple-600 text-sm font-medium mb-2">{institution}</p>
      <p className="text-gray-400 text-sm">{year}</p>
      {description && (
        <p className="text-gray-500 text-sm mt-3 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
