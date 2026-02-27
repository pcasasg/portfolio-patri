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
    category: "Social Media",
    title: "Social Media Strategy & Execution",
    description:
      "As a Social Media Content Creator at BBVA Creative, I developed and executed high-impact content for social media, leading the full process from ideation and scripting to production. I coordinated multidisciplinary internal teams (including design, production, and creative profiles) and collaborated with external agencies for shoots, supervising them on-site to ensure quality and alignment with objectives. Content was continuously iterated and optimized based on engagement data, trend analysis, and social listening insights, leveraging tools like Sprinklr and influence reputation monitoring. Generative AI was integrated throughout the workflow to support idea generation, copywriting, and messaging, enhancing creativity, efficiency, and relevance across all pieces.",
    tags: ["Social Media Strategy", "Content Production", "Team Coordination", "AI-Assisted Workflows", "Data-Driven Optimization"],
    metrics: [],
    youtubeId: "PI_LK83rdTU",
  },
  {
    category: "Copywriting",
    title: "Digital Copywriting",
    description:
      "As a Digital Product Copywriter at BBVA Creative, I crafted clear, persuasive, and user-focused copy for the bank's transactional website, ensuring messages guided users effectively through product and service journeys. My work involved developing campaign-driven content that aligned with both business objectives and user needs, while maintaining brand voice and consistency. In addition to web copy, I adapted these pieces for digital banners and promotional assets, tailoring messages to different formats and touchpoints to maximize engagement and conversion.",
    tags: ["Copywriting", "Campaign Content", "Brand Voice", "User-Focused Messaging"],
    metrics: [],
    image: "/images/projects/copy.jpg",
  },
  {
    category: "UX & Web",
    title: "UX & Content Architecture",
    description:
      "Contributed to the redesign and ongoing improvement of BBVA.com, helping to define the overall architecture, block organization, and information hierarchy for a more user-centered experience. Proposed ideas and structured content layouts to enhance clarity, accessibility, and engagement across key sections of the site. Managed daily care of homepage and landing pages to optimize usability and drive clicks to relevant content, ensuring a seamless journey for users. Collaborated closely with internal teams to align UX improvements with business objectives and editorial strategy.",
    tags: ["UX Writing", "Content Architecture", "Information Hierarchy", "Web Optimization"],
    metrics: [],
    image: "/images/projects/ux.jpg",
  },
  {
    category: "Community Management",
    title: "BBVA Creative LinkedIn",
    description:
      "Led the end-to-end management of BBVA Creative's LinkedIn presence, developing the annual content strategy, obtaining approvals, and overseeing the creation and production of all pieces. Coordinated multidisciplinary internal teams to ensure timely delivery and quality across campaigns, while managing community interactions and engagement. Focused on positioning BBVA Creative as a leading in-house studio and driving talent attraction through relevant and consistent content. Since 2022, grew the LinkedIn community from approximately 9,000 to nearly 25,000 followers, achieving key engagement and visibility objectives.",
    tags: ["LinkedIn Strategy", "Community Management", "Content Strategy", "Talent Attraction"],
    metrics: [],
    youtubeId: "ltCOJsfcdD8",
  },
  {
    category: "Branded Content",
    title: "Branded Content Interview Specialist",
    description:
      "Development and execution of interview-based content aligned with BBVA's products and promotional campaigns. Responsible for the end-to-end process, from interview conceptualization and scriptwriting to on-camera participation, as well as coordination with production teams and post-production workflows. Managed client validation processes and oversaw the publication of final materials across the bank's transactional website and digital channels.",
    tags: ["Branded Content", "Interview Production", "Scriptwriting", "Post-Production", "Client Management"],
    metrics: [],
    youtubeId: "dlxDiL_Sm00",
  },
];
