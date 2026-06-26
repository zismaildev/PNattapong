"use client";

import { useEffect, useRef, useState } from "react";

import { Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";

import { useInView } from "@/hooks/use-in-view";
import { useIsDark } from "@/hooks/use-is-dark";
import { useI18n } from "@/context/i18n-context";

export const AboutSection = () => {
    const { isDark } = useIsDark();
    const { ref: sectionRef, isInView } = useInView({ threshold: 0.1, triggerOnce: true });
    const { t } = useI18n();



    const education = [
        {
            year: "2023 - Present",
            institution: t("About.university_val"),
            degree: t("About.uni_degree"),
            icon: "mdi:school-outline"
        },
        {
            year: "2021 - 2022",
            institution: "Non-Formal Education (NFE) San Sai",
            degree: t("About.highschool_degree"),
            icon: "mdi:school-outline"
        }
    ];

    const detailedInfo = [
        { label: t("About.full_name"), value: t("About.full_name_val") },
        { label: t("About.brand"), value: "zismaildev" },
        { label: t("About.education"), value: t("About.education_val") },
        { label: t("About.university"), value: t("About.university_val") },
        { label: t("About.year"), value: t("About.year_val") },
        { label: t("About.languages"), value: t("About.languages_val") },
        { label: t("About.interests"), value: t("About.interests_val") }
    ];

    const quickInfo = [
        { icon: "mdi:cake-variant", label: t("About.age"), value: "22" },
        { icon: "mdi:map-marker", label: t("About.based"), value: t("About.based_val") },
        { icon: "mdi:translate", label: t("About.langs"), value: t("About.langs_val") },
        { icon: "mdi:briefcase", label: t("About.status"), value: t("About.status_val") }
    ];

    return (
        <div className="flex flex-col">
            <section
                id="about"
                ref={sectionRef as React.RefObject<HTMLElement>}
                className="relative w-full py-32 overflow-hidden flex items-center justify-center"
            >
                {/* ─── Background Layers ─── */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                    <div
                        className={`absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] rounded-full blur-[160px] transition-colors duration-1000 ${isDark ? "bg-violet-600/10" : "bg-violet-400/5"
                            }`}
                    />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 lg:gap-20">
                    {/* LEFT COLUMN */}
                    <div className={`w-full lg:w-5/12 flex flex-col gap-6 ${isInView ? "animate-in fade-in slide-in-from-left-8 duration-500 fill-mode-both" : "opacity-0"}`}>
                        <div className="relative group">
                            {/* Floating elements */}
                            <div className="absolute -top-12 -right-8 z-20 p-5 rounded-2xl border bg-black/80 backdrop-blur-xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rotate-6 hidden md:block">
                                <div className="font-mono text-[10px]">
                                    <span className="text-purple-400">const</span> <span className="text-blue-400">zismail</span> = {"{"}
                                    <div className="pl-4">
                                        <span className="text-slate-500">stack:</span> <span className="text-emerald-400">"Next.js + TS"</span>,
                                    </div>
                                    {"}"}
                                </div>
                            </div>

                            <div className="relative p-[1px] rounded-[40px] overflow-hidden bg-gradient-to-br from-indigo-500/30 to-violet-500/30 shadow-2xl">
                                <div className={`relative w-full rounded-[39px] p-10 flex flex-col items-center text-center backdrop-blur-3xl ${isDark ? "bg-[#0a0a0f]/90" : "bg-white/90"}`}>
                                    <div className="w-32 h-32 rounded-full mb-6 flex items-center justify-center border border-white/10 overflow-hidden relative bg-slate-800">
                                        <Image src="/profile.jpg" alt="Nattapong Panthiya" fill sizes="128px" className="object-cover" />
                                    </div>
                                    <h3 className={`text-3xl font-black tracking-tighter ${isDark ? "text-white" : "text-slate-900"}`}>Nattapong Panthiya</h3>
                                    <p className={`text-sm mt-1.5 font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>Full-stack Developer & AI Engineer</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {quickInfo.map((item, i) => (
                                <div key={item.label} className={`flex flex-col p-5 rounded-2xl border ${isDark ? "bg-white/[0.03] border-white/[0.08]" : "bg-white border-slate-200"}`}>
                                    <Icon icon={item.icon} className={`text-2xl mb-3 ${isDark ? "text-indigo-400" : "text-indigo-600"}`} />
                                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{item.label}</span>
                                    <span className={`text-sm font-bold mt-1 ${isDark ? "text-slate-200" : "text-slate-800"}`}>{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className={`w-full lg:w-7/12 flex flex-col justify-center ${isInView ? "animate-in fade-in slide-in-from-right-8 duration-500 fill-mode-both delay-200" : "opacity-0"}`}>
                        <div className={`flex flex-col space-y-8 p-8 lg:p-12 rounded-[40px] border backdrop-blur-sm ${isDark ? "bg-white/[0.02] border-white/[0.05]" : "bg-white/80 border-slate-200 shadow-xl"}`}>
                            <div className="space-y-4">
                                <span className="font-mono text-indigo-400 text-xs uppercase tracking-widest">ABOUT_ME.tsx</span>
                                <h2 className={`text-4xl md:text-5xl font-black tracking-tighter ${isDark ? "text-white" : "text-slate-900"}`}>{t("About.title")}</h2>
                                <p className={`text-lg leading-relaxed max-w-lg font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>{t("About.description")}</p>
                            </div>

                            <div className={`w-full h-px ${isDark ? "bg-white/5" : "bg-slate-200"}`} />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                                {detailedInfo.map((item, i) => (
                                    <div key={item.label} className="flex flex-col space-y-1">
                                        <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">{item.label}</span>
                                        <span className={`text-sm font-medium ${isDark ? "text-slate-200" : "text-slate-800"}`}>{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EDUCATION SUB-SECTION (Part of About in this structure) */}
            <section className="relative w-full py-20 pb-40">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex flex-col items-center text-center mb-16">
                        <span className="font-mono text-indigo-400 text-[10px] uppercase tracking-widest mb-4">TIMELINE.log</span>
                        <h2 className={`text-3xl md:text-4xl font-black tracking-tighter ${isDark ? "text-white" : "text-slate-900"}`}>{t("About.education_title")}</h2>
                    </div>

                    <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12">
                        {education.map((item, index) => (
                            <div key={index} className="relative pl-10">
                                <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full border-4 flex items-center justify-center ${isDark ? "bg-[#0a0a0f] border-slate-800 text-indigo-400" : "bg-white border-slate-100 text-indigo-600"}`}>
                                    <Icon icon={item.icon} className="text-sm" />
                                </div>
                                <div className="flex flex-col">
                                    <span className={`text-[10px] font-mono uppercase tracking-widest mb-1 ${isDark ? "text-slate-500" : "text-slate-400"}`}>{item.year}</span>
                                    <h3 className={`text-xl font-bold tracking-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>{item.degree}</h3>
                                    <p className={`text-sm mt-1 font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>{item.institution}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
