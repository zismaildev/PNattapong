"use client";

import { Icon } from "@iconify/react";
import { useInView } from "@/hooks/use-in-view";
import { useIsDark } from "@/hooks/use-is-dark";

import { leadershipData } from "@/data/leadership";
import { useI18n } from "@/context/i18n-context";

const accentMap: Record<string, { border: string; borderLight: string; bg: string; bgLight: string; text: string; textLight: string; glow: string; glowLight: string; line: string }> = {
    indigo: {
        border: "border-indigo-500/20",
        borderLight: "border-indigo-300/40",
        bg: "bg-indigo-500/[0.06]",
        bgLight: "bg-indigo-50",
        text: "text-indigo-400",
        textLight: "text-indigo-600",
        glow: "bg-indigo-600/15",
        glowLight: "bg-indigo-400/10",
        line: "bg-indigo-500",
    },
    violet: {
        border: "border-violet-500/20",
        borderLight: "border-violet-300/40",
        bg: "bg-violet-500/[0.06]",
        bgLight: "bg-violet-50",
        text: "text-violet-400",
        textLight: "text-violet-600",
        glow: "bg-violet-600/15",
        glowLight: "bg-violet-400/10",
        line: "bg-violet-500",
    },
    emerald: {
        border: "border-emerald-500/20",
        borderLight: "border-emerald-300/40",
        bg: "bg-emerald-500/[0.06]",
        bgLight: "bg-emerald-50",
        text: "text-emerald-400",
        textLight: "text-emerald-600",
        glow: "bg-emerald-600/15",
        glowLight: "bg-emerald-400/10",
        line: "bg-emerald-500",
    },
};

export const LeadershipSection = () => {
    const { isDark } = useIsDark();
    const { ref: sectionRef, isInView } = useInView({ threshold: 0.1, triggerOnce: true });
    const { t, locale } = useI18n();
    

    return (
        <section
            id="leadership"
            ref={sectionRef as React.RefObject<HTMLElement>}
            className="relative w-full py-32 overflow-hidden flex flex-col items-center justify-center"
        >
            {/* Background Layers */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <div
                    className={`absolute -top-[10%] right-[5%] w-[500px] h-[500px] rounded-full blur-[160px] transition-colors duration-1000 ${isDark ? "bg-violet-600/10" : "bg-violet-400/5"
                        }`}
                />
                <div
                    className={`absolute bottom-[5%] -left-[5%] w-[400px] h-[400px] rounded-full blur-[140px] transition-colors duration-1000 ${isDark ? "bg-indigo-600/8" : "bg-indigo-400/5"
                        }`}
                />
            </div>

            <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
                {/* Section Header */}
                <div className={`flex flex-col items-center text-center mb-16 md:mb-20 ${isInView ? "animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both" : "opacity-0"}`}>
                    <span className="font-mono text-violet-400 text-xs uppercase tracking-widest mb-4">ROLES.org</span>
                    <h2 className={`text-4xl md:text-5xl font-black tracking-tighter ${isDark ? "text-white" : "text-slate-900"}`}>
                        {t("Leadership.title")}
                    </h2>
                    <p className={`mt-4 text-lg max-w-2xl font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        {t("Leadership.description")}
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className={`absolute left-6 md:left-8 top-0 bottom-0 w-px ${isDark ? "bg-white/[0.08]" : "bg-slate-200"}`} />

                    <div className="flex flex-col gap-8 md:gap-10">
                        {leadershipData.map((item, index) => {
                            const accent = accentMap[item.accentColor];
                            return (
                                <div
                                    key={index}
                                    className={`relative pl-16 md:pl-20 ${isInView ? "animate-in fade-in slide-in-from-bottom-12 duration-700 fill-mode-both" : "opacity-0"}`}
                                    style={{ animationDelay: `${300 + index * 150}ms` }}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-6 md:left-8 top-8 -translate-x-1/2">
                                        <div className={`relative w-3 h-3 rounded-full ${accent.line}`}>
                                            <div className={`absolute inset-0 rounded-full ${accent.line} animate-ping opacity-30`} />
                                        </div>
                                    </div>

                                    {/* Card */}
                                    <div
                                        className={`group relative flex flex-col p-8 md:p-10 rounded-[28px] border transition-all duration-500 overflow-hidden ${isDark
                                                ? `bg-white/[0.02] ${accent.border} hover:bg-white/[0.04] hover:border-white/10`
                                                : `bg-white/80 ${accent.borderLight} hover:shadow-xl backdrop-blur-md`
                                            }`}
                                    >
                                        {/* Glow */}
                                        <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full blur-[60px] ${isDark ? accent.glow : accent.glowLight} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                        <div className="relative z-10">
                                            {/* Top Row: Icon + Period */}
                                            <div className="flex items-start justify-between mb-6">
                                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${isDark
                                                        ? `bg-white/[0.03] border-white/[0.08]`
                                                        : `bg-slate-50 border-slate-200`
                                                    }`}>
                                                    <Icon
                                                        icon={item.icon}
                                                        className={`text-3xl ${isDark ? accent.text : accent.textLight}`}
                                                    />
                                                </div>
                                                <span className={`text-[10px] font-mono font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border ${isDark
                                                        ? "bg-white/[0.04] border-white/[0.06] text-slate-500"
                                                        : "bg-slate-50 border-slate-200 text-slate-500"
                                                    }`}>
                                                    {item.period}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className={`text-xl md:text-2xl font-black tracking-tight mb-1 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                                                {item.title[locale]}
                                            </h3>
                                            <span className={`text-sm font-medium ${isDark ? accent.text : accent.textLight}`}>
                                                {item.title[locale === "en" ? "th" : "en"]}
                                            </span>

                                            {/* Description */}
                                            <p className={`mt-4 text-sm leading-relaxed font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                                                {item.description[locale]}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
