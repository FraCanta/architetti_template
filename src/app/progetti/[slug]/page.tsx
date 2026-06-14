import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTASection } from "@/components/CTASection";
import { Photo } from "@/components/Photo";
import { ProjectCard } from "@/components/ProjectCard";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <>
      <article>
        <div className="container-site py-6">
          <Breadcrumb items={[{ label: "Progetti", href: "/progetti" }, { label: project.title }]} />
        </div>

        <Photo src={project.image} alt={project.title} priority sizes="100vw" className="min-h-[52vh]" />

        <section className="container-site grid gap-10 border-b border-[#dedbd4] py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h1 className="font-display text-[2.7rem] sm:text-[3.1rem]">{project.title}</h1>
            <dl className="mt-6 grid max-w-xl grid-cols-4 gap-5 text-[10px]">
              <div><dt className="text-[#777872]">Categoria</dt><dd className="mt-2">{project.category}</dd></div>
              <div><dt className="text-[#777872]">Luogo</dt><dd className="mt-2">{project.location}</dd></div>
              <div><dt className="text-[#777872]">Anno</dt><dd className="mt-2">{project.year}</dd></div>
              <div><dt className="text-[#777872]">Superficie</dt><dd className="mt-2">{project.area}</dd></div>
            </dl>
            <p className="mt-8 max-w-lg text-sm leading-7 text-[#696a65]">{project.concept}</p>
          </div>
          <div className="grid gap-7 border-l border-[#dedbd4] pl-8 sm:grid-cols-2">
            <div><h2 className="text-xs font-medium">La sfida</h2><p className="mt-3 text-xs leading-5 text-[#696a65]">{project.challenge}</p></div>
            <div><h2 className="text-xs font-medium">La soluzione</h2><p className="mt-3 text-xs leading-5 text-[#696a65]">{project.solution}</p></div>
            <div><h2 className="text-xs font-medium">Servizi</h2><p className="mt-3 text-xs leading-5 text-[#696a65]">Progettazione architettonica<br />Interior design<br />Direzione lavori</p></div>
          </div>
        </section>

        <section className="container-site py-10">
          <div className="flex gap-8 border-b border-[#dedbd4] text-[9px] font-medium uppercase tracking-[0.1em]">
            <span className="border-b-2 border-[#20211f] pb-4">Galleria</span>
            <span className="pb-4 text-[#777872]">Materiali</span>
            <span className="pb-4 text-[#777872]">Disegni</span>
            <span className="pb-4 text-[#777872]">Dati tecnici</span>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.gallery.map((image, index) => (
              <Photo
                key={image}
                src={image}
                alt={`Galleria del progetto ${project.title}, immagine ${index + 1}`}
                className="aspect-[4/3]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            ))}
          </div>
        </section>

        <section className="container-site pb-14">
          <div className="flex items-end justify-between">
            <h2 className="text-sm font-medium">Progetti correlati</h2>
            <span className="text-[9px] uppercase tracking-[0.1em]">Vedi tutti&nbsp; →</span>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {related.map((item) => <ProjectCard key={item.slug} project={item} />)}
          </div>
        </section>
      </article>
      <CTASection title="Hai un progetto simile?" />
    </>
  );
}
