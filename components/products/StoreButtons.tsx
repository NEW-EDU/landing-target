"use client";

import { useEffect, useState } from "react";

export type StoreLink = {
  kind: "appStore" | "googlePlay" | "web";
  href: string;
  label: string;
  iconSrc: string;
};

type Platform = "ios" | "android" | "other";

function detectPlatform(): Platform {
  const ua = window.navigator.userAgent || "";
  if (/android/i.test(ua)) return "android";
  // iPadOS o'zini Mac deb ataydi — sensorli "Mac" ham iPad.
  if (/iphone|ipad|ipod/i.test(ua) || (window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1)) {
    return "ios";
  }
  return "other";
}

const CHIP_CLASS =
  "inline-flex h-[40px] sm:h-[44px] shrink-0 items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap rounded-[32px] bg-[rgba(255,255,255,0.2)] pl-3 pr-4 sm:pl-4 sm:pr-6 py-2 sm:py-2.5 text-[12px] sm:text-[14px] font-medium leading-[18px] text-white transition-colors duration-200 hover:bg-[rgba(255,255,255,0.28)]";

/**
 * Telefon do'koniga mos tugma katta (logotip + nom, butun kenglikda, barmoq ostida),
 * boshqa do'kon — yonida kichik doira. Kompyuterda ikkalasi bir xil.
 */
export function StoreButtons({ stores }: { stores: StoreLink[] }) {
  const [platform, setPlatform] = useState<Platform>("other");
  useEffect(() => setPlatform(detectPlatform()), []);

  const own = platform === "ios" ? "appStore" : platform === "android" ? "googlePlay" : null;
  const primary = own ? stores.find((s) => s.kind === own) : undefined;

  if (!primary) {
    return (
      <div className="mt-6 flex flex-nowrap gap-2 sm:gap-2.5">
        {stores.map((s) => (
          <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className={CHIP_CLASS}>
            <img src={s.iconSrc} alt="" className="size-6" width="24" height="24" decoding="async" />
            <span>{s.label}</span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-6 flex items-center gap-2.5">
      <a
        href={primary.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-14 min-w-0 flex-1 items-center justify-center gap-3 rounded-full bg-white px-6 text-[17px] font-semibold text-[#0f1217] shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition-transform duration-150 active:scale-[0.98]"
      >
        <img src={primary.iconSrc} alt="" className="size-8" width="32" height="32" decoding="async" />
        <span>{primary.label}</span>
      </a>
      {stores
        .filter((s) => s !== primary)
        .map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            title={s.label}
            className="grid size-14 shrink-0 place-items-center rounded-full bg-[rgba(255,255,255,0.2)] transition-colors duration-200 hover:bg-[rgba(255,255,255,0.28)]"
          >
            <img src={s.iconSrc} alt="" className="size-6" width="24" height="24" decoding="async" />
          </a>
        ))}
    </div>
  );
}
