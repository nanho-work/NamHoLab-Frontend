// src/components/ProjectCard.tsx

import { Project } from '@/lib/projects';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="bg-white rounded shadow p-6 border hover:shadow-md transition text-left">
      <h3 className="text-lg font-semibold text-blue-800 mb-2">{project.title}</h3>
      <p className="text-sm text-gray-700">{project.description}</p>
      <ul className="text-sm text-gray-500 mt-3 list-disc list-inside space-y-1">
        {project.tech.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      {project.note && (
        <p className="text-sm text-gray-400 mt-4 italic">* {project.note}</p>
      )}
    </div>
  );
}