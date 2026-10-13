"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Icon } from "./ui";

type Props = {
  items: { href: string; label: string }[];
  groups: { label: string; links: { href: string; label: string }[] }[];
  phone: { href: string; display: string };
  estimateCta: string;
};

/**
 * Phone and tablet navigation. The only interactive piece of the header, so it
 * is the only part that ships as client JavaScript.
 */
export function MobileNav({ items, groups, phone, estimateCta }: Props) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Lock page scroll while the panel is open, and close on Escape.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-[3px] border border-navy-900 text-navy-900"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
      </button>

      {open && (
        <div
          id={panelId}
          // Anchored to the sticky header (its nearest positioned ancestor), so
          // it sits flush under it whether or not the utility bar has scrolled away.
          className="absolute inset-x-0 top-full z-50 h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t border-line bg-cream-50 pb-40"
        >
          <nav aria-label="Mobile" className="px-5 py-6 sm:px-8">
            <ul className="divide-y divide-line border-y border-line">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className="flex items-center justify-between py-4 font-serif text-2xl font-bold text-navy-900"
                  >
                    {item.label}
                    <Icon name="arrow" className="h-5 w-5 text-gold-600" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {groups.map((group) => (
                <div key={group.label}>
                  <p className="eyebrow text-gold-700">{group.label}</p>
                  <ul className="mt-3 space-y-1">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} onClick={close} className="block py-1.5 text-navy-900">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-3">
              <Link
                href="/contact"
                onClick={close}
                className="flex min-h-12 items-center justify-center rounded-[3px] bg-gold-600 px-6 font-semibold text-white"
              >
                {estimateCta}
              </Link>
              <a
                href={phone.href}
                className="flex min-h-12 items-center justify-center gap-2 rounded-[3px] border border-navy-900 px-6 font-semibold text-navy-900"
              >
                <Icon name="phone" className="h-[1.1rem] w-[1.1rem]" />
                Call {phone.display}
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
