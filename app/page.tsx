"use client";

import Image from "next/image";
import { projects, brands, tech } from "../lib/projectsConfig";
import ProjectBlock from "@/components/shared/ProjectBlock";

export default function PortfolioGrid() {
  return (
    <div className="container mx-auto px-4 py-12 md-py-4">
      <h1 className="mb-8 text-6xl font-extrabold  dark:text-white">
        Sam Ageloff
      </h1>
      <p className="flex gap-3 md:items-start text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        <span className="text-4xl">👋</span> I'm Sam, and I make websites. I've
        worked for major brands and startups over the past 20 years, as an
        individual contributor, and technical lead. I specialize in client-side
        web development, but have a lot of full-stack experience as well.
      </p>

      <div className="mb-12 mt-8">
        <h3 className="text-lg mb-4">Selected Recent Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects
            .filter((project) => project.category === "work")
            .map((project) => (
              <ProjectBlock key={project.key} project={project} />
            ))}
        </div>

        <h3 className="text-lg mb-4">Side Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects
            .filter((project) => project.category === "side")
            .map((project) => (
              <ProjectBlock key={project.key} project={project} />
            ))}
        </div>

        <h3 className="text-lg mb-4">Brands</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center">
              <Image
                src={brand.logo}
                width="96"
                height="96"
                alt={brand.name}
                className="mr-2"
              />
              <span className="text-lg">{brand.name}</span>
            </div>
          ))}
        </div>

        <h3 className="text-lg mb-4">Tech</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tech.map((tech) => (
            <div key={tech} className="flex items-center">
              <span className="text-md">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
