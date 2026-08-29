# PNattapong - Personal Portfolio 🚀

เว็บไซต์ Portfolio ส่วนตัวของ **ณัฐพงษ์ ปันธิยะ (Nattapong Panthiya / ZismailDev)** พัฒนาขึ้นด้วยเทคโนโลยีเว็บสมัยใหม่ เพื่อนำเสนอข้อมูลประวัติการศึกษา ประสบการณ์ทำงาน ความสามารถ (Knowledge) ผลงาน (Projects) และเกียรติบัตร (Achievements) ต่างๆ

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 & HeroUI
- **Icons:** Iconify
- **Analytics:** Vercel Analytics & Speed Insights
- **Theming:** `next-themes` สำหรับจัดการ Light/Dark Mode
- **Package Manager:** pnpm (v11+)

## ✨ ฟีเจอร์หลัก (Features)
- 🌓 **Dark/Light Mode:** รองรับการเปลี่ยนธีมมืดและสว่าง พร้อมโลโก้แบรนด์ Z แบบ SVG ที่ตอบสนองต่อโหมดสีของเครื่อง
- 📱 **Responsive Design:** แสดงผลได้อย่างสวยงามบนทุกขนาดหน้าจอตั้งแต่มือถือจนถึงเดสก์ท็อป
- 🌐 **SEO & Metadata:** ฝังโครงสร้าง Schema.org สำหรับเสิร์ชเอนจิน (JSON-LD)
- ⚡ **High Performance:** ทำงานได้รวดเร็วและปลอดภัย (ไม่มี Vulnerabilities)

## 🚀 การติดตั้งและรันโปรเจกต์ (Getting Started)

1. **โคลนโปรเจกต์ (Clone repository):**
   ```bash
   git clone https://github.com/ZismailDev/PNattapong.git
   cd PNattapong
   ```

2. **ติดตั้ง Dependencies:**
   *(โปรเจกต์นี้ใช้ `pnpm` ในการจัดการแพ็กเกจ)*
   ```bash
   pnpm install
   ```

3. **รันเซิร์ฟเวอร์จำลอง (Development):**
   ```bash
   pnpm dev
   ```

4. **เปิดดูผลลัพธ์:**
   เปิดเบราว์เซอร์ไปที่ [http://localhost:3000](http://localhost:3000)

## 📁 โครงสร้างโปรเจกต์โดยสังเขป (Project Structure)
- `src/app/` - ไฟล์ Layout และ Pages หลักของ Next.js App Router
- `src/components/` - UI Components ของโปรเจกต์ (Navbar, Footer, ThemeWrapper ฯลฯ)
- `src/config/` - ไฟล์ตั้งค่าหลักของเว็บไซต์ เช่น ชื่อเว็บและเมนู (`site.ts`)
- `src/data/` - แหล่งเก็บข้อมูลของส่วนต่างๆ เช่น เกียรติบัตร (`achievements.ts`) และผลงาน (`projects.ts`)
- `public/` - ไฟล์รูปภาพ, โลโก้ และ Assets แบบ Static

## 👨‍💻 ผู้พัฒนา (Author)
**Nattapong Panthiya (ZismailDev)**
- **Website:** [pnattapong.vercel.app](https://pnattapong.vercel.app)
- **GitHub:** [ZismailDev](https://github.com/ZismailDev)
