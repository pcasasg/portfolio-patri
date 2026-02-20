interface SectionTitleProps {
  title: string;
  gradientWord: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  gradientWord,
  subtitle,
}: SectionTitleProps) {
  const parts = title.split(gradientWord);

  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {parts[0]}
        <span className="text-gradient">{gradientWord}</span>
        {parts[1] || ""}
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
