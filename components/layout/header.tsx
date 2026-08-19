"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Language,
  useLanguage,
} from "@/context/language-context";

const translations = {
  PT: {
    guide: "O guia",
    included: "O que inclui",
    feedbacks: "Feedbacks",
    contact: "Fale conosco",
    selectLanguage: "Selecionar idioma",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    location: "Rio de Janeiro · Brasil",
  },

  EN: {
    guide: "The guide",
    included: "What's included",
    feedbacks: "Reviews",
    contact: "Contact us",
    selectLanguage: "Select language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    location: "Rio de Janeiro · Brazil",
  },

  ES: {
    guide: "La guía",
    included: "Qué incluye",
    feedbacks: "Opiniones",
    contact: "Contáctanos",
    selectLanguage: "Seleccionar idioma",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    location: "Río de Janeiro · Brasil",
  },
};

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const { language, changeLanguage } = useLanguage();
  const t = translations[language];

  function selectLanguage(lang: Language) {
    changeLanguage(lang);
    setLanguageOpen(false);
    router.push(
      `/${lang.toLowerCase()}${window.location.search}${window.location.hash}`
    );
  }

  const menuItems = [
    {
      number: "01",
      label: t.guide,
      href: "#ebook",
    },
    {
      number: "02",
      label: t.included,
      href: "#o-que-inclui",
    },
    {
      number: "03",
      label: t.feedbacks,
      href: "#feedbacks",
    },
  ];

  return (
    <>
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="absolute left-0 top-0 z-50 w-full text-white">
        <div
          className="
            relative
            flex
            h-[100px]
            w-full
            items-center
            px-5

            md:h-[110px]
            md:px-10

            lg:h-28
            lg:px-[4.5vw]
          "
        >

          {/* =================================================
              LOGO
          ================================================== */}

          <a
            href="#inicio"
            aria-label="Rio Inside"
            className="
              absolute
              left-1/2
              top-1/2
              z-20
              flex
              -translate-x-1/2
              -translate-y-1/2
              items-center

              lg:static
              lg:translate-x-0
              lg:translate-y-0
            "
          >
            <img
              src="/images/logo-rioinside.png"
              alt="Rio Inside"
              className="
                h-9
                w-auto
                max-w-[190px]
                object-contain

                md:h-11
                md:max-w-none

                lg:h-12
              "
            />
          </a>

          {/* =================================================
              MENU DESKTOP
          ================================================== */}

          <nav
            className="
              absolute
              left-1/2
              hidden
              -translate-x-1/2
              items-center
              gap-10
              lg:flex
            "
          >
            {menuItems.map((item) => (
              <a
                key={item.number}
                href={item.href}
                className="
                  whitespace-nowrap
                  text-[12px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  transition-opacity
                  duration-300
                  hover:opacity-60
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* =================================================
              IDIOMA DESKTOP
          ================================================== */}

          <div
            className="
              absolute
              right-[4.5vw]
              top-1/2
              hidden
              -translate-y-1/2
              lg:block
            "
          >
            <button
              type="button"
              onClick={() =>
                setLanguageOpen((open) => !open)
              }
              className="
                flex
                items-center
                gap-2
                text-[12px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-white
                transition-opacity
                hover:opacity-60
              "
              aria-label={t.selectLanguage}
            >
              {language}

              <span
                className={`
                  inline-block
                  transition-transform
                  duration-300
                  ${languageOpen ? "rotate-180" : ""}
                `}
              >
                ↓
              </span>
            </button>

            {languageOpen && (
              <div
                className="
                  absolute
                  right-0
                  top-[28px]
                  flex
                  flex-col
                  items-end
                  text-white
                "
              >
                <button
                  type="button"
                  onClick={() => selectLanguage("PT")}
                  className="
                    whitespace-nowrap
                    py-1
                    text-[11px]
                    uppercase
                    tracking-[0.18em]
                    transition-opacity
                    hover:opacity-50
                  "
                >
                  Português
                </button>

                <button
                  type="button"
                  onClick={() => selectLanguage("EN")}
                  className="
                    whitespace-nowrap
                    py-1
                    text-[11px]
                    uppercase
                    tracking-[0.18em]
                    transition-opacity
                    hover:opacity-50
                  "
                >
                  English
                </button>

                <button
                  type="button"
                  onClick={() => selectLanguage("ES")}
                  className="
                    whitespace-nowrap
                    py-1
                    text-[11px]
                    uppercase
                    tracking-[0.18em]
                    transition-opacity
                    hover:opacity-50
                  "
                >
                  Español
                </button>
              </div>
            )}
          </div>

          {/* =================================================
              HAMBÚRGUER MOBILE
          ================================================== */}

          <button
            type="button"
            onClick={() => {
              setMenuOpen(true);
              setLanguageOpen(false);
            }}
            aria-label={t.openMenu}
            className="
              absolute
              left-5
              top-1/2
              z-30
              flex
              w-7
              -translate-y-1/2
              flex-col
              gap-[7px]

              md:left-10
              md:w-8

              lg:hidden
            "
          >
            <span className="h-px w-full bg-white" />
            <span className="h-px w-full bg-white" />
          </button>

          {/* =================================================
              IDIOMA MOBILE
          ================================================== */}

          <div
            className="
              absolute
              right-5
              top-1/2
              z-30
              -translate-y-1/2

              md:right-10

              lg:hidden
            "
          >
            <button
              type="button"
              onClick={() =>
                setLanguageOpen((open) => !open)
              }
              aria-label={t.selectLanguage}
              className="
                flex
                items-center
                gap-2
                text-[12px]
                font-medium
                uppercase
                tracking-[0.16em]
                text-white
              "
            >
              {language}

              <span
                className={`
                  inline-block
                  transition-transform
                  duration-300
                  ${languageOpen ? "rotate-180" : ""}
                `}
              >
                ↓
              </span>
            </button>

            {languageOpen && (
              <div
                className="
                  absolute
                  right-0
                  top-7
                  flex
                  min-w-[96px]
                  flex-col
                  items-end
                  rounded-sm
                  bg-black/40
                  px-3
                  py-2
                  backdrop-blur-md
                "
              >
                <button
                  type="button"
                  onClick={() => selectLanguage("PT")}
                  className="
                    whitespace-nowrap
                    py-1
                    text-[10px]
                    uppercase
                    tracking-[0.14em]
                  "
                >
                  Português
                </button>

                <button
                  type="button"
                  onClick={() => selectLanguage("EN")}
                  className="
                    whitespace-nowrap
                    py-1
                    text-[10px]
                    uppercase
                    tracking-[0.14em]
                  "
                >
                  English
                </button>

                <button
                  type="button"
                  onClick={() => selectLanguage("ES")}
                  className="
                    whitespace-nowrap
                    py-1
                    text-[10px]
                    uppercase
                    tracking-[0.14em]
                  "
                >
                  Español
                </button>
              </div>
            )}
          </div>

        </div>
      </header>

      {/* =====================================================
          MENU MOBILE ABERTO
      ====================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-[100]
          bg-[#151515]
          text-white
          transition-transform
          duration-500
          ease-out
          lg:hidden

          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex h-full flex-col">

          {/* TOPO */}

          <div
            className="
              relative
              flex
              h-[105px]
              items-center
              justify-center
              border-b
              border-white/10
              px-6
            "
          >
            <a
              href="#inicio"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center"
            >
              <img
                src="/images/logo-rioinside.png"
                alt="Rio Inside"
                className="h-9 w-auto object-contain"
              />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label={t.closeMenu}
              className="
                absolute
                right-6
                top-1/2
                flex
                h-9
                w-9
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-[#c9a665]/60
                text-[20px]
                font-light
                text-white
              "
            >
              ×
            </button>
          </div>

          {/* LINKS */}

          <nav
            className="
              flex
              flex-1
              flex-col
              justify-center
              px-7
              py-8
            "
          >
            {menuItems.map((item) => (
              <a
                key={item.number}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="
                  group
                  border-b
                  border-white/10
                  py-5
                "
              >
                <div
                  className="
                    grid
                    grid-cols-[40px_1px_1fr_20px]
                    items-center
                    gap-4
                  "
                >
                  <span
                    className="
                      text-[10px]
                      tracking-[0.25em]
                      text-[#c9a665]
                    "
                  >
                    {item.number}
                  </span>

                  <span className="h-7 w-px bg-[#c9a665]/60" />

                  <span
                    className="
                      text-[20px]
                      font-light
                      uppercase
                      tracking-[0.16em]
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-[#c9a665]
                    "
                  >
                    {item.label}
                  </span>

                  <span className="text-[17px] text-[#c9a665]">
                    →
                  </span>
                </div>
              </a>
            ))}
          </nav>

          {/* =================================================
              RODAPÉ MOBILE
          ================================================== */}

          <div className="px-7 pb-7">

            <div className="mb-5 h-px bg-[#c9a665]/35" />

            <div className="flex items-end justify-between gap-4">

              <div>
                <span
                  className="
                    mb-2
                    block
                    text-[8px]
                    uppercase
                    tracking-[0.32em]
                    text-[#c9a665]
                  "
                >
                  Instagram
                </span>

                <a
                  href="https://www.instagram.com/rio.inside"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-[14px]
                    tracking-[0.06em]
                    text-white
                    transition-colors
                    duration-300
                    hover:text-[#c9a665]
                  "
                >
                  @rio.inside ↗
                </a>
              </div>

              <span
                className="
                  pb-[2px]
                  text-right
                  text-[8px]
                  uppercase
                  tracking-[0.20em]
                  text-[#c9a665]
                "
              >
                {t.location}
              </span>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}
