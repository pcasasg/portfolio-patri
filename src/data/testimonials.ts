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
    quote: "Alba is a top-tier professional. She's responsible, reliable, and capable of leading a project from start to finish with full confidence in her work. She's also highly proactive — always eager to get involved, improve outcomes, and help projects take off. And on a personal note, her positive and upbeat attitude makes her a true pleasure to work with.",
    name: "Blanca Alejandro",
    role: "Social Media Manager,",
    company: "ESIC Business & Marketing School",
    avatar: "BA",
  },
  {
    quote: "I've had the pleasure of working with Patricia, and she's truly one of those people who make a difference in any team. Her collaborative spirit stands out — she's always ready to contribute, listen, and support others. What really sets her apart is her proactivity. Patricia not only delivers what's expected but constantly looks for ways to improve processes and add value. Her enthusiasm and commitment are contagious, creating a motivating and positive work environment.",
    name: "Aroa Ruiz",
    role: "Marketing & Events Manager",
    company: "BBVA Switzerland",
    avatar: "AR",
  },
  {
    quote: "Working with Patricia means having a teammate who's always ready to lend a hand. She's creative and knows how to rethink ideas when the original plan doesn't quite fit. Her organization and strong teamwork skills are immediately evident when collaborating with her.",
    name: "Irene Villanova",
    role: "Social Media Manager",
    company: "BBVA Creative",
    avatar: "IV",
  },
];
