// Semua isi portofolio ada di file ini. Edit di sini, halaman ikut berubah.

export const profile = {
  name: "Anugrah Prima Pratama",
  headline: "Lulusan Informatika yang membangun aplikasi web, mobile, dan game.",
  intro:
    "Saya lulusan Informatika Universitas Islam Indonesia (cum laude, IPK 3,64). Selama kuliah saya mengerjakan proyek dari desain antarmuka di Figma sampai aplikasi web berbasis Laravel untuk tugas akhir, dan hasilnya terbit sebagai artikel jurnal. Saya mencari posisi software engineering atau analis data, dan terbiasa memakai AI untuk mempercepat pengembangan.",
};

// Isi kolom yang kamu punya. Kolom yang dikosongkan tidak akan ditampilkan.
export const contact = {
  email: "", // contoh: "nama@email.com"
  linkedin: "", // contoh: "https://www.linkedin.com/in/username"
  github: "", // contoh: "https://github.com/username"
  cvUrl: "", // contoh: "/cv-anugrah.pdf" (taruh filenya di folder public)
};

export type Project = {
  year: string;
  title: string;
  summary: string;
  stack: string[];
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    year: "2022",
    title: "Desain UI/UX bertema kebersihan lingkungan",
    summary:
      "Informatics Expo 2022. Merancang tampilan dan alur penggunaan aplikasi bertema kebersihan lingkungan.",
    stack: ["Figma"],
  },
  {
    year: "2023",
    title: "Aplikasi pengelola sisa makanan untuk lembaga sosial",
    summary:
      "Informatics Expo 2023. Aplikasi Java yang menyalurkan sisa makanan dari perusahaan ke LSM agar tidak terbuang.",
    stack: ["Java"],
  },
  {
    year: "2024",
    title: "Aplikasi reservasi restoran",
    summary:
      "Informatics Expo 2024. Aplikasi web dengan login, CRUD, dasbor admin, dan integrasi LLM.",
    stack: ["HTML", "PHP", "LLM"],
  },
  {
    year: "2024",
    title: "Game horor 3D dan aplikasi Android",
    summary:
      "Informatics Expo 2024. Membuat game horor 3D dengan Unity dan aplikasi Android bertema kebersihan.",
    stack: ["Unity", "Android Studio"],
  },
  {
    year: "2026",
    title: "Sistem penetapan judul tugas akhir berjenjang",
    summary:
      "Tugas akhir saya: aplikasi web untuk mengelola pengajuan dan penetapan judul tugas akhir. Ada lima peran pengguna: mahasiswa, dosen, ketua lab, prodi, dan koordinator TA. Dikembangkan dengan metode RAD dan diterbitkan sebagai artikel jurnal.",
    stack: [
      "Laravel 12",
      "PHP 8.2",
      "PostgreSQL (Supabase)",
      "Tailwind",
      "Alpine.js",
      "Chart.js",
    ],
    link: {
      label: "Baca artikel jurnalnya",
      href: "https://journalstkippgrisitubondo.ac.id/index.php/EDUSAINTEK/article/view/2286",
    },
  },
];

export const skillGroups = [
  { name: "Web dan pemrograman", items: ["HTML", "PHP", "Laravel", "Java"] },
  { name: "Data", items: ["PostgreSQL", "Excel", "Google Sheets"] },
  { name: "Desain, mobile, dan game", items: ["Figma", "Android Studio", "Unity"] },
  { name: "Cara kerja", items: ["Pengembangan dibantu AI (vibe coding)"] },
];

export const skillNote =
  "Semua keterampilan di atas berada pada level dasar. Excel dan Google Sheets sampai level menengah.";

export const credentials = [
  {
    date: "24 Okt 2026",
    title: "Surat Penghargaan Rektor UII untuk lulusan cum laude",
    detail: "Periode I tahun akademik 2026/2027, IPK 3,64.",
  },
  {
    date: "19 Agu 2026",
    title: "Artikel jurnal di Jurnal EDUSAINTEK, Vol 13 No 1",
    detail:
      "Perancangan Sistem Informasi Penetapan Judul Tugas Akhir Berjenjang Berbasis Web dengan RAD. Ditulis bersama Sri Mulyati.",
  },
  {
    date: "6 Apr 2026",
    title: "Tes bahasa Inggris CEPT, skor 513",
    detail: "CILACS UII, berlaku dua tahun.",
  },
  {
    date: "10 Jan 2025",
    title: "Cisco Networking Academy: Junior Cybersecurity Analyst Career Path",
    detail: "Sertifikat tingkat pelajar.",
  },
];

export const organizations = [
  {
    role: "Staf divisi keamanan",
    org: "PORSEMATIK (acara olahraga jurusan)",
    period: "Nov sampai Des 2023",
  },
  {
    role: "Staf divisi perlengkapan",
    org: "Orientasi mahasiswa baru jurusan",
    period: "",
  },
];

export const education = {
  school: "Universitas Islam Indonesia",
  program: "S1 Informatika",
  period: "Sep 2022 sampai Jul 2026",
  detail: "Cum laude, IPK 3,64 dari 4,00. Wisuda 24 Oktober 2026.",
};
