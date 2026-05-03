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

const activities = [
    {
        date: "May 2026",
        title: "National Conference Publication",
        category: "Research",
        icon: "mdi:file-document-outline",
        description: "Published and presented a paper on RAG pipelines and hybrid LLM architectures for local village data at the National Computer Science Conference.",
        tags: ["Academic", "RAG", "LLM"],
        link: "#",
    },
    {
        date: "March 2026",
        title: "Launched AI Village Chatbot",
        category: "Production",
        icon: "mdi:robot-outline",
        description: "Deployed the AI Village Chatbot to production. Used by over 500 locals to query agricultural and community data via Telegram.",
        tags: ["Next.js", "Python", "Telegram"],
        link: "https://aichatmoban.cmru.ac.th",
    },
    {
        date: "January 2026",
        title: "Joined NDEA AI Program",
        category: "Education",
        icon: "mdi:school-outline",
        description: "Selected to participate in the National Digital Economy Agency's advanced AI engineering incubation program.",
        tags: ["AI", "Networking", "Training"],
        link: "#",
    },
    {
        date: "November 2025",
        title: "FiveM Core System Refactor",
        category: "Open Source",
        icon: "mdi:github",
        description: "Contributed a major performance refactor to a popular FiveM core framework, reducing server tick rate by 30%.",
        tags: ["Lua", "Optimizations", "OSS"],
        link: "#",
    }
];

export const ActivitySection = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();
    const { ref: sectionRef, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? resolvedTheme === "dark" : true;

    return (
        <section
            id="activity"
            ref={sectionRef as React.RefObject<HTMLSelectElement>}
            className="relative w-full py-32 overflow-hidden flex flex-col items-center justify-center min-h-[80vh]"
        >
            {/* ─── Background Layers ─── */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <div
                    className={`absolute top-[20%] right-[5%] w-[400px] h-[400px] rounded-full blur-[150px] transition-colors duration-1000 ${isDark ? "bg-emerald-600/10" : "bg-emerald-400/5"
                        }`}
                />
            </div>

            {/* ─── Main Content ─── */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
                
                {/* Header */}
                <div className={`flex flex-col items-center text-center mb-20 ${isInView ? "animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both" : "opacity-0"}`}>
                    <span className="font-mono text-emerald-400 text-xs uppercase tracking-widest mb-4">ACTIVITY_LOG.md</span>
                    <h2 className={`text-4xl md:text-5xl font-black tracking-tighter ${isDark ? "text-white" : "text-slate-900"}`}>
                        Recent Moves.
                    </h2>
                    <p className={`mt-4 text-lg max-w-2xl font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        A timeline of shipped projects, research papers, and things I&apos;ve been building or learning.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12 pb-10">
                    {activities.map((activity, index) => (
                        <div 
                            key={index} 
                            className={`relative pl-8 md:pl-12 ${isInView ? "animate-in fade-in slide-in-from-bottom-8 duration-500 fill-mode-both" : "opacity-0"}`}
                            style={{ animationDelay: `${200 + index * 150}ms` }}
                        >
                            {/* Timeline Node */}
                            <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full border-4 flex items-center justify-center ${isDark ? "bg-[#0a0a0f] border-slate-800 text-emerald-400" : "bg-white border-slate-100 text-emerald-600"}`}>
                                <Icon icon={activity.icon} className="text-sm" />
                            </div>

                            {/* Content Card */}
                            <div className={`p-6 md:p-8 rounded-[24px] border transition-all duration-300 hover:-translate-y-1 ${isDark ? "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]" : "bg-white/80 border-slate-200 hover:shadow-xl"}`}>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-3">
                                        <span className={`text-xs font-bold uppercase tracking-widest ${isDark ? "text-emerald-400" : "text-emerald-600"}`}>
                                            {activity.date}
                                        </span>
                                        <div className={`w-1 h-1 rounded-full ${isDark ? "bg-slate-700" : "bg-slate-300"}`} />
                                        <span className={`text-xs font-mono uppercase tracking-wider ${isDark ? "text-slate-500" : "text-slate-500"}`}>
                                            {activity.category}
                                        </span>
                                    </div>
                                    
                                    <a 
                                        href={activity.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors ${isDark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"}`}
                                    >
                                        VIEW DETAILS
                                        <Icon icon="mdi:arrow-top-right" className="text-sm" />
                                    </a>
                                </div>

                                <h3 className={`text-2xl font-black tracking-tight mb-3 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                                    {activity.title}
                                </h3>
                                
                                <p className={`text-sm leading-relaxed mb-6 font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                                    {activity.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {activity.tags.map(tag => (
                                        <Chip
                                            key={tag}
                                            size="sm"
                                            variant="soft"
                                            className={`text-[10px] font-bold uppercase tracking-widest px-2 ${isDark ? "bg-white/5 text-slate-300 border-white/5" : "bg-slate-100 text-slate-600 border-slate-200"}`}
                                        >
                                            {tag}
                                        </Chip>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* End of Timeline Indicator */}
                <div className={`flex items-center gap-4 ml-3 md:ml-6 pl-8 md:pl-12 mt-8 ${isInView ? "animate-in fade-in duration-700 delay-1000 fill-mode-both" : "opacity-0"}`}>
                    <div className={`w-2 h-2 rounded-full absolute -left-[4px] ${isDark ? "bg-slate-800" : "bg-slate-300"}`} />
                    <span className={`text-xs font-mono tracking-widest uppercase ${isDark ? "text-slate-600" : "text-slate-400"}`}>
                        END OF LOG
                    </span>
                </div>

            </div>
        </section>
    );
}
