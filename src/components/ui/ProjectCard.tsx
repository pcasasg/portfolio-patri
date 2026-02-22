import Image from "next/image";
import MetricCard from "./MetricCard";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const gridColsMap: Record<number, string> = {
  1: "grid-cols-1 max-w-[200px]",
  2: "grid-cols-2",
  3: "grid-cols-3",
};

function ProjectMedia({ project }: ProjectCardProps) {
  if (project.youtubeId) {
    return (
      <div className="aspect-video p-6 flex items-center justify-center">
        <div className="w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl">
          <iframe
            src={`https://www.youtube.com/embed/${project.youtubeId}`}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video"
          />
        </div>
      </div>
    );
  }

  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.title}
        width={1200}
        height={600}
        className="w-full h-auto object-cover"
      />
    );
  }

  return null;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const metricsGridCols =
    gridColsMap[project.metrics.length] ?? "grid-cols-2 md:grid-cols-4";

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
      <div className="relative w-full" style={{ background: "linear-gradient(135deg, #818cf8, #a855f7, #c084fc)" }}>
        <ProjectMedia project={project} />
      </div>

      <div className="p-6">
        <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
          {project.category}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.metrics.length > 0 && (
          <div className={`grid gap-4 pt-4 border-t border-gray-100 ${metricsGridCols}`}>
            {project.metrics.map((metric) => (
              <MetricCard
                key={metric.label}
                value={metric.value}
                label={metric.label}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
