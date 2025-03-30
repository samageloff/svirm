"use client";

import { videoProjects, funProjects } from "../lib/projectsConfig";
import ProjectBlock from "@/components/shared/ProjectBlock";

export default function PortfolioGrid() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl mb-8">Selected Portfolio</h1>

      <h2 className="text-2xl mb-4">Recent Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {videoProjects.map((project) => (
          <ProjectBlock key={project.key} project={project} />
        ))}
      </div>

      <h2 className="text-2xl mb-4">Side Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {funProjects.map((project) => (
          <ProjectBlock key={project.key} project={project} />
        ))}
      </div>
    </div>
  );
}
