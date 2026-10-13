import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { site, telHref } from "@/data/site";

/* -------------------------------------------------------------------------- */
/* Layout                                                                     */
/* -------------------------------------------------------------------------- */

export function Container({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav";
}) {
  return <Tag className={`mx-auto w-full max-w-[1240px] px-5 sm:px-8 ${className}`}>{children}</Tag>;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

/** Tape-measure divider. Decorative. */
export function Ruler({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`ruler ${className}`} />;
}

/**
 * Centred section title flanked by hairlines, as in the approved concept.
 * Used sparingly: most sections use a left-aligned heading instead.
 */
export function RuledHeading({
  children,
  as: Tag = "h2",
  className = "",
}: {
  children: ReactNode;
  as?: "h2" | "h3";
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-center gap-5 sm:gap-8 ${className}`}>
      <span aria-hidden="true" className="h-px w-10 bg-navy-800/30 sm:w-20" />
      <Tag className="text-center text-[1.7rem] text-navy-900 sm:text-4xl">{children}</Tag>
      <span aria-hidden="true" className="h-px w-10 bg-navy-800/30 sm:w-20" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* The brushstroke                                                            */
/* -------------------------------------------------------------------------- */

/** Hand-drawn gold underline. Decorative; sits under a headline or phrase. */
export function Brush({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 14"
      preserveAspectRatio="none"
      className={`text-gold-500 ${className}`}
      fill="none"
    >
      <path
        d="M3 9.2C28 5.1 61 3.4 96 3.9c33 .5 62 1.5 121 4.7-52-.6-88 .1-121 1.2-30 1-58 2.300-93 3.100"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Icons                                                                      */
/* -------------------------------------------------------------------------- */

export type IconName =
  | "phone"
  | "arrow"
  | "clock"
  | "handshake"
  | "check"
  | "plank"
  | "home"
  | "building"
  | "key"
  | "pin"
  | "camera"
  | "menu"
  | "close"
  | "chevron"
  | "message"
  | "star"
  | "shield";

const paths: Record<IconName, ReactNode> = {
  phone: (
    <path d="M6.6 3.5h2.3l1.4 4-1.900 1.300a11 11 0 0 0 5.800 5.800l1.300-1.900 4 1.400v2.300a2 2 0 0 1-2.200 2A15.500 15.500 0 0 1 4.600 5.700a2 2 0 0 1 2-2.200Z" />
  ),
  arrow: <path d="M4.500 12h15m-6-6 6 6-6 6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.500" />
      <path d="M12 7.500V12l3 2" />
    </>
  ),
  handshake: (
    <>
      <path d="M6.5 3.5h8l3.500 3.500v13.500h-11.500Z" />
      <path d="M14.500 3.500V7H18M9.500 11.500h5M9.500 14.500h5M9.500 17.500h2.500" />
    </>
  ),
  check: <path d="m5 12.500 4.500 4.500L19 7.500" />,
  plank: (
    <>
      <rect x="3.500" y="5" width="17" height="14" rx="1" />
      <path d="M3.500 9.700h17M3.500 14.300h17M9 5v4.700M15 9.700v4.600M8 14.300V19M14 14.300V19" />
    </>
  ),
  home: <path d="m3.500 11.500 8.500-7 8.500 7M6 10v9.500h12V10m-8 9.500v-5.500h4v5.500" />,
  building: (
    <>
      <path d="M5 20.500V4.500h9v16M14 9.500h5v11M3 20.500h18" />
      <path d="M8 8h3M8 11.500h3M8 15h3M16.500 13v.010M16.500 16.500v.010" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="15" r="3.500" />
      <path d="m10.500 12.500 8-8m-2.500 2.500 2.500 2.500m-5-0 1.500 1.500" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6.500-5.600 6.500-10.500a6.500 6.500 0 1 0-13 0C5.500 15.400 12 21 12 21Z" />
      <circle cx="12" cy="10.500" r="2.300" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8h3l1.500-2.500h7L17 8h3v11H4Z" />
      <circle cx="12" cy="13.200" r="3.300" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  chevron: <path d="m6.500 9.500 5.500 5.500 5.500-5.500" />,
  message: <path d="M4.500 5.500h15v10.500h-8l-4.500 3.500v-3.500h-2.500Z" />,
  star: <path d="m12 4 2.400 5 5.600.700-4.100 3.900 1 5.400-4.900-2.700-4.900 2.700 1-5.400L4 9.700 9.600 9Z" />,
  shield: (
    <>
      <path d="M12 3.500 5 6v5.500c0 4.300 3 7.600 7 9 4-1.400 7-4.700 7-9V6Z" />
      <path d="m9 12 2.200 2.200L15.200 10" />
    </>
  ),
};

export function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 ${className}`}
    >
      {paths[name]}
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Buttons                                                                    */
/* -------------------------------------------------------------------------- */

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-[3px] px-6 py-3.5 text-[0.98rem] font-semibold leading-none transition-colors duration-150 min-h-12";

const variants = {
  /** The one gold button. Primary action only. */
  primary: "bg-gold-600 text-white hover:bg-gold-700",
  /** Secondary on light backgrounds. */
  outline: "border border-navy-900 bg-white/70 text-navy-900 hover:bg-navy-900 hover:text-white",
  /** Secondary on navy or forest backgrounds. */
  outlineLight: "border border-cream-100/70 text-cream-50 hover:bg-cream-50 hover:text-navy-900",
  forest: "bg-forest-600 text-white hover:bg-forest-700",
} as const;

type Variant = keyof typeof variants;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  arrow = false,
  className = "",
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} group ${className}`} {...rest}>
      {children}
      {arrow && (
        <Icon name="arrow" className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
      )}
    </Link>
  );
}

/** Tap-to-call. The number comes from data/site.ts and nowhere else. */
export function PhoneLink({
  variant = "outline",
  className = "",
  label = "Call",
}: {
  variant?: Variant;
  className?: string;
  label?: string;
}) {
  return (
    <a href={telHref} className={`${base} ${variants[variant]} ${className}`}>
      <Icon name="phone" className="h-[1.15rem] w-[1.15rem]" />
      <span>
        {label} <span className="whitespace-nowrap">{site.phone.display}</span>
      </span>
    </a>
  );
}

/** Round arrow chip used on service links. Purely visual: the parent is the link. */
export function ArrowChip({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-600 text-white transition-all duration-200 group-hover:translate-x-1 group-hover:bg-gold-600 ${className}`}
    >
      <Icon name="arrow" className="h-4 w-4" />
    </span>
  );
}

/** Underlined text link with an arrow. */
export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 font-semibold underline decoration-gold-500 decoration-2 underline-offset-[6px] hover:decoration-current ${className}`}
    >
      {children}
      <Icon name="arrow" className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
    </Link>
  );
}
