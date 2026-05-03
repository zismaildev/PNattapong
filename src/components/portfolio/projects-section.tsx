"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

function useInView(options = { threshold: 0.1, triggerOnce: true }) {
    const ref = useRef<HTMLElement | HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                if (options.triggerOnce && currentRef) {
                    observer.unobserve(currentRef);
                }
            } else if (!options.triggerOnce) {
                setIsInView(false);
            }
        }, options);

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options.threshold, options.triggerOnce]);

    return { ref, isInView };
}

const projects = [
    {
        title: "AI Village Chatbot",
        description: "ระบบโต้ตอบอัตโนมัติบนเทคโนโลยี Generative AI และ RAG เพื่อยกระดับการให้บริการข้อมูลหมู่บ้าน ผ่าน Telegram พร้อมระบบ PDPA Shield และ Hybrid RAG Pipeline.",
        icon: "mdi:robot-outline",
        color: "from-blue-500/20 to-indigo-500/20",
        iconColor: "text-blue-400",
        techStack: ["Next.js 16", "LangChain.js", "Groq/Gemini", "PostgreSQL"],
        links: {
            preview: "https://aichatmoban.cmru.ac.th",
            github: ""
        },
        featured: true,
    },
    {
        title: "Thaitan Ticket System",
        description: "ระบบจองบัตรคอนเสิร์ตยุคใหม่ พร้อม E-Ticket ครบวงจร, Dynamic Ticket Editor (Drag & Drop), และระบบล็อคบัตรอัตโนมัติ (Soft Hold).",
        icon: "mdi:ticket-confirmation-outline",
        color: "from-amber-500/20 to-orange-500/20",
        iconColor: "text-amber-400",
        techStack: ["Next.js 16", "HeroUI v3", "Prisma", "Supabase"],
        links: {
            preview: "https://thaitan-ticket-silk.vercel.app/",
            github: ""
        },
        featured: true,
    },
    {
        title: "AureliaX",
        description: "แพลตฟอร์มบริหารจัดการแบบ All-in-One รวมระบบ Kanban, Financial Tracking, และ Audit Logs พร้อม Landing Pages ระดับพรีเมียม.",
        icon: "mdi:view-dashboard-outline",
        color: "from-violet-500/20 to-fuchsia-500/20",
        iconColor: "text-violet-400",
        techStack: ["Next.js 15.3", "Supabase", "Tailwind 4", "Framer Motion"],
        links: {
            preview: "https://aureliax.vercel.app/",
            github: ""
        },
        featured: false,
    },
    {
        title: "S.P. AUTO PART",
        description: "ระบบจัดการอะไหล่รถยนต์แบบละเอียด กรองตามยี่ห้อ/รุ่น, Specifications แบบ Dynamic, และระบบ Activity Logs ติดตามการทำงานของแอดมิน.",
        icon: "mdi:car-cog",
        color: "from-orange-500/20 to-red-500/20",
        iconColor: "text-orange-400",
        techStack: ["Next.js 15", "Supabase", "HeroUI", "TypeScript"],
        links: {
            preview: "https://spautopart.vercel.app/",
            github: ""
        },
        featured: false,
    },
    {
        title: "Thai Concert in Germany",
        description: "Cinematic Portfolio สำหรับผู้จัดคอนเสิร์ตไทยในยุโรป (TCG) พร้อมระบบ Timeline งานอีเวนต์, Gallery กรองตามปี, และรองรับ 3 ภาษา (TH/EN/DE).",
        icon: "mdi:music-circle-outline",
        color: "from-emerald-500/20 to-teal-500/20",
        iconColor: "text-emerald-400",
        techStack: ["Next.js", "Glassmorphism", "i18n", "GSAP/Framer"],
        links: {
            preview: "https://tcg-portfolio-lovat.vercel.app/",
        },
        featured: false,
    }
];

export const ProjectsSection = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();
    const { ref: sectionRef, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? resolvedTheme === "dark" : true;

    return (
        <section
            id="projects"
            ref={sectionRef as React.RefObject<HTMLSelectElement>}
            className="relative w-full py-32 overflow-hidden flex flex-col items-center justify-center min-h-[80vh]"
        >
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <div
                    className={`absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full blur-[160px] transition-colors duration-1000 ${isDark ? "bg-blue-600/10" : "bg-blue-400/5"
                        }`}
                />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
                <div className={`flex flex-col items-center text-center mb-16 md:mb-24 ${isInView ? "animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both" : "opacity-0"}`}>
                    <span className="font-mono text-blue-400 text-xs uppercase tracking-widest mb-4">WORKS.tsx</span>
                    <h2 className={`text-4xl md:text-5xl font-black tracking-tighter ${isDark ? "text-white" : "text-slate-900"}`}>
                        Featured Projects.
                    </h2>
                    <p className={`mt-4 text-lg max-w-2xl font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        Some of the systems, websites, and applications I&apos;ve built from the ground up.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group relative flex flex-col p-8 md:p-10 rounded-[32px] border transition-all duration-500 overflow-hidden ${isInView ? "animate-in fade-in slide-in-from-bottom-12 duration-700 fill-mode-both" : "opacity-0"} ${isDark ? "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]" : "bg-white/80 border-slate-200 hover:shadow-xl backdrop-blur-md"}`}
                            style={{ animationDelay: `${200 + index * 100}ms` }}
                        >
                            <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-8">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${isDark ? "bg-white/[0.03] border-white/[0.08]" : "bg-slate-50 border-slate-200"}`}>
                                        <Icon icon={project.icon} className={`text-3xl ${isDark ? project.iconColor : "text-slate-800"}`} />
                                    </div>
                                    <div className="flex gap-2">
                                        {project.links.github && project.links.github !== "#" && (
                                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-full transition-colors ${isDark ? "text-slate-400 hover:text-white hover:bg-white/10" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"}`}>
                                                <Icon icon="mdi:github" className="text-xl" />
                                            </a>
                                        )}
                                        {project.links.preview && (
                                            <a href={project.links.preview} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-full transition-colors ${isDark ? "text-slate-400 hover:text-white hover:bg-white/10" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"}`}>
                                                <Icon icon="mdi:open-in-new" className="text-xl" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="mb-8 flex-grow">
                                    <div className="flex items-center gap-3 mb-3">
                                        <h3 className={`text-2xl font-black tracking-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                                            {project.title}
                                        </h3>
                                        {project.featured && (
                                            <Chip size="sm" variant="soft" className={`h-5 px-1.5 text-[9px] font-black tracking-widest uppercase ${isDark ? "bg-blue-500/20 text-blue-400" : "bg-blue-100 text-blue-700"}`}>
                                                Featured
                                            </Chip>
                                        )}
                                    </div>
                                    <p className={`text-sm leading-relaxed font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                                    {project.techStack.map(tech => (
                                        <span
                                            key={tech}
                                            className={`text-[10px] font-mono tracking-widest uppercase px-2 py-1 rounded-md ${isDark ? "bg-white/[0.04] text-slate-300" : "bg-slate-100 text-slate-600"}`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`mt-20 flex justify-center ${isInView ? "animate-in fade-in duration-700 delay-700 fill-mode-both" : "opacity-0"}`}>
                    <a
                        href="https://github.com/ZismailDev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center px-8 h-14 rounded-full border font-black tracking-widest text-xs uppercase transition-all duration-300 ${isDark ? "border-white/10 text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]" : "border-slate-200 text-slate-900 hover:bg-slate-50"
                            }`}
                    >
                        <Icon icon="mdi:github" className="mr-3 text-lg" />
                        VIEW MORE ON GITHUB
                    </a>
                </div>
            </div>
        </section>
    );
}
