"use client";

import NextLink from "next/link";
import { Icon } from "@iconify/react";
import { useI18n } from "@/context/i18n-context";
import { useIsDark } from "@/hooks/use-is-dark";

export default function NotFound() {
    const { t } = useI18n();
    const { isDark } = useIsDark();

    return (
        <section className="relative min-h-[calc(100dvh-5rem)] w-full overflow-hidden flex items-center justify-center px-6 py-24">
            {/* Ambient Glows */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
                <div
                    className={`w-[500px] h-[500px] rounded-full blur-[160px] transition-colors duration-1000 ${
                        isDark ? "bg-indigo-600/15" : "bg-indigo-400/15"
                    }`}
                />
                <div
                    className={`w-[400px] h-[400px] -ml-32 mt-24 rounded-full blur-[140px] transition-colors duration-1000 ${
                        isDark ? "bg-violet-600/15" : "bg-violet-400/10"
                    }`}
                />
            </div>

            <div className="relative z-10 max-w-2xl w-full flex flex-col items-center text-center">
                {/* Status Pill */}
                <div
                    style={{ animationDelay: "100ms" }}
                    className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border text-[11px] font-mono font-bold uppercase tracking-[0.2em] mb-6 opacity-0 animate-fade-in-up ${
                        isDark
                            ? "bg-rose-500/10 border-rose-500/20 text-rose-400"
                            : "bg-rose-50 border-rose-200 text-rose-600"
                    }`}
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
                    </span>
                    {t("NotFound.badge")}
                </div>

                {/* Giant 404 Typography */}
                <div
                    style={{ animationDelay: "200ms" }}
                    className="relative opacity-0 animate-scale-in select-none"
                >
                    <span
                        aria-hidden="true"
                        className={`block text-[8rem] sm:text-[11rem] md:text-[13rem] font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b ${
                            isDark
                                ? "from-white via-slate-200 to-slate-600/40"
                                : "from-slate-900 via-slate-700 to-slate-300"
                        }`}
                    >
                        404
                    </span>
                    <div className="absolute -bottom-2 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
                </div>

                {/* Title & Description */}
                <h1
                    style={{ animationDelay: "300ms" }}
                    className={`mt-8 text-2xl sm:text-4xl font-black tracking-tight opacity-0 animate-fade-in-up ${
                        isDark ? "text-white" : "text-slate-900"
                    }`}
                >
                    {t("NotFound.title")}
                </h1>

                <p
                    style={{ animationDelay: "400ms" }}
                    className={`mt-4 text-sm sm:text-base max-w-md leading-relaxed font-medium opacity-0 animate-fade-in-up ${
                        isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                >
                    {t("NotFound.description")}
                </p>

                {/* Terminal Diagnostic Card */}
                <div
                    style={{ animationDelay: "500ms" }}
                    className={`mt-8 w-full max-w-md rounded-2xl border p-4 text-left font-mono text-xs backdrop-blur-md opacity-0 animate-fade-in-up ${
                        isDark
                            ? "bg-white/[0.03] border-white/[0.08] text-slate-400"
                            : "bg-white/80 border-slate-200/80 text-slate-600 shadow-lg shadow-slate-200/40"
                    }`}
                >
                    <div className="flex items-center gap-1.5 pb-3 mb-3 border-b border-slate-200/60 dark:border-white/[0.06]">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        <span className="ml-2 text-[10px] text-slate-400 dark:text-slate-500">
                            zismail@portfolio:~
                        </span>
                    </div>
                    <div className="space-y-1.5 leading-relaxed">
                        <p>
                            <span className="text-indigo-500 dark:text-indigo-400">$</span> locate --target-route
                        </p>
                        <p className="text-rose-500 dark:text-rose-400">
                            ✗ Error: 404_RESOURCE_UNREACHABLE
                        </p>
                        <p className="text-emerald-600 dark:text-emerald-400">
                            ✓ Suggestion: Redirecting to safe origin (&quot;/&quot;)
                        </p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div
                    style={{ animationDelay: "600ms" }}
                    className="mt-10 flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in-up"
                >
                    <NextLink
                        href="/"
                        className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
                    >
                        <Icon
                            icon="lucide:arrow-left"
                            className="text-base transition-transform duration-300 group-hover:-translate-x-1"
                        />
                        {t("NotFound.back_home")}
                    </NextLink>

                    <button
                        onClick={() => {
                            window.location.href = "/";
                            setTimeout(() => {
                                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                            }, 300);
                        }}
                        className={`inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl border text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5 cursor-pointer ${
                            isDark
                                ? "bg-white/[0.03] border-white/[0.1] text-slate-200 hover:bg-white/[0.08] hover:border-indigo-500/40"
                                : "bg-white border-slate-200 text-slate-700 hover:border-indigo-500 hover:text-indigo-600 shadow-sm"
                        }`}
                    >
                        <Icon icon="lucide:folder-git-2" className="text-base text-indigo-400" />
                        {t("NotFound.view_projects")}
                    </button>
                </div>
            </div>
        </section>
    );
}
