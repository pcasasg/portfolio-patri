import Image from "next/image";
import type { Education } from "@/data/education";

export default function EducationCard({
  degree,
  institution,
  year,
  description,
  logo,
}: Education) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
      <div className="h-12 mb-4 flex items-center">
        <Image
          src={logo}
          alt={institution}
          width={160}
          height={48}
          className="h-10 w-auto object-contain"
        />
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
