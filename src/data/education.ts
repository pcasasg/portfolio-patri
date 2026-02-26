export interface Education {
  degree: string;
  institution: string;
  year: string;
  description?: string;
  icon: "GraduationCap" | "BookOpen" | "Award" | "Search" | "Briefcase" | "Sparkles";
}

export const education: Education[] = [
  {
    degree: "Master's in Digital Marketing",
    institution: "ESIC Business & Marketing School",
    year: "2020",
    icon: "GraduationCap",
  },
  {
    degree: "Bachelor's in Journalism",
    institution: "Universidad Antonio de Nebrija",
    year: "2019",
    icon: "BookOpen",
  },
  {
    degree: "Course in Project Management",
    institution: "ESIC Business & Marketing School",
    year: "2025–2026",
    description:
      "Foundational training in project management methodologies and business-oriented frameworks. Focused on project planning, execution, monitoring, and risk management, applying structured approaches to ensure efficiency, team coordination, and goal achievement in dynamic organizational environments.",
    icon: "Briefcase",
  },
  {
    degree: "Course in AI Applied to Content Creation",
    institution: "ESIC Business & Marketing School",
    year: "2026",
    description:
      "Practical training in the use of AI tools for content creation across editorial and social media platforms. Focused on leveraging generative AI for text, image, and multimedia production, optimizing creative workflows, and enhancing digital communication strategies through innovative technologies.",
    icon: "Sparkles",
  },
  {
    degree: "Course in Content Marketing",
    institution: "Escuela de Empresa",
    year: "2021",
    icon: "Award",
  },
  {
    degree: "Course in Web Positioning & SEO",
    institution: "ESNECA Business School",
    year: "2021",
    icon: "Search",
  },
];
