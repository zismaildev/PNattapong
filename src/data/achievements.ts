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
    featured?: boolean;
};

export const achievementsData: Achievement[] = [
    {
        id: "cmru-cs-outstanding-student-2569",
        title: {
            en: "Outstanding Student Activity Award (Computer Science) 2026",
            th: "นักศึกษากิจกรรมเด่น ภาควิชาคอมพิวเตอร์ ประจำปีการศึกษา 2569"
        },
        category: "award",
        date: "2026",
        issuer: {
            en: "Department of Computer Science, Chiang Mai Rajabhat University",
            th: "ภาควิชาคอมพิวเตอร์ คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยราชภัฏเชียงใหม่"
        },
        description: {
            en: "Awarded for outstanding achievements in student activities for the academic year 2026 by the Department of Computer Science.",
            th: "ได้รับการยกย่องเชิดชูเกียรติเป็นนักศึกษาผู้มีผลงานดีเด่นด้านกิจกรรม ประจำปีการศึกษา 2569 โดยภาควิชาคอมพิวเตอร์ มหาวิทยาลัยราชภัฏเชียงใหม่"
        },
        image: "/certificates/cmru-cs-outstanding-student-2569.png",
        tags: ["Award", "Activity", "CMRU", "Computer Science"],
        featured: true
    },
    {
        id: "cmru-climate-change-awareness",
        title: {
            en: "Climate Change Awareness Program",
            th: "หลักสูตรการสร้างความตระหนักเกี่ยวกับการเปลี่ยนแปลงสภาพภูมิอากาศ"
        },
        category: "training",
        date: "2026",
        issuer: {
            en: "Research and Development Institute, Chiang Mai Rajabhat University",
            th: "สถาบันวิจัยและพัฒนา มหาวิทยาลัยราชภัฏเชียงใหม่"
        },
        description: {
            en: "Participated in the Climate Change Awareness training workshop for Chiang Mai Rajabhat University students and local community members in Chiang Mai (Batch 1).",
            th: "เข้าร่วมการอบรมเชิงปฏิบัติการหลักสูตรการสร้างความตระหนักเกี่ยวกับการเปลี่ยนแปลงสภาพภูมิอากาศ สำหรับนักศึกษามหาวิทยาลัยราชภัฏเชียงใหม่และคนในชุมชนเขตพื้นที่จังหวัดเชียงใหม่ รุ่นที่ 1"
        },
        image: "/certificates/cmru-climate-change-awareness.png",
        tags: ["Climate Change", "CMRU", "Workshop"]
    },
    {
        id: "cmru-outstanding-student",
        title: {
            en: "Outstanding Student Activity Award 2024",
            th: "นักศึกษากิจกรรมเด่น ประจำปี 2567"
        },
        category: "award",
        date: "2024",
        issuer: {
            en: "Chiang Mai Rajabhat University",
            th: "มหาวิทยาลัยราชภัฏเชียงใหม่"
        },
        description: {
            en: "Awarded the Outstanding Student Activity Award for the academic year 2024 in recognition of contributions to student activities and community service.",
            th: "ได้รับรางวัลนักศึกษากิจกรรมเด่น ประจำปีการศึกษา 2567 เพื่อเชิดชูเกียรติในการทำกิจกรรมเพื่อสังคมและส่วนรวม"
        },
        image: "/certificates/cmru-outstanding-student-activity.jpg",
        tags: ["Award", "Activity", "CMRU"],
        featured: true
    },
    {
        id: "cmru-student-union-committee",
        title: {
            en: "Faculty of Science & Technology Student Union Committee",
            th: "กรรมการสโมสรนักศึกษา คณะวิทยาศาสตร์และเทคโนโลยี"
        },
        category: "activity",
        date: "2024",
        issuer: {
            en: "Chiang Mai Rajabhat University",
            th: "มหาวิทยาลัยราชภัฏเชียงใหม่"
        },
        description: {
            en: "Served as a Student Union Committee Member for the Faculty of Science and Technology during the 2023-2024 academic year.",
            th: "ปฏิบัติหน้าที่เป็นคณะกรรมการสโมสรนักศึกษา คณะวิทยาศาสตร์และเทคโนโลยี ประจำปีการศึกษา 2566 - 2567"
        },
        image: "/certificates/cmru-student-union-committee.png",
        tags: ["Student Union", "Committee", "CMRU"],
        featured: true
    },
    {
        id: "cmru-web-app-ai-vibe-coding",
        title: {
            en: "Web Application Development with AI Vibe Coding",
            th: "การพัฒนาเว็บแอปพลิเคชันด้วย AI Vibe Coding"
        },
        category: "training",
        date: "2026",
        issuer: {
            en: "Chiang Mai Rajabhat University",
            th: "มหาวิทยาลัยราชภัฏเชียงใหม่"
        },
        description: {
            en: "Completed training on rapid web application development using generative AI tools (AI Vibe Coding).",
            th: "สำเร็จหลักสูตรการอบรมพัฒนาเว็บแอปพลิเคชันอย่างรวดเร็วโดยใช้เครื่องมือปัญญาประดิษฐ์ (AI Vibe Coding)"
        },
        image: "/certificates/cmru-web-app-ai-vibe-coding.png",
        tags: ["Web Dev", "AI", "Vibe Coding"]
    },
    {
        id: "cmru-mobile-app-flutter-firebase",
        title: {
            en: "Mobile Application Development with Flutter & Firebase",
            th: "การพัฒนาแอปพลิเคชันมือถือด้วย Flutter และ Firebase"
        },
        category: "training",
        date: "2026",
        issuer: {
            en: "Chiang Mai Rajabhat University",
            th: "มหาวิทยาลัยราชภัฏเชียงใหม่"
        },
        description: {
            en: "Completed cross-platform mobile application development training using Flutter and Firebase cloud databases.",
            th: "สำเร็จการฝึกอบรมการพัฒนาแอปพลิเคชันมือถือแบบข้ามแพลตฟอร์มด้วย Flutter ร่วมกับระบบฐานข้อมูลคลาวด์ Firebase"
        },
        image: "/certificates/cmru-mobile-app-flutter-firebase.png",
        tags: ["Mobile App", "Flutter", "Firebase"]
    },
    {
        id: "cmru-iso27001-pdpa",
        title: {
            en: "ISO/IEC 27001 & Thailand PDPA",
            th: "มาตรฐาน ISO/IEC 27001 และกฎหมาย PDPA ประเทศไทย"
        },
        category: "certification",
        date: "2025",
        issuer: {
            en: "Digital CMRU",
            th: "สำนักดิจิทัล มหาวิทยาลัยราชภัฏเชียงใหม่"
        },
        description: {
            en: "Completed professional training on AI in network systems, Thailand's Personal Data Protection Act (PDPA), and ISO/IEC 27001 information security standards.",
            th: "ผ่านการฝึกอบรมเกี่ยวกับปัญญาประดิษฐ์ในระบบเครือข่าย พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล (PDPA) และมาตรฐานความมั่นคงปลอดภัยสารสนเทศ ISO/IEC 27001"
        },
        image: "/certificates/cmru-iso27001-pdpa.png",
        tags: ["ISO27001", "PDPA", "Cyber Security"]
    },
    {
        id: "cmru-ai-for-developer",
        title: {
            en: "AI for Application Development",
            th: "การพัฒนาแอปพลิเคชันด้วยปัญญาประดิษฐ์ (AI for Application Development)"
        },
        category: "training",
        date: "2024",
        issuer: {
            en: "Chiang Mai Rajabhat University",
            th: "มหาวิทยาลัยราชภัฏเชียงใหม่"
        },
        description: {
            en: "Completed the 21st-century academic skills enhancement program focusing on AI application development.",
            th: "เข้าร่วมโครงการยกระดับทักษะวิชาการแห่งศตวรรษที่ 21 เน้นการพัฒนาแอปพลิเคชันโดยใช้ประโยชน์จาก AI"
        },
        image: "/certificates/cmru-ai-for-developer.png",
        tags: ["AI", "App Development"]
    },
    {
        id: "thammasat-media-literacy",
        title: {
            en: "Media Literacy Curriculum (Higher Education)",
            th: "หลักสูตรการรู้เท่าทันสื่อ (ระดับอุดมศึกษา)"
        },
        category: "training",
        date: "2024",
        issuer: {
            en: "Thammasat University & Thai Media Fund",
            th: "มหาวิทยาลัยธรรมศาสตร์ และ กองทุนพัฒนาสื่อปลอดภัยและสร้างสรรค์"
        },
        description: {
            en: "Completed media literacy and creative communication training designed for higher education students.",
            th: "ผ่านการอบรมหลักสูตรเสริมสร้างทักษะการรู้เท่าทันสื่อและการสื่อสารอย่างสร้างสรรค์สำหรับนักศึกษาระดับอุดมศึกษา"
        },
        image: "/certificates/thammasat-media-literacy-2024.png",
        tags: ["Media Literacy", "Higher Education"]
    },
    {
        id: "e-sports-federation",
        title: {
            en: "Thailand e-Sports Digital Competency",
            th: "การประเมินสมรรถนะดิจิทัลกีฬาอีสปอร์ตแห่งประเทศไทย"
        },
        category: "certification",
        date: "2024",
        issuer: {
            en: "Thailand e-Sports Federation",
            th: "สมาคมกีฬาอีสปอร์ตแห่งประเทศไทย"
        },
        description: {
            en: "Certified in the fundamentals of e-Sports digital competency for professional games and e-sports industries.",
            th: "ผ่านการทดสอบและได้รับการรับรองสมรรถนะดิจิทัลขั้นพื้นฐานสำหรับอุตสาหกรรมเกมและกีฬาอีสปอร์ตระดับมืออาชีพ"
        },
        image: "/certificates/e-sports-federation-2024.jpg",
        tags: ["e-Sports", "Digital Competency"]
    },
    {
        id: "cmru-figma",
        title: {
            en: "UX/UI Design for Mobile Application with Figma",
            th: "การออกแบบ UX/UI สำหรับแอปพลิเคชันมือถือด้วย Figma"
        },
        category: "training",
        date: "2024",
        issuer: {
            en: "Chiang Mai Rajabhat University",
            th: "มหาวิทยาลัยราชภัฏเชียงใหม่"
        },
        description: {
            en: "Participated in the UX/UI design workshop focusing on mobile applications using Figma.",
            th: "เข้าร่วมโครงการอบรมเชิงปฏิบัติการด้านการออกแบบประสบการณ์ผู้ใช้ (UX/UI) สำหรับแอปพลิเคชันมือถือด้วยเครื่องมือ Figma"
        },
        image: "/certificates/cmru-figma-ui-ux.png",
        tags: ["UX/UI", "Figma", "Design"]
    },
    {
        id: "aunjai-cyber",
        title: {
            en: "Aunjai Cyber (Advanced Level)",
            th: "อุ่นใจไซเบอร์ (ระดับก้าวหน้า)"
        },
        category: "certification",
        date: "2023",
        issuer: {
            en: "AIS & Ministry of Public Health",
            th: "เอไอเอส (AIS) และ กระทรวงสาธารณสุข"
        },
        description: {
            en: "Advanced level cybersecurity and digital citizenship certification.",
            th: "ได้รับใบรับรองผ่านการเรียนรู้หลักสูตรความปลอดภัยทางไซเบอร์และความเป็นพลเมืองดิจิทัลระดับก้าวหน้า"
        },
        image: "/certificates/aunjai-cyber-advanced.jpg",
        tags: ["Cyber Security", "Digital Citizenship"]
    },
    {
        id: "arduino-innovation",
        title: {
            en: "1st Place: Automatic Watering System Project (Arduino)",
            th: "รางวัลชนะเลิศ: โครงการนวัตกรรมระบบรดน้ำอัตโนมัติ (Arduino)"
        },
        category: "competition",
        date: "2022",
        issuer: {
            en: "NFE San Sai",
            th: "กศน.อำเภอสันทราย"
        },
        description: {
            en: "Won first place in the automatic watering system innovation project using Arduino control boards.",
            th: "ได้รับรางวัลชนะเลิศอันดับ 1 ในการประกวดโครงงานนวัตกรรมระบบรดน้ำพืชอัตโนมัติผ่านบอร์ดควบคุม Arduino"
        },
        image: "/certificates/arduino-innovation-2022.jpg",
        tags: ["Arduino", "IoT", "Innovation"],
        featured: true
    },
    {
        id: "borntodev-devlab-3",
        title: {
            en: "DevLab 3 Open Access Program",
            th: "โครงการ DevLab 3 Open Access"
        },
        category: "training",
        date: "2022",
        issuer: {
            en: "BorntoDev",
            th: "บอร์นทูเดฟ (BorntoDev)"
        },
        description: {
            en: "Participated in the DevLab 3 Open Access program focusing on programming skills and computational thinking.",
            th: "ผ่านการทดสอบทักษะการแก้ปัญหาทางคอมพิวเตอร์และการพัฒนาซอฟต์แวร์ในโครงการ DevLab 3"
        },
        image: "/certificates/borntodev-devlab-3.png",
        tags: ["Web Dev", "Programming"]
    },
    {
        id: "rmutt-python",
        title: {
            en: "Python for Data Science",
            th: "ภาษา Python สำหรับวิทยาการข้อมูล"
        },
        category: "training",
        date: "2021",
        issuer: {
            en: "RMUTT MOOC",
            th: "RMUTT MOOC (มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี)"
        },
        description: {
            en: "Completed online course in Python programming for data science and statistical analysis.",
            th: "สำเร็จหลักสูตรออนไลน์การเขียนโปรแกรมด้วยภาษา Python สำหรับงานวิทยาการข้อมูลและการวิเคราะห์สถิติ"
        },
        image: "/certificates/rmutt-mooc-python.png",
        tags: ["Python", "Data Science"]
    },
    {
        id: "cu-mooc-web-dev",
        title: {
            en: "Basic Web Development with HTML & CSS",
            th: "การพัฒนาเว็บไซต์ขั้นพื้นฐานด้วย HTML และ CSS"
        },
        category: "training",
        date: "2021",
        issuer: {
            en: "CU MOOC",
            th: "CU MOOC (จุฬาลงกรณ์มหาวิทยาลัย)"
        },
        description: {
            en: "Completed basic web development course covering HTML structure and CSS styling.",
            th: "สำเร็จหลักสูตรออนไลน์การพัฒนาเว็บไซต์พื้นฐานและการเขียนชุดคำสั่งแสดงผลด้วย HTML และ CSS"
        },
        image: "/certificates/cu-mooc-web-dev.png",
        tags: ["HTML", "CSS", "Web Dev"]
    },
    {
        id: "cmu-mooc",
        title: {
            en: "The Art and Science of Computer Programming",
            th: "ศาสตร์และศิลป์แห่งการเขียนโปรแกรมคอมพิวเตอร์"
        },
        category: "training",
        date: "2021",
        issuer: {
            en: "CMU MOOC",
            th: "CMU MOOC (มหาวิทยาลัยเชียงใหม่)"
        },
        description: {
            en: "Completed online learning course on basic computer programming theories and computational thinking via CMU MOOC platform.",
            th: "สำเร็จหลักสูตรการศึกษาออนไลน์เกี่ยวกับทฤษฎี วิธีคิด และโครงสร้างการเขียนโปรแกรมคอมพิวเตอร์พื้นฐาน"
        },
        image: "/certificates/cmu-mooc-programming.png",
        tags: ["Programming", "Computer Science"]
    },
    {
        id: "python-starfish",
        title: {
            en: "Python for Beginners",
            th: "ภาษา Python สำหรับผู้เริ่มต้น"
        },
        category: "training",
        date: "2021",
        issuer: {
            en: "Starfish Labz",
            th: "Starfish Labz (สตาร์ฟิช แล็ปส์)"
        },
        description: {
            en: "Completed introductory Python programming course and control logic fundamentals.",
            th: "สำเร็จหลักสูตรเรียนรู้การเขียนโค้ดเบื้องต้นและตรรกะการควบคุมของภาษา Python"
        },
        image: "/certificates/starfish-python.png",
        tags: ["Python", "Programming"]
    },
    {
        id: "scratch-starfish",
        title: {
            en: "Scratch Programming",
            th: "การเขียนโปรแกรมภาษา Scratch"
        },
        category: "training",
        date: "2021",
        issuer: {
            en: "Starfish Labz",
            th: "Starfish Labz (สตาร์ฟิช แล็ปส์)"
        },
        description: {
            en: "Completed introductory Scratch programming course focusing on visual coding and computational thinking.",
            th: "สำเร็จหลักสูตรการคิดเชิงคำนวณและการเขียนโปรแกรมเชิงภาพสร้างสรรค์ด้วยภาษา Scratch"
        },
        image: "/certificates/scratch-starfish.png",
        tags: ["Scratch", "Programming"]
    },
    {
        id: "borntodev-sql",
        title: {
            en: "Essential SQL for Everyone",
            th: "SQL พื้นฐานสำหรับทุกคน (Essential SQL for Everyone)"
        },
        category: "training",
        date: "2021",
        issuer: {
            en: "BorntoDev",
            th: "บอร์นทูเดฟ (BorntoDev)"
        },
        description: {
            en: "Completed essential SQL training covering relational database design and basic queries.",
            th: "สำเร็จการอบรมการออกแบบฐานข้อมูลเชิงสัมพันธ์และโครงสร้างคำสั่งคิวรี SQL พื้นฐาน"
        },
        image: "/certificates/borntodev-essential-sql.png",
        tags: ["SQL", "Database"]
    },
    {
        id: "borntodev-graphic-design",
        title: {
            en: "Fundamentals of Graphic Design",
            th: "ความรู้พื้นฐานด้านการออกแบบกราฟิก"
        },
        category: "training",
        date: "2021",
        issuer: {
            en: "BorntoDev",
            th: "บอร์นทูเดฟ (BorntoDev)"
        },
        description: {
            en: "Learned the fundamental concepts, color theory, and tools for graphic design.",
            th: "ศึกษาองค์ประกอบศิลป์ ทฤษฎีสี และการใช้เครื่องมือพื้นฐานสำหรับการออกแบบกราฟิก"
        },
        image: "/certificates/borntodev-graphic-design.png",
        tags: ["Graphic Design", "Design"]
    },
    {
        id: "borntodev-computer-science",
        title: {
            en: "Introduction to Computer Science",
            th: "วิทยาการคอมพิวเตอร์เบื้องต้น"
        },
        category: "training",
        date: "2021",
        issuer: {
            en: "BorntoDev",
            th: "บอร์นทูเดฟ (BorntoDev)"
        },
        description: {
            en: "Introduction to fundamental concepts in computer science including computer systems, algorithms, and networks.",
            th: "ศึกษาทฤษฎีพื้นฐานของระบบคอมพิวเตอร์ อัลกอริทึม และระบบเครือข่าย"
        },
        image: "/certificates/borntodev-computer-science.png",
        tags: ["Computer Science", "Programming"]
    },
    {
        id: "kaojao",
        title: {
            en: "Modern Chatbot with Kaojao",
            th: "การสร้างแชทบอทยุคใหม่ด้วยระบบ Kaojao"
        },
        category: "training",
        date: "2021",
        issuer: {
            en: "BorntoDev",
            th: "บอร์นทูเดฟ (BorntoDev)"
        },
        description: {
            en: "Learned how to build and integrate modern chatbots for business automation using Kaojao system.",
            th: "เรียนรู้กระบวนการพัฒนาและเชื่อมต่อแชทบอทตอบคำถามอัตโนมัติเชิงธุรกิจผ่านระบบ Kaojao"
        },
        image: "/certificates/borntodev-kaojao.png",
        tags: ["Chatbot", "AI", "Business"]
    },
    {
        id: "schoology",
        title: {
            en: "1st Dream to be Engineer Exhibition",
            th: "นิทรรศการสานฝันวิศวกร ครั้งที่ 1"
        },
        category: "activity",
        date: "2021",
        issuer: {
            en: "Schoology Thailand",
            th: "Schoology ประเทศไทย"
        },
        description: {
            en: "Successfully participated in the 1st Dream to be Engineer Exhibition and workshop series.",
            th: "เข้าร่วมและผ่านการฝึกอบรมในงานนิทรรศการแนะแนวส่งเสริมทักษะทางวิศวกรรมสานฝันวิศวกร ครั้งที่ 1"
        },
        image: "/certificates/schoology-dream-to-be-engineer.png",
        tags: ["Engineering", "Exhibition"]
    },
    {
        id: "digital-detective",
        title: {
            en: "Digital Detective",
            th: "นักสืบดิจิทัล (Digital Detective)"
        },
        category: "certification",
        date: "2021",
        issuer: {
            en: "Digital Vaccine",
            th: "วัคซีนดิจิทัล (Digital Vaccine)"
        },
        description: {
            en: "Certified as a Digital Detective by completing digital vaccine safety and online awareness training.",
            th: "ได้รับสิทธิบัตรในฐานะนักสืบดิจิทัลโดยผ่านหลักสูตรเสริมสร้างความปลอดภัยบนโลกออนไลน์"
        },
        image: "/certificates/digital-detective.png",
        tags: ["Digital Safety", "Cyber Security"]
    },
    {
        id: "borntodev-js",
        title: {
            en: "Introduction to JavaScript",
            th: "การเขียนโปรแกรมภาษา JavaScript เบื้องต้น"
        },
        category: "training",
        date: "2020",
        issuer: {
            en: "BorntoDev",
            th: "บอร์นทูเดฟ (BorntoDev)"
        },
        description: {
            en: "Mastered JavaScript fundamentals and web logic operations for modern web development.",
            th: "เรียนรู้ไวยากรณ์พื้นฐาน เหตุการณ์ และการควบคุมหน้าเว็บด้วยภาษา JavaScript สำหรับนักพัฒนาเว็บเบื้องต้น"
        },
        image: "/certificates/borntodev-javascript.png",
        tags: ["JavaScript", "Web Dev"]
    },
    {
        id: "borntodev-command-prompt",
        title: {
            en: "Command Prompt 101",
            th: "การใช้งาน Command Prompt เบื้องต้น"
        },
        category: "training",
        date: "2020",
        issuer: {
            en: "BorntoDev",
            th: "บอร์นทูเดฟ (BorntoDev)"
        },
        description: {
            en: "Learned the basics of using the command prompt for file systems navigation and CLI operations.",
            th: "เรียนรู้คำสั่งพื้นฐานบนระบบปฏิบัติการผ่าน Command Line (CLI) เพื่อควบคุมระบบนำทาง"
        },
        image: "/certificates/borntodev-command-prompt.png",
        tags: ["CLI", "Terminal"]
    },
    {
        id: "borntodev-web-dev-html5-css3",
        title: {
            en: "Fundamental Web Dev with HTML5 & CSS3",
            th: "การพัฒนาเว็บพื้นฐานด้วย HTML5 และ CSS3"
        },
        category: "training",
        date: "2020",
        issuer: {
            en: "BorntoDev",
            th: "บอร์นทูเดฟ (BorntoDev)"
        },
        description: {
            en: "Mastered the foundational elements of web development layout structures using HTML5 and CSS3.",
            th: "เรียนรู้หลักการเขียนโครงสร้างหน้าเว็บด้วย HTML5 และการจัดตกแต่งสไตล์ความสวยงามด้วย CSS3"
        },
        image: "/certificates/borntodev-web-dev-html5-css3.png",
        tags: ["HTML5", "CSS3", "Web Dev"]
    }
];
