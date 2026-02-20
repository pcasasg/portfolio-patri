export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    company: "BBVA Creative",
    role: "Digital Marketing Strategist and Content Creator",
    period: "2022 - Present",
    location: "Madrid",
    description: "Leading digital content strategy and creation for one of Europe's largest financial institutions.",
    achievements: [
      "Led content strategy achieving 27M+ monthly impressions across digital platforms",
      "Managed editorial calendar with 150+ monthly content pieces across 5 channels",
      "Grew newsletter subscriber base to 90K+ with 45% average open rate",
      "Optimized SEO strategy resulting in 75% of traffic from organic search",
      "Coordinated cross-functional teams of designers, developers, and stakeholders",
      "Implemented data-driven content optimization increasing engagement by 35%",
    ],
  },
  {
    company: "Grupo Colón IECM",
    role: "Social Media Specialist & Community Manager",
    period: "2020 - 2022",
    location: "Madrid",
    description: "Managed comprehensive social media presence and community engagement for a leading educational institution.",
    achievements: [
      "Developed and executed social media strategy across Instagram, Facebook, LinkedIn, and Twitter",
      "Increased social media following by 200% through targeted content campaigns",
      "Created engaging multimedia content including videos, infographics, and interactive posts",
    ],
  },
];
