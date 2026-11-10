# Portofolio Anugrah Prima Pratama

Situs portofolio satu halaman: profil, proyek web, keahlian, perjalanan, dan kontak.

Dibangun dengan Next.js 16, React 19, TypeScript, dan Tailwind CSS 4.

## Struktur

- `lib/data.ts` berisi semua teks dan data situs: profil, proyek, keahlian, dan linimasa.
- `app/page.tsx` menyusun halaman.
- `app/globals.css` berisi seluruh gaya. Warna tema ada di blok `:root` paling atas.
- `components/` berisi header, penjelajah keahlian, dan ilustrasi proyek.
- `public/` berisi foto profil dan CV dalam format PDF.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

### Lewat Laragon di Windows

Nginx Laragon meneruskan `http://portofolio.test` ke aplikasi Next.js di port 3000. Nyalakan Nginx di Laragon, lalu jalankan dari folder proyek:

```bash
npm run dev -- --hostname 127.0.0.1
```

Buka [http://portofolio.test](http://portofolio.test). Konfigurasi proxy-nya ada di `C:\laragon\etc\nginx\sites-enabled\portofolio.test.conf`.

## Build produksi

```bash
npm run build
npm run start
```

Situs ini di-deploy ke Vercel.
