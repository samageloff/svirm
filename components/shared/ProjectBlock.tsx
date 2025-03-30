"use client";

import { Project } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProjectBlock({ project }: { project: Project }) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <Link
      href={project.disabled ? "#" : project.path}
      key={project.key}
      className="group block"
      onMouseEnter={() => setHoveredProject(project.key)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      <motion.div
        className="relative overflow-hidden rounded-lg shadow-md"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative h-64 w-full">
          {project.disabled && (
            <div className="absolute z-10 bg-blue-100 text-white-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm">
              <span className="text-gray-500">Coming Soon</span>
            </div>
          )}
          <Image
            src={project.poster || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div
            className={`absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ${
              hoveredProject === project.key ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
        <div className="p-4 bg-white dark:bg-gray-800">
          <h2 className="text-lg font-semibold line-clamp-1">
            {project.title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {project.author}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
