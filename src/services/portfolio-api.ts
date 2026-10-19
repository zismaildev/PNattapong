import { projectsData, Project } from "@/data/projects";
import { achievementsData, Achievement, AchievementCategory } from "@/data/achievements";

const AURELIAX_API_URL =
  process.env.AURELIAX_API_URL ||
  process.env.NEXT_PUBLIC_AURELIAX_API_URL ||
  "https://aureliax.vercel.app";

/**
 * Adapter: แปลงรูปแบบข้อมูลโปรเจกต์จาก AureliaX API ให้ตรงกับ Type ของ PNattapong
 */
function mapAureliaXProject(item: any): Project {
  return {
    id: item.slug || item.id,
    title: item.title || { en: "", th: "" },
    shortDescription: item.shortDescription || { en: "", th: "" },
    icon: item.icon || "mdi:folder-outline",
    color: item.color || "from-blue-500/20 to-indigo-500/20",
    iconColor: item.iconColor || "text-blue-400",
    coverImage: item.coverImage || undefined,
    techStack: Array.isArray(item.techStack) ? item.techStack : [],
    links: {
      preview: item.previewLink || undefined,
      github: item.githubLink || undefined,
      paper: item.paperLink || undefined,
    },
    featured: Boolean(item.featured),
    content: {
      overview: item.overview || { en: "", th: "" },
      challenges: item.challenges || { en: [], th: [] },
      solutions: item.solutions || { en: [], th: [] },
      outcomes: item.outcomes || { en: [], th: [] },
    },
  };
}

/**
 * Adapter: แปลงรูปแบบข้อมูลเกียรติบัตรจาก AureliaX API ให้ตรงกับ Type ของ PNattapong
 */
function mapAureliaXAchievement(item: any): Achievement {
  return {
    id: item.slug || item.id,
    title: item.title || { en: "", th: "" },
    category: (item.category as AchievementCategory) || "activity",
    date: item.date || "",
    issuer: item.issuer || { en: "", th: "" },
    description: item.description || { en: "", th: "" },
    image: item.image || "",
    imagePosition: item.imagePosition || "center",
    tags: Array.isArray(item.tags) ? item.tags : [],
    link: item.link || undefined,
    featured: Boolean(item.featured),
  };
}

/**
 * ดึงรายการโปรเจกต์ทั้งหมด (พร้อม Next.js Data Cache ISR 1 ชม. และ Fallback อัตโนมัติ)
 */
export async function getProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${AURELIAX_API_URL}/api/portfolio/projects`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.warn(`[AureliaX API] Failed to fetch projects (HTTP ${res.status}), using fallback data.`);
      return projectsData;
    }

    const json = await res.json();
    if (!json?.data || !Array.isArray(json.data) || json.data.length === 0) {
      return projectsData;
    }

    return json.data.map(mapAureliaXProject);
  } catch (error) {
    console.warn("[AureliaX API] Network error fetching projects, using fallback data:", error);
    return projectsData;
  }
}

/**
 * ดึงข้อมูลโปรเจกต์เดี่ยวตาม slug (พร้อม Fallback อัตโนมัติ)
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const res = await fetch(`${AURELIAX_API_URL}/api/portfolio/projects/${slug}`, {
      next: { revalidate: 3600 },
    });

    if (res.ok) {
      const json = await res.json();
      if (json?.data) {
        return mapAureliaXProject(json.data);
      }
    }
  } catch (error) {
    console.warn(`[AureliaX API] Error fetching project ${slug}, falling back to static data:`, error);
  }

  // Fallback ค้นหาจาก static data
  const fallback = projectsData.find((p) => p.id === slug);
  return fallback || null;
}

/**
 * ดึงรายการเกียรติบัตรทั้งหมด (พร้อม Next.js Data Cache ISR 1 ชม. และ Fallback อัตโนมัติ)
 */
export async function getAchievements(): Promise<Achievement[]> {
  try {
    const res = await fetch(`${AURELIAX_API_URL}/api/portfolio/achievements`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.warn(`[AureliaX API] Failed to fetch achievements (HTTP ${res.status}), using fallback data.`);
      return achievementsData;
    }

    const json = await res.json();
    if (!json?.data || !Array.isArray(json.data) || json.data.length === 0) {
      return achievementsData;
    }

    return json.data.map(mapAureliaXAchievement);
  } catch (error) {
    console.warn("[AureliaX API] Network error fetching achievements, using fallback data:", error);
    return achievementsData;
  }
}
