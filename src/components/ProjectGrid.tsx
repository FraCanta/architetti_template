"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { projectCategories, projects } from "@/data/projects";

export function ProjectGrid() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>("Tutti");
  const filtered = active === "Tutti" ? projects : projects.filter((project) => project.category === active);

  return (
    <>
      <div className="mt-10 flex gap-7 overflow-x-auto border-b border-[#dedbd4] pb-0" aria-label="Filtra progetti per categoria">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={`shrink-0 border-b-2 px-0 py-3 text-[10px] transition-colors ${
              active === category
                ? "border-[#20211f] text-[#20211f]"
                : "border-transparent text-[#696a65] hover:text-[#20211f]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <div key={project.slug}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </>
  );
}
