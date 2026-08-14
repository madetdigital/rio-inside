"use client";

import { useLanguage } from "@/context/language-context";

const translations = {
  PT: {
    title: "O Rio pode ser mágico… se você souber por onde começar.",

    mainText:
      "Hoje, depois de anos vivendo tudo isso na prática, eu reuni os melhores lugares, experiências e dicas em um guia totalmente personalizado pra você.",

    finalText:
      "NADA DE ROTEIROS GENÉRICOS DA INTERNET.\nNADA DE PERDER TEMPO OU DINHEIRO COM ESCOLHAS ERRADAS.",
  },

  EN: {
    title: "Rio can be magical… if you know where to start.",

    mainText:
      "Today, after years of experiencing all of this firsthand, I’ve gathered the best places, experiences and tips into a guide completely personalized for you.",

    finalText:
      "No generic itineraries from the internet.\nNo wasting time or money on the wrong choices.",
  },

  ES: {
    title: "Río puede ser mágico… si sabes por dónde empezar.",

    mainText:
      "Hoy, después de años viviendo todo esto en la práctica, reuní los mejores lugares, experiencias y consejos en una guía totalmente personalizada para ti.",

    finalText:
      "Nada de itinerarios genéricos de internet.\nNada de perder tiempo o dinero con decisiones equivocadas.",
  },
};

export default function AboutCuration() {
  const { language } = useLanguage();

  const t = translations[language];

  return (
    <section className="about-curation">
      <div className="about-curation-container">

        {/* TÍTULO */}
        <h2 className="about-curation-title">
          {t.title}
        </h2>

        {/* LINHA */}
        <div className="about-curation-line" />

        {/* TEXTO PRINCIPAL */}
        <p className="about-curation-description">
          {t.mainText}
        </p>

        {/* TEXTO FINAL */}
        <p className="about-curation-final">
          {t.finalText}
        </p>

      </div>
    </section>
  );
}