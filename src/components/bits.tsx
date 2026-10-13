import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { SiteImage } from "@/data/images";
import { showPlaceholders } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";
import { Icon } from "./ui";

/* -------------------------------------------------------------------------- */
/* Structured data                                                            */
/* -------------------------------------------------------------------------- */

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // Escaping "<" stops a stray "</script>" in any string from ending the tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Breadcrumbs                                                                */
/* -------------------------------------------------------------------------- */

export type Crumb = { name: string; href: string };

/** Visible trail plus matching BreadcrumbList markup. Last item is the current page. */
export function Breadcrumbs({ crumbs, tone = "dark" }: { crumbs: Crumb[]; tone?: "dark" | "light" }) {
  const all = [{ name: "Home", href: "/" }, ...crumbs];
  const color = tone === "dark" ? "text-ink-soft" : "text-navy-100";
  const hover = tone === "dark" ? "hover:text-navy-900" : "hover:text-white";
  return (
    <>
      <JsonLd data={breadcrumbSchema(all)} />
      <nav aria-label="Breadcrumb" className={`text-[0.85rem] ${color}`}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {all.map((crumb, i) => {
            const last = i === all.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="font-medium">
                    {crumb.name}
                  </span>
                ) : (
                  <>
                    <Link href={crumb.href} className={`underline-offset-4 hover:underline ${hover}`}>
                      {crumb.name}
                    </Link>
                    <span aria-hidden="true">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Photos                                                                     */
/* -------------------------------------------------------------------------- */

/**
 * A photo slot that fills its parent. The parent sets the shape (an aspect
 * ratio or a fixed height) and must be `relative`; this keeps layout stable
 * while images load and makes swapping a photo a data change only.
 */
export function Photo({
  image,
  sizes,
  priority = false,
  className = "",
}: {
  image: SiteImage;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes={sizes}
      priority={priority}
      placeholder="blur"
      className={`object-cover ${className}`}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* FAQ                                                                        */
/* -------------------------------------------------------------------------- */

/** Native <details>: keyboard accessible and works with no JavaScript. */
export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 font-serif text-[1.25rem] font-bold leading-snug text-navy-900 marker:hidden hover:text-gold-700 [&::-webkit-details-marker]:hidden">
            {item.q}
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-navy-900/25 text-navy-900 transition-transform duration-200 group-open:rotate-180"
            >
              <Icon name="chevron" className="h-4 w-4" />
            </span>
          </summary>
          <p className="max-w-3xl pb-6 pr-10 text-ink-soft">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Awaiting content                                                           */
/* -------------------------------------------------------------------------- */

/**
 * A clearly-marked gap where real content from Matt belongs.
 *
 * Renders in `npm run dev` (and on a build with NEXT_PUBLIC_SHOW_PLACEHOLDERS
 * set to "true"). On the public site it renders NOTHING, so an unfinished
 * section can never be mistaken for a finished one.
 */
export function Awaiting({ title, children }: { title: string; children: ReactNode }) {
  if (!showPlaceholders) return null;
  return (
    <div
      role="note"
      className="border-2 border-dashed border-gold-500 bg-[repeating-linear-gradient(135deg,transparent_0_14px,rgba(176,138,46,0.07)_14px_28px)] p-6 text-[0.95rem] text-ink"
    >
      <p className="eyebrow text-gold-700">Awaiting content · hidden on the live site</p>
      <p className="mt-2 font-serif text-xl font-bold text-navy-900">{title}</p>
      <div className="mt-2 text-ink-soft">{children}</div>
    </div>
  );
}
