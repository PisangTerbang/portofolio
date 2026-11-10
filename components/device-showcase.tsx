import Image, { type StaticImageData } from "next/image";
import type { CSSProperties } from "react";

type Props = {
  title: string;
  desktop: StaticImageData;
  mobile: StaticImageData;
};

const scrollTime = (image: StaticImageData, viewRatio: number) => {
  const travel = Math.max(image.height / image.width - viewRatio, 0);
  return {
    "--scroll-time": `${Math.min(4 + travel * 3, 22)}s`,
  } as CSSProperties;
};

export function DeviceShowcase({ title, desktop, mobile }: Props) {
  return (
    <div className="devices">
      <div className="browser devices-desktop">
        <div className="browser-bar">
          <span />
          <span />
          <span />
          <p className="browser-url">{title.toLowerCase()}</p>
        </div>
        <div className="devices-screen" style={scrollTime(desktop, 9 / 16)}>
          <Image
            src={desktop}
            alt={`Tampilan ${title} di laptop`}
            sizes="(min-width: 1024px) 52rem, 92vw"
            fill
          />
        </div>
      </div>
      <div className="phone-frame devices-phone">
        <div
          className="devices-screen devices-screen-phone"
          style={scrollTime(mobile, 2.1)}
        >
          <Image
            src={mobile}
            alt={`Tampilan ${title} di ponsel`}
            sizes="(min-width: 1024px) 14rem, 36vw"
            fill
          />
        </div>
      </div>
    </div>
  );
}
