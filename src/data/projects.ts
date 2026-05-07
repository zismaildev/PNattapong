export type ProjectLink = {
    preview?: string;
    github?: string;
};

export type ProjectContent = {
    overview: string;
    challenges: string[];
    solutions: string[];
    outcomes: string[];
};

export type Project = {
    id: string;
    title: string;
    shortDescription: string;
    icon: string;
    color: string;
    iconColor: string;
    coverImage?: string; // High-res image for the detail page header
    techStack: string[];
    links: ProjectLink;
    featured: boolean;
    content: ProjectContent;
};

export const projectsData: Project[] = [
    {
        id: "ai-village-chatbot",
        title: "AI Village Chatbot",
        shortDescription: "ระบบโต้ตอบอัตโนมัติบนเทคโนโลยี Generative AI และ RAG เพื่อยกระดับการให้บริการข้อมูลหมู่บ้าน ผ่าน Telegram พร้อมระบบ PDPA Shield และ Hybrid RAG Pipeline.",
        icon: "mdi:robot-outline",
        color: "from-blue-500/20 to-indigo-500/20",
        iconColor: "text-blue-400",
        techStack: ["Next.js 16", "LangChain.js", "Groq", "Gemini", "PostgreSQL"],
        links: {
            preview: "https://aichatmoban.cmru.ac.th",
            github: ""
        },
        featured: true,
        content: {
            overview: "A Generative AI-powered chatbot designed to provide automated information services for rural villages via Telegram. It integrates a Hybrid Retrieval-Augmented Generation (RAG) pipeline to ensure accurate, context-aware responses based on village data.",
            challenges: [
                "Handling large amounts of unstructured text data efficiently.",
                "Ensuring data privacy and compliance with Thailand's PDPA regulations.",
                "Optimizing AI response times on limited network bandwidth in rural areas."
            ],
            solutions: [
                "Implemented a Hybrid RAG Pipeline using LangChain.js to fetch precise contextual data before querying the LLM.",
                "Developed a 'PDPA Shield' layer that automatically anonymizes PII (Personally Identifiable Information) before data hits the language models.",
                "Utilized Groq for ultra-fast inference and Gemini for complex reasoning tasks, balancing speed and accuracy."
            ],
            outcomes: [
                "Reduced administrative workload for village leaders by 70%.",
                "Successfully deployed to production and actively serving local residents.",
                "Presented as an innovative solution in regional academic conferences."
            ]
        }
    },
    {
        id: "thaitan-ticket-system",
        title: "Thaitan Ticket System",
        shortDescription: "ระบบจองบัตรคอนเสิร์ตยุคใหม่ พร้อม E-Ticket ครบวงจร, Dynamic Ticket Editor (Drag & Drop), และระบบล็อคบัตรอัตโนมัติ (Soft Hold).",
        icon: "mdi:ticket-confirmation-outline",
        color: "from-amber-500/20 to-orange-500/20",
        iconColor: "text-amber-400",
        techStack: ["Next.js 16", "HeroUI v3", "Prisma", "Supabase"],
        links: {
            preview: "https://thaitan-ticket-silk.vercel.app/",
            github: ""
        },
        featured: true,
        content: {
            overview: "A modern, comprehensive concert ticketing platform featuring a drag-and-drop E-Ticket editor, automated soft-hold booking mechanisms, and real-time QR code generation for staff scanning.",
            challenges: [
                "Preventing double-booking during high-traffic ticket releases.",
                "Building a responsive drag-and-drop interface for organizers to design custom E-Tickets.",
                "Ensuring fast and reliable QR code scanning for event staff under poor connectivity."
            ],
            solutions: [
                "Implemented a Redis-based (or transactional) Soft Hold system that reserves a ticket for 15 minutes during the checkout process.",
                "Created a Dynamic Ticket Editor using advanced React state management and HTML Canvas for visual designing.",
                "Optimized the scanning interface and database queries with Prisma for sub-second ticket verification."
            ],
            outcomes: [
                "A highly scalable system capable of handling concurrent bookings.",
                "Provides a seamless UI/UX for both event organizers and concert attendees.",
                "Full multi-language support (i18n) for international users."
            ]
        }
    },
    {
        id: "aureliax",
        title: "AureliaX",
        shortDescription: "แพลตฟอร์มบริหารจัดการแบบ All-in-One รวมระบบ Kanban, Financial Tracking, และ Audit Logs พร้อม Landing Pages ระดับพรีเมียม.",
        icon: "mdi:view-dashboard-outline",
        color: "from-violet-500/20 to-fuchsia-500/20",
        iconColor: "text-violet-400",
        techStack: ["Next.js 15.3", "Supabase", "Tailwind 4", "Framer Motion"],
        links: {
            preview: "https://aureliax.vercel.app/",
            github: ""
        },
        featured: false,
        content: {
            overview: "An all-in-one management platform that combines Kanban boards for project tracking, financial ledgers for budget management, and comprehensive audit logs into a single intuitive interface.",
            challenges: [
                "Designing a seamless user experience that unifies multiple complex modules (finance, tasks, audits).",
                "Implementing real-time data synchronization across different clients.",
                "Creating high-performance animations and transitions without sacrificing load speed."
            ],
            solutions: [
                "Utilized Next.js 15 Server Components and Supabase real-time subscriptions for instant data updates.",
                "Adopted a modular architecture with HeroUI components for consistent styling across modules.",
                "Leveraged Framer Motion for hardware-accelerated micro-interactions and smooth page transitions."
            ],
            outcomes: [
                "A visually stunning and highly functional internal tool.",
                "Streamlined team workflows by eliminating the need to switch between Jira and Excel.",
                "Achieved high Lighthouse performance scores despite heavy interactive elements."
            ]
        }
    },
    {
        id: "sp-auto-part",
        title: "S.P. AUTO PART",
        shortDescription: "ระบบจัดการอะไหล่รถยนต์แบบละเอียด กรองตามยี่ห้อ/รุ่น, Specifications แบบ Dynamic, และระบบ Activity Logs ติดตามการทำงานของแอดมิน.",
        icon: "mdi:car-cog",
        color: "from-orange-500/20 to-red-500/20",
        iconColor: "text-orange-400",
        techStack: ["Next.js 15", "Supabase", "HeroUI", "TypeScript"],
        links: {
            preview: "https://spautopart.vercel.app/",
            github: ""
        },
        featured: false,
        content: {
            overview: "A comprehensive inventory management system specifically built for an auto parts dealership. It features deep filtering by make, model, and year, along with dynamic specifications and robust admin activity tracking.",
            challenges: [
                "Structuring the database to handle the complex many-to-many relationships between car models, years, and specific auto parts.",
                "Building a fast, faceted search interface for thousands of SKUs.",
                "Ensuring strict role-based access control (RBAC) and audit trails for all inventory changes."
            ],
            solutions: [
                "Designed a normalized relational database schema in Supabase PostgreSQL.",
                "Implemented server-side filtering and pagination in Next.js to keep the client-side lightweight and snappy.",
                "Created a global Activity Log system that automatically records who changed what and when."
            ],
            outcomes: [
                "Drastically reduced time spent searching for compatible parts.",
                "Improved inventory accuracy and accountability among staff members.",
                "Modernized the client's business operations from paper-based tracking to a cloud-native solution."
            ]
        }
    },
    {
        id: "tcg-portfolio",
        title: "Thai Concert in Germany",
        shortDescription: "Cinematic Portfolio สำหรับผู้จัดคอนเสิร์ตไทยในยุโรป (TCG) พร้อมระบบ Timeline งานอีเวนต์, Gallery กรองตามปี, และรองรับ 3 ภาษา (TH/EN/DE).",
        icon: "mdi:music-circle-outline",
        color: "from-emerald-500/20 to-teal-500/20",
        iconColor: "text-emerald-400",
        techStack: ["Next.js", "Glassmorphism", "i18n", "GSAP/Framer"],
        links: {
            preview: "https://tcg-portfolio-lovat.vercel.app/",
        },
        featured: false,
        content: {
            overview: "A highly visual, cinematic portfolio website built for a premier Thai concert organizer operating in Europe. It showcases event timelines, photo galleries, and localized content.",
            challenges: [
                "Creating a visually striking 'cinematic' aesthetic that performs well on mobile devices.",
                "Managing multi-language content (Thai, English, German) efficiently.",
                "Building an interactive, animated timeline for past and upcoming events."
            ],
            solutions: [
                "Used Glassmorphism CSS techniques and optimized background videos/images for a premium feel.",
                "Integrated next-intl for seamless client and server-side localization.",
                "Utilized GSAP and Framer Motion for scroll-triggered animations and the dynamic event timeline."
            ],
            outcomes: [
                "Successfully elevated the brand image of the organizer in the European market.",
                "Increased user engagement time on the website due to interactive elements.",
                "Provided a scalable foundation to easily add new concert events in the future."
            ]
        }
    }
];
