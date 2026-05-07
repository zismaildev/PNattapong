import { notFound } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { projectsData } from "@/data/projects";

// Required for static site generation (if applicable)
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
        <main className="min-h-screen bg-[#020617] text-slate-200">
            {/* Header Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5">
                <Link 
                    href="/#projects" 
                    className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-slate-400 hover:text-white transition-colors"
                >
                    <Icon icon="mdi:arrow-left" className="text-xl" />
                    Back to Portfolio
                </Link>
                <div className="flex items-center gap-4">
                    {project.links.github && project.links.github !== "#" && (
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Icon icon="mdi:github" className="text-2xl" />
                        </a>
                    )}
                    {project.links.preview && (
                        <a href={project.links.preview} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors">
                            Live Preview <Icon icon="mdi:open-in-new" className="text-sm" />
                        </a>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative w-full pt-32 pb-20 px-6 overflow-hidden">
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px] bg-gradient-to-b ${project.color} opacity-20 pointer-events-none`} />
                
                <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-3xl flex items-center justify-center border bg-white/[0.03] border-white/[0.08] mb-8">
                        <Icon icon={project.icon} className={`text-4xl ${project.iconColor}`} />
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
                        {project.title}
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed">
                        {project.shortDescription}
                    </p>
                </div>
            </section>

            {/* Main Content Layout */}
            <section className="relative z-10 max-w-5xl mx-auto px-6 pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
                    
                    {/* Left Column: Details */}
                    <div className="lg:col-span-2 flex flex-col gap-16">
                        {/* Overview */}
                        <div>
                            <h2 className="text-sm font-mono text-indigo-400 tracking-[0.3em] uppercase mb-4">Overview</h2>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                {project.content.overview}
                            </p>
                        </div>

                        {/* Challenges */}
                        <div>
                            <h2 className="text-sm font-mono text-orange-400 tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
                                <Icon icon="mdi:alert-circle-outline" className="text-xl" /> The Challenge
                            </h2>
                            <ul className="flex flex-col gap-4">
                                {project.content.challenges.map((challenge, idx) => (
                                    <li key={idx} className="flex items-start gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
                                        <Icon icon="mdi:close-circle-outline" className="text-orange-400 text-xl flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-300 leading-relaxed">{challenge}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Solutions */}
                        <div>
                            <h2 className="text-sm font-mono text-emerald-400 tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
                                <Icon icon="mdi:lightbulb-on-outline" className="text-xl" /> Implementation
                            </h2>
                            <ul className="flex flex-col gap-4">
                                {project.content.solutions.map((solution, idx) => (
                                    <li key={idx} className="flex items-start gap-4 p-5 rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.02]">
                                        <Icon icon="mdi:check-circle-outline" className="text-emerald-400 text-xl flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-300 leading-relaxed">{solution}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Outcomes */}
                        <div>
                            <h2 className="text-sm font-mono text-blue-400 tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
                                <Icon icon="mdi:flag-checkered" className="text-xl" /> Outcomes
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {project.content.outcomes.map((outcome, idx) => (
                                    <div key={idx} className="p-6 rounded-2xl border border-blue-500/20 bg-blue-500/[0.05] flex flex-col justify-center text-center h-full">
                                        <span className="text-slate-200 font-medium">{outcome}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sticky Sidebar */}
                    <div className="relative">
                        <div className="sticky top-32 flex flex-col gap-8 p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
                            <div>
                                <h3 className="text-xs font-mono text-slate-500 tracking-widest uppercase mb-4">Tech Stack</h3>
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

                            <div className="w-full h-px bg-white/5" />

                            <div>
                                <h3 className="text-xs font-mono text-slate-500 tracking-widest uppercase mb-4">Links</h3>
                                <div className="flex flex-col gap-3">
                                    {project.links.preview && (
                                        <a href={project.links.preview} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-bold text-slate-300 hover:text-white transition-colors">
                                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                                <Icon icon="mdi:open-in-new" className="text-sm" />
                                            </div>
                                            Live Website
                                        </a>
                                    )}
                                    {project.links.github && project.links.github !== "#" && (
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-bold text-slate-300 hover:text-white transition-colors">
                                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                                <Icon icon="mdi:github" className="text-sm" />
                                            </div>
                                            Source Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </main>
    );
}
