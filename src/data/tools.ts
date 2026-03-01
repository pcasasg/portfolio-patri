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
      { name: "Salesforce", icon: "☁️" },
      { name: "Zoho", icon: "📋" },
      { name: "Sprinklr", icon: "💧" },
      { name: "Notion", icon: "📓" },
    ],
  },
  {
    title: "Design & Content",
    emoji: "🎨",
    tools: [
      { name: "Canva", icon: "🖌️" },
      { name: "Photoshop", icon: "🖼️" },
      { name: "CapCut", icon: "🎬" },
      { name: "Maze", icon: "🧪" },
      { name: "InDesign", icon: "📐" },
    ],
  },
  {
    title: "CMS & Web",
    emoji: "🌐",
    tools: [
      { name: "WordPress", icon: "📝" },
      { name: "SEMrush", icon: "🔍" },
      { name: "Looker Studio", icon: "📊" },
    ],
  },
];
