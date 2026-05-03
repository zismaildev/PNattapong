"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button, Card, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

const TECH_STACK = ["Next.js", "TypeScript", "RAG", "LangChain.js", "Supabase", "Tailwind"] as const;

const STATS = [
    { value: "4+", label: "YEARS", sub: "Coding since 15" },
    { value: "5+", label: "SYSTEMS", sub: "In production" },
    { value: "1", label: "PAPER", sub: "National Conference" },
] as const;

const PROJECT_STACK = ["Next.js", "LangChain", "pgvector", "Groq"] as const;

export const Hero = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    // Default to dark before mount to avoid flash (dark-first design)
    const isDark = mounted ? resolvedTheme === "dark" : true;

    return (
        <section
            id="hero"
            className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center"
        >
            {/* ─── Background Layers ─── */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Dot grid */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle, ${isDark ? "#f1f5f9" : "#0f172a"} 1px, transparent 1px)`,
                        backgroundSize: "24px 24px",
                    }}
                />
                {/* Indigo orb — top left */}
                <div
                    className={`absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full blur-[180px] transition-colors duration-1000 ${isDark ? "bg-indigo-600/20" : "bg-indigo-400/15"}`}
                />
                {/* Violet orb — bottom right */}
                <div
                    className={`absolute -bottom-[20%] -right-[10%] w-[500px] h-[500px] rounded-full blur-[160px] transition-colors duration-1000 ${isDark ? "bg-violet-600/15" : "bg-violet-400/10"}`}
                />
            </div>

            {/* ─── Main Content ─── */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-20 pointer-events-none">

                {/* ━━━ LEFT COLUMN ━━━ */}
                <div className="flex-1 flex flex-col items-start text-left space-y-8 pointer-events-auto">

                    {/* Badge */}
                    <div
                        className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-[0.2em] animate-fade-in-up ${isDark
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

                    {/* Headline */}
                    <div className="animate-fade-in-up [animation-delay:100ms]">
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

                    {/* Subheadline */}
                    <p
                        className={`text-lg md:text-xl max-w-lg leading-relaxed font-medium animate-fade-in-up [animation-delay:200ms] ${isDark ? "text-slate-400" : "text-slate-600"
                            }`}
                    >
                        Full-stack Developer. AI Engineer. I build things that work.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-8 py-2 animate-fade-in-up [animation-delay:300ms]">
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

                    {/* Tech Stack */}
                    <div className="flex flex-col gap-2 animate-fade-in-up [animation-delay:400ms]">
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

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-start gap-4 pt-2 animate-fade-in-up [animation-delay:500ms]">
                        <Button
                            size="lg"
                            variant="primary"
                            className="h-14 px-10 font-bold text-sm rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:shadow-indigo-600/30"
                        >
                            VIEW WORK
                        </Button>
                        <Button
                            size="lg"
                            variant="ghost"
                            className={`h-14 px-10 font-bold text-sm rounded-2xl transition-all duration-300 ${isDark
                                ? "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                                : "text-slate-600 hover:text-slate-900 hover:bg-slate-900/[0.04]"
                                }`}
                        >
                            GET IN TOUCH
                        </Button>
                    </div>
                </div>

                {/* ━━━ RIGHT COLUMN — Featured Project Card ━━━ */}
                <div className="relative flex-1 w-full flex justify-center lg:justify-end animate-fade-in-up [animation-delay:200ms] pointer-events-auto">
                    <div className="relative group">
                        {/* Subtle glow behind card */}
                        <div
                            className={`absolute inset-0 rounded-[40px] blur-[80px] transition-all duration-1000 opacity-40 scale-90 group-hover:opacity-50 group-hover:scale-95 ${isDark ? "bg-indigo-600/30" : "bg-indigo-400/20"
                                }`}
                        />

                        {/* Card */}
                        <Card
                            className={`relative w-full max-w-[420px] rounded-[32px] border transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl ${isDark
                                ? "bg-white/[0.03] border-white/[0.08] shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
                                : "bg-white/80 border-slate-200 shadow-[0_40px_80px_rgba(0,0,0,0.08)]"
                                }`}
                        >
                            {/* Card gradient header area */}
                            <div
                                className="relative h-48 rounded-t-[32px] overflow-hidden"
                                style={{ clipPath: "inset(0 round 32px 32px 0 0)" }}
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
                                {/* Terminal-style decoration */}
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

                            <Card.Content className="p-6 space-y-5">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5">
                                    <Chip
                                        size="sm"
                                        variant="soft"
                                        color="danger"
                                        className="text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 bg-red-500/10 text-red-500 border-red-500/10"
                                    >
                                        RAG PIPELINE
                                    </Chip>
                                    <Chip
                                        size="sm"
                                        variant="soft"
                                        color="success"
                                        className="text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 bg-emerald-500/10 text-emerald-500 border-emerald-500/10"
                                    >
                                        PRODUCTION
                                    </Chip>
                                </div>

                                {/* Title */}
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

                                {/* Stack badges */}
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

                                {/* Expert rating */}
                                <div
                                    className={`flex items-center gap-2 pt-1 text-[11px] ${isDark ? "text-slate-600" : "text-slate-400"
                                        }`}
                                >
                                    <Icon icon="mdi:star" className="text-yellow-500/80 text-sm" />
                                    <span>Expert evaluation: <strong className={isDark ? "text-slate-400" : "text-slate-600"}>4.79 / 5.00</strong></span>
                                </div>

                                {/* CTA */}
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
                            </Card.Content>
                        </Card>

                        {/* ─── Floating micro-elements ─── */}

                        {/* Deployed badge */}
                        <div
                            className={`absolute -bottom-4 -left-6 px-4 py-2.5 rounded-2xl border backdrop-blur-2xl z-30 ${isDark
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

                        {/* RAG badge */}
                        <div
                            className={`absolute -top-3 -right-4 px-3.5 py-2.5 rounded-2xl border backdrop-blur-2xl z-30 ${isDark
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