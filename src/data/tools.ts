export interface Tool {
  name: string;
  icon: string;
}

export interface ToolCategory {
  title: string;
  emoji: string;
  tools: Tool[];
}

export const toolCategories: ToolCategory[] = [
  {
    title: "Digital Marketing",
    emoji: "📊",
    tools: [
      { name: "Google Analytics", icon: "📈" },
      { name: "Google Ads", icon: "🎯" },
      { name: "Meta Business Suite", icon: "📘" },
      { name: "Hootsuite", icon: "🦉" },
      { name: "Mailchimp", icon: "✉️" },
      { name: "HubSpot", icon: "🧲" },
    ],
  },
  {
    title: "Design & Content",
    emoji: "🎨",
    tools: [
      { name: "Canva", icon: "🖌️" },
      { name: "Photoshop", icon: "🖼️" },
      { name: "Illustrator", icon: "✏️" },
      { name: "Premiere Pro", icon: "🎬" },
      { name: "Figma", icon: "💎" },
    ],
  },
  {
    title: "CMS & Web",
    emoji: "🌐",
    tools: [
      { name: "WordPress", icon: "📝" },
      { name: "Drupal", icon: "💧" },
      { name: "Webflow", icon: "🌊" },
      { name: "SEMrush", icon: "🔍" },
      { name: "Ahrefs", icon: "🔗" },
    ],
  },
];
