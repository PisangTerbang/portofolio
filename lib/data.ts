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
  { id: "perjalanan", label: "Perjalanan" },
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

export const webProjects: Project[] = [
  {
    id: "reservasi",
    year: "2024",
    context: "Informatics Expo 2024",
    title: "Aplikasi reservasi restoran",
    summary:
      "Pelanggan memesan meja secara daring, admin mengelola reservasi dan menu lewat dasbor. Dilengkapi login, operasi CRUD, dan integrasi LLM.",
    stack: ["HTML", "CSS", "PHP", "Integrasi LLM"],
  },
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
      "Satu halaman yang menampilkan proyek, keahlian, dan perjalanan saya. Dibangun dengan Next.js dan Tailwind CSS, dengan bantuan AI.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4"],
    link: {
      label: "Lihat kodenya di GitHub",
      href: "https://github.com/PisangTerbang/portofolio",
    },
  },
];

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
  { id: "reservasi", label: "Reservasi restoran" },
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
      { name: "JavaScript", usedIn: ["ta", "kost", "portofolio"] },
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
      { name: "Integrasi LLM", usedIn: ["reservasi"] },
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

export type Milestone = {
  date: string;
  kind: "Pendidikan" | "Publikasi" | "Sertifikat" | "Organisasi";
  title: string;
  detail: string;
  link?: { label: string; href: string };
};

export const milestones: Milestone[] = [
  {
    date: "Okt 2026",
    kind: "Pendidikan",
    title: "Wisuda dan Surat Penghargaan Rektor UII",
    detail:
      "Diberikan untuk lulusan cum laude, periode I tahun akademik 2026/2027.",
  },
  {
    date: "Agu 2026",
    kind: "Publikasi",
    title: "Artikel jurnal terbit di Jurnal EDUSAINTEK, Vol 13 No 1",
    detail:
      "Perancangan Sistem Informasi Penetapan Judul Tugas Akhir Berjenjang Berbasis Web dengan RAD. Ditulis bersama Sri Mulyati.",
    link: {
      label: "Lihat artikel",
      href: "https://doi.org/10.47668/edusaintek.v13i1.2286",
    },
  },
  {
    date: "Jul 2026",
    kind: "Pendidikan",
    title: "Lulus S1 Informatika, Universitas Islam Indonesia",
    detail: "IPK 3,64 dari 4,00.",
  },
  {
    date: "Apr 2026",
    kind: "Sertifikat",
    title: "Tes bahasa Inggris CEPT, skor 513",
    detail: "Diselenggarakan CILACS UII, berlaku dua tahun.",
  },
  {
    date: "Jan 2025",
    kind: "Sertifikat",
    title: "Cisco Networking Academy: Junior Cybersecurity Analyst Career Path",
    detail: "Sertifikat tingkat pelajar.",
  },
  {
    date: "2024",
    kind: "Organisasi",
    title: "Staf divisi perlengkapan, orientasi mahasiswa baru jurusan",
    detail: "Menyiapkan kebutuhan perlengkapan acara.",
  },
  {
    date: "2023",
    kind: "Organisasi",
    title: "Staf divisi keamanan, PORSEMATIK",
    detail: "Menjaga keamanan dan ketertiban acara olahraga jurusan.",
  },
  {
    date: "Sep 2022",
    kind: "Pendidikan",
    title: "Mulai kuliah S1 Informatika di Universitas Islam Indonesia",
    detail: "Yogyakarta.",
  },
];
