import type { Metadata } from "next";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { KnowledgeSection } from "@/components/portfolio/knowledge-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { ContactSection } from "@/components/portfolio/contact-section";

const siteUrl = "https://aureliax.dev";

export const metadata: Metadata = {
  title: "Nattapong Panthiya (Zismail) — Full-Stack Developer & CS Student",
  description:
    "Portfolio ของณัฐพงษ์ ปันธิยะ — Full-Stack Developer & SysAdmin เชี่ยวชาญ Next.js, TypeScript, Relational DB Design, Role-based Systems และ Digital Document Processing พร้อมรับงานฝึกงาน/งานจริง 2026",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Nattapong Panthiya — Full-Stack Developer Portfolio",
    description: "Expert in Next.js, AI/RAG Pipelines, and System Architecture. Explore my featured projects and technical skills.",
    url: siteUrl,
    siteName: "Nattapong Panthiya Portfolio",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Nattapong Panthiya Portfolio Preview",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nattapong Panthiya — Full-Stack Developer",
    description: "Building high-performance web applications and AI systems.",
    images: [`${siteUrl}/og-image.png`],
  },
  keywords: [
    "Full-Stack Developer",
    "Next.js Developer",
    "AI Engineer Thailand",
    "RAG Pipeline",
    "TypeScript Expert",
    "Nattapong Panthiya",
    "Zismaildev",
    "Computer Science Student",
    "Web Development Chiang Mai",
    "Software Engineer Portfolio"
  ],
  authors: [{ name: "Nattapong Panthiya", url: siteUrl }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nattapong Panthiya",
    "alternateName": "Zismail",
    "url": siteUrl,
    "image": `${siteUrl}/profile.jpg`,
    "jobTitle": "Full-Stack Developer",
    "knowsAbout": [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "AI & LLM RAG Pipelines",
      "Cloudflare Workers",
      "Supabase"
    ],
    "description": "Full-Stack Developer and CS student specializing in high-performance web systems and AI integration.",
    "sameAs": [
      "https://github.com/ZismailDev",
      "https://linkedin.com/in/zismail",
      "https://facebook.com/nattapong130247"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex flex-col items-center">
        <HeroSection />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <KnowledgeSection />
        <div className="section-divider" />
        <SkillsSection />
        <div className="section-divider" />
        <ProjectsSection />
        <div className="section-divider" />
        <ContactSection />
      </main>
    </>
  );
}

