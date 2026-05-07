"use client";

import { useState } from "react";
import { achievementsData, AchievementCategory, Achievement } from "@/data/achievements";
import { Icon } from "@iconify/react";
import { useIsDark } from "@/hooks/use-is-dark";
import Image from "next/image";

const categories: { label: string; value: AchievementCategory | "all" }[] = [
    { label: "All", value: "all" },
    { label: "Award", value: "award" },
    { label: "Certification", value: "certification" },
    { label: "Training", value: "training" },
    { label: "Competition", value: "competition" },
    { label: "Activity", value: "activity" },
    { label: "Research", value: "research" },
    { label: "Work", value: "work" },
];

export const AchievementsSection = () => {
    const { mounted } = useIsDark();
    const [activeTab, setActiveTab] = useState<AchievementCategory | "all">("all");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [visibleCount, setVisibleCount] = useState(6);

    // Prevent hydration mismatch
    if (!mounted) {
        return <section id="achievements" className="w-full py-20 opacity-0"></section>;
    }

    const filteredAchievements = achievementsData.filter(
        (achievement) => activeTab === "all" || achievement.category === activeTab
    );

    const visibleAchievements = filteredAchievements.slice(0, visibleCount);

    // Reset visible count when changing tabs
    const handleTabChange = (category: AchievementCategory | "all") => {
        setActiveTab(category);
        setVisibleCount(6);
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case "award": return "text-yellow-500 bg-yellow-50 dark:bg-yellow-500/10";
            case "competition": return "text-amber-500 bg-amber-50 dark:bg-amber-500/10";
            case "research": return "text-purple-500 bg-purple-50 dark:bg-purple-500/10";
            case "training": return "text-blue-500 bg-blue-50 dark:bg-blue-500/10";
            case "certification": return "text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10";
            case "activity": return "text-teal-500 bg-teal-50 dark:bg-teal-500/10";
            case "work": return "text-rose-500 bg-rose-50 dark:bg-rose-500/10";
            default: return "text-slate-500 bg-slate-50 dark:bg-slate-500/10";
        }
    };

    return (
        <section id="achievements" className="relative w-full py-20 overflow-hidden">
            <div className="flex flex-col items-center text-center mb-12 px-6">
                <span className="font-mono text-indigo-400 text-[10px] uppercase tracking-widest mb-4">MILESTONES.log</span>
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 dark:text-white">
                    Achievements & Awards.
                </h2>
                <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl text-sm">
                    A showcase of my continuous learning journey, professional certifications, and recognitions in the tech industry.
                </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12 px-4">
                {categories.map((category) => (
                    <button
                        key={category.value}
                        onClick={() => handleTabChange(category.value as AchievementCategory | "all")}
                        className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 border ${
                            activeTab === category.value
                                ? "bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900 dark:border-white shadow-md"
                                : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 dark:bg-transparent dark:text-slate-400 dark:border-white/10 dark:hover:border-white/30"
                        }`}
                    >
                        {category.label}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="w-full max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {visibleAchievements.map((achievement) => (
                        <div 
                            key={achievement.id} 
                            className="group flex flex-col bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 dark:bg-white/[0.02] dark:border-white/10 dark:hover:border-white/20"
                        >
                            {/* Image Container */}
                            <div 
                                className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-white/5 cursor-pointer"
                                onClick={() => setSelectedImage(achievement.image)}
                            >
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 dark:group-hover:bg-white/5 transition-all z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <div className="bg-white/90 dark:bg-slate-900/90 rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                                        <Icon icon="mdi:magnify" className="text-xl text-slate-800 dark:text-white" />
                                    </div>
                                </div>
                                <Image 
                                    src={achievement.image} 
                                    alt={achievement.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-grow p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md ${getCategoryColor(achievement.category)}`}>
                                        {achievement.category}
                                    </span>
                                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                                        {achievement.date}
                                    </span>
                                </div>
                                
                                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2 line-clamp-2">
                                    {achievement.title}
                                </h3>
                                
                                <div className="flex items-center gap-2 mb-4 text-sm text-slate-600 dark:text-slate-400">
                                    <Icon icon="mdi:bank-outline" className="text-slate-400 shrink-0" />
                                    <span className="truncate">{achievement.issuer}</span>
                                </div>

                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-3">
                                    {achievement.description}
                                </p>

                                {/* Tags */}
                                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-2">
                                    {achievement.tags.map((tag) => (
                                        <span key={tag} className="text-[10px] font-mono bg-slate-100 text-slate-500 dark:bg-white/5 dark:text-slate-400 px-2 py-1 rounded">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredAchievements.length === 0 && (
                    <div className="w-full py-20 flex flex-col items-center justify-center text-slate-400 dark:text-slate-600">
                        <Icon icon="mdi:file-document-outline" className="text-6xl mb-4 opacity-50" />
                        <p>No achievements found for this category.</p>
                    </div>
                )}

                {filteredAchievements.length > visibleCount && (
                    <div className="w-full flex justify-center mt-12">
                        <button
                            onClick={() => setVisibleCount(prev => prev + 6)}
                            className="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-700 dark:text-white border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 rounded-full font-bold text-sm transition-all duration-300"
                        >
                            <span>Load More</span>
                            <Icon icon="mdi:chevron-down" className="text-lg group-hover:translate-y-0.5 transition-transform" />
                        </button>
                    </div>
                )}
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
                    onClick={() => setSelectedImage(null)}
                >
                    <button 
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2"
                        onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                    >
                        <Icon icon="mdi:close" className="text-2xl" />
                    </button>
                    <div className="relative w-full max-w-5xl h-[80vh] mx-4">
                        <Image 
                            src={selectedImage} 
                            alt="Enlarged view" 
                            fill
                            className="object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};
