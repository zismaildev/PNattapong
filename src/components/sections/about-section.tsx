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

export const AboutSection = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();
    const { ref: sectionRef, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? resolvedTheme === "dark" : true;

    const education = [
        {
            year: "2023 - Present",
            institution: "Rajabhat Chiang Mai University",
            degree: "Bachelor of Science (B.Sc.), Computer Science",
            icon: "mdi:school-outline"
        },
        {
            year: "2020 - 2023",
            institution: "Wachirawit School Chiang Mai",
            degree: "Senior High School (Science-Math)",
            icon: "mdi:school-outline"
        },
        {
            year: "2017 - 2020",
            institution: "San Sai Wittayakom School",
            degree: "Junior High School",
            icon: "mdi:school-outline"
        },
        {
            year: "2011 - 2017",
            institution: "The Little Stars Ambassador School",
            degree: "Elementary School",
            icon: "mdi:baby-face-outline"
        }
    ];

    const detailedInfo = [
        { label: "FULL NAME", value: "Nattapong Panthiya" },
        { label: "BRAND", value: "zismaildev" },
        { label: "EDUCATION", value: "B.Sc. Computer Science" },
        { label: "UNIVERSITY", value: "Rajabhat Chiang Mai University" },
        { label: "YEAR", value: "Year 3 → Year 4 (June 2026)" },
        { label: "LANGUAGES", value: "Thai (Native) · English (B1+)" },
        { label: "INTERESTS", value: "Full-stack · AI/RAG · Security" },
        { label: "CURRENTLY", value: "Ticket System · NDEA AI Program" }
    ];

    const quickInfo = [
        { icon: "mdi:cake-variant", label: "AGE", value: "22" },
        { icon: "mdi:map-marker", label: "BASED", value: "Chiang Mai" },
        { icon: "mdi:translate", label: "LANGS", value: "TH / EN" },
        { icon: "mdi:briefcase", label: "STATUS", value: "Open to Work" }
    ];

    const skillGroups = [
        {
            title: "Languages",
            skills: [
                { name: "TypeScript", icon: "mdi:language-typescript", color: "text-blue-400" },
                { name: "Python", icon: "mdi:language-python", color: "text-yellow-400" },
                { name: "Node.js", icon: "mdi:nodejs", color: "text-emerald-400" },
                { name: "SQL", icon: "mdi:database-search", color: "text-sky-400" },
                { name: "HTML5", icon: "mdi:language-html5", color: "text-orange-400" },
                { name: "CSS3", icon: "mdi:language-css3", color: "text-blue-500" },
            ]
        },
        {
            title: "Frameworks",
            skills: [
                { name: "Next.js 16", icon: "ri:nextjs-fill", color: "text-white" },
                { name: "React 19", icon: "mdi:react", color: "text-cyan-400" },
                { name: "NestJS", icon: "mdi:nodejs", color: "text-rose-500" },
                { name: "Tailwind CSS", icon: "mdi:tailwind", color: "text-sky-400" },
                { name: "HeroUI", icon: "mdi:palette-swatch", color: "text-indigo-400" },
                { name: "Framer Motion", icon: "mdi:animation-outline", color: "text-purple-400" },
            ]
        },
        {
            title: "Libraries & Tools",
            skills: [
                { name: "LangChain", icon: "mdi:link-variant", color: "text-emerald-500" },
                { name: "Prisma", icon: "simple-icons:prisma", color: "text-blue-600" },
                { name: "Supabase", icon: "simple-icons:supabase", color: "text-emerald-400" },
                { name: "PostgreSQL", icon: "simple-icons:postgresql", color: "text-blue-400" },
                { name: "Docker", icon: "mdi:docker", color: "text-blue-500" },
                { name: "Git", icon: "mdi:git", color: "text-orange-500" },
                { name: "Vercel", icon: "simple-icons:vercel", color: "text-white" },
            ]
        }
    ];

    return (
        <div className="flex flex-col">
            <section
                id="about"
                ref={sectionRef as React.RefObject<HTMLSelectElement>}
                className="relative w-full py-32 overflow-hidden flex items-center justify-center"
            >
                {/* ─── Background Layers ─── */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    {/* Top Divider Gradient */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

                    {/* Subtle Orb (Violet, Bottom Left) */}
                    <div
                        className={`absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] rounded-full blur-[160px] transition-colors duration-1000 ${isDark ? "bg-violet-600/10" : "bg-violet-400/5"
                            }`}
                    />
                </div>

                {/* ─── Main Content ─── */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 lg:gap-20">

                    {/* ━━━ LEFT COLUMN ━━━ */}
                    <div
                        className={`w-full lg:w-5/12 flex flex-col gap-6 ${isInView ? "animate-in fade-in slide-in-from-left-8 duration-500 fill-mode-both" : "opacity-0"
                            }`}
                    >
                        {/* Profile Card Container with Floating Elements */}
                        <div className="relative group">
                            {/* Floating Card 1: Code Snippet */}
                            <div className="absolute -top-12 -right-8 z-20 p-5 rounded-2xl border bg-black/80 backdrop-blur-xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rotate-6 transition-all duration-500 group-hover:rotate-3 group-hover:-translate-y-2 hidden md:block">
                                <div className="font-mono text-[10px] leading-relaxed">
                                    <span className="text-purple-400">const</span> <span className="text-blue-400">zismail</span> = {"{"}
                                    <div className="pl-4">
                                        <span className="text-slate-500">stack:</span> <span className="text-emerald-400">"Next.js + TS"</span>,
                                        <br />
                                        <span className="text-slate-500">open:</span> <span className="text-orange-400">true</span>,
                                    </div>
                                    {"}"}
                                </div>
                            </div>

                            {/* Floating Card 2: Status */}
                            <div className="absolute -bottom-8 -left-8 z-20 p-5 rounded-2xl border bg-black/80 backdrop-blur-xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] -rotate-6 transition-all duration-500 group-hover:-rotate-3 group-hover:translate-y-2 hidden md:block">
                                <div className="flex flex-col gap-2.5">
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-200">Available 2026</span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <Icon icon="mdi:school" className="text-violet-400 text-sm" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-200">CS Year 4</span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <Icon icon="mdi:briefcase" className="text-orange-400 text-sm" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-200">2+ yrs Freelance</span>
                                    </div>
                                </div>
                            </div>

                            {/* Main Profile Card */}
                            <div className="relative p-[1px] rounded-[40px] overflow-hidden bg-gradient-to-br from-indigo-500/30 to-violet-500/30 shadow-2xl">
                                <div
                                    className={`relative w-full rounded-[39px] p-10 flex flex-col items-center text-center backdrop-blur-3xl ${isDark ? "bg-[#0a0a0f]/90" : "bg-white/90"
                                        }`}
                                >
                                    <div className="w-32 h-32 rounded-full mb-6 flex items-center justify-center bg-gradient-to-br from-indigo-900 to-violet-900 shadow-[0_0_40px_rgba(79,70,229,0.3)] border border-white/10">
                                        <span className="text-5xl font-black text-white tracking-tighter">NP</span>
                                    </div>

                                    <h3 className={`text-3xl font-black tracking-tighter ${isDark ? "text-white" : "text-slate-900"}`}>
                                        Nattapong Panthiya
                                    </h3>
                                    <p className={`text-sm mt-1.5 font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                                        Full-stack Developer & AI Engineer
                                    </p>

                                    <div
                                        className={`mt-6 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border ${isDark ? "bg-white/[0.04] border-white/[0.08]" : "bg-slate-100 border-slate-200"
                                            }`}
                                    >
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                        </span>
                                        <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                                            Chiang Mai, TH
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Info Grid 2x2 */}
                        <div className="grid grid-cols-2 gap-4">
                            {quickInfo.map((item, i) => (
                                <div
                                    key={item.label}
                                    style={{ animationDelay: `${100 + i * 100}ms` }}
                                    className={`flex flex-col p-5 rounded-2xl border ${isDark ? "bg-white/[0.03] border-white/[0.08]" : "bg-white border-slate-200"
                                        } ${isInView ? "animate-in fade-in zoom-in-95 duration-500 fill-mode-both" : "opacity-0"}`}
                                >
                                    <Icon icon={item.icon} className={`text-2xl mb-3 ${isDark ? "text-indigo-400" : "text-indigo-600"}`} />
                                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{item.label}</span>
                                    <span className={`text-sm font-bold mt-1 ${isDark ? "text-slate-200" : "text-slate-800"}`}>{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ━━━ RIGHT COLUMN ━━━ */}
                    <div
                        className={`w-full lg:w-7/12 flex flex-col justify-center ${isInView ? "animate-in fade-in slide-in-from-right-8 duration-500 fill-mode-both delay-200" : "opacity-0"
                            }`}
                    >
                        <div className={`flex flex-col space-y-8 p-8 lg:p-12 rounded-[40px] border backdrop-blur-sm transition-all duration-300 ${isDark ? "bg-white/[0.02] border-white/[0.05]" : "bg-white/80 border-slate-200 shadow-xl"}`}>
                            {/* Headline Area */}
                            <div className="space-y-4">
                                <span className="font-mono text-indigo-400 text-xs uppercase tracking-widest">ABOUT_ME.tsx</span>
                                <h2 className={`text-4xl md:text-5xl font-black tracking-tighter ${isDark ? "text-white" : "text-slate-900"}`}>
                                    Who&apos;s behind the code.
                                </h2>
                                <p className={`text-lg leading-relaxed max-w-lg font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                                    Started coding at 15. No classroom taught me what building FiveM servers from scratch did. I design systems, ship AI pipelines, and publish research &mdash; sometimes all at once.
                                </p>
                            </div>

                            {/* Thin Divider */}
                            <div className={`w-full h-px ${isDark ? "bg-white/5" : "bg-slate-200"}`} />

                            {/* Detailed Info Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                                {detailedInfo.map((item, i) => (
                                    <div
                                        key={item.label}
                                        style={{ animationDelay: `${300 + i * 50}ms` }}
                                        className={`flex flex-col space-y-1 ${isInView ? "animate-in fade-in duration-500 fill-mode-both" : "opacity-0"
                                            }`}
                                    >
                                        <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">{item.label}</span>
                                        <span className={`text-sm font-medium ${isDark ? "text-slate-200" : "text-slate-800"}`}>{item.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Thin Divider */}
                            <div className={`w-full h-px ${isDark ? "bg-white/5" : "bg-slate-200"}`} />

                            {/* Personality Row */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                    <Chip
                                        size="sm"
                                        variant="soft"
                                        className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 ${isDark ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/10" : "bg-indigo-50 text-indigo-600"
                                            }`}
                                    >
                                        ISTP-A
                                    </Chip>
                                    <span className={`text-sm italic font-medium ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                                        The Virtuoso &mdash; Quiet builder. Loud output.
                                    </span>
                                </div>
                            </div>

                            {/* Bottom Row */}
                            <div className="pt-2">
                                <a
                                    href="#"
                                    className={`inline-flex items-center justify-center px-6 h-12 rounded-2xl border font-black tracking-widest text-[10px] uppercase transition-all duration-300 ${isDark ? "border-white/10 text-white hover:bg-white/5" : "border-slate-200 text-slate-900 hover:bg-slate-50"
                                        }`}
                                >
                                    DOWNLOAD CV <Icon icon="mdi:arrow-right" className="ml-2 text-base" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ━━━ SKILLS SECTION (FLOWING) ━━━ */}
            <section className="relative w-full py-20 overflow-hidden">
                <div className="flex flex-col items-center text-center mb-16 px-6">
                    <span className="font-mono text-indigo-400 text-[10px] uppercase tracking-widest mb-4">CAPABILITIES.sys</span>
                    <h2 className={`text-3xl md:text-4xl font-black tracking-tighter ${isDark ? "text-white" : "text-slate-900"}`}>
                        Technical Mastery.
                    </h2>
                </div>

                <div className="flex flex-col gap-10">
                    {skillGroups.map((group, gIndex) => (
                        <div key={gIndex} className="flex flex-col gap-4">
                            <div className="px-10 flex items-center gap-4">
                                <div className={`h-px flex-grow ${isDark ? "bg-white/5" : "bg-slate-200"}`} />
                                <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                                    {group.title}
                                </span>
                                <div className={`h-px flex-grow ${isDark ? "bg-white/5" : "bg-slate-200"}`} />
                            </div>
                            
                            <div className="flex overflow-hidden select-none gap-6 group">
                                <div className={`flex flex-nowrap gap-6 ${gIndex % 2 === 0 ? "animate-scroll-left" : "animate-scroll-right"} group-hover:pause-scroll`}>
                                    {[...group.skills, ...group.skills, ...group.skills].map((skill, i) => (
                                        <div 
                                            key={i}
                                            className={`flex items-center gap-3 whitespace-nowrap px-8 py-4 rounded-2xl border font-mono font-bold tracking-wider text-sm transition-all duration-300 ${isDark ? "bg-white/[0.02] border-white/10 text-slate-300 hover:bg-white/5 hover:border-white/20" : "bg-white border-slate-200 text-slate-700 shadow-sm"}`}
                                        >
                                            <Icon icon={skill.icon} className={`text-xl ${skill.color}`} />
                                            {skill.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add custom styles for the scroll animation */}
                <style jsx global>{`
                    @keyframes scroll-left {
                        from { transform: translateX(0); }
                        to { transform: translateX(-33.33%); }
                    }
                    @keyframes scroll-right {
                        from { transform: translateX(-33.33%); }
                        to { transform: translateX(0); }
                    }
                    .animate-scroll-left {
                        animation: scroll-left 60s linear infinite;
                    }
                    .animate-scroll-right {
                        animation: scroll-right 60s linear infinite;
                    }
                    .pause-scroll {
                        animation-play-state: paused;
                    }
                `}</style>
            </section>

            {/* ━━━ EDUCATION SECTION ━━━ */}
            <section className="relative w-full py-20 pb-40">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex flex-col items-center text-center mb-16">
                        <span className="font-mono text-indigo-400 text-[10px] uppercase tracking-widest mb-4">TIMELINE.log</span>
                        <h2 className={`text-3xl md:text-4xl font-black tracking-tighter ${isDark ? "text-white" : "text-slate-900"}`}>
                            Education Pathway.
                        </h2>
                    </div>

                    <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12">
                        {education.map((item, index) => (
                            <div key={index} className="relative pl-10">
                                {/* Dot */}
                                <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full border-4 flex items-center justify-center ${isDark ? "bg-[#0a0a0f] border-slate-800 text-indigo-400" : "bg-white border-slate-100 text-indigo-600"}`}>
                                    <Icon icon={item.icon} className="text-sm" />
                                </div>
                                
                                <div className="flex flex-col">
                                    <span className={`text-[10px] font-mono uppercase tracking-widest mb-1 ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                                        {item.year}
                                    </span>
                                    <h3 className={`text-xl font-bold tracking-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                                        {item.degree}
                                    </h3>
                                    <p className={`text-sm mt-1 font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                                        {item.institution}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
