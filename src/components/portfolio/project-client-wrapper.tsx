"use client";

import { useI18n } from "@/context/i18n-context";
import { Project } from "@/data/projects";

type WrapperType = 
    | "back" | "title" | "live_preview" | "source_code" 
    | "overview_title" | "overview_desc"
    | "challenges_title" | "challenges_list"
    | "solutions_title" | "solutions_list"
    | "outcomes_title" | "outcomes_list"
    | "tech_stack_title";

export function ProjectClientWrapper({ type, project }: { type: WrapperType, project?: Project }) {
    const { t, locale } = useI18n();

    switch (type) {
        case "back":
            return <span className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-8">{t("ProjectDetail.back")}</span>;
        case "title":
            return (
                <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                    {project?.title[locale]}
                </h1>
            );
        case "live_preview":
            return <span>{t("ProjectDetail.live_preview")}</span>;
        case "source_code":
            return <span>{t("ProjectDetail.source_code")}</span>;
        case "overview_title":
            return <h2 className="text-2xl font-bold mb-4">{t("ProjectDetail.overview")}</h2>;
        case "overview_desc":
            return <p className="text-lg text-slate-400 leading-relaxed">{project?.content.overview[locale]}</p>;
        case "challenges_title":
            return <h2 className="text-2xl font-bold mb-4">{t("ProjectDetail.challenges")}</h2>;
        case "challenges_list":
            return (
                <ul className="space-y-3">
                    {project?.content.challenges[locale].map((challenge, i) => (
                        <li key={i} className="flex gap-3 text-slate-400">
                            <span className="text-red-400 mt-1">•</span>
                            <span>{challenge}</span>
                        </li>
                    ))}
                </ul>
            );
        case "solutions_title":
            return <h2 className="text-2xl font-bold mb-4">{t("ProjectDetail.solutions")}</h2>;
        case "solutions_list":
            return (
                <ul className="space-y-3">
                    {project?.content.solutions[locale].map((solution, i) => (
                        <li key={i} className="flex gap-3 text-slate-400">
                            <span className="text-emerald-400 mt-1">•</span>
                            <span>{solution}</span>
                        </li>
                    ))}
                </ul>
            );
        case "outcomes_title":
            return <h2 className="text-2xl font-bold mb-4">{t("ProjectDetail.outcomes")}</h2>;
        case "outcomes_list":
            return (
                <ul className="space-y-3">
                    {project?.content.outcomes[locale].map((outcome, i) => (
                        <li key={i} className="flex gap-3 text-slate-400">
                            <span className="text-blue-400 mt-1">•</span>
                            <span>{outcome}</span>
                        </li>
                    ))}
                </ul>
            );
        case "tech_stack_title":
            return <h3 className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-4">{t("ProjectDetail.tech_stack")}</h3>;
        default:
            return null;
    }
}
