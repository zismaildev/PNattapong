import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjects, getProjectBySlug } from "@/services/portfolio-api";
import { ProjectClientWrapper } from "@/components/portfolio/project-client-wrapper";

export async function generateStaticParams() {
    const projects = await getProjects();
    return projects.map((project) => ({
        id: project.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const project = await getProjectBySlug(id);
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
                    url: project.coverImage || "/og-image.png",
                }
            ]
        }
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const project = await getProjectBySlug(id);

    if (!project) {
        notFound();
    }

    return <ProjectClientWrapper project={project} />;
}
