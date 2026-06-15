import { Icon } from "@iconify/react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTASection } from "@/components/CTASection";
import { Photo } from "@/components/Photo";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectTabs } from "@/components/ProjectTabs";
import { getProject, projects } from "@/data/projects";
import Link from "next/link";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/progetti/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Studio Forma`,
      description: project.summary,
      url: `/progetti/${project.slug}`,
      images: [project.image],
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const related = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <article>
        <div className="container-site py-6">
          <Breadcrumb
            items={[
              { label: "Progetti", href: "/progetti" },
              { label: project.title },
            ]}
          />
        </div>

        <Photo
          src={project.image}
          alt={project.title}
          priority
          sizes="100vw"
          className="min-h-[52vh] lg:min-h-[70vh]"
        />

        <section className="container-site grid gap-10 border-b border-[#dedbd4] py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h1 className="font-display text-[2.7rem] sm:text-[3.1rem]">
              {project.title}
            </h1>
            <dl className="mt-6 grid max-w-xl grid-cols-2 gap-x-8 gap-y-5 text-[14px] sm:grid-cols-4 sm:text-[15px]">
              <div>
                <dt className="text-[#777872]">Categoria</dt>
                <dd className="mt-2">{project.category}</dd>
              </div>
              <div>
                <dt className="text-[#777872]">Luogo</dt>
                <dd className="mt-2">{project.location}</dd>
              </div>
              <div>
                <dt className="text-[#777872]">Anno</dt>
                <dd className="mt-2">{project.year}</dd>
              </div>
              <div>
                <dt className="text-[#777872]">Superficie</dt>
                <dd className="mt-2">{project.area}</dd>
              </div>
            </dl>
            <p className="mt-8 max-w-lg text-sm leading-7 text-[#696a65]">
              {project.concept}
            </p>
          </div>
          <div className="grid gap-7 border-l border-[#dedbd4] pl-8 sm:grid-cols-2">
            <div>
              <h2 className="text-base font-medium">La sfida</h2>
              <p className="mt-3 text-xs leading-5 text-[#696a65]">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-base font-medium">La soluzione</h2>
              <p className="mt-3 text-xs leading-5 text-[#696a65]">
                {project.solution}
              </p>
            </div>
            <div>
              <h2 className="text-base font-medium">Servizi</h2>
              <p className="mt-3 text-xs leading-5 text-[#696a65]">
                Progettazione architettonica
                <br />
                Interior design
                <br />
                Direzione lavori
              </p>
            </div>
          </div>
        </section>

        <ProjectTabs project={project} />

        <section className="container-site border-t border-[#dedbd4] pb-16 pt-14 sm:pt-18">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-[2rem] leading-tight sm:text-[2.4rem]">
              Progetti correlati
            </h2>
            <Link
              href="/progetti"
              className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.1em]"
            >
              Vedi tutti
              <Icon icon="tabler:arrow-right" className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-3">
            {related.map((item) => (
              <ProjectCard key={item.slug} project={item} />
            ))}
          </div>
        </section>
      </article>
      <CTASection title="Hai un progetto simile?" />
    </>
  );
}
