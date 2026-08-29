export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "PNattapong",
    description: "Portfolio Website of Nattapong Panthiya",
    url: "https://pnattapong.vercel.app",
    icon: "/favicon.ico",
    author: "Nattapong Panthiya",
    keywords: ["Nattapong Panthiya", "PNattapong", "Nattapong", "Panthiya", "Fullstack Developer", "Portfolio"],
    navItems: [
        {
            title: "About",
            href: "/#about",
            icon: "mdi:account-outline"
        },
        {
            title: "Knowledge",
            href: "/#knowledge",
            icon: "mdi:brain"
        },
        {
            title: "Projects",
            href: "/#projects",
            icon: "mdi:folder-outline"
        },
        {
            title: "Achievements",
            href: "/#achievements",
            icon: "mdi:trophy-outline"
        },
        {
            title: "Contact",
            href: "/#contact",
            icon: "mdi:email-outline"
        },
    ],
    navMenuItems: [
        {
            title: "About",
            href: "/#about",
        },
        {
            title: "Knowledge",
            href: "/#knowledge",
        },
        {
            title: "Projects",
            href: "/#projects",
        },
        {
            title: "Achievements",
            href: "/#achievements",
        },
        {
            title: "Contact",
            href: "/#contact",
        },
    ],
    links: {
        facebook: "https://facebook.com",
        instagram: "https://www.instagram.com/xz1smail/?hl=th",
        github: "https://github.com/ZismailDev",
        linkedin: "https://www.linkedin.com/in/nattapong-panthiya-29a3a3330/",
        email: "nattapong130247@gmail.com",
    },
    googleAnalyticsId: "G-6NK28QG827",
}