import type { StaticImageData } from "next/image";
import rataBeranda from "@/public/ratatouille/beranda.webp";
import rataChatbot from "@/public/ratatouille/chatbot.webp";
import rataDenah from "@/public/ratatouille/denah-3d.webp";
import rataMenu from "@/public/ratatouille/menu.webp";
import rataReservasi from "@/public/ratatouille/reservasi.webp";
import rataStatistik from "@/public/ratatouille/statistik.webp";
import smartBeranda from "@/public/smartcycle/beranda.webp";
import smartEdukasi from "@/public/smartcycle/edukasi.webp";
import smartLokasi from "@/public/smartcycle/lokasi.webp";
import smartPenukaran from "@/public/smartcycle/penukaran.webp";
import smartScan from "@/public/smartcycle/scan.webp";

export const profile = {
  name: "Anugrah Prima Pratama",
  nameLines: ["Anugrah", "Prima", "Pratama"],
  initials: "AP",
  status: "Terbuka untuk peluang kerja",
  role: "Web developer, lulusan Informatika UII 2026.",
  intro:
    "Saya membangun aplikasi web dari rancangan antarmuka sampai basis data. Proyek terbesar saya, sistem penetapan judul tugas akhir untuk lima peran pengguna, terbit sebagai artikel jurnal.",
  photoAlt: "Anugrah Prima Pratama, berkemeja hitam dengan tangan bersedekap",
};

export const contact = {
  email: "primaamk99@gmail.com",
  linkedin: "https://www.linkedin.com/in/anugrahprimapratama",
  github: "https://github.com/PisangTerbang",
  cvUrl: "/Anugrah Prima Pratama-resume.pdf",
};

export const navLinks = [
  { id: "tentang", label: "Tentang" },
  { id: "proyek", label: "Proyek" },
  { id: "keahlian", label: "Keahlian" },
  { id: "kontak", label: "Kontak" },
];

export const about = {
  lead: "Saya lulusan Informatika yang membangun aplikasi web dari ujung ke ujung: merancang alurnya, menulis logika di server, menyimpan datanya, lalu merapikan tampilannya.",
  body: "Selama kuliah saya membuat proyek untuk Informatics Expo setiap tahun, lalu menutupnya dengan tugas akhir berupa sistem informasi berbasis Laravel yang kini terbit di Jurnal EDUSAINTEK. Saya terbiasa memakai AI untuk belajar dan mempercepat pengembangan.",
  facts: [
    {
      label: "Pendidikan",
      value: "S1 Informatika, Universitas Islam Indonesia (2022–2026)",
    },
    { label: "Predikat", value: "Cum laude, IPK 3,64 dari 4,00" },
    { label: "Fokus", value: "Aplikasi web dengan Laravel dan Next.js" },
    {
      label: "Posisi yang dicari",
      value: "Software engineer (web) atau analis data",
    },
  ],
};

export type ProjectId = "ta" | "reservasi" | "kost" | "portofolio";

export type Project = {
  id: ProjectId;
  year: string;
  context: string;
  title: string;
  summary: string;
  stack: string[];
  link?: { label: string; href: string };
};

export const featuredProject = {
  id: "ta" as ProjectId,
  year: "2026",
  context: "Tugas akhir, terbit di Jurnal EDUSAINTEK",
  title: "Sistem penetapan judul tugas akhir berjenjang",
  summary:
    "Aplikasi web yang memindahkan pengajuan dan penetapan judul tugas akhir ke satu tempat. Setiap pengajuan melewati beberapa jenjang persetujuan, dan setiap pihak masuk dengan perannya sendiri.",
  roles: ["Mahasiswa", "Dosen", "Ketua lab", "Prodi", "Koordinator TA"],
  highlights: [
    "Merancang alur dan basis data dengan metode Rapid Application Development (RAD)",
    "Membangun login dan hak akses untuk lima peran pengguna",
    "Membuat dasbor dengan grafik untuk memantau pengajuan",
    "Menulis hasilnya menjadi artikel jurnal bersama Sri Mulyati",
  ],
  stack: [
    "Laravel 12",
    "PHP 8.2",
    "PostgreSQL (Supabase)",
    "Blade",
    "Tailwind CSS",
    "Alpine.js",
    "Chart.js",
  ],
  link: {
    label: "Baca artikel jurnalnya",
    href: "https://doi.org/10.47668/edusaintek.v13i1.2286",
  },
};

export type ShowcaseScreen = {
  id: string;
  label: string;
  image: StaticImageData;
  scroll?: boolean;
};

export const webShowcase = {
  id: "reservasi" as ProjectId,
  year: "2024",
  context: "Proyek tim, capstone Pengembangan Sistem Informasi",
  title: "Ratatouille",
  subtitle: "Sistem informasi restoran tematik",
  summary:
    "Pelanggan bisa memesan meja, memesan makanan, dan bertanya lewat chatbot, sementara pengelola mengatur menu dan memantau statistik penjualan. Dikerjakan tim lima orang dengan metode Kanban.",
  role: "Peran saya di frontend: membangun antarmuka yang responsif serta fitur registrasi, reservasi, dan pemesanan.",
  stack: ["HTML", "CSS", "JavaScript", "PHP", "Kanban"],
  screens: [
    { id: "beranda", label: "Beranda", image: rataBeranda, scroll: true },
    { id: "menu", label: "Menu", image: rataMenu },
    { id: "reservasi", label: "Reservasi", image: rataReservasi },
    { id: "denah", label: "Denah 3D", image: rataDenah },
    { id: "chatbot", label: "Chatbot", image: rataChatbot },
    { id: "statistik", label: "Statistik", image: rataStatistik },
  ] satisfies ShowcaseScreen[],
  note: "Beranda diambil dari mockup Figma tim, halaman lain dari aplikasi yang sudah jadi.",
};

export const webProjects: Project[] = [
  {
    id: "kost",
    year: "2026",
    context: "Proyek pribadi",
    title: "Landing page Kost Putra Pendekar",
    summary:
      "Halaman promosi untuk kost putra di Yogyakarta: fasilitas, harga sewa, lokasi di Google Maps, dan tombol untuk menghubungi pemilik lewat WhatsApp.",
    stack: ["Next.js", "React", "Laragon"],
    link: {
      label: "Kunjungi situsnya",
      href: "https://kost-pendekar.vercel.app",
    },
  },
  {
    id: "portofolio",
    year: "2026",
    context: "Proyek pribadi",
    title: "Situs portofolio ini",
    summary:
      "Satu halaman yang menampilkan proyek dan keahlian saya. Dibangun dengan Next.js dan Tailwind CSS, dengan bantuan AI.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4"],
    link: {
      label: "Lihat kodenya di GitHub",
      href: "https://github.com/PisangTerbang/portofolio",
    },
  },
];

export const uiuxProject = {
  context: "Proyek UI/UX",
  title: "SmartCycle",
  subtitle: "Aplikasi daur ulang sampah",
  summary:
    "Aplikasi daur ulang sampah kami dirancang untuk memudahkan masyarakat dalam proses daur ulang, memberikan edukasi tentang pentingnya daur ulang, serta membantu pengguna menemukan tempat pengumpulan sampah terdekat. Untuk mengukur efektivitas dan kegunaan aplikasi, kami melakukan survei terhadap sejumlah pengguna.",
  stack: ["Figma", "Prototipe", "Survei pengguna"],
  screens: [
    { image: smartBeranda, label: "Beranda" },
    { image: smartLokasi, label: "Lokasi daur ulang" },
    { image: smartScan, label: "Scan sampah" },
    { image: smartEdukasi, label: "Edukasi" },
    { image: smartPenukaran, label: "Penukaran poin" },
  ],
};

export const otherProjects = [
  {
    year: "2022",
    title: "Desain UI/UX bertema kebersihan lingkungan",
    detail: "Informatics Expo 2022, dirancang di Figma.",
  },
  {
    year: "2023",
    title: "Aplikasi penyalur sisa makanan ke lembaga sosial",
    detail: "Informatics Expo 2023, dibangun dengan Java.",
  },
  {
    year: "2024",
    title: "Aplikasi Android bertema kebersihan",
    detail: "Informatics Expo 2024, dibangun dengan Android Studio.",
  },
];

export const projectFilters: { id: ProjectId; label: string }[] = [
  { id: "ta", label: "Tugas akhir" },
  { id: "reservasi", label: "Ratatouille" },
  { id: "kost", label: "Kost Putra Pendekar" },
  { id: "portofolio", label: "Portofolio ini" },
];

export type SkillLayer = {
  name: string;
  description: string;
  skills: { name: string; usedIn: ProjectId[] }[];
};

export const skillLayers: SkillLayer[] = [
  {
    name: "Antarmuka",
    description: "Halaman yang dilihat dan dipakai orang.",
    skills: [
      { name: "HTML", usedIn: ["ta", "reservasi", "kost", "portofolio"] },
      { name: "CSS", usedIn: ["ta", "reservasi", "kost", "portofolio"] },
      { name: "Tailwind CSS", usedIn: ["ta", "portofolio"] },
      { name: "JavaScript", usedIn: ["ta", "reservasi", "kost", "portofolio"] },
      { name: "Alpine.js", usedIn: ["ta"] },
      { name: "Blade", usedIn: ["ta"] },
      { name: "React", usedIn: ["kost", "portofolio"] },
      { name: "Next.js", usedIn: ["kost", "portofolio"] },
    ],
  },
  {
    name: "Server dan logika",
    description: "Aturan bisnis, login, dan hak akses pengguna.",
    skills: [
      { name: "PHP", usedIn: ["ta", "reservasi"] },
      { name: "Laravel", usedIn: ["ta"] },
      { name: "Laravel Breeze", usedIn: ["ta"] },
      { name: "Java", usedIn: [] },
    ],
  },
  {
    name: "Data",
    description: "Menyimpan, mengolah, dan menampilkan data.",
    skills: [
      { name: "PostgreSQL", usedIn: ["ta"] },
      { name: "Supabase", usedIn: ["ta"] },
      { name: "Chart.js", usedIn: ["ta"] },
      { name: "Excel", usedIn: [] },
      { name: "Google Sheets", usedIn: [] },
    ],
  },
  {
    name: "Desain dan alat kerja",
    description: "Dari rancangan sampai kode berjalan di komputer saya.",
    skills: [
      { name: "Figma", usedIn: [] },
      { name: "Git dan GitHub", usedIn: ["portofolio"] },
      { name: "Vite", usedIn: ["ta"] },
      { name: "Laragon", usedIn: ["kost", "portofolio"] },
      { name: "Pengembangan dibantu AI", usedIn: ["portofolio"] },
    ],
  },
];

export const skillNote =
  "Level saya masih dasar hingga menengah. Excel dan Google Sheets sudah sampai menengah, dan saya terbiasa memakai AI untuk belajar hal baru dengan cepat.";

export const languages = [
  { name: "Bahasa Indonesia", level: "Bahasa ibu" },
  { name: "Bahasa Inggris", level: "CEPT 513, CILACS UII" },
];

export const workflow = [
  {
    title: "Perencanaan kebutuhan",
    detail:
      "Memahami masalah dan kebutuhan setiap pengguna sebelum menulis kode.",
  },
  {
    title: "Desain bersama pengguna",
    detail:
      "Merancang alur dan tampilan, lalu meminta masukan dari calon pengguna.",
  },
  {
    title: "Konstruksi",
    detail:
      "Membangun fitur sedikit demi sedikit dan memperbaikinya dari masukan.",
  },
  {
    title: "Implementasi",
    detail: "Menguji, menyiapkan data, lalu menyerahkan sistem untuk dipakai.",
  },
];
