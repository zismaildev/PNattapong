"use client";

import { Icon } from "@iconify/react";
import { useIsDark } from "@/hooks/use-is-dark";
import { useI18n } from "@/context/i18n-context";

export const SkillsSection = () => {
    const { isDark, mounted } = useIsDark();
    const { t } = useI18n();

    const skillGroups = [
        {
            title: t("Skills.languages"),
            skills: [
                { name: "TypeScript", icon: "mdi:language-typescript", color: "text-blue-400", level: 4 },
                { name: "JavaScript", icon: "mdi:language-javascript", color: "text-yellow-400", level: 5 },
                { name: "Dart", icon: "simple-icons:dart", color: "text-blue-400", level: 3 },
                { name: "Python", icon: "mdi:language-python", color: "text-yellow-400", level: 4 },
                { name: "C", icon: "mdi:language-c", color: "text-blue-400", level: 3 },
                { name: "PHP", icon: "mdi:language-php", color: "text-blue-400", level: 3 },
                { name: "Java", icon: "mdi:language-java", color: "text-blue-500", level: 3 },
                { name: "Node.js", icon: "simple-icons:nodedotjs", color: "text-emerald-400", level: 4 },
                { name: "Lua", icon: "simple-icons:lua", color: "text-blue-400", level: 2 },
                { name: "SQL", icon: "mdi:database-search", color: "text-sky-400", level: 4 },
                { name: "HTML5", icon: "mdi:language-html5", color: "text-orange-400", level: 5 },
                { name: "CSS3", icon: "mdi:language-css3", color: "text-blue-500", level: 4 },
            ]
        },
        {
            title: t("Skills.frameworks"),
            skills: [
                { name: "Next.js 16", icon: "ri:nextjs-fill", color: "text-slate-900 dark:text-white", level: 4 },
                { name: "React 19", icon: "mdi:react", color: "text-cyan-400", level: 4 },
                { name: "NestJS", icon: "mdi:nodejs", color: "text-rose-500", level: 3 },
                { name: "Tailwind CSS", icon: "mdi:tailwind", color: "text-sky-400", level: 5 },
                { name: "HeroUI", icon: "mdi:palette-swatch", color: "text-indigo-400", level: 4 },
                { name: "Framer Motion", icon: "mdi:animation-outline", color: "text-purple-400", level: 3 },
            ]
        },
        {
            title: t("Skills.libraries"),
            skills: [
                { name: "LangChain", icon: "mdi:link-variant", color: "text-emerald-500", level: 2 },
                { name: "Prisma", icon: "simple-icons:prisma", color: "text-blue-600", level: 4 },
                { name: "Supabase", icon: "simple-icons:supabase", color: "text-emerald-400", level: 3 },
                { name: "Firebase", icon: "simple-icons:firebase", color: "text-orange-500", level: 3 },
                { name: "MongoDB", icon: "simple-icons:mongodb", color: "text-blue-400", level: 3 },
                { name: "PostgreSQL", icon: "simple-icons:postgresql", color: "text-blue-400", level: 4 },
                { name: "Docker", icon: "mdi:docker", color: "text-blue-500", level: 3 },
                { name: "Git", icon: "mdi:git", color: "text-orange-500", level: 4 },
                { name: "Vercel", icon: "simple-icons:vercel", color: "text-slate-900 dark:text-white", level: 4 },
            ]
        },
        {
            title: t("Skills.iot"),
            skills: [
                { name: "ESP32", icon: "simple-icons:espressif", color: "text-red-500", level: 3 },
                { name: "ESP8266", icon: "simple-icons:espressif", color: "text-red-400", level: 3 },
                { name: "Arduino", icon: "simple-icons:arduino", color: "text-teal-500", level: 3 },
                { name: "Sensors", icon: "mdi:sensor", color: "text-blue-400", level: 3 },
                { name: "Relay", icon: "mdi:electric-switch", color: "text-yellow-500", level: 3 },
            ]
        }
    ];

    // Prevent hydration mismatch by only rendering after mount
    if (!mounted) {
        return <section id="skills" className="w-full py-20 opacity-0"></section>;
    }

    return (
        <section id="skills" className="relative w-full py-20 overflow-hidden">
            <div className="flex flex-col items-center text-center mb-16 px-6">
                <span className="font-mono text-indigo-400 text-[10px] uppercase tracking-widest mb-4">CAPABILITIES.sys</span>
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 dark:text-white mb-6">
                    {t("Skills.title")}
                </h2>
                
            </div>

            <div className="flex flex-col gap-10 mt-20">
                {skillGroups.map((group, gIndex) => (
                    <div key={gIndex} className="flex flex-col gap-4">
                        <div className="px-10 flex items-center gap-4">
                            <div className="h-px flex-grow bg-slate-200 dark:bg-white/5" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                                {group.title}
                            </span>
                            <div className="h-px flex-grow bg-slate-200 dark:bg-white/5" />
                        </div>

                        <div className="flex overflow-hidden select-none gap-6 group">
                            <div className={`flex flex-nowrap gap-6 ${gIndex % 2 === 0 ? "animate-scroll-left" : "animate-scroll-right"} group-hover:pause-scroll`}>
                                {[...group.skills, ...group.skills, ...group.skills].map((skill, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 whitespace-nowrap px-6 py-3 rounded-xl border transition-all duration-300 bg-white border-slate-200 shadow-sm dark:bg-white/[0.02] dark:border-white/10 dark:hover:bg-white/5 dark:hover:border-white/20"
                                    >
                                        <Icon icon={skill.icon} className={`text-xl ${skill.color}`} />
                                        <span className="font-mono font-bold tracking-wider text-sm text-slate-700 dark:text-slate-300">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

