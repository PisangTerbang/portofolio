import type { CSSProperties } from "react";
import Image from "next/image";
import portrait from "@/public/foto-anugrah.png";
import { BrowserShowcase } from "@/components/browser-showcase";
import { CopyEmail } from "@/components/copy-email";
import { DeviceShowcase } from "@/components/device-showcase";
import { Interactions } from "@/components/interactions";
import { SiteHeader } from "@/components/site-header";
import { SkillExplorer } from "@/components/skill-explorer";
import {
  about,
  aiLoop,
  contact,
  languages,
  navLinks,
  otherProjects,
  profile,
  projectFilters,
  projects,
  ribbonTools,
  skillLayers,
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
      <span className="sr-only"> (opens in a new tab)</span>
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
    <ul className="phones" aria-label={`${project.title} app screens`}>
      {project.screens.map((screen, index) => (
        <li
          key={screen.label}
          className="phone"
          data-reveal
          style={delay(index)}
        >
          <div className="phone-frame" data-tilt>
            <Image
              src={screen.image}
              alt={`${project.title}: ${screen.label} screen`}
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
    <article
      className="showcase-card"
      id={project.id}
      data-layout={project.layout}
      data-reveal
      data-spotlight
    >
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
          <Stack items={project.stack} label={`${project.title} tech stack`} />
          {project.link && (
            <ExternalLink
              href={project.link.href}
              label={project.link.label}
              className="showcase-link"
            />
          )}
        </div>
      </div>
      <div className="showcase-visual">
        <ProjectVisual project={project} />
        {project.note && <p className="showcase-note">{project.note}</p>}
      </div>
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

function ToolRibbon() {
  const row = (hidden: boolean) => (
    <ul className="ribbon-row" aria-hidden={hidden || undefined}>
      {ribbonTools.map((tool) => (
        <li key={tool}>{tool}</li>
      ))}
    </ul>
  );
  return (
    <div className="ribbon" role="region" aria-label="Tools I use most">
      <div className="ribbon-band">
        <div className="ribbon-track">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader
        links={navLinks}
        initials={profile.initials}
        name={profile.name}
        cvUrl={contact.cvUrl}
      />
      <Interactions />

      <section id="home" className="hero">
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
              <a href="#projects" className="btn btn-mark">
                See my projects
              </a>
              <a href={contact.cvUrl} className="btn btn-ghost" download>
                Download CV (PDF)
              </a>
            </div>
          </div>

          <div className="hero-photo" data-tilt>
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

      <main id="content">
        <section id="about" className="section about">
          <div className="wrap about-grid">
            <h2 className="section-title" data-reveal>
              About me
            </h2>
            <div data-reveal style={delay(1)}>
              <p className="about-lead">{about.lead}</p>
              <p className="about-body">{about.body}</p>
              <dl className="facts">
                {about.facts.map((fact, index) => (
                  <div key={fact.label} data-reveal style={delay(index + 2)}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="section ai-native" aria-labelledby="ai-title">
          <div className="wrap">
            <div className="ai-head" data-reveal>
              <h2 id="ai-title" className="section-title">
                {aiLoop.title}
              </h2>
              <p className="section-lede">{aiLoop.lede}</p>
            </div>
            <ol className="ai-steps">
              {aiLoop.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="ai-step"
                  data-reveal
                  data-spotlight
                  style={delay(index)}
                >
                  <span className="ai-step-num" aria-hidden="true">
                    {index + 1}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </li>
              ))}
            </ol>
            <ul
              className="ai-tools"
              aria-label="AI tools and practices"
              data-reveal
            >
              {aiLoop.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </section>

        <ToolRibbon />

        <section id="projects" className="section projects">
          <div className="wrap">
            <div className="section-head" data-reveal>
              <h2 className="section-title">Selected projects</h2>
              <p className="section-lede">
                Web apps and UI/UX designs I&apos;ve worked on, solo and with a
                team. Every screen below comes from the real project.
              </p>
              <nav className="project-nav" aria-label="Project list">
                {projects.map((project) => (
                  <a key={project.id} href={`#${project.id}`}>
                    {project.navLabel}
                  </a>
                ))}
                <a href="#more-projects">More projects</a>
              </nav>
            </div>

            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}

            <div className="other" id="more-projects" data-reveal>
              <h3 className="other-title">More from university</h3>
              <p className="other-lede">
                Informatics Expo projects that built my foundation.
              </p>
              <ul className="other-list">
                {otherProjects.map((project, index) => (
                  <li
                    key={project.title}
                    data-reveal
                    data-spotlight
                    style={delay(index)}
                  >
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

        <section id="skills" className="section skills">
          <div className="wrap">
            <div className="section-head" data-reveal>
              <h2 className="section-title">Skills</h2>
              <p className="section-lede">
                Grouped by the part of a web app they cover. Pick a project to
                see its tools, or tap a tool to see where I used it.
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
                <h3 className="workflow-title">How I run a project</h3>
                <p className="section-lede">
                  The four Rapid Application Development (RAD) phases I followed
                  to build my thesis system, with AI in the loop at every step.
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

      <section id="contact" className="contact">
        <div className="wrap" data-reveal>
          <h2 className="contact-title">Hiring an AI-native developer?</h2>
          <div className="contact-body">
            <p className="contact-lede">
              I&apos;m looking for a fresh-graduate role as a software engineer
              or data analyst. Send me an email, reach out on LinkedIn, or
              download my CV.
            </p>
            <div>
              <a href={`mailto:${contact.email}`} className="contact-email">
                {contact.email}
              </a>
              <ul className="contact-links">
                <li>
                  <CopyEmail email={contact.email} />
                </li>
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
                    Download CV (PDF)
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
          <a href="#home" className="footer-top">
            Back to top
          </a>
        </div>
      </footer>
    </>
  );
}
