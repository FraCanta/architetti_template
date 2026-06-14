import Link from "next/link";
import type { Project } from "@/data/projects";
import { Photo } from "./Photo";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group">
      <Link href={`/progetti/${project.slug}`} aria-label={`Apri il progetto ${project.title}`}>
        <Photo
          src={project.image}
          alt={`Placeholder per ${project.imageType.toLowerCase()} del progetto ${project.title}`}
          className="aspect-[4/3] transition-transform duration-500 group-hover:-translate-y-1"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
        />
        <div className="flex items-start justify-between gap-5 py-4">
          <div>
            <h3 className="text-[16px] font-medium">{project.title}</h3>
            <p className="mt-2 text-[12px] leading-5 text-[#696a65]">
              {project.category} · {project.location} · {project.year}
            </p>
          </div>
          <span className="mt-1 text-xs transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      </Link>
    </article>
  );
}
