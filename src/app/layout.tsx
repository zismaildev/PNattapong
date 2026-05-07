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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nattapong Panthiya",
  "alternateName": ["ณัฐพงษ์ ปันธิยะ", "ZismailDev"],
  "url": "https://pnattapong.vercel.app",
  "jobTitle": "Full-Stack Developer",
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Chiang Mai Rajabhat University"
  },
  "knowsAbout": [
    "Next.js",
    "TypeScript",
    "AI/RAG",
    "Go (Golang)",
    "Docker",
    "Proxmox",
    "System Architecture"
  ],
  "sameAs": [
    "https://github.com/ZismailDev",
    "https://www.linkedin.com/in/nattapong-panthiya-29a3a3330/",
    "https://fastwork.co/user/zismail"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground h-full overflow-x-hidden" suppressHydrationWarning>
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
      </body >
    </html >
  );
}