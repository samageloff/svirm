import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "../../../lib/projectsConfig";
import BodyClass from "@/components/BodyClass";

const getDynamicComponent = (c: string) =>
  dynamic(() => import(`../../../components/${c}`), {
    loading: () => <p>Loading...</p>,
  });

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects?.find((p) => p.key === params.slug);
  const DynamicComponent = getDynamicComponent(project?.key || "");

  if (!project) {
    notFound();
  }

  return (
    <>
      <BodyClass className={params.slug} />
      <div className="container mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center mb-8 text-sm font-medium"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>

        <div className="grid grid-cols-1 gap-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
            <p className="text-xl mb-4">
              {project.author}, {project.year}
            </p>
            <div className="prose dark:prose-invert max-w-none mb-4">
              <p>{project.description}</p>
            </div>
            <div className="grid grid-cols-1 mb-4">
              <h2 className="text-lg font-bold mb-2">Technologies</h2>
              <ul className="grid grid-cols-1 gap-1">
                {project.technologies?.map((technology) => (
                  <span key={technology} className="text-sm">
                    {technology}
                  </span>
                ))}
              </ul>
            </div>
            {project?.type === "all" && (
              <div className="flex flex-col gap-8">
                <DynamicComponent />

                <div className="relative" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    src={project.embed}
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            )}
            {project?.type === "component" && <DynamicComponent />}
            {project?.type === "video" && (
              <div className="relative" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src={project.embed}
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
