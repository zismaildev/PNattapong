import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProvider as ThemeConfigProvider } from "@/context/theme-context";
import { ThemeWrapper } from "@/components/theme-wrapper";
import FooterComp from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { I18nProvider } from "@/context/i18n-context";
import { achievementsData } from "@/data/achievements";
import { projectsData } from "@/data/projects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: siteConfig.icon,
  },
  verification: {
    google: "dIFhtv0vt8srRGMrv-_Jao_Iqlwmp6OAHgfT8obJyhc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nattapong Panthiya",
    "alternateName": ["ณัฐพงษ์ ปันธิยะ", "ZismailDev", "Zismail"],
    "url": siteConfig.url,
    "image": `${siteConfig.url}/profile.jpg`,
    "jobTitle": "Full-Stack Developer",
    "gender": "Male",
    "nationality": {
      "@type": "Country",
      "name": "Thailand"
    },
    "description": "Full-Stack Developer and CS student specializing in high-performance web systems, Next.js, and AI integration (RAG).",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Chiang Mai Rajabhat University",
      "sameAs": "https://www.cmru.ac.th"
    },
    "knowsAbout": [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "AI & LLM RAG Pipelines",
      "Cloudflare Workers",
      "Supabase",
      "Prisma",
      "Go (Golang)",
      "Docker",
      "Proxmox",
      "System Architecture",
      "ESP32",
      "IoT"
    ],
    "sameAs": [
      "https://github.com/ZismailDev",
      "https://www.linkedin.com/in/nattapong-panthiya-29a3a3330/",
      "https://fastwork.co/user/zismail",
      "https://facebook.com/nattapong130247",
      "https://www.instagram.com/xz1smail/?hl=th"
    ],
    "hasCredential": achievementsData.map(ach => ({
      "@type": "EducationalOccupationalCredential",
      "name": typeof ach.title === 'string' ? ach.title : ach.title.en,
      "credentialCategory": ach.category,
      "recognizedBy": {
        "@type": "Organization",
        "name": typeof ach.issuer === 'string' ? ach.issuer : ach.issuer.en
      }
    })),
    "publishingPrinciples": projectsData.map(proj => ({
      "@type": "CreativeWork",
      "name": proj.title.en,
      "description": proj.shortDescription.en,
      "genre": "Software Application",
      "url": proj.links.preview || proj.links.github || siteConfig.url
    }))
  };
  return (
    <html
      lang="th"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteConfig.googleAnalyticsId}');
          `}
        </Script>

        <I18nProvider>
          <NextThemesProvider attribute="class" defaultTheme="dark">
            <ThemeConfigProvider>
              <ThemeWrapper>
                <Navbar />
                <main className="flex-1 pb-20 md:pb-0">
                  {children}
                </main>
                <FooterComp />
              </ThemeWrapper>
            </ThemeConfigProvider>
          </NextThemesProvider>
        </I18nProvider>
        <Analytics />
        <SpeedInsights />
      </body >
    </html >
  );
}