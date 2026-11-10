"use client";

import Image from "next/image";
import {
  useId,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import type { ShowcaseScreen } from "@/lib/data";

type Props = {
  title: string;
  screens: ShowcaseScreen[];
};

export function BrowserShowcase({ title, screens }: Props) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const current = screens[active];

  const select = (index: number, focus = false) => {
    const next = (index + screens.length) % screens.length;
    setActive(next);
    setPlaying(false);
    if (focus) tabs.current[next]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const moves: Record<string, number> = {
      ArrowRight: active + 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: screens.length - 1,
    };
    if (event.key in moves) {
      event.preventDefault();
      select(moves[event.key], true);
    }
  };

  return (
    <div className="showcase">
      <div
        className="showcase-tabs"
        role="tablist"
        aria-label={`${title} pages`}
        onKeyDown={onKeyDown}
      >
        {screens.map((screen, index) => (
          <button
            key={screen.id}
            ref={(element) => {
              tabs.current[index] = element;
            }}
            type="button"
            role="tab"
            id={`${baseId}-tab-${screen.id}`}
            aria-selected={index === active}
            aria-controls={`${baseId}-panel`}
            tabIndex={index === active ? 0 : -1}
            onClick={() => select(index)}
          >
            {screen.label}
          </button>
        ))}
      </div>

      <div
        className="browser"
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${current.id}`}
      >
        <div className="browser-bar">
          <span />
          <span />
          <span />
          <p className="browser-url">
            {title.toLowerCase()} / {current.label.toLowerCase()}
          </p>
        </div>
        <div className="browser-view" data-playing={playing ? "" : undefined}>
          {screens.map((screen, index) => (
            <Image
              key={screen.id}
              src={screen.image}
              alt={index === active ? `${title}: ${screen.label} page` : ""}
              aria-hidden={index === active ? undefined : true}
              className="browser-shot"
              data-active={index === active ? "" : undefined}
              data-scroll={screen.scroll ? "" : undefined}
              style={
                {
                  "--scroll-time": `${Math.min(
                    3 +
                      Math.max(
                        screen.image.height / screen.image.width - 9 / 16,
                        0,
                      ) *
                        5,
                    16,
                  )}s`,
                } as CSSProperties
              }
              sizes="(min-width: 1024px) 60rem, 100vw"
              fill
            />
          ))}
          {current.scroll && (
            <button
              type="button"
              className="browser-play"
              aria-pressed={playing}
              onClick={() => setPlaying((value) => !value)}
            >
              {playing ? "Back to top" : "Scroll page"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
