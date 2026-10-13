import type { Metadata, Viewport } from "next";
import { Caveat, Figtree, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import { JsonLd } from "@/components/bits";
import { SiteFooter, SiteHeader, StickyCallBar } from "@/components/chrome";
import { allowIndexing, site } from "@/data/site";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { BASE_URL } from "@/lib/seo";
import "./globals.css";

// Display serif for headlines, a friendly sans for everything else, and a
// handwriting face used for two or three short phrases only.
const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

const sans = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const script = Caveat({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-caveat",
  display: "swap",
});

const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim();
const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${site.name} | Flooring, Carpet Repair & Home Repairs in Spokane`,
    template: `%s | ${site.name}`,
  },
  description:
    "Flooring installation, carpet repair, carpet restretching and home repairs in the Spokane area. Honest quotes and someone who shows up on time.",
  applicationName: site.name,
  formatDetection: { telephone: false },
  // Belt and braces with robots.txt: a preview build is noindex at page level too.
  robots: allowIndexing ? undefined : { index: false, follow: false },
  verification: gscVerification ? { google: gscVerification } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#11273a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${script.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[3px] focus:bg-navy-900 focus:px-5 focus:py-3 focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <StickyCallBar />
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
