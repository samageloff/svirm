import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { videoProjects } from "../../../lib/projectsConfig";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = videoProjects?.find((p) => p.key === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/"
        className="inline-flex items-center mb-8 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Portfolio
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            {project.author}, {project.year}
          </p>
          <div className="prose dark:prose-invert max-w-none mb-4">
            <p>{project.description}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 mb-4">
        <h2 className="text-lg font-bold mb-2">Technologies</h2>
        <ul className="grid grid-cols-1 gap-1">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="text-sm text-gray-600 dark:text-gray-400"
            >
              {technology}
            </span>
          ))}
        </ul>
      </div>
      <div className="relative" style={{ paddingTop: "56.25%" }}>
        <iframe
          src={project.embed}
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
}
