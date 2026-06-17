"use client";

import { useEffect, useRef, useState } from "react";

import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { siteConfig } from "@/config/site";



import { useInView } from "@/hooks/use-in-view";
import { useIsDark } from "@/hooks/use-is-dark";
import { useI18n } from "@/context/i18n-context";

export const ContactSection = () => {
    const { isDark } = useIsDark();
    const { ref: sectionRef, isInView } = useInView({ threshold: 0.1, triggerOnce: true });
    const { t } = useI18n();

    const socialLinks = [
        { icon: "mdi:github", href: siteConfig.links.github },
        { icon: "mdi:linkedin", href: siteConfig.links.linkedin },
        { icon: "mdi:facebook", href: siteConfig.links.facebook },
        { icon: "mdi:instagram", href: siteConfig.links.instagram },
    ];

    return (
        <section
            id="contact"
            ref={sectionRef as React.RefObject<HTMLElement>}
            className="relative w-full py-32 overflow-hidden flex flex-col items-center justify-center min-h-[80vh]"
        >
            {/* Background Layers */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <div
                    className={`absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full blur-[160px] transition-colors duration-1000 ${isDark ? "bg-indigo-600/10" : "bg-indigo-400/5"
                        }`}
                />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                {/* Left side: Info */}
                <div className={`flex flex-col justify-center ${isInView ? "animate-in fade-in slide-in-from-left-8 duration-700 fill-mode-both" : "opacity-0"}`}>
                    <span className="font-mono text-indigo-400 text-xs uppercase tracking-widest mb-4">CONTACT.sh</span>
                    <h2 className={`text-4xl md:text-6xl font-black tracking-tighter mb-8 ${isDark ? "text-white" : "text-slate-900"}`}>
                        {t("Contact.title_1")} <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">{t("Contact.title_2")}</span>
                    </h2>

                    <p className={`text-lg mb-12 max-w-md font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        {t("Contact.description")}
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${isDark ? "bg-white/[0.03] border-white/[0.08] text-indigo-400" : "bg-slate-50 border-slate-200 text-indigo-600"}`}>
                                <Icon icon="mdi:email-outline" className="text-xl" />
                            </div>
                            <div>
                                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">{t("Contact.email")}</span>
                                <a href={`mailto:${siteConfig.links.email}`} className={`text-sm font-bold hover:text-indigo-400 transition-colors ${isDark ? "text-slate-200" : "text-slate-900"}`}>
                                    {siteConfig.links.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${isDark ? "bg-white/[0.03] border-white/[0.08] text-indigo-400" : "bg-slate-50 border-slate-200 text-indigo-600"}`}>
                                <Icon icon="mdi:map-marker-outline" className="text-xl" />
                            </div>
                            <div>
                                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">{t("Contact.location")}</span>
                                <span className={`text-sm font-bold ${isDark ? "text-slate-200" : "text-slate-900"}`}>{t("Contact.location_val")}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-12">
                        {socialLinks.map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit my ${social.icon.split("Contact.:")[1]}`}
                                className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 hover:-translate-y-1 ${isDark ? "bg-white/[0.03] border-white/[0.08] text-slate-400 hover:border-indigo-500/50 hover:text-white" : "bg-white border-slate-200 text-slate-500 hover:border-indigo-500 hover:text-indigo-600 shadow-sm"}`}
                            >
                                <Icon icon={social.icon} className="text-xl" />
                            </a>
                        ))}
                    </div>
                </div>


                {/* Right side: Form */}
                <div className={`relative ${isInView ? "animate-in fade-in slide-in-from-right-8 duration-700 fill-mode-both" : "opacity-0"}`}>
                    <div className={`p-8 md:p-12 rounded-[40px] border backdrop-blur-md ${isDark ? "bg-white/[0.02] border-white/[0.06]" : "bg-white/80 border-slate-200 shadow-2xl"}`}>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h3 className={`text-2xl font-black tracking-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                                    {t("Contact.ready")}
                                </h3>
                                <p className={`text-sm font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                                    {t("Contact.ready_desc")}
                                </p>
                            </div>
                            
                            <a
                                href={`mailto:${siteConfig.links.email}`}
                                className="w-full h-14 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center"
                            >
                                {t("Contact.open_mail")}
                                <Icon icon="mdi:send-variant" className="ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
