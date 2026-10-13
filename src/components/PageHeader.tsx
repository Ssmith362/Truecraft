import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./bits";
import { Container, Eyebrow, Ruler } from "./ui";

/** Opening band for the non-service pages: trail, label, headline, standfirst. */
export function PageHeader({
  crumbs,
  eyebrow,
  title,
  lede,
  children,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="bg-cream-100">
      <Container className="pb-14 pt-8 sm:pb-20">
        <Breadcrumbs crumbs={crumbs} />
        <Eyebrow className="mt-10 text-forest-700">{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-4xl text-[2.6rem] text-navy-900 sm:text-6xl">{title}</h1>
        {lede && <p className="mt-6 max-w-2xl text-xl leading-relaxed text-ink">{lede}</p>}
        {children && <div className="mt-9">{children}</div>}
      </Container>
      <Ruler className="text-navy-800" />
    </section>
  );
}
