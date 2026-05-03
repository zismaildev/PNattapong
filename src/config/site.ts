export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "PNattapong",
    description: "Portfolio Website of Nattapong Panthiya",
    url: "#",
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
            title: "Activity",
            href: "/#activity",
            icon: "mdi:timeline-text-outline"
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
            title: "Activity",
            href: "/activity",
        },
        {
            title: "Contact",
            href: "/contact",
        },
    ],
    links: {
        facebook: "#",
        instagram: "#",
        github: "https://github.com/ZismailDev",
        linkedin: "https://www.linkedin.com/in/nattapong-panthiya-29a3a3330/",
        email: "nattapong130247@gmail.com",
    },
}