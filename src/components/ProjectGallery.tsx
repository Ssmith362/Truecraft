import Image from "next/image";
import { projectCategories, projects } from "@/data/projects";
import { Ruler } from "./ui";

/**
 * Real project photos, grouped by the kind of work. A category with no
 * projects is simply not shown, and with no projects at all this renders
 * nothing. See src/data/projects.ts for how to add one.
 */
export function ProjectGallery({
  limit,
  grouped = false,
  className = "",
}: {
  limit?: number;
  grouped?: boolean;
  className?: string;
}) {
  if (projects.length === 0) return null;

  if (!grouped) {
    return (
      <ul className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
        {projects.slice(0, limit).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>
    );
  }

  return (
    <div className={`space-y-20 ${className}`}>
      {projectCategories
        .map((category) => ({ category, items: projects.filter((p) => p.category === category) }))
        .filter((group) => group.items.length > 0)
        .map((group) => (
          <section key={group.category} id={group.category.toLowerCase().replace(/\s+/g, "-")}>
            <Ruler className="text-navy-800" />
            <h2 className="mt-6 text-3xl text-navy-900 sm:text-4xl">{group.category}</h2>
            <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </ul>
          </section>
        ))}
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <li>
      <div className={`grid gap-1 ${project.photos.length > 1 ? "grid-cols-2" : ""}`}>
        {project.photos.slice(0, 2).map((photo) => (
          <figure key={photo.alt} className="relative aspect-[4/5] overflow-hidden bg-cream-200">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 25vw, 50vw"
              placeholder="blur"
              className="object-cover"
            />
            {photo.label && (
              <figcaption className="absolute left-0 top-0 bg-navy-900 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-cream-50">
                {photo.label}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
      <p className="eyebrow mt-4 text-gold-700">
        {project.category}
        {project.location ? ` · ${project.location}` : ""}
      </p>
      <h3 className="mt-2 text-2xl text-navy-900">{project.title}</h3>
      <p className="mt-2 text-[0.97rem] text-ink-soft">{project.description}</p>
    </li>
  );
}
