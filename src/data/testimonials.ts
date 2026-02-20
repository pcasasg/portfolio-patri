export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Alba Patricia is an exceptional digital marketing professional. Her strategic thinking and creative approach to content creation have been instrumental in driving our brand's online presence. She consistently delivers results that exceed expectations.",
    name: "Susana Ballesteros",
    role: "CEO",
    company: "Grupo Colón IECM",
    avatar: "SB",
  },
  {
    quote: "Working with Patricia has been a transformative experience for our digital strategy. Her ability to combine data-driven insights with creative storytelling sets her apart in the industry.",
    name: "Carlos Rodríguez",
    role: "Marketing Director",
    company: "BBVA Creative",
    avatar: "CR",
  },
  {
    quote: "Patricia's expertise in social media management and community building is remarkable. She has an innate ability to understand audience needs and create content that truly resonates.",
    name: "María López",
    role: "Head of Communications",
    company: "ESIC Business School",
    avatar: "ML",
  },
  {
    quote: "An outstanding professional who brings both creativity and analytical rigor to every project. Patricia's work on our content strategy delivered measurable results from day one.",
    name: "Javier Martínez",
    role: "Digital Director",
    company: "MediaLab Agency",
    avatar: "JM",
  },
];
