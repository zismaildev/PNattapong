"use client";

import { useI18n } from "@/context/i18n-context";
import { Project } from "@/data/projects";
import { Icon } from "@iconify/react";
import NextLink from "next/link";

export function ProjectClientWrapper({ project }: { project: Project }) {
    const { t, locale } = useI18n();

    return (
        <div className="min-h-screen bg-background pb-20 pt-32">
            {/* Header Section */}
            <div className="w-full py-20 px-4 md:px-8 border-b border-slate-200 dark:border-white/5 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />

                <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
                    <NextLink
                        href="/#projects"
                        className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-slate-500 hover:text-foreground transition-colors mb-8"
                    >
                        <Icon icon="lucide:arrow-left" className="w-4 h-4" />
                        <span>{t("ProjectDetail.back")}</span>
                    </NextLink>

                    <div className="w-20 h-20 rounded-2xl bg-slate-200/60 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center justify-center mb-6 backdrop-blur-sm">
                        <Icon icon={project.icon} className={`text-4xl ${project.iconColor}`} />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-foreground">
                        {project.title[locale]}
                    </h1>

                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        {project.links.preview && (
                            <a
                                href={project.links.preview}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-transform"
                            >
                                <span>{t("ProjectDetail.live_preview")}</span>
                                <Icon icon="lucide:external-link" className="w-4 h-4" />
                            </a>
                        )}
                        {project.links.paper && (
                            <a
                                href={project.links.paper}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-500 hover:scale-105 transition-all shadow-lg shadow-indigo-500/20"
                            >
                                <span>{t("ProjectDetail.read_paper")}</span>
                                <Icon icon="mdi:book-open-page-variant-outline" className="w-4 h-4" />
                            </a>
                        )}
                        {project.links.github && (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-200/70 dark:bg-white/10 border border-slate-300 dark:border-white/10 text-foreground font-medium hover:bg-slate-300/70 dark:hover:bg-white/20 transition-colors"
                            >
                                <span>{t("ProjectDetail.source_code")}</span>
                                <Icon icon="lucide:github" className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-12">
                        {/* Overview */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">
                                {t("ProjectDetail.overview")}
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                {project.content.overview[locale]}
                            </p>
                        </section>

                        {/* Challenges */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">
                                {t("ProjectDetail.challenges")}
                            </h2>
                            <ul className="space-y-3">
                                {project.content.challenges[locale].map((challenge, i) => (
                                    <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-400">
                                        <span className="text-red-500 dark:text-red-400 mt-1">•</span>
                                        <span>{challenge}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Solutions */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">
                                {t("ProjectDetail.solutions")}
                            </h2>
                            <ul className="space-y-3">
                                {project.content.solutions[locale].map((solution, i) => (
                                    <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-400">
                                        <span className="text-emerald-600 dark:text-emerald-400 mt-1">•</span>
                                        <span>{solution}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Outcomes */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">
                                {t("ProjectDetail.outcomes")}
                            </h2>
                            <ul className="space-y-3">
                                {project.content.outcomes[locale].map((outcome, i) => (
                                    <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-400">
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                        <span>{outcome}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Sidebar / Tech Stack */}
                    <div className="space-y-8">
                        <div className="p-6 rounded-2xl bg-slate-200/50 dark:bg-white/5 border border-slate-300/80 dark:border-white/5">
                            <h3 className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-4">
                                {t("ProjectDetail.tech_stack")}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs font-mono tracking-widest uppercase px-3 py-1.5 rounded-lg border border-slate-300 dark:border-white/5 bg-white/70 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
