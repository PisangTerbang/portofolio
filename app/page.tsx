import type { CSSProperties } from "react";
import Image from "next/image";
import portrait from "@/public/foto-anugrah.png";
import { BrowserShowcase } from "@/components/browser-showcase";
import { DeviceShowcase } from "@/components/device-showcase";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SiteHeader } from "@/components/site-header";
import { SkillExplorer } from "@/components/skill-explorer";
import {
  about,
  contact,
  languages,
  navLinks,
  otherProjects,
  profile,
  projectFilters,
  skillLayers,
  projects,
  skillNote,
  workflow,
  type ShowcaseProject,
} from "@/lib/data";

const delay = (index: number) => ({ "--d": index }) as CSSProperties;

function ExternalLink({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-link ${className}`}
    >
      {label}
      <span className="sr-only"> (membuka tab baru)</span>
    </a>
  );
}

function Stack({ items, label }: { items: string[]; label: string }) {
  return (
    <ul className="stack" aria-label={label}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ProjectVisual({ project }: { project: ShowcaseProject }) {
  if (project.visual === "browser") {
    return <BrowserShowcase title={project.title} screens={project.screens} />;
  }
  if (project.visual === "devices") {
    return (
      <DeviceShowcase
        title={project.title}
        desktop={project.desktop}
        mobile={project.mobile}
      />
    );
  }
  return (
    <ul className="phones" aria-label={`Tampilan aplikasi ${project.title}`}>
      {project.screens.map((screen, index) => (
        <li
          key={screen.label}
          className="phone"
          data-reveal
          style={delay(index)}
        >
          <div className="phone-frame">
            <Image
              src={screen.image}
              alt={`Layar ${screen.label.toLowerCase()} aplikasi ${project.title}`}
              sizes="(min-width: 1024px) 14rem, 62vw"
            />
          </div>
          <p className="phone-label">{screen.label}</p>
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({ project }: { project: ShowcaseProject }) {
  return (
    <article className="showcase-card" id={project.id} data-reveal>
      <div className="showcase-text">
        <div>
          <p className="card-meta">
            <span className="card-kind">{project.kind}</span>
            <span>{project.context}</span>
          </p>
          <h3 className="showcase-title">{project.title}</h3>
          <p className="showcase-subtitle">{project.subtitle}</p>
        </div>
        <div>
          <p className="showcase-summary">{project.summary}</p>
          {project.role && <p className="showcase-role">{project.role}</p>}
          {project.highlights && (
            <ul className="showcase-list">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          <Stack items={project.stack} label={`Teknologi ${project.title}`} />
          {project.link && (
            <ExternalLink
              href={project.link.href}
              label={project.link.label}
              className="showcase-link"
            />
          )}
        </div>
      </div>
      <ProjectVisual project={project} />
      {project.note && <p className="showcase-note">{project.note}</p>}
    </article>
  );
}

const iconPaths: Record<string, string> = {
  design:
    "M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.8 1.6-1.6 0-.5-.2-.8-.4-1.1-.2-.3-.4-.6-.4-1.1 0-.9.7-1.6 1.6-1.6H16a5 5 0 0 0 5-5C21 6.6 17 3 12 3Zm-5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z",
  desktop:
    "M4 4h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-6v2h3v2H7v-2h3v-2H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm1 2v8h14V6H5Z",
  mobile:
    "M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm0 3v13h8V5H8Zm3 14.5v1h2v-1h-2Z",
};

function OtherIcon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" focusable="false">
      <path d={iconPaths[name]} />
    </svg>
  );
}

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
      <RevealOnScroll />

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
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 17rem, 62vw"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <main id="konten">
        <section id="tentang" className="section about">
          <div className="wrap about-grid">
            <h2 className="section-title" data-reveal>
              Tentang saya
            </h2>
            <div data-reveal style={delay(1)}>
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
            <div className="section-head" data-reveal>
              <h2 className="section-title">Proyek pilihan</h2>
              <p className="section-lede">
                Aplikasi web dan desain UI/UX yang pernah saya kerjakan, sendiri
                maupun bersama tim. Semua tampilan di bawah diambil dari proyek
                aslinya.
              </p>
              <nav className="project-nav" aria-label="Daftar proyek">
                {projects.map((project) => (
                  <a key={project.id} href={`#${project.id}`}>
                    {project.navLabel}
                  </a>
                ))}
                <a href="#proyek-lain">Proyek lain</a>
              </nav>
            </div>

            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}

            <div className="other" id="proyek-lain" data-reveal>
              <h3 className="other-title">Proyek lain semasa kuliah</h3>
              <p className="other-lede">
                Proyek Informatics Expo yang membentuk dasar saya.
              </p>
              <ul className="other-list">
                {otherProjects.map((project, index) => (
                  <li key={project.title} data-reveal style={delay(index)}>
                    <span className="other-icon" aria-hidden="true">
                      <OtherIcon name={project.icon} />
                    </span>
                    <h4>{project.title}</h4>
                    <p>{project.detail}</p>
                    <span className="other-tool">{project.tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="keahlian" className="section skills">
          <div className="wrap">
            <div className="section-head" data-reveal>
              <h2 className="section-title">Keahlian</h2>
              <p className="section-lede">
                Dikelompokkan menurut bagian aplikasi web yang saya kerjakan.
                Pilih sebuah proyek untuk melihat alat yang saya pakai di sana.
              </p>
            </div>

            <div data-reveal>
              <SkillExplorer layers={skillLayers} filters={projectFilters} />
            </div>

            <div className="skills-foot" data-reveal>
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
              <div data-reveal>
                <h3 className="workflow-title">Cara saya bekerja</h3>
                <p className="section-lede">
                  Empat tahap Rapid Application Development (RAD) yang saya
                  pakai saat membangun sistem tugas akhir.
                </p>
              </div>
              <ol className="workflow-steps">
                {workflow.map((step, index) => (
                  <li key={step.title} data-reveal style={delay(index)}>
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
      </main>

      <section id="kontak" className="contact">
        <div className="wrap" data-reveal>
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
          <p>© {profile.name}</p>
          <a href="#beranda" className="footer-top">
            Kembali ke atas
          </a>
        </div>
      </footer>
    </>
  );
}
