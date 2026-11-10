"use client";

import { useState } from "react";
import type { ProjectId, SkillLayer } from "@/lib/data";

type Props = {
  layers: SkillLayer[];
  filters: { id: ProjectId; label: string }[];
};

export function SkillExplorer({ layers, filters }: Props) {
  const [selected, setSelected] = useState<ProjectId | null>(null);

  const total = layers.reduce((sum, layer) => sum + layer.skills.length, 0);
  const used = selected
    ? layers.reduce(
        (sum, layer) =>
          sum + layer.skills.filter((s) => s.usedIn.includes(selected)).length,
        0,
      )
    : total;
  const selectedLabel = filters.find((f) => f.id === selected)?.label;

  return (
    <div className="skill-explorer">
      <div
        className="skill-filter"
        role="group"
        aria-labelledby="skill-filter-label"
      >
        <span id="skill-filter-label" className="skill-filter-label">
          Lihat menurut proyek
        </span>
        <button
          type="button"
          aria-pressed={selected === null}
          onClick={() => setSelected(null)}
        >
          Semua
        </button>
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            aria-pressed={selected === filter.id}
            onClick={() => setSelected(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <p className="skill-status" aria-live="polite">
        {selected
          ? `${used} dari ${total} alat dipakai di proyek ${selectedLabel}.`
          : `${total} bahasa, framework, dan alat yang pernah saya pakai.`}
      </p>

      <div className="skill-layers">
        {layers.map((layer) => (
          <div key={layer.name} className="skill-layer">
            <div className="skill-layer-head">
              <h3>{layer.name}</h3>
              <p>{layer.description}</p>
            </div>
            <ul className="skill-items">
              {layer.skills.map((skill) => {
                const state = !selected
                  ? "idle"
                  : skill.usedIn.includes(selected)
                    ? "on"
                    : "off";
                return (
                  <li
                    key={skill.name}
                    className="skill-item"
                    data-state={state}
                  >
                    {skill.name}
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
