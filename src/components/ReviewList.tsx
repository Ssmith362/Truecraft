import type { Review } from "@/data/reviews";
import { Icon } from "./ui";

/**
 * Real reviews, shown as quotations with attribution. No carousel: every
 * review that is on the page can be read without touching anything.
 */
export function ReviewList({ reviews, className = "" }: { reviews: Review[]; className?: string }) {
  if (reviews.length === 0) return null;
  return (
    <ul className={`grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {reviews.map((review) => (
        <li key={`${review.name}-${review.text.slice(0, 24)}`}>
          <figure>
            <div className="flex gap-0.5 text-gold-500" role="img" aria-label={`${review.rating} out of 5 stars`}>
              {Array.from({ length: review.rating }, (_, i) => (
                <Icon key={i} name="star" className="h-5 w-5 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 font-serif text-[1.3rem] leading-snug text-navy-900">
              “{review.text}”
            </blockquote>
            <figcaption className="mt-4 text-[0.95rem] text-ink-soft">
              <span className="font-semibold text-navy-900">{review.name}</span>
              {review.location ? `, ${review.location}` : ""}
              {review.service ? ` · ${review.service}` : ""}
              <span className="block text-[0.85rem]">Posted on {review.source}</span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
