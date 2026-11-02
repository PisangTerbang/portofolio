import {
  contact,
  credentials,
  education,
  organizations,
  profile,
  projects,
  skillGroups,
  skillNote,
} from "@/lib/data";

const wrap = "mx-auto w-full max-w-5xl px-5 sm:px-8";
const h2 =
  "font-display text-3xl font-semibold tracking-tight sm:text-4xl";

export default function Home() {
  const nameParts = profile.name.split(" ");
  const hasContact =
    contact.email || contact.linkedin || contact.github || contact.cvUrl;

  return (
    <>
      <header className="grid-paper border-b border-rule">
        <div className={`${wrap} pb-16 pt-14 sm:pb-24 sm:pt-24`}>
          <h1
            className="font-display font-bold leading-[0.95] tracking-[-0.035em] text-[clamp(3rem,10vw,7.5rem)]"
            aria-label={profile.name}
          >
            {nameParts.map((part) => (
              <span key={part} className="name-line" aria-hidden="true">
                <span>{part}</span>
              </span>
            ))}
          </h1>

          <p className="mt-10 max-w-2xl font-display text-xl font-medium leading-snug sm:text-2xl">
            {profile.headline}
          </p>
          <p className="mt-5 max-w-[62ch] text-muted">{profile.intro}</p>

          <nav
            aria-label="Navigasi utama"
            className="mt-10 flex flex-wrap gap-x-4 gap-y-3 font-display text-base font-semibold"
          >
            <a
              href="#proyek"
              className="bg-ink px-5 py-2.5 text-paper transition-colors hover:bg-teal"
            >
              Lihat proyek
            </a>
            {contact.cvUrl && (
              <a
                href={contact.cvUrl}
                className="bg-marker px-5 py-2.5 text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                Unduh CV
              </a>
            )}
            <a
              href="#kontak"
              className="border-2 border-ink px-5 py-2 transition-colors hover:bg-ink hover:text-paper"
            >
              Hubungi saya
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Proyek: urutan tahun memang berurutan, jadi tahun dipakai sebagai penanda */}
        <section id="proyek" className={`${wrap} py-16 sm:py-24`}>
          <h2 className={h2}>Proyek dari 2022 sampai 2026</h2>
          <p className="mt-3 max-w-[62ch] text-muted">
            Dari desain antarmuka sampai aplikasi lengkap dengan banyak peran
            pengguna.
          </p>

          <ol className="mt-12">
            {projects.map((p, i) => {
              const sameYear = i > 0 && projects[i - 1].year === p.year;
              return (
                <li
                  key={p.title}
                  className="grid gap-x-8 gap-y-3 border-t border-rule py-8 md:grid-cols-[8.5rem_1fr_15rem]"
                >
                  <div>
                    {!sameYear && (
                      <>
                        <span
                          aria-hidden="true"
                          className="mb-3 block h-1.5 w-10 bg-marker"
                        />
                        <span className="font-display text-5xl font-bold tracking-tight">
                          {p.year}
                        </span>
                      </>
                    )}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold leading-snug sm:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-2 max-w-[62ch] text-muted">{p.summary}</p>
                    {p.link && (
                      <a
                        href={p.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block font-display font-semibold underline decoration-marker decoration-4 underline-offset-4 hover:decoration-ink"
                      >
                        {p.link.label}
                      </a>
                    )}
                  </div>
                  <p className="font-display text-sm font-medium leading-relaxed text-teal md:pt-1.5">
                    {p.stack.join(", ")}
                  </p>
                </li>
              );
            })}
          </ol>
        </section>

        <section
          id="keahlian"
          className="border-y border-rule bg-white/55"
        >
          <div className={`${wrap} py-16 sm:py-24`}>
            <h2 className={h2}>Keahlian</h2>
            <p className="mt-3 max-w-[62ch] text-muted">{skillNote}</p>

            <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {skillGroups.map((g) => (
                <div key={g.name} className="border-t-2 border-ink pt-3">
                  <dt className="font-display text-lg font-semibold">
                    {g.name}
                  </dt>
                  <dd className="mt-1 text-muted">{g.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="prestasi" className={`${wrap} py-16 sm:py-24`}>
          <h2 className={h2}>Pendidikan, publikasi, dan sertifikat</h2>

          <div className="mt-10 border-t-2 border-ink pt-4">
            <p className="font-display text-xl font-semibold">
              {education.program}, {education.school}
            </p>
            <p className="text-muted">
              {education.period}. {education.detail}
            </p>
          </div>

          <ul className="mt-2">
            {credentials.map((c) => (
              <li
                key={c.title}
                className="grid gap-x-8 gap-y-1 border-b border-rule py-5 sm:grid-cols-[9rem_1fr]"
              >
                <span className="font-display text-sm font-medium text-teal sm:pt-1">
                  {c.date}
                </span>
                <div>
                  <p className="font-display text-lg font-semibold leading-snug">
                    {c.title}
                  </p>
                  <p className="max-w-[62ch] text-muted">{c.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="organisasi"
          className="border-y border-rule bg-white/55"
        >
          <div className={`${wrap} py-16 sm:py-24`}>
            <h2 className={h2}>Organisasi dan kepanitiaan</h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {organizations.map((o) => (
                <li key={o.role} className="border-t-2 border-ink pt-3">
                  <p className="font-display text-lg font-semibold">
                    {o.role}
                  </p>
                  <p className="text-muted">{o.org}</p>
                  {o.period && (
                    <p className="font-display text-sm font-medium text-teal">
                      {o.period}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="kontak" className={`${wrap} py-16 sm:py-24`}>
          <h2 className={h2}>Hubungi saya</h2>
          {hasContact ? (
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-display text-lg font-semibold">
              {contact.email && (
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="underline decoration-marker decoration-4 underline-offset-4 hover:decoration-ink"
                  >
                    {contact.email}
                  </a>
                </li>
              )}
              {contact.linkedin && (
                <li>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-marker decoration-4 underline-offset-4 hover:decoration-ink"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
              {contact.github && (
                <li>
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-marker decoration-4 underline-offset-4 hover:decoration-ink"
                  >
                    GitHub
                  </a>
                </li>
              )}
            </ul>
          ) : (
            <p className="mt-4 max-w-[62ch] text-muted">
              Isi email, LinkedIn, atau GitHub di lib/data.ts, lalu tautannya
              muncul di sini.
            </p>
          )}
        </section>
      </main>

      <footer className="mt-auto border-t border-rule">
        <p className={`${wrap} py-6 text-sm text-muted`}>
          {profile.name}. Dibuat dengan Next.js.
        </p>
      </footer>
    </>
  );
}
