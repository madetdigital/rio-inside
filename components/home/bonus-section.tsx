"use client";

import { useLanguage } from "@/context/language-context";

const translations = {
  PT: {
    title: "BÔNUS:",
    text: "DICAS DE SEGURANÇA E ATUALIZAÇÃO PERIÓDICA DO MATERIAL.",
  },

  EN: {
    title: "BONUS:",
    text: "SAFETY TIPS AND PERIODIC CONTENT UPDATES.",
  },

  ES: {
    title: "BONO:",
    text: "CONSEJOS DE SEGURIDAD Y ACTUALIZACIÓN PERIÓDICA DEL MATERIAL.",
  },
};

export default function BonusSection() {
  const { language } = useLanguage();

  const t = translations[language];

  return (
    <section className="bonus-section">
      <div className="bonus-section-pattern" />

      <div className="bonus-section-content">
        <h2 className="bonus-section-title">
          {t.title}
        </h2>

        <div className="bonus-section-divider">
          <span />
          <span className="bonus-section-diamond">✦</span>
          <span />
        </div>

        <p className="bonus-section-text">
          {t.text}
        </p>
      </div>
    </section>
  );
}