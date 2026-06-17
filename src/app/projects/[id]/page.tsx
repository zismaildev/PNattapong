import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { Icon } from "@iconify/react";
import NextLink from "next/link";
import { ProjectClientWrapper } from "@/components/portfolio/project-client-wrapper";

export async function generateStaticParams() {
    return projectsData.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const project = projectsData.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background pb-20 pt-32">
            {/* Header Section */}
            <div className={`w-full py-20 px-4 md:px-8 border-b border-white/5 relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />

                <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
                    <ProjectClientWrapper type="back" />
                    
                    <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 backdrop-blur-sm">
                        <Icon icon={project.icon} className={`text-4xl ${project.iconColor}`} />
                    </div>

                    <ProjectClientWrapper type="title" project={project} />

                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        {project.links.preview && (
                            <a
                                href={project.links.preview}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-transform"
                            >
                                <ProjectClientWrapper type="live_preview" />
                                <Icon icon="lucide:external-link" className="w-4 h-4" />
                            </a>
                        )}
                        {project.links.github && (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/10 text-foreground font-medium hover:bg-white/20 transition-colors"
                            >
                                <ProjectClientWrapper type="source_code" />
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
                            <ProjectClientWrapper type="overview_title" />
                            <ProjectClientWrapper type="overview_desc" project={project} />
                        </section>

                        {/* Challenges */}
                        <section>
                            <ProjectClientWrapper type="challenges_title" />
                            <ProjectClientWrapper type="challenges_list" project={project} />
                        </section>

                        {/* Solutions */}
                        <section>
                            <ProjectClientWrapper type="solutions_title" />
                            <ProjectClientWrapper type="solutions_list" project={project} />
                        </section>

                        {/* Outcomes */}
                        <section>
                            <ProjectClientWrapper type="outcomes_title" />
                            <ProjectClientWrapper type="outcomes_list" project={project} />
                        </section>
                    </div>

                    {/* Sidebar / Tech Stack */}
                    <div className="space-y-8">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                            <ProjectClientWrapper type="tech_stack_title" />
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map(tech => (
                                    <span
                                        key={tech}
                                        className="text-xs font-mono tracking-widest uppercase px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.04] text-slate-300"
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
