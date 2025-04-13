"use client";

import Image from "next/image";
import { projects, brands, tech } from "../lib/projectsConfig";
import ProjectBlock from "@/components/shared/ProjectBlock";

export default function PortfolioGrid() {
  return (
    <div className="container mx-auto px-4 py-12 md-py-4">
      <nav className="mb-8 flex gap-4 justify-end">
        <a
          href="https://www.linkedin.com/in/samageloff/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Resume
        </a>
      </nav>
      <h1 className="mb-8 text-6xl font-extrabold ">Sam Ageloff</h1>
      <p className="flex gap-3 md:items-start text-lg font-normal text-gray-500 lg:text-xl">
        <span className="text-4xl">👋</span> I'm Sam, and I make websites. I've
        worked for major brands and startups over the past 20 years, as an
        individual contributor, and technical lead.
      </p>

      <div className="mb-12 mt-8">
        <h3 className="text-xl mb-4">Selected Recent Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects
            .filter((project) => project.category === "work")
            .map((project) => (
              <ProjectBlock key={project.key} project={project} />
            ))}
        </div>

        <h3 className="text-xl mb-4">Side Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects
            .filter((project) => project.category === "side")
            .map((project) => (
              <ProjectBlock key={project.key} project={project} />
            ))}
        </div>

        <h3 className="text-xl mb-4">Brands</h3>
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

        <h3 className="text-xl mb-4">Tech</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tech.map((category) => (
            <div key={category.category} className="mb-6">
              <h4 className="text-md font-semibold mb-2">
                {category.category}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((item) => (
                  <div key={item} className="flex items-center">
                    <span className="text-md">• {item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
