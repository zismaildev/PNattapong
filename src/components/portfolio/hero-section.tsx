"use client";

import { useIsDark } from "@/hooks/use-is-dark";
import { Card, Chip } from "@heroui/react";
import NextLink from "next/link";
import { Icon } from "@iconify/react";

const TECH_STACK = ["Next.js", "TypeScript", "RAG", "LangChain.js", "Supabase", "Tailwind"] as const;

const STATS = [
    { value: "4+", label: "YEARS", sub: "Coding since 15" },
    { value: "5+", label: "SYSTEMS", sub: "In production" },
    { value: "1", label: "PAPER", sub: "National Conference" },
] as const;

const PROJECT_STACK = ["Next.js", "LangChain", "pgvector", "Groq"] as const;

export const HeroSection = () => {
    const { isDark } = useIsDark();

    return (
        <section
            id="hero"
            className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center"
        >
            {/* ─── Background Layers ─── */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle, ${isDark ? "#f1f5f9" : "#0f172a"} 1px, transparent 1px)`,
                        backgroundSize: "24px 24px",
                    }}
                />
                <div
                    className={`absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full blur-[180px] transition-colors duration-1000 ${isDark ? "bg-indigo-600/20" : "bg-indigo-400/15"}`}
                />
                <div
                    className={`absolute -bottom-[20%] -right-[10%] w-[500px] h-[500px] rounded-full blur-[160px] transition-colors duration-1000 ${isDark ? "bg-violet-600/15" : "bg-violet-400/10"}`}
                />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-20 pointer-events-none">
                <div className="flex-1 flex flex-col items-start text-left space-y-8 pointer-events-auto">
                    <div
                        style={{ animationDelay: "200ms" }}
                        className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 animate-fade-in-up ${isDark
                            ? "bg-white/[0.04] border-white/[0.08] text-slate-500"
                            : "bg-slate-950/[0.04] border-slate-200 text-slate-500"
                            }`}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        AVAILABLE FOR WORK
                    </div>

                    <div 
                        style={{ animationDelay: "400ms" }}
                        className="opacity-0 animate-fade-in-up"
                    >
                        <h1 className="text-6xl md:text-[5.5rem] font-black tracking-tighter leading-[0.88]">
                            <span
                                className={`block bg-clip-text text-transparent bg-gradient-to-r ${isDark
                                    ? "from-slate-100 to-slate-300"
                                    : "from-slate-900 to-slate-700"
                                    }`}
                            >
                                NATTAPONG
                            </span>
                            <span
                                className={`block bg-clip-text text-transparent bg-gradient-to-r ${isDark
                                    ? "from-slate-100 to-slate-300"
                                    : "from-slate-900 to-slate-700"
                                    }`}
                            >
                                PANTHIYA
                            </span>
                        </h1>
                        <p className="mt-2 text-sm font-mono text-indigo-500 tracking-wide">.zismaildev</p>
                    </div>

                    <p
                        style={{ animationDelay: "600ms" }}
                        className={`text-lg md:text-xl max-w-lg leading-relaxed font-medium opacity-0 animate-fade-in-up ${isDark ? "text-slate-400" : "text-slate-600"
                            }`}
                    >
                        Full-stack Developer. AI Engineer. I build things that work.
                    </p>

                    <div 
                        style={{ animationDelay: "800ms" }}
                        className="flex flex-wrap gap-8 py-2 opacity-0 animate-fade-in-up"
                    >
                        {STATS.map((stat, i) => (
                            <div
                                key={stat.label}
                                className={`flex flex-col ${i > 0 ? `border-l pl-8 ${isDark ? "border-white/[0.08]" : "border-slate-200"}` : ""}`}
                            >
                                <span
                                    className={`text-3xl font-black tracking-tighter ${isDark ? "text-white" : "text-slate-950"}`}
                                >
                                    {stat.value}
                                </span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
                                    {stat.label}
                                </span>
                                <span className="text-[10px] text-slate-500/70 mt-0.5">{stat.sub}</span>
                            </div>
                        ))}
                    </div>

                    <div 
                        style={{ animationDelay: "1000ms" }}
                        className="flex flex-col gap-2 opacity-0 animate-fade-in-up"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                            STACK
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                            {TECH_STACK.map((tech) => (
                                <Chip
                                    key={tech}
                                    size="sm"
                                    variant="soft"
                                    className={`text-[11px] font-semibold tracking-wide ${isDark
                                        ? "bg-white/[0.06] text-slate-400 border-white/[0.06]"
                                        : "bg-slate-900/[0.06] text-slate-600 border-slate-200"
                                        }`}
                                >
                                    {tech}
                                </Chip>
                            ))}
                        </div>
                    </div>

                    <div 
                        style={{ animationDelay: "1200ms" }}
                        className="flex flex-col sm:flex-row items-start gap-4 pt-2 opacity-0 animate-fade-in-up"
                    >
                        <NextLink
                            href="#projects"
                            className="h-14 px-10 flex items-center justify-center font-bold text-sm rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:shadow-indigo-600/30"
                        >
                            VIEW WORK
                        </NextLink>
                        <NextLink
                            href="#contact"
                            className={`h-14 px-10 flex items-center justify-center font-bold text-sm rounded-2xl border border-current transition-all duration-300 ${isDark
                                ? "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                                : "text-slate-600 hover:text-slate-900 hover:bg-slate-900/[0.04]"
                                }`}
                        >
                            GET IN TOUCH
                        </NextLink>
                    </div>
                </div>

                <div 
                    style={{ animationDelay: "600ms" }}
                    className="relative flex-1 w-full flex justify-center lg:justify-end opacity-0 animate-scale-in pointer-events-auto"
                >
                    <div className="relative group">
                        <div
                            className={`absolute inset-0 rounded-[40px] blur-[80px] transition-all duration-1000 opacity-40 scale-90 group-hover:opacity-50 group-hover:scale-95 ${isDark ? "bg-indigo-600/30" : "bg-indigo-400/20"
                                }`}
                        />

                        <Card
                            className={`relative w-full max-w-[420px] rounded-[32px] border transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl ${isDark
                                ? "bg-white/[0.03] border-white/[0.08] shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
                                : "bg-white/80 border-slate-200 shadow-[0_40px_80px_rgba(0,0,0,0.08)]"
                                }`}
                        >
                            <div
                                className="relative h-48 rounded-t-[32px] overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-violet-900/70 to-slate-900" />
                                <div
                                    className="absolute inset-0 opacity-10"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
                                        backgroundSize: "16px 16px",
                                    }}
                                />
                                <div className="absolute top-5 left-6 flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                                </div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <code className="text-[11px] text-indigo-300/60 font-mono">
                                        ~/projects/village-ai-chatbot
                                    </code>
                                </div>
                            </div>

                            <div className="p-6 space-y-5">
                                <div className="flex flex-wrap gap-1.5">
                                    <Chip
                                        size="sm"
                                        variant="soft"
                                        className="text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 bg-red-500/10 text-red-500 border-red-500/10"
                                    >
                                        RAG PIPELINE
                                    </Chip>
                                    <Chip
                                        size="sm"
                                        variant="soft"
                                        className="text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 bg-emerald-500/10 text-emerald-500 border-emerald-500/10"
                                    >
                                        PRODUCTION
                                    </Chip>
                                </div>

                                <div className="space-y-2">
                                    <h3
                                        className={`text-2xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"
                                            }`}
                                    >
                                        AI VILLAGE CHATBOT
                                    </h3>
                                    <p className={`text-sm leading-relaxed ${isDark ? "text-slate-500" : "text-slate-500"}`}>
                                        Automated conversational system for village data. RAG + Hybrid LLM + Telegram Bot.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-1.5">
                                    {PROJECT_STACK.map((tech) => (
                                        <span
                                            key={tech}
                                            className={`inline-flex text-[10px] font-mono px-2 py-0.5 rounded ${isDark
                                                ? "bg-white/[0.04] text-slate-500"
                                                : "bg-slate-100 text-slate-500"
                                                }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div
                                    className={`flex items-center gap-2 pt-1 text-[11px] ${isDark ? "text-slate-600" : "text-slate-400"
                                        }`}
                                >
                                    <Icon icon="mdi:star" className="text-yellow-500/80 text-sm" />
                                    <span>Expert evaluation: <strong className={isDark ? "text-slate-400" : "text-slate-600"}>4.79 / 5.00</strong></span>
                                </div>

                                <a
                                    href="https://aichatmoban.cmru.ac.th"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-2 text-sm font-bold transition-colors duration-300 ${isDark
                                        ? "text-indigo-400 hover:text-indigo-300"
                                        : "text-indigo-600 hover:text-indigo-500"
                                        }`}
                                >
                                    VIEW PROJECT
                                    <Icon icon="mdi:arrow-right" className="text-base" />
                                </a>
                            </div>
                        </Card>

                        <div
                            style={{ animationDelay: "1400ms" }}
                            className={`absolute -bottom-4 -left-6 px-4 py-2.5 rounded-2xl border backdrop-blur-2xl z-30 opacity-0 animate-fade-in-up ${isDark
                                ? "bg-white/[0.04] border-white/[0.08]"
                                : "bg-white/80 border-slate-200 shadow-lg"
                                }`}
                        >
                            <div className="flex items-center gap-2.5">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                </span>
                                <span
                                    className={`text-[10px] font-bold uppercase tracking-[0.3em] ${isDark ? "text-slate-400" : "text-slate-600"
                                        }`}
                                >
                                    DEPLOYED
                                </span>
                            </div>
                        </div>

                        <div
                            style={{ animationDelay: "1600ms" }}
                            className={`absolute -top-3 -right-4 px-3.5 py-2.5 rounded-2xl border backdrop-blur-2xl z-30 opacity-0 animate-fade-in-up ${isDark
                                ? "bg-white/[0.04] border-white/[0.08]"
                                : "bg-white/80 border-slate-200 shadow-lg"
                                }`}
                        >
                            <div className="flex items-center gap-2">
                                <Icon
                                    icon="mdi:brain"
                                    className={`text-lg ${isDark ? "text-indigo-400" : "text-indigo-600"}`}
                                />
                                <span
                                    className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isDark ? "text-slate-400" : "text-slate-600"
                                        }`}
                                >
                                    RAG
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};
