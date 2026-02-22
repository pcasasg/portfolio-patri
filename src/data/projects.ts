export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  category: string;
  title: string;
  description: string;
  tags: string[];
  metrics: Metric[];
  image?: string;
  youtubeId?: string;
}

export const projects: Project[] = [
  {
    category: "BBVA.COM Content & SEO Optimization",
    title: "BBVA Content Creation",
    description:
      "Managed and optimized BBVA.com's main content hub, focusing on high-impact financial topics like digital well-being and innovation. Led content creation within the financial health vertical, which consistently drove nearly 40% of the site's total traffic. Implemented SEO strategies including keyword optimization, content curation, source updates, and active crosslinking. Collaborated with internal teams to align business goals with audience interests, improving discoverability and user engagement across key landing pages.",
    tags: ["Content Strategy", "SEO Optimization", "Web Analytics", "Editorial Planning"],
    metrics: [
      { value: "27M", label: "Impressions on BBVA.com" },
      { value: "552K", label: "Visits to editorial content" },
      { value: "90K", label: "Newsletter subscribers reached" },
      { value: "75%", label: "Of users arrive via search engines" },
    ],
    image: "/images/projects/bbva-content.png",
  },
  {
    category: "Social Media Content Creator",
    title: "Financial Health Video Series",
    description:
      "Led the end-to-end development of BBVA's Financial Health video series, from creative concept and scripting to on-camera presentation and multi-platform content distribution.",
    tags: ["Social Media Strategy", "Creative Concept Development", "Cross-Platform Distribution"],
    metrics: [
      { value: "9K", label: "Total views across the series" },
    ],
    youtubeId: "f8uG3goy9rY",
  },
  {
    category: "Social Media Content Creator",
    title: "Social Media Strategy & Execution",
    description:
      "As a Social Media Content Creator at BBVA Creative, I developed and executed high-impact content tailored for TikTok and Instagram. I led the ideation, scripting, and production of creative pieces adapted to each platform's tone, balancing trend-driven content with brand strategy. Several of these pieces achieved strong engagement both organically and through paid campaigns.",
    tags: ["Social Media Content", "Creative Strategy", "Video Scripting", "Trend Research"],
    metrics: [],
    youtubeId: "2DpJKmtFyRc",
  },
];
