"use client";

import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { trackBeginCheckout } from "@/lib/analytics";
import heroImage from "@/public/images/rio-hero.jpeg";

const translations = {
  PT: {
    location: "Rio de Janeiro · Brasil",
    title: (
      <>
        Descubra o Rio de
        <br />
        Janeiro como quem
        <br />
        vive a cidade.
      </>
    ),
    description:
      "Um guia de bolso com experiências, lugares e histórias selecionados para você conhecer o Rio além dos roteiros tradicionais.",
    buy: "Quero garantir meu guia",
    checkout: "https://pay.kiwify.com.br/Y3jYzH7",
    included: "Ver o que me espera",
    access: "Acesso digital",
    secure: "Compra segura",
    updated: "Conteúdo atualizado",
  },

  EN: {
    location: "Rio de Janeiro · Brazil",
    title: (
      <>
        Discover Rio de Janeiro
        <br />
        like someone who lives
        <br />
        the city.
      </>
    ),
    description:
      "A pocket guide with experiences, places and stories selected for you to discover Rio beyond the traditional routes.",
    buy: "Get my guide",
    checkout: "https://pay.kiwify.com/jc86map",
    included: "See what awaits me",
    access: "Digital access",
    secure: "Secure purchase",
    updated: "Updated content",
  },

  ES: {
    location: "Río de Janeiro · Brasil",
    title: (
      <>
        Descubre Río de Janeiro
        <br />
        como quien vive
        <br />
        la ciudad.
      </>
    ),
    description:
      "Una guía de bolsillo con experiencias, lugares e historias seleccionadas para descubrir Río más allá de las rutas tradicionales.",
    buy: "Quiero mi guía",
    checkout: "https://pay.kiwify.com/6jXfr1L",
    included: "Ver qué me espera",
    access: "Acceso digital",
    secure: "Compra segura",
    updated: "Contenido actualizado",
  },
};

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="text-[20px] font-light leading-none transition-transform duration-300 group-hover:translate-x-1"
    >
      →
    </span>
  );
}

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="inicio"
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-[#111] text-white"
    >
      {/* IMAGEM */}
      <Image
        src={heroImage}
        alt="Vista aérea da praia de Copacabana, no Rio de Janeiro"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* ESCURECIMENTO */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.86)_0%,rgba(0,0,0,.65)_22%,rgba(0,0,0,.25)_48%,rgba(0,0,0,.03)_78%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.84)_0%,rgba(0,0,0,.34)_27%,rgba(0,0,0,.03)_58%)]" />

      {/* BLOCO COMPLETO */}
      <div
        className="
          absolute
          bottom-[1.5cm]
          left-[1cm]
          right-[1cm]
          z-20
          flex
          flex-col
          items-start
        "
      >
        {/* LOCALIZAÇÃO */}
        <div className="flex items-center gap-3">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-[20px] w-[20px] shrink-0"
            aria-hidden="true"
          >
            <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
          </svg>

          <span className="text-[12px] font-semibold uppercase tracking-[.16em] text-[#d5ad70] sm:text-[14px]">
            {t.location}
          </span>
        </div>

        {/* ESPAÇO ENTRE LOCALIZAÇÃO E COMPOSIÇÃO */}
        <div className="mt-6 lg:mt-[27px]">

          {/* 
            COMPOSIÇÃO
            Todos os elementos abaixo possuem
            EXATAMENTE 0,35cm de distância entre si.
          */}
          <div className="flex flex-col items-start gap-[0.35cm]">

            {/* TÍTULO */}
            <h1
              className="
                max-w-[760px]
                font-sans
                text-[clamp(42px,11vw,64px)]
                font-normal
                uppercase
                leading-[1.07]
                tracking-[-.025em]
                text-[#f7f4ee]
                lg:text-[clamp(56px,4.05vw,69px)]
                lg:leading-[1.06]
              "
            >
              {t.title}
            </h1>

            {/* LINHA */}
            <div className="h-[2px] w-[78px] bg-[#bd9257]" />

            {/* DESCRIÇÃO */}
            <p
              className="
                max-w-[540px]
                font-sans
                text-[15px]
                leading-[1.65]
                text-[#f5f1e9]
                sm:text-[18px]
                lg:text-[20px]
                lg:leading-[1.6]
              "
            >
              {t.description}
            </p>

            {/* BOTÕES */}
            <div
              className="
                flex
                flex-col
                items-start
                gap-5
                sm:flex-row
                sm:items-center
                sm:gap-10
              "
            >
              {/* BOTÃO PRINCIPAL */}
              <a
                href={t.checkout}
                onClick={() => trackBeginCheckout(language, t.checkout)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ paddingLeft: "1cm", paddingRight: "0.5cm" }}
                className="
                  group
                  flex
                  h-[69px]
                  w-full
                  max-w-[375px]
                  items-center
                  justify-between
                  rounded-[2px]
                  bg-[#ad824d]
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[.14em]
                  transition-colors
                  duration-300
                  hover:bg-[#bd9257]
                  lg:w-[375px]
                "
              >
                <span className="whitespace-nowrap">{t.buy}</span>
                <Arrow />
              </a>

              {/* LINK SECUNDÁRIO */}
              <a
                href="#o-que-inclui"
                className="
                  group
                  flex
                  h-[52px]
                  items-center
                  gap-7
                  border-b
                  border-[#bd9257]
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[.14em]
                  transition-opacity
                  hover:opacity-70
                "
              >
                <span>{t.included}</span>
                <Arrow />
              </a>
            </div>

            {/* BENEFÍCIOS */}
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-x-4
                gap-y-3
                text-[10px]
                font-medium
                uppercase
                tracking-[.1em]
                text-white/70
                lg:text-[11px]
              "
            >
              {/* ACESSO DIGITAL */}
              <div className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-[18px] w-[18px] text-[#b98b4c]"
                  aria-hidden="true"
                >
                  <rect
                    x="5"
                    y="9"
                    width="14"
                    height="11"
                    rx="1"
                  />
                  <path d="M8 9V6a4 4 0 0 1 8 0v3" />
                </svg>

                <span>{t.access}</span>
              </div>

              <span className="text-white/30">·</span>

              {/* COMPRA SEGURA */}
              <div className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-[19px] w-[19px] text-[#b98b4c]"
                  aria-hidden="true"
                >
                  <path d="M12 3 19 6v5c0 4.8-2.8 8.1-7 10-4.2-1.9-7-5.2-7-10V6l7-3Z" />
                  <path d="m9 12 2 2 4-5" />
                </svg>

                <span>{t.secure}</span>
              </div>

              <span className="text-white/30">·</span>

              {/* CONTEÚDO ATUALIZADO */}
              <div className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-[19px] w-[19px] text-[#b98b4c]"
                  aria-hidden="true"
                >
                  <path d="M20 11a8 8 0 1 0 1 4" />
                  <path d="M20 4v7h-7" />
                </svg>

                <span>{t.updated}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
