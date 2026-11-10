"use client";

import { useState } from "react";
import type { ProjectId, SkillLayer } from "@/lib/data";

type Props = {
  layers: SkillLayer[];
  filters: { id: ProjectId; label: string }[];
};

const joinNames = (names: string[]) =>
  names.length <= 1
    ? names.join("")
    : `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;

export function SkillExplorer({ layers, filters }: Props) {
  const [project, setProject] = useState<ProjectId | null>(null);
  const [skill, setSkill] = useState<string | null>(null);

  const allSkills = layers.flatMap((layer) => layer.skills);
  const total = allSkills.length;
  const projectLabel = (id: ProjectId) =>
    filters.find((filter) => filter.id === id)?.label ?? id;

  const pickedSkill = allSkills.find((item) => item.name === skill);
  const highlighted = new Set<ProjectId>(pickedSkill?.usedIn ?? []);

  let status = `${total} languages, frameworks, and tools I've worked with. Tap one to see where I used it.`;
  if (project) {
    const used = allSkills.filter((item) =>
      item.usedIn.includes(project),
    ).length;
    status = `${used} of ${total} tools went into ${projectLabel(project)}.`;
  } else if (pickedSkill) {
    status = pickedSkill.usedIn.length
      ? `${pickedSkill.name} is in ${joinNames(pickedSkill.usedIn.map(projectLabel))}.`
      : `${pickedSkill.name} comes from coursework and Informatics Expo projects.`;
  }

  const chooseProject = (id: ProjectId | null) => {
    setProject(id);
    setSkill(null);
  };

  const chooseSkill = (name: string) => {
    setProject(null);
    setSkill((current) => (current === name ? null : name));
  };

  return (
    <div className="skill-explorer">
      <div
        className="skill-filter"
        role="group"
        aria-labelledby="skill-filter-label"
      >
        <span id="skill-filter-label" className="skill-filter-label">
          Filter by project
        </span>
        <button
          type="button"
          aria-pressed={project === null && skill === null}
          onClick={() => chooseProject(null)}
        >
          All
        </button>
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            aria-pressed={project === filter.id}
            data-linked={highlighted.has(filter.id) ? "" : undefined}
            onClick={() => chooseProject(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <p className="skill-status" aria-live="polite">
        {status}
      </p>

      <div className="skill-layers">
        {layers.map((layer) => (
          <div key={layer.name} className="skill-layer">
            <div className="skill-layer-head">
              <h3>{layer.name}</h3>
              <p>{layer.description}</p>
            </div>
            <ul className="skill-items">
              {layer.skills.map((item) => {
                let state = "idle";
                if (project) {
                  state = item.usedIn.includes(project) ? "on" : "off";
                } else if (skill) {
                  state = item.name === skill ? "on" : "off";
                }
                return (
                  <li key={item.name}>
                    <button
                      type="button"
                      className="skill-item"
                      data-state={state}
                      aria-pressed={skill === item.name}
                      onClick={() => chooseSkill(item.name)}
                    >
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
