import type { Lang } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n/utils";
import { siteData } from "@/lib/site-data";
import { StoreButtons, type StoreLink } from "./StoreButtons";

type Props = {
  lang: Lang;
};

const STORE_LINKS = {
  studentPlay: "https://play.google.com/store/apps/details?id=uz.tikoncha.student",
  studentAppStore: "https://apps.apple.com/app/id6753625413",
  parentPlay: "https://play.google.com/store/apps/details?id=uz.tikoncha.parent",
  parentAppStore: "https://apps.apple.com/au/app/tikoncha-parent/id6756965935",
  teacherPlay: "https://play.google.com/store/apps/details?id=uz.tikoncha.ustoz",
  teacherAppStore: "https://apps.apple.com/uz/app/ustoz-tikoncha/id6760545820",
  adminPanel: "https://maktab.tikoncha.uz",
  telegramAdmin: "https://t.me/tikoncha_admin",
} as const;

// Do'kondagi hozirgi belgilar (App Store, 2026-11) — public/images/apps/
const APP_ICONS = {
  student: "/images/apps/child.png",
  parent: "/images/apps/parent.png",
  teacher: "/images/apps/teacher.png",
  admin: "https://img.icons8.com/?id=40734&format=png&size=96",
} as const;

const EXTERNAL_LINK_ICON = "https://img.icons8.com/?id=82787&format=png&size=96&color=ffffff";

const InfoIcon = () => (
  <svg viewBox="0 0 24 24" className="size-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

export function ProductsSection({ lang }: Props) {
  const t = getTranslations(lang).products;

  const play = (href: string): StoreLink => ({
    kind: "googlePlay",
    href,
    label: t.storeLabels.googlePlay,
    iconSrc: siteData.images.hero.playMarketIcon,
  });
  const appStore = (href: string): StoreLink => ({
    kind: "appStore",
    href,
    label: t.storeLabels.appStore,
    iconSrc: siteData.images.hero.appStoreIcon,
  });

  const cards = [
    {
      key: "student" as const,
      iconImage: APP_ICONS.student,
      title: t.items.student.title,
      description: t.items.student.description,
      stores: [play(STORE_LINKS.studentPlay), appStore(STORE_LINKS.studentAppStore)],
    },
    {
      key: "parent" as const,
      iconImage: APP_ICONS.parent,
      title: t.items.parent.title,
      description: t.items.parent.description,
      stores: [play(STORE_LINKS.parentPlay), appStore(STORE_LINKS.parentAppStore)],
    },
    {
      key: "teacher" as const,
      iconImage: APP_ICONS.teacher,
      title: t.items.teacher.title,
      description: t.items.teacher.description,
      stores: [play(STORE_LINKS.teacherPlay), appStore(STORE_LINKS.teacherAppStore)],
    },
    {
      key: "admin" as const,
      iconImage: APP_ICONS.admin,
      title: t.items.admin.title,
      description: t.items.admin.description,
      stores: [
        { kind: "web", href: STORE_LINKS.adminPanel, label: t.storeLabels.openPanel, iconSrc: EXTERNAL_LINK_ICON } satisfies StoreLink,
      ],
      footer: (
        <p className="mt-4 flex items-center gap-2 text-xs text-white/55">
          <InfoIcon />
          <span>
            {t.adminNote}{" "}
            <a
              href={STORE_LINKS.telegramAdmin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-secondary underline-offset-2 hover:underline"
            >
              {t.adminNoteLinkLabel}
            </a>
          </span>
        </p>
      ),
    },
  ];

  return (
    <section className="pb-16 pt-3 text-mist lg:pb-24 lg:pt-8">
      <h1 className="sr-only">
        {t.heading} {t.headingAccent}
      </h1>
      <div className="mx-auto grid w-full max-w-[1040px] gap-6 md:grid-cols-2">
        {cards.map((card) => (
          <article
            key={card.key}
            className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(165deg,rgba(20,41,25,0.34)_0%,rgba(20,24,30,0.78)_55%,rgba(15,18,23,0.92)_100%)] p-6 shadow-[0_18px_42px_rgba(0,0,0,0.32)] sm:p-7"
          >
            <div className="flex items-center gap-4">
              <img
                src={card.iconImage}
                alt=""
                className="size-14 shrink-0 rounded-[16px] object-cover"
                width="56"
                height="56"
                decoding="async"
              />
              <div className="min-w-0">
                <h2 className="text-xl font-semibold leading-7 text-white">{card.title}</h2>
                {card.description ? (
                  <p className="mt-0.5 text-sm leading-5 text-white/60">{card.description}</p>
                ) : null}
              </div>
            </div>

            <StoreButtons stores={card.stores} />

            {card.footer}
          </article>
        ))}
      </div>
    </section>
  );
}
