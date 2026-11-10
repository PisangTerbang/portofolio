import type { CSSProperties } from "react";
import type { ProjectId } from "@/lib/data";

const c = {
  bg: "var(--surface-1)",
  panel: "var(--surface-2)",
  line: "var(--line-strong)",
  dim: "var(--surface-4)",
  accent: "var(--accent)",
  accentLight: "var(--accent-light)",
  accentDeep: "var(--accent-deep)",
  text: "var(--text)",
  base: "var(--bg)",
  green: "#5f9a6e",
};

const fill = (color: string, stroke?: string): CSSProperties =>
  stroke ? { fill: color, stroke } : { fill: color };

function BrowserBar() {
  return (
    <div className="mock-bar">
      <span />
      <span />
      <span />
      <div className="mock-url" />
    </div>
  );
}

const chart = [38, 62, 50, 92, 70, 84, 56];

export function DashboardMock({ roles }: { roles: string[] }) {
  return (
    <div className="mock" aria-hidden="true">
      <BrowserBar />
      <div className="dash">
        <div className="dash-side">
          <div className="dash-logo" />
          <p className="dash-side-label">Masuk sebagai</p>
          <ul className="dash-roles">
            {roles.map((role, index) => (
              <li key={role} data-active={index === 0 ? "" : undefined}>
                {role}
              </li>
            ))}
          </ul>
        </div>
        <div className="dash-main">
          <div className="dash-head">
            <p>Pengajuan judul</p>
            <span className="dash-btn" />
          </div>
          <div className="dash-stats">
            {[0, 1, 2].map((i) => (
              <div key={i} className="dash-stat">
                <span className="sk sk-xs" />
                <span className="dash-num" />
              </div>
            ))}
          </div>
          <div className="dash-chart">
            {chart.map((h, i) => (
              <span key={i} style={{ "--h": `${h}%` } as CSSProperties} />
            ))}
          </div>
          <ul className="dash-rows">
            {[0, 1, 2].map((i) => (
              <li key={i}>
                <span className="dash-dot" data-tone={i} />
                <span className="sk" />
                <span className="sk sk-pill" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ReservasiArt() {
  const tables = [
    [52, 56, true],
    [112, 56, false],
    [172, 56, true],
    [52, 128, false],
    [112, 128, true],
    [172, 128, false],
  ] as const;
  const seats = [
    [0, -27],
    [0, 27],
    [-27, 0],
    [27, 0],
  ];
  return (
    <svg viewBox="0 0 320 190" role="presentation">
      <rect width="320" height="190" style={fill(c.bg)} />
      <rect
        x="14"
        y="14"
        width="200"
        height="162"
        rx="8"
        style={fill(c.panel)}
      />
      {tables.map(([cx, cy, booked]) => (
        <g key={`${cx}-${cy}`}>
          {seats.map(([dx, dy]) => (
            <circle
              key={`${dx}${dy}`}
              cx={cx + dx}
              cy={cy + dy}
              r="5"
              style={fill(booked ? c.accent : c.dim)}
            />
          ))}
          <circle
            cx={cx}
            cy={cy}
            r="17"
            strokeWidth="1.5"
            style={fill(
              booked ? c.accent : c.bg,
              booked ? c.accentLight : c.dim,
            )}
          />
        </g>
      ))}
      <rect
        x="226"
        y="18"
        width="62"
        height="9"
        rx="4.5"
        style={fill(c.text)}
      />
      {[38, 62, 86, 110].map((y, i) => (
        <rect
          key={y}
          x="226"
          y={y}
          width="80"
          height="18"
          rx="9"
          strokeWidth="1.5"
          style={fill(
            i === 1 ? c.accentLight : c.panel,
            i === 1 ? c.accent : c.line,
          )}
        />
      ))}
      <rect
        x="226"
        y="146"
        width="80"
        height="26"
        rx="13"
        style={fill(c.accent)}
      />
      <rect x="244" y="156" width="44" height="6" rx="3" style={fill(c.base)} />
    </svg>
  );
}

function KostArt() {
  return (
    <svg viewBox="0 0 320 190" role="presentation">
      <rect width="320" height="190" style={fill(c.bg)} />
      <rect
        x="14.5"
        y="14.5"
        width="291"
        height="87"
        rx="8"
        style={fill(c.panel, c.line)}
      />
      <rect x="30" y="34" width="118" height="11" rx="3" style={fill(c.text)} />
      <rect x="30" y="51" width="86" height="11" rx="3" style={fill(c.text)} />
      <rect
        x="30"
        y="74"
        width="66"
        height="16"
        rx="8"
        style={fill(c.accent)}
      />
      <rect
        x="190"
        y="26"
        width="102"
        height="64"
        rx="5"
        style={fill(c.accentDeep)}
      />
      <path d="M216 72 L241 50 L266 72 Z" style={fill(c.accentLight)} />
      <rect x="226" y="66" width="30" height="16" style={fill(c.accentLight)} />
      {[14, 88, 162, 236].map((x) => (
        <g key={x}>
          <rect
            x={x}
            y="112"
            width="70"
            height="36"
            rx="6"
            style={fill(c.panel)}
          />
          <circle cx={x + 16} cy="130" r="6" style={fill(c.accent)} />
          <rect
            x={x + 29}
            y="127"
            width="30"
            height="6"
            rx="3"
            style={fill(c.dim)}
          />
        </g>
      ))}
      <rect
        x="14"
        y="158"
        width="206"
        height="20"
        rx="5"
        style={fill(c.panel)}
      />
      <path
        d="M36 160 a7 7 0 0 1 7 7 c0 5 -7 10 -7 10 s-7 -5 -7 -10 a7 7 0 0 1 7 -7 Z"
        style={fill(c.accent)}
      />
      <rect x="52" y="165" width="90" height="6" rx="3" style={fill(c.dim)} />
      <rect
        x="230"
        y="158"
        width="76"
        height="20"
        rx="10"
        style={fill(c.green)}
      />
      <rect x="248" y="165" width="40" height="6" rx="3" style={fill(c.text)} />
    </svg>
  );
}

function PortfolioArt() {
  return (
    <svg viewBox="0 0 320 190" role="presentation">
      <rect width="320" height="190" style={fill(c.base)} />
      <circle cx="26" cy="20" r="7" style={fill("none", c.accent)} />
      {[200, 228, 256].map((x) => (
        <rect
          key={x}
          x={x}
          y="17"
          width="20"
          height="5"
          rx="2.5"
          opacity="0.6"
          style={fill(c.text)}
        />
      ))}
      <rect
        x="284"
        y="13"
        width="22"
        height="13"
        rx="6.5"
        style={fill(c.accent)}
      />
      <rect x="18" y="48" width="118" height="22" rx="3" style={fill(c.text)} />
      <rect x="18" y="78" width="84" height="22" rx="3" style={fill(c.text)} />
      <rect
        x="18"
        y="108"
        width="128"
        height="22"
        rx="3"
        style={fill(c.text)}
      />
      <rect
        x="18"
        y="146"
        width="56"
        height="16"
        rx="8"
        style={fill(c.accent)}
      />
      <rect
        x="80.5"
        y="146.5"
        width="52"
        height="15"
        rx="7.5"
        style={fill("none", c.accent)}
      />
      <path
        d="M196 160 V100 a36 36 0 0 1 72 0 V160 Z"
        style={fill(c.panel, c.accent)}
      />
      <circle cx="232" cy="92" r="16" style={fill(c.base)} />
      <rect
        x="204"
        y="112"
        width="56"
        height="48"
        rx="20"
        style={fill(c.base)}
      />
      <line
        x1="196"
        y1="160"
        x2="268"
        y2="160"
        style={fill("none", c.accent)}
      />
    </svg>
  );
}

export function ProjectThumb({ id }: { id: ProjectId }) {
  return (
    <div className="thumb" aria-hidden="true">
      <BrowserBar />
      {id === "reservasi" && <ReservasiArt />}
      {id === "kost" && <KostArt />}
      {id === "portofolio" && <PortfolioArt />}
    </div>
  );
}
