"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { siteConfig } from "@/config/site";



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

export const ContactSection = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();
    const { ref: sectionRef, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? resolvedTheme === "dark" : true;

    const socialLinks = [
        { icon: "mdi:github", href: siteConfig.links.github },
        { icon: "mdi:linkedin", href: siteConfig.links.linkedin },
        { icon: "mdi:facebook", href: siteConfig.links.facebook },
        { icon: "mdi:instagram", href: siteConfig.links.instagram },
    ];

    return (
        <section
            id="contact"
            ref={sectionRef as React.RefObject<HTMLSelectElement>}
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
                        Let&apos;s build the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">next big thing.</span>
                    </h2>

                    <p className={`text-lg mb-12 max-w-md font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        Currently looking for an internship or full-time opportunities starting June 2026. Or just say hi!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${isDark ? "bg-white/[0.03] border-white/[0.08] text-indigo-400" : "bg-slate-50 border-slate-200 text-indigo-600"}`}>
                                <Icon icon="mdi:email-outline" className="text-xl" />
                            </div>
                            <div>
                                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">EMAIL</span>
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
                                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">LOCATION</span>
                                <span className={`text-sm font-bold ${isDark ? "text-slate-200" : "text-slate-900"}`}>Chiang Mai, Thailand</span>
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
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest pl-1">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className={`w-full px-5 h-14 rounded-2xl border outline-none transition-all duration-300 ${isDark ? "bg-white/[0.03] border-white/10 text-white focus:border-indigo-500/50 focus:bg-white/[0.05]" : "bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500 focus:bg-white"}`}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest pl-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="hello@example.com"
                                        className={`w-full px-5 h-14 rounded-2xl border outline-none transition-all duration-300 ${isDark ? "bg-white/[0.03] border-white/10 text-white focus:border-indigo-500/50 focus:bg-white/[0.05]" : "bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500 focus:bg-white"}`}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest pl-1">Subject</label>
                                <input
                                    type="text"
                                    placeholder="How can I help you?"
                                    className={`w-full px-5 h-14 rounded-2xl border outline-none transition-all duration-300 ${isDark ? "bg-white/[0.03] border-white/10 text-white focus:border-indigo-500/50 focus:bg-white/[0.05]" : "bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500 focus:bg-white"}`}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest pl-1">Message</label>
                                <textarea
                                    placeholder="Write your message here..."
                                    rows={4}
                                    className={`w-full p-5 rounded-2xl border outline-none transition-all duration-300 resize-none ${isDark ? "bg-white/[0.03] border-white/10 text-white focus:border-indigo-500/50 focus:bg-white/[0.05]" : "bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500 focus:bg-white"}`}
                                />
                            </div>
                            <Button
                                className="w-full h-14 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold tracking-widest uppercase transition-all duration-300"
                            >
                                SEND MESSAGE
                                <Icon icon="mdi:send-variant" className="ml-2" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
