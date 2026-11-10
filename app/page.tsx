import type { CSSProperties } from "react";
import Image from "next/image";
import portrait from "@/public/foto-anugrah.png";
import { DashboardMock, ProjectThumb } from "@/components/illustrations";
import { SiteHeader } from "@/components/site-header";
import { SkillExplorer } from "@/components/skill-explorer";
import {
  about,
  contact,
  featuredProject,
  languages,
  milestones,
  navLinks,
  otherProjects,
  profile,
  projectFilters,
  skillLayers,
  skillNote,
  uiuxProject,
  webProjects,
  workflow,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <a href="#konten" className="skip-link">
        Langsung ke konten
      </a>
      <SiteHeader
        links={navLinks}
        initials={profile.initials}
        name={profile.name}
        cvUrl={contact.cvUrl}
      />

      <section id="beranda" className="hero">
        <div className="hero-inner">
          <p className="hero-status">
            <span className="status-dot" aria-hidden="true" />
            {profile.status}
          </p>

          <h1 className="hero-name">
            {profile.nameLines.map((line, index) => (
              <span
                key={line}
                className="hero-name-line"
                style={{ "--i": index } as CSSProperties}
              >
                <span>{line} </span>
              </span>
            ))}
          </h1>

          <div className="hero-copy">
            <p className="hero-role">{profile.role}</p>
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions">
              <a href="#proyek" className="btn btn-mark">
                Lihat proyek saya
              </a>
              <a href={contact.cvUrl} className="btn btn-ghost" download>
                Unduh CV (PDF)
              </a>
            </div>
          </div>

          <div className="hero-photo">
            <div className="hero-arch" aria-hidden="true" />
            <Image
              src={portrait}
              alt={profile.photoAlt}
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 24rem, 88vw"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <main id="konten">
        <section id="tentang" className="section about">
          <div className="wrap about-grid">
            <h2 className="section-title">Tentang saya</h2>
            <div>
              <p className="about-lead">{about.lead}</p>
              <p className="about-body">{about.body}</p>
              <dl className="facts">
                {about.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="proyek" className="section projects">
          <div className="wrap">
            <div className="section-head">
              <h2 className="section-title">Proyek pilihan</h2>
              <p className="section-lede">
                Tiga aplikasi web yang saya bangun, situs ini sendiri, dan satu
                desain aplikasi mobile. Proyek terbesar saya ada di paling atas.
              </p>
            </div>

            <article className="feature">
              <div className="feature-text">
                <p className="feature-meta">
                  <span className="feature-year">{featuredProject.year}</span>
                  <span>{featuredProject.context}</span>
                </p>
                <h3 className="feature-title">{featuredProject.title}</h3>
                <p className="feature-summary">{featuredProject.summary}</p>

                <h4 className="feature-subtitle">Yang saya kerjakan</h4>
                <ul className="feature-list">
                  {featuredProject.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <ul
                  className="stack"
                  aria-label={`Teknologi ${featuredProject.title}`}
                >
                  {featuredProject.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <a
                  href={featuredProject.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link feature-link"
                >
                  {featuredProject.link.label}
                  <span className="sr-only"> (membuka tab baru)</span>
                </a>
              </div>
              <div className="feature-visual">
                <DashboardMock roles={featuredProject.roles} />
              </div>
            </article>

            <ol className="project-list">
              {webProjects.map((project) => (
                <li key={project.id} className="project-row">
                  <ProjectThumb id={project.id} />
                  <div>
                    <p className="project-meta">
                      <span className="project-year">{project.year}</span>
                      <span>{project.context}</span>
                    </p>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-summary">{project.summary}</p>
                    <ul
                      className="stack"
                      aria-label={`Teknologi ${project.title}`}
                    >
                      {project.stack.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    {project.link && (
                      <a
                        href={project.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link project-link"
                      >
                        {project.link.label}
                        <span className="sr-only"> (membuka tab baru)</span>
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ol>

            <article className="uiux">
              <div className="uiux-text">
                <div>
                  <p className="feature-meta">
                    <span className="feature-year">{uiuxProject.context}</span>
                  </p>
                  <h3 className="uiux-title">{uiuxProject.title}</h3>
                  <p className="uiux-subtitle">{uiuxProject.subtitle}</p>
                </div>
                <div>
                  <p className="uiux-summary">{uiuxProject.summary}</p>
                  <ul
                    className="stack"
                    aria-label={`Alat dan metode ${uiuxProject.title}`}
                  >
                    {uiuxProject.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <ul
                className="phones"
                aria-label={`Tampilan aplikasi ${uiuxProject.title}`}
              >
                {uiuxProject.screens.map((screen) => (
                  <li key={screen.label} className="phone">
                    <div className="phone-frame">
                      <Image
                        src={screen.image}
                        alt={`Layar ${screen.label.toLowerCase()} aplikasi ${uiuxProject.title}`}
                        sizes="(min-width: 1024px) 14rem, 62vw"
                      />
                    </div>
                    <p className="phone-label">{screen.label}</p>
                  </li>
                ))}
              </ul>
            </article>

            <div className="other">
              <h3 className="other-title">Di luar web</h3>
              <p className="other-lede">
                Proyek kuliah lain yang membentuk dasar saya.
              </p>
              <ul className="other-list">
                {otherProjects.map((project) => (
                  <li key={project.title}>
                    <p className="other-year">{project.year}</p>
                    <h4>{project.title}</h4>
                    <p>{project.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="keahlian" className="section skills">
          <div className="wrap">
            <div className="section-head">
              <h2 className="section-title">Keahlian</h2>
              <p className="section-lede">
                Dikelompokkan menurut bagian aplikasi web yang saya kerjakan.
                Pilih sebuah proyek untuk melihat alat yang saya pakai di sana.
              </p>
            </div>

            <SkillExplorer layers={skillLayers} filters={projectFilters} />

            <div className="skills-foot">
              <p className="skill-note">{skillNote}</p>
              <dl className="languages">
                {languages.map((language) => (
                  <div key={language.name}>
                    <dt>{language.name}</dt>
                    <dd>{language.level}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="workflow">
              <h3 className="workflow-title">Cara saya bekerja</h3>
              <p className="section-lede">
                Empat tahap Rapid Application Development (RAD) yang saya pakai
                saat membangun sistem tugas akhir.
              </p>
              <ol className="workflow-steps">
                {workflow.map((step, index) => (
                  <li key={step.title}>
                    <span className="step-num" aria-hidden="true">
                      {index + 1}
                    </span>
                    <h4>{step.title}</h4>
                    <p>{step.detail}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="perjalanan" className="section journey">
          <div className="wrap journey-grid">
            <div className="journey-intro">
              <h2 className="section-title">Perjalanan</h2>
              <p className="section-lede">
                Dari mahasiswa baru di 2022 sampai wisuda cum laude di 2026.
              </p>
            </div>
            <ol className="timeline">
              {milestones.map((item) => (
                <li
                  key={item.title}
                  className="milestone"
                  data-kind={item.kind}
                >
                  <time>{item.date}</time>
                  <div>
                    <p className="milestone-kind">{item.kind}</p>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                    {item.link && (
                      <a
                        href={item.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link milestone-link"
                      >
                        {item.link.label}
                        <span className="sr-only"> (membuka tab baru)</span>
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <section id="kontak" className="contact">
        <div className="wrap">
          <h2 className="contact-title">
            Sedang membuka posisi web developer atau analis data?
          </h2>
          <div className="contact-body">
            <p className="contact-lede">
              Kirim email atau hubungi saya lewat LinkedIn. CV lengkap saya juga
              bisa langsung diunduh.
            </p>
            <div>
              <a href={`mailto:${contact.email}`} className="contact-email">
                {contact.email}
              </a>
              <ul className="contact-links">
                <li>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a href={contact.cvUrl} download className="btn btn-mark">
                    Unduh CV (PDF)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="wrap site-footer-inner">
          <p>© 2026 {profile.name}</p>
          <p>Dibangun dengan Next.js dan Tailwind CSS.</p>
        </div>
      </footer>
    </>
  );
}
