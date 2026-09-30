import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { ProjectClientWrapper } from "@/components/portfolio/project-client-wrapper";

export async function generateStaticParams() {
    return projectsData.map((project) => ({
        id: project.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const project = projectsData.find((p) => p.id === id);
    if (!project) return {};

    return {
        title: `${project.title.en} (${project.title.th})`,
        description: project.shortDescription.th || project.shortDescription.en,
        openGraph: {
            title: `${project.title.en} - Nattapong Panthiya Portfolio`,
            description: project.shortDescription.en,
            type: "website",
            images: [
                {
                    url: "/og-image.png",
                }
            ]
        }
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const project = projectsData.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return <ProjectClientWrapper project={project} />;
}
