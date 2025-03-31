"use client";

import { projects } from "../lib/projectsConfig";
import ProjectBlock from "@/components/shared/ProjectBlock";

export default function PortfolioGrid() {
  return (
    <div className="container mx-auto px-4 py-12 md-py-4">
      <h1 className="text-3xl mb-2">Sam Ageloff</h1>
      <h2 className="text-xl mb-8">Selected Portfolio</h2>

      <h3 className="text-lg mb-4">Recent Work</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {projects
          .filter((project) => project.category === "work")
          .map((project) => (
            <ProjectBlock key={project.key} project={project} />
          ))}
      </div>

      <h3 className="text-lg mb-4">Side Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects
          .filter((project) => project.category === "side")
          .map((project) => (
            <ProjectBlock key={project.key} project={project} />
          ))}
      </div>
    </div>
  );
}
