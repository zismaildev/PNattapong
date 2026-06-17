"use client";

import { useEffect, useRef, useState } from "react";

import { Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

import { useInView } from "@/hooks/use-in-view";
import { useIsDark } from "@/hooks/use-is-dark";

import NextLink from "next/link";
import { projectsData } from "@/data/projects";
import { useI18n } from "@/context/i18n-context";

export const ProjectsSection = () => {
    const { isDark } = useIsDark();
    const { ref: sectionRef, isInView } = useInView({ threshold: 0.1, triggerOnce: true });
    const { t, locale } = useI18n();
    

    return (
        <section
            id="projects"
            ref={sectionRef as React.RefObject<HTMLElement>}
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
                        {t("Projects.title")}
                    </h2>
                    <p className={`mt-4 text-lg max-w-2xl font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        {t("Projects.description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {projectsData.map((project, index) => (
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
                                        <NextLink href={`/projects/${project.id}`} className={`text-2xl font-black tracking-tight hover:underline transition-all ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                                            {project.title[locale]}
                                        </NextLink>
                                        {project.featured && (
                                            <Chip size="sm" variant="soft" className={`h-5 px-1.5 text-[9px] font-black tracking-widest uppercase ${isDark ? "bg-blue-500/20 text-blue-400" : "bg-blue-100 text-blue-700"}`}>
                                                {t("Projects.featured")}
                                            </Chip>
                                        )}
                                    </div>
                                    <p className={`text-sm leading-relaxed font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                                        {project.shortDescription[locale]}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5 mb-6">
                                    {project.techStack.map(tech => (
                                        <span
                                            key={tech}
                                            className={`text-[10px] font-mono tracking-widest uppercase px-2 py-1 rounded-md ${isDark ? "bg-white/[0.04] text-slate-300" : "bg-slate-100 text-slate-600"}`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <NextLink 
                                    href={`/projects/${project.id}`}
                                    className={`flex items-center gap-2 text-sm font-bold mt-2 w-fit transition-colors ${isDark ? "text-indigo-400 hover:text-indigo-300" : "text-indigo-600 hover:text-indigo-700"}`}
                                >
                                    {t("Projects.view_case_study")} <Icon icon="mdi:arrow-right" />
                                </NextLink>
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
                        {t("Projects.view_more")}
                    </a>
                </div>
            </div>
        </section>
    );
}
