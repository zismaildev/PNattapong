import type { LocaleString, LocaleStringArray } from "@/types/locale";
export type { LocaleString, LocaleStringArray };

export type ProjectLink = {
    preview?: string;
    github?: string;
    paper?: string;
};

export type ProjectContent = {
    overview: LocaleString;
    challenges: LocaleStringArray;
    solutions: LocaleStringArray;
    outcomes: LocaleStringArray;
};

export type Project = {
    id: string;
    title: LocaleString;
    shortDescription: LocaleString;
    icon: string;
    color: string;
    iconColor: string;
    coverImage?: string; // High-res image for the detail page header
    techStack: string[];
    links: ProjectLink;
    featured: boolean;
    content: ProjectContent;
};

export const projectsData: Project[] = [
    {
        id: "ai-village-chatbot",
        title: { en: "AI Village Chatbot", th: "แชทบอทหมู่บ้าน AI" },
        shortDescription: { 
            en: "An automated conversational system for basic village data management using RAG, Hybrid LLM (Groq + OpenRouter), and Telegram Bot — published in JASMT (TCI ThaiJO).",
            th: "ระบบโต้ตอบอัตโนมัติเกี่ยวกับการบริหารจัดการข้อมูลพื้นฐานของหมู่บ้านด้วยกระบวนการ RAG และกลยุทธ์ Hybrid LLM (Groq + OpenRouter) ผ่าน Telegram Bot (ตีพิมพ์ในวารสารวิชาการ JASMT บนฐานข้อมูล TCI ThaiJO)"
        },
        icon: "mdi:robot-outline",
        color: "from-blue-500/20 to-indigo-500/20",
        iconColor: "text-blue-400",
        techStack: ["Next.js", "HeroUI", "Tailwind CSS", "PostgreSQL / pgvector", "Supabase", "Prisma ORM", "LangChain.js", "Groq", "OpenRouter", "Telegram Bot"],
        links: {
            preview: "https://aichatmoban.cmru.ac.th",
            github: "",
            paper: "https://ph05.tci-thaijo.org/index.php/JASMT/article/view/339"
        },
        featured: true,
        content: {
            overview: {
                en: "Developed and published as a research study titled 'The Development of an Automated Conversational System for Basic Village Data Management' in the Journal of Applied Science Innovation and Materials Technology (JASMT), Vol. 1, Issue 3 (2026), pp. 14–27. The system supports two user roles: Administrators who manage village basic data, news announcements, and welfare information via a web application, and General Users (citizens) who inquire about village information 24/7 via a Telegram Bot powered by NLP and Retrieval-Augmented Generation (RAG).",
                th: "ผลงานวิจัยตีพิมพ์ในชื่อ 'การพัฒนาระบบโต้ตอบอัตโนมัติเกี่ยวกับการบริหารจัดการข้อมูลพื้นฐานของหมู่บ้าน' ในวารสาร Journal of Applied Science Innovation and Materials Technology (JASMT) ปีที่ 1 ฉบับที่ 3 (2569) หน้า 14–27 ระบบแบ่งผู้ใช้งานเป็น 2 ประเภท ได้แก่ ผู้ดูแลระบบที่สามารถจัดการข้อมูลพื้นฐาน ประกาศข่าวสาร และสวัสดิการผ่านเว็บแอปพลิเคชัน และผู้ใช้งานทั่วไปที่สามารถสอบถามข้อมูลผ่าน Telegram Bot ได้ตลอด 24 ชั่วโมงด้วยเทคโนโลยีประมวลผลภาษาธรรมชาติ (NLP) ร่วมกับกระบวนการ RAG"
            },
            challenges: {
                en: [
                    "Local government agencies face delays in providing timely information to citizens due to traditional communication channels having limited hours and accessibility.",
                    "Ensuring accurate, context-grounded responses from unstructured village announcements and welfare documents without AI hallucination.",
                    "Maintaining high system availability and fast inference speeds even when primary AI model providers experience rate limits or downtime."
                ],
                th: [
                    "หน่วยงานท้องถิ่นประสบปัญหาความล่าช้าในการให้บริการข้อมูลแก่ประชาชน เนื่องจากช่องทางการสื่อสารแบบเดิมมีข้อจำกัดด้านเวลาและการเข้าถึง",
                    "การควบคุมให้ AI ตอบคำถามได้อย่างแม่นยำตามบริบทข้อมูลพื้นฐาน ข่าวสาร และสวัสดิการของหมู่บ้านโดยไม่สร้างข้อมูลเท็จ (Hallucination)",
                    "การรักษาความเสถียรและความเร็วในการตอบกลับของผู้ใช้งาน แม้ในกรณีที่ผู้ให้บริการโมเดลภาษาหลักเกิดข้อจำกัดด้านการใช้งาน"
                ]
            },
            solutions: {
                en: [
                    "Built a Full-stack management and RAG system using Next.js, HeroUI, Tailwind CSS, and PostgreSQL with pgvector (Supabase) managed via Prisma ORM.",
                    "Engineered a Hybrid LLM orchestration strategy with LangChain.js, utilizing Groq as the ultra-fast primary engine and OpenRouter as an automated fallback system.",
                    "Integrated a seamless Telegram Bot interface with NLP and vector similarity search so villagers can easily access public services and announcements."
                ],
                th: [
                    "พัฒนาระบบในรูปแบบ Full-stack ด้วย Next.js, HeroUI, Tailwind CSS และฐานข้อมูลเวกเตอร์ PostgreSQL/pgvector (Supabase) ผ่าน Prisma ORM",
                    "ออกแบบกลยุทธ์ Hybrid LLM ควบคุมด้วย LangChain.js โดยใช้โมเดลจาก Groq เป็นแกนหลักเพื่อความรวดเร็วสูง และใช้ OpenRouter เป็นระบบสำรองอัตโนมัติ (Fallback)",
                    "เชื่อมต่อระบบเข้ากับ Telegram Bot ร่วมกับกระบวนการค้นคืนข้อมูลด้วยเวกเตอร์ (RAG) เพื่อให้ประชาชนเข้าถึงข้อมูลได้ง่ายและทันที"
                ]
            },
            outcomes: {
                en: [
                    "Published in the Journal of Applied Science Innovation and Materials Technology (ISSN: 3088-3229), Vol. 1, No. 3 (May–June 2026), pp. 14–27 on TCI ThaiJO.",
                    "System efficiency evaluated by 5 experts achieved the 'Highest' level (Mean = 4.79, S.D. = 0.41).",
                    "User satisfaction evaluated by 32 citizens and staff members achieved a 'High' level (Mean = 4.42, S.D. = 0.87) and won the Excellent Oral Presentation Award at the 4th National Conference on Science and Technology."
                ],
                th: [
                    "ได้รับการตีพิมพ์เผยแพร่ในวารสารวิชาการ Journal of Applied Science Innovation and Materials Technology (ISSN: 3088-3229) ปีที่ 1 ฉบับที่ 3 หน้า 14–27 บนฐานข้อมูล TCI ThaiJO",
                    "ผลการประเมินประสิทธิภาพของระบบโดยผู้เชี่ยวชาญ 5 ท่าน อยู่ในระดับ 'มากที่สุด' (ค่าเฉลี่ย = 4.79, S.D. = 0.41)",
                    "ผลการประเมินความพึงพอใจของผู้ใช้งาน (ประชาชนและเจ้าหน้าที่ 32 คน) อยู่ในระดับ 'มาก' (ค่าเฉลี่ย = 4.42, S.D. = 0.87) และได้รับรางวัลนำเสนอยอดเยี่ยม (Excellent Oral Presentation Award) ในงานประชุมวิชาการระดับชาติ ครั้งที่ 4"
                ]
            }
        }
    },
    {
        id: "thaitan-ticket-system",
        title: { en: "Thaitan Ticket System", th: "ระบบจองตั๋ว Thaitan" },
        shortDescription: {
            en: "A modern concert ticketing system with comprehensive E-Ticket features, Dynamic Ticket Editor (Drag & Drop), and automated soft hold.",
            th: "ระบบจองบัตรคอนเสิร์ตยุคใหม่ พร้อม E-Ticket ครบวงจร, Dynamic Ticket Editor (Drag & Drop), และระบบล็อคบัตรอัตโนมัติ (Soft Hold)."
        },
        icon: "mdi:ticket-confirmation-outline",
        color: "from-amber-500/20 to-orange-500/20",
        iconColor: "text-amber-400",
        techStack: ["Next.js 16", "HeroUI v3", "Prisma", "Supabase"],
        links: {
            preview: "https://www.thaitanticket.com/",
            github: ""
        },
        featured: true,
        content: {
            overview: {
                en: "A modern, comprehensive concert ticketing platform featuring a drag-and-drop E-Ticket editor, automated soft-hold booking mechanisms, and real-time QR code generation for staff scanning.",
                th: "แพลตฟอร์มจองตั๋วคอนเสิร์ตยุคใหม่ที่มีฟีเจอร์ตัวแก้ไข E-Ticket แบบลากวาง (Drag-and-drop), ระบบการจองและล็อคที่นั่งชั่วคราว (Soft Hold), และการสร้างคิวอาร์โค้ดแบบเรียลไทม์สำหรับการสแกนของพนักงาน"
            },
            challenges: {
                en: [
                    "Preventing double-booking during high-traffic ticket releases.",
                    "Building a responsive drag-and-drop interface for organizers to design custom E-Tickets.",
                    "Ensuring fast and reliable QR code scanning for event staff under poor connectivity."
                ],
                th: [
                    "การป้องกันการจองซ้ำซ้อนในช่วงที่มีผู้ใช้งานจำนวนมากตอนเปิดขายบัตร",
                    "การสร้างอินเทอร์เฟซ Drag-and-drop ที่ตอบสนองรวดเร็วสำหรับผู้จัดงานเพื่อออกแบบ E-Ticket ด้วยตนเอง",
                    "การทำให้การสแกนคิวอาร์โค้ดของพนักงานหน้างานเป็นไปอย่างรวดเร็วและเชื่อถือได้ แม้การเชื่อมต่ออินเทอร์เน็ตจะไม่เสถียร"
                ]
            },
            solutions: {
                en: [
                    "Implemented a Redis-based (or transactional) Soft Hold system that reserves a ticket for 15 minutes during the checkout process.",
                    "Created a Dynamic Ticket Editor using advanced React state management and HTML Canvas for visual designing.",
                    "Optimized the scanning interface and database queries with Prisma for sub-second ticket verification."
                ],
                th: [
                    "สร้างระบบ Soft Hold ด้วย Redis (หรือ Transaction) เพื่อจองและล็อคที่นั่งไว้ 15 นาทีระหว่างขั้นตอนการชำระเงิน",
                    "สร้าง Dynamic Ticket Editor โดยใช้การจัดการ State ของ React ขั้นสูงและ HTML Canvas ในส่วนการออกแบบ",
                    "ปรับปรุงระบบสแกนและคำสั่งฐานข้อมูลด้วย Prisma ทำให้สามารถตรวจสอบและยืนยันตั๋วได้ในเวลาต่ำกว่า 1 วินาที"
                ]
            },
            outcomes: {
                en: [
                    "A highly scalable system capable of handling concurrent bookings.",
                    "Provides a seamless UI/UX for both event organizers and concert attendees.",
                    "Full multi-language support (i18n) for international users."
                ],
                th: [
                    "ได้ระบบที่มีความสามารถในการขยายตัวสูง (Scalable) รองรับการจองบัตรพร้อมกันจำนวนมาก",
                    "มอบประสบการณ์ผู้ใช้ (UI/UX) ที่ลื่นไหลทั้งฝั่งผู้จัดงานและผู้ซื้อบัตร",
                    "รองรับหลายภาษาแบบเต็มรูปแบบ (i18n) สำหรับผู้ใช้งานต่างชาติ"
                ]
            }
        }
    },
    {
        id: "aureliax",
        title: { en: "AureliaX", th: "AureliaX" },
        shortDescription: {
            en: "An All-in-One management platform integrating Kanban, Financial Tracking, and Audit Logs with premium Landing Pages.",
            th: "แพลตฟอร์มบริหารจัดการแบบ All-in-One รวมระบบ Kanban, Financial Tracking, และ Audit Logs พร้อม Landing Pages ระดับพรีเมียม."
        },
        icon: "mdi:view-dashboard-outline",
        color: "from-violet-500/20 to-fuchsia-500/20",
        iconColor: "text-violet-400",
        techStack: ["Next.js 15.3", "Supabase", "Tailwind 4", "Framer Motion"],
        links: {
            preview: "https://aureliax.vercel.app/",
            github: ""
        },
        featured: false,
        content: {
            overview: {
                en: "An all-in-one management platform that combines Kanban boards for project tracking, financial ledgers for budget management, and comprehensive audit logs into a single intuitive interface.",
                th: "แพลตฟอร์มการจัดการแบบเบ็ดเสร็จ (All-in-one) ที่ผสานเอา Kanban Boards สำหรับติดตามโปรเจกต์, บัญชีรายรับรายจ่ายสำหรับงบประมาณ, และ Audit Logs มารวมไว้ในอินเทอร์เฟซเดียวที่ใช้งานง่าย"
            },
            challenges: {
                en: [
                    "Designing a seamless user experience that unifies multiple complex modules (finance, tasks, audits).",
                    "Implementing real-time data synchronization across different clients.",
                    "Creating high-performance animations and transitions without sacrificing load speed."
                ],
                th: [
                    "การออกแบบประสบการณ์ผู้ใช้ให้เชื่อมโยงโมดูลที่ซับซ้อน (การเงิน, งาน, การตรวจสอบ) เข้าด้วยกันอย่างราบรื่น",
                    "การพัฒนาระบบซิงค์ข้อมูลแบบ Real-time ให้ทำงานตรงกันบนอุปกรณ์ต่างๆ",
                    "การสร้างแอนิเมชันและการเปลี่ยนหน้าที่มีประสิทธิภาพสูง โดยไม่ทำให้เว็บไซต์โหลดช้าลง"
                ]
            },
            solutions: {
                en: [
                    "Utilized Next.js 15 Server Components and Supabase real-time subscriptions for instant data updates.",
                    "Adopted a modular architecture with HeroUI components for consistent styling across modules.",
                    "Leveraged Framer Motion for hardware-accelerated micro-interactions and smooth page transitions."
                ],
                th: [
                    "ใช้งาน Next.js 15 Server Components และ Supabase real-time subscriptions สำหรับการอัปเดตข้อมูลแบบทันที",
                    "ใช้สถาปัตยกรรมแบบ Modular ร่วมกับ HeroUI เพื่อรักษาความสม่ำเสมอของสไตล์การออกแบบทั่วทั้งแอป",
                    "ใช้ Framer Motion ในการทำ Micro-interactions ที่ประมวลผลด้วยฮาร์ดแวร์เพื่อการแสดงผลแอนิเมชันที่ลื่นไหล"
                ]
            },
            outcomes: {
                en: [
                    "A visually stunning and highly functional internal tool.",
                    "Streamlined team workflows by eliminating the need to switch between Jira and Excel.",
                    "Achieved high Lighthouse performance scores despite heavy interactive elements."
                ],
                th: [
                    "ได้เครื่องมือใช้ภายในที่สวยงามระดับพรีเมียมและเปี่ยมด้วยฟังก์ชัน",
                    "ปรับปรุงและลดขั้นตอนการทำงานของทีม ทำให้ไม่ต้องสลับโปรแกรมไปมาระหว่าง Jira และ Excel",
                    "ได้คะแนนประสิทธิภาพ Lighthouse ที่สูงลิ่ว แม้จะมีระบบอินเทอร์แอคทีฟจำนวนมาก"
                ]
            }
        }
    },
    {
        id: "sp-auto-part",
        title: { en: "S.P. AUTO PART", th: "ส.ป. อะไหล่ยนต์" },
        shortDescription: {
            en: "A detailed auto parts inventory system with dynamic specifications, deep filtering, and comprehensive activity logs.",
            th: "ระบบจัดการอะไหล่รถยนต์แบบละเอียด กรองตามยี่ห้อ/รุ่น, Specifications แบบ Dynamic, และระบบ Activity Logs ติดตามการทำงานของแอดมิน."
        },
        icon: "mdi:car-cog",
        color: "from-orange-500/20 to-red-500/20",
        iconColor: "text-orange-400",
        techStack: ["Next.js 15", "Supabase", "HeroUI", "TypeScript"],
        links: {
            preview: "https://spautopart.vercel.app/",
            github: ""
        },
        featured: false,
        content: {
            overview: {
                en: "A comprehensive inventory management system specifically built for an auto parts dealership. It features deep filtering by make, model, and year, along with dynamic specifications and robust admin activity tracking.",
                th: "ระบบการจัดการคลังสินค้าแบบครบวงจรที่สร้างขึ้นเฉพาะสำหรับตัวแทนจำหน่ายอะไหล่รถยนต์ มาพร้อมฟีเจอร์การค้นหาเชิงลึกตามยี่ห้อ รุ่น และปี รวมถึงสเปคที่ยืดหยุ่นและการติดตามกิจกรรมของผู้ดูแลระบบอย่างละเอียด"
            },
            challenges: {
                en: [
                    "Structuring the database to handle the complex many-to-many relationships between car models, years, and specific auto parts.",
                    "Building a fast, faceted search interface for thousands of SKUs.",
                    "Ensuring strict role-based access control (RBAC) and audit trails for all inventory changes."
                ],
                th: [
                    "การจัดโครงสร้างฐานข้อมูลเพื่อรองรับความสัมพันธ์แบบ Many-to-many ที่ซับซ้อนระหว่างรุ่นรถ ปี และอะไหล่เฉพาะชิ้น",
                    "การสร้างระบบค้นหาแบบ Faceted Search ที่ประมวลผลเร็วสำหรับสินค้าหลายพันรายการ (SKUs)",
                    "การสร้างระบบยืนยันตัวตนและการเข้าถึงแบบ Role-based (RBAC) พร้อมบันทึกการเปลี่ยนแปลงคลังสินค้า (Audit Trails)"
                ]
            },
            solutions: {
                en: [
                    "Designed a normalized relational database schema in Supabase PostgreSQL.",
                    "Implemented server-side filtering and pagination in Next.js to keep the client-side lightweight and snappy.",
                    "Created a global Activity Log system that automatically records who changed what and when."
                ],
                th: [
                    "ออกแบบสกีมาฐานข้อมูลเชิงสัมพันธ์แบบ Normalized บน Supabase PostgreSQL",
                    "พัฒนาระบบกรองข้อมูลและการแบ่งหน้าแบบ Server-side ด้วย Next.js เพื่อให้ฝั่ง Client ทำงานเบาและรวดเร็ว",
                    "สร้างระบบ Activity Log ระดับโกลบอลที่บันทึกข้อมูลอัตโนมัติว่าใครเปลี่ยนแปลงอะไร และเวลาไหน"
                ]
            },
            outcomes: {
                en: [
                    "Drastically reduced time spent searching for compatible parts.",
                    "Improved inventory accuracy and accountability among staff members.",
                    "Modernized the client's business operations from paper-based tracking to a cloud-native solution."
                ],
                th: [
                    "ลดเวลาที่ใช้ในการค้นหาอะไหล่ที่ตรงรุ่นรถได้อย่างมหาศาล",
                    "เพิ่มความแม่นยำในการจัดการคลังสินค้าและความรับผิดชอบในหมู่พนักงาน",
                    "ยกระดับการดำเนินธุรกิจของลูกค้าจากการจดด้วยกระดาษ สู่ระบบปฏิบัติการบนคลาวด์แบบเต็มรูปแบบ"
                ]
            }
        }
    },
    {
        id: "tcg-portfolio",
        title: { en: "Thai Concert in Germany", th: "คอนเสิร์ตไทยในเยอรมนี (TCG)" },
        shortDescription: {
            en: "A cinematic portfolio for a Thai concert organizer in Europe, featuring event timelines, multi-language support (TH/EN/DE), and galleries.",
            th: "Cinematic Portfolio สำหรับผู้จัดคอนเสิร์ตไทยในยุโรป (TCG) พร้อมระบบ Timeline งานอีเวนต์, Gallery กรองตามปี, และรองรับ 3 ภาษา (TH/EN/DE)."
        },
        icon: "mdi:music-circle-outline",
        color: "from-emerald-500/20 to-teal-500/20",
        iconColor: "text-emerald-400",
        techStack: ["Next.js", "Glassmorphism", "i18n", "GSAP/Framer"],
        links: {
            preview: "https://tcg-portfolio-lovat.vercel.app/",
        },
        featured: false,
        content: {
            overview: {
                en: "A highly visual, cinematic portfolio website built for a premier Thai concert organizer operating in Europe. It showcases event timelines, photo galleries, and localized content.",
                th: "เว็บไซต์พอร์ตโฟลิโอสไตล์ Cinematic เน้นภาพที่ตระการตา สำหรับผู้จัดคอนเสิร์ตชาวไทยชั้นนำที่ดำเนินงานในยุโรป ใช้แสดงไทม์ไลน์งานอีเวนต์ แกลเลอรีภาพถ่าย และรองรับเนื้อหาหลายภาษา"
            },
            challenges: {
                en: [
                    "Creating a visually striking 'cinematic' aesthetic that performs well on mobile devices.",
                    "Managing multi-language content (Thai, English, German) efficiently.",
                    "Building an interactive, animated timeline for past and upcoming events."
                ],
                th: [
                    "การสร้างดีไซน์แนว Cinematic ที่เน้นความอลังการทางภาพให้สามารถแสดงผลได้ราบรื่นบนมือถือ",
                    "การบริหารจัดการเนื้อหาเว็บไซต์ที่รองรับหลายภาษาอย่างมีประสิทธิภาพ (ไทย, อังกฤษ, เยอรมัน)",
                    "การสร้างไทม์ไลน์เหตุการณ์ที่เป็นภาพเคลื่อนไหวโต้ตอบได้สำหรับงานที่ผ่านไปแล้วและงานในอนาคต"
                ]
            },
            solutions: {
                en: [
                    "Used Glassmorphism CSS techniques and optimized background videos/images for a premium feel.",
                    "Integrated next-intl for seamless client and server-side localization.",
                    "Utilized GSAP and Framer Motion for scroll-triggered animations and the dynamic event timeline."
                ],
                th: [
                    "ใช้เทคนิค Glassmorphism CSS และปรับแต่งวิดีโอ/ภาพพื้นหลังเพื่อให้ดูพรีเมียม แต่โหลดเร็ว",
                    "เชื่อมต่อกับไลบรารี next-intl เพื่อการแปลภาษาทั้งบน Server-side และ Client-side อย่างราบรื่น",
                    "ใช้งาน GSAP และ Framer Motion ในการจัดการแอนิเมชันที่ตอบสนองเมื่อเลื่อนหน้าจอ (Scroll-triggered)"
                ]
            },
            outcomes: {
                en: [
                    "Successfully elevated the brand image of the organizer in the European market.",
                    "Increased user engagement time on the website due to interactive elements.",
                    "Provided a scalable foundation to easily add new concert events in the future."
                ],
                th: [
                    "ประสบความสำเร็จในการยกระดับภาพลักษณ์แบรนด์ของผู้จัดงานในตลาดยุโรป",
                    "เพิ่มเวลาที่ผู้ใช้งานใช้บนเว็บไซต์ด้วยองค์ประกอบลูกเล่นและการออกแบบที่น่าสนใจ",
                    "มีระบบรากฐานที่รองรับการเพิ่มโปรเจกต์คอนเสิร์ตใหม่ๆ ในอนาคตได้อย่างง่ายดาย"
                ]
            }
        }
    }
];
