export type LocaleString = {
    en: string;
    th: string;
};

export type LeadershipRole = {
    title: LocaleString;
    description: LocaleString;
    period: string;
    icon: string;
    accentColor: string;
};

export const leadershipData: LeadershipRole[] = [
    {
        title: { en: "Class President", th: "ประธานรุ่น" },
        description: {
            en: "Elected as class representative responsible for coordinating between students and faculty, organizing class activities, and resolving student issues throughout the academic year.",
            th: "ได้รับเลือกเป็นตัวแทนรุ่น รับผิดชอบในการประสานงานระหว่างนักศึกษาและคณาจารย์ จัดกิจกรรมของรุ่น และแก้ไขปัญหาของนักศึกษาตลอดปีการศึกษา"
        },
        period: "2023 - Present",
        icon: "mdi:account-group-outline",
        accentColor: "indigo",
    },
    {
        title: { en: "Vice President, Computer Science Department", th: "รองประธานภาควิชาวิทยาการคอมพิวเตอร์" },
        description: {
            en: "Assisted in planning and managing department-level activities, acted as a bridge between students and department administration, and supported academic and extracurricular initiatives.",
            th: "ช่วยวางแผนและจัดการกิจกรรมระดับภาควิชา ทำหน้าที่เป็นสื่อกลางระหว่างนักศึกษาและผู้บริหารภาควิชา และสนับสนุนโครงการทั้งด้านวิชาการและกิจกรรมเสริมหลักสูตร"
        },
        period: "2024 - 2025",
        icon: "mdi:office-building-outline",
        accentColor: "violet",
    },
    {
        title: { en: "Vice President, CMRU Esport Club", th: "รองประธานชมรม CMRU Esport" },
        description: {
            en: "Co-managed club operations with 300+ members, organized esport tournaments and community events, handled team coordination and logistics for competitive activities.",
            th: "ร่วมบริหารจัดการชมรมที่มีสมาชิกกว่า 300 คน จัดการแข่งขันอีสปอร์ตและกิจกรรมชุมชน ดูแลการประสานงานทีมและระบบโลจิสติกส์สำหรับกิจกรรมการแข่งขัน"
        },
        period: "2024 - 2025",
        icon: "mdi:gamepad-variant-outline",
        accentColor: "emerald",
    },
];
