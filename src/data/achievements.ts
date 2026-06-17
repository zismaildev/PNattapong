export type LocaleString = {
    en: string;
    th: string;
};

export type AchievementCategory = "competition" | "research" | "training" | "certification" | "work" | "award" | "activity";

export type Achievement = {
    id: string;
    title: string | LocaleString;
    category: AchievementCategory;
    date: string;
    issuer: string | LocaleString;
    description: string | LocaleString;
    image: string;
    tags: string[];
    link?: string;
};

export const achievementsData: Achievement[] = [
    {
        id: "cmru-outstanding-student",
        title: "นักศึกษากิจกรรมเด่น ประจำปี 2567",
        category: "award",
        date: "2024",
        issuer: "Chiang Mai Rajabhat University",
        description: "Awarded Outstanding Student Activity Award for the academic year 2024.",
        image: "/certificates/cmru-outstanding-student-activity.jpg",
        tags: ["Award", "Activity", "CMRU"]
    },
    {
        id: "cmru-student-union-committee",
        title: "กรรมการสโมสรนักศึกษา คณะวิทยาศาสตร์และเทคโนโลยี",
        category: "activity",
        date: "2024",
        issuer: "Chiang Mai Rajabhat University",
        description: "Served as a Student Union Committee Member for the Faculty of Science and Technology during the 2023-2024 academic year.",
        image: "/certificates/cmru-student-union-committee.png",
        tags: ["Student Union", "Committee", "CMRU"]
    },
    {
        id: "cmru-web-app-ai-vibe-coding",
        title: "Web Application with AI Vibe Coding",
        category: "training",
        date: "2026",
        issuer: "Chiang Mai Rajabhat University",
        description: "Completed training on Web Application development using AI Vibe Coding.",
        image: "/certificates/cmru-web-app-ai-vibe-coding.png",
        tags: ["Web Dev", "AI", "Vibe Coding"]
    },
    {
        id: "cmru-mobile-app-flutter-firebase",
        title: "Mobile Application with Flutter and Firebase",
        category: "training",
        date: "2026",
        issuer: "Chiang Mai Rajabhat University",
        description: "Completed training on Mobile Application development using Flutter and Firebase.",
        image: "/certificates/cmru-mobile-app-flutter-firebase.png",
        tags: ["Mobile App", "Flutter", "Firebase"]
    },
    {
        id: "cmru-iso27001-pdpa",
        title: "ISO/IEC 27001 & Thailand PDPA",
        category: "certification",
        date: "2025",
        issuer: "Digital CMRU",
        description: "Participated in the training on AI in network systems, Thailand PDPA, and ISO/IEC 27001 standard.",
        image: "/certificates/cmru-iso27001-pdpa.png",
        tags: ["ISO27001", "PDPA", "Cyber Security"]
    },
    {
        id: "cmru-ai-for-developer",
        title: "AI for Application Development",
        category: "training",
        date: "2024",
        issuer: "Chiang Mai Rajabhat University",
        description: "Completed the 21st-century academic skills enhancement program focusing on AI application development.",
        image: "/certificates/cmru-ai-for-developer.png",
        tags: ["AI", "App Development"]
    },
    {
        id: "thammasat-media-literacy",
        title: "Media Literacy Curriculum (Higher Education)",
        category: "training",
        date: "2024",
        issuer: "Thammasat University & Thai Media Fund",
        description: "Participated in the media literacy curriculum program for higher education.",
        image: "/certificates/thammasat-media-literacy-2024.png",
        tags: ["Media Literacy", "Higher Education"]
    },
    {
        id: "e-sports-federation",
        title: "Thailand e-Sports Digital Competency",
        category: "certification",
        date: "2024",
        issuer: "Thailand e-Sports Federation",
        description: "Certified in the fundamentals of e-Sports digital competency for professional games industries.",
        image: "/certificates/e-sports-federation-2024.jpg",
        tags: ["e-Sports", "Digital Competency"]
    },
    {
        id: "cmru-figma",
        title: "UX/UI Design for Mobile Application with Figma",
        category: "training",
        date: "2024",
        issuer: "Chiang Mai Rajabhat University",
        description: "Participated in the UX/UI design workshop focusing on mobile applications using Figma.",
        image: "/certificates/cmru-figma-ui-ux.png",
        tags: ["UX/UI", "Figma", "Design"]
    },
    {
        id: "aunjai-cyber",
        title: "Aunjai Cyber (อุ่นใจไซเบอร์)",
        category: "certification",
        date: "2023",
        issuer: "AIS & Ministry of Public Health",
        description: "Advanced level cyber security and digital citizenship certification.",
        image: "/certificates/aunjai-cyber-advanced.jpg",
        tags: ["Cyber Security", "Digital Citizenship"]
    },
    {
        id: "arduino-innovation",
        title: "1st Place: Automatic Watering System Project (Arduino)",
        category: "competition",
        date: "2022",
        issuer: "NFE San Sai",
        description: "First place in the automatic watering system innovation project using Arduino.",
        image: "/certificates/arduino-innovation-2022.jpg",
        tags: ["Arduino", "IoT", "Innovation"]
    },
    {
        id: "borntodev-devlab-3",
        title: "DevLab 3 Open Access Program",
        category: "training",
        date: "2022",
        issuer: "BorntoDev",
        description: "Participated in the DevLab 3 Open Access Program.",
        image: "/certificates/borntodev-devlab-3.png",
        tags: ["Web Dev", "Programming"]
    },
    {
        id: "rmutt-python",
        title: "Python for Data Science",
        category: "training",
        date: "2021",
        issuer: "RMUTT MOOC",
        description: "Completed Python programming for data science.",
        image: "/certificates/rmutt-mooc-python.png",
        tags: ["Python", "Data Science"]
    },
    {
        id: "cu-mooc-web-dev",
        title: "Basic Web Development with HTML & CSS",
        category: "training",
        date: "2021",
        issuer: "CU MOOC",
        description: "Completed basic web development course covering HTML and CSS.",
        image: "/certificates/cu-mooc-web-dev.png",
        tags: ["HTML", "CSS", "Web Dev"]
    },
    {
        id: "cmu-mooc",
        title: "The Art and Science of Computer Programming",
        category: "training",
        date: "2021",
        issuer: "CMU MOOC",
        description: "Completed online learning course on computer programming via CMU MOOC platform.",
        image: "/certificates/cmu-mooc-programming.png",
        tags: ["Programming", "Computer Science"]
    },
    {
        id: "python-starfish",
        title: "Python for Beginners",
        category: "training",
        date: "2021",
        issuer: "Starfish Labz",
        description: "Completed introductory Python programming course.",
        image: "/certificates/starfish-python.png",
        tags: ["Python", "Programming"]
    },
    {
        id: "scratch-starfish",
        title: "Scratch Programming",
        category: "training",
        date: "2021",
        issuer: "Starfish Labz",
        description: "Completed introductory Scratch programming course.",
        image: "/certificates/starfish-scratch.png",
        tags: ["Scratch", "Programming"]
    },
    {
        id: "borntodev-sql",
        title: "Essential SQL for Everyone",
        category: "training",
        date: "2021",
        issuer: "BorntoDev",
        description: "Completed essential SQL training, covering database design and queries.",
        image: "/certificates/borntodev-essential-sql.png",
        tags: ["SQL", "Database"]
    },
    {
        id: "borntodev-graphic-design",
        title: "Fundamentals of Graphic Design",
        category: "training",
        date: "2021",
        issuer: "BorntoDev",
        description: "Learned the fundamental concepts and tools for graphic design.",
        image: "/certificates/borntodev-graphic-design.png",
        tags: ["Graphic Design", "Design"]
    },
    {
        id: "borntodev-computer-science",
        title: "Introduction to Computer Science",
        category: "training",
        date: "2021",
        issuer: "BorntoDev",
        description: "Introduction to fundamental concepts in computer science.",
        image: "/certificates/borntodev-computer-science.png",
        tags: ["Computer Science", "Programming"]
    },
    {
        id: "kaojao",
        title: "Modern Chatbot with Kaojao",
        category: "training",
        date: "2021",
        issuer: "BorntoDev",
        description: "Learned how to build and integrate modern chatbots for businesses using Kaojao.",
        image: "/certificates/borntodev-kaojao.png",
        tags: ["Chatbot", "AI", "Business"]
    },
    {
        id: "schoology",
        title: "1st Dream to be Engineer Exhibition",
        category: "activity",
        date: "2021",
        issuer: "Schoology Thailand",
        description: "Successfully participated in the 1st Dream to be Engineer Exhibition 2021.",
        image: "/certificates/schoology-dream-to-be-engineer.png",
        tags: ["Engineering", "Exhibition"]
    },
    {
        id: "digital-detective",
        title: "Digital Detective",
        category: "certification",
        date: "2021",
        issuer: "Digital Vaccine",
        description: "Certified as a Digital Detective by completing digital safety training.",
        image: "/certificates/digital-detective.png",
        tags: ["Digital Safety", "Cyber Security"]
    },
    {
        id: "borntodev-js",
        title: "Introduction to JavaScript",
        category: "training",
        date: "2020",
        issuer: "BorntoDev",
        description: "Mastered JavaScript fundamentals and advanced concepts for modern web development.",
        image: "/certificates/borntodev-javascript.png",
        tags: ["JavaScript", "Web Dev"]
    },
    {
        id: "borntodev-command-prompt",
        title: "Command Prompt 101",
        category: "training",
        date: "2020",
        issuer: "BorntoDev",
        description: "Learned the basics of using the command prompt for system navigation and operations.",
        image: "/certificates/borntodev-command-prompt.png",
        tags: ["CLI", "Terminal"]
    },
    {
        id: "borntodev-web-dev-html5-css3",
        title: "Fundamental Web Dev with HTML5 & CSS3",
        category: "training",
        date: "2020",
        issuer: "BorntoDev",
        description: "Mastered the foundational elements of web development using HTML5 and CSS3.",
        image: "/certificates/borntodev-web-dev-html5-css3.png",
        tags: ["HTML5", "CSS3", "Web Dev"]
    }
];
