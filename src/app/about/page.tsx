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

export default function AboutPage() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();
    const { ref: sectionRef, isInView } = useInView({ threshold: 0.2, triggerOnce: true });

    useEffect(() => {
        setMounted(true);
    }, []);

    // Default to dark before mount (dark-first design)
    const isDark = mounted ? resolvedTheme === "dark" : true;

    const quickInfo = [
        { icon: "mdi:cake-variant", label: "AGE", value: "22" },
        { icon: "mdi:map-marker", label: "BASED", value: "Chiang Mai" },
        { icon: "mdi:school", label: "DEGREE", value: "B.Sc. CS" },
        { icon: "mdi:briefcase", label: "STATUS", value: "Open to Work" }
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

    return (
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
                    {/* Profile Card */}
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
                    <div className="flex flex-col space-y-8">
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
    );
};
