"use client";

import { useLanguage } from "@/context/language-context";

const translations = {
  PT: {
    label: "FEEDBACKS",
    title: "O QUE ESTÃO FALANDO DO RIO INSIDE?",
    description1:
      "Mais do que um guia, uma experiência completa na Cidade Maravilhosa.",
    description2:
      "Veja o que nossos viajantes estão dizendo.",

    images: [
      "/images/feedback-pt-1.jpeg",
      "/images/feedback-pt-2.jpeg",
      "/images/feedback-pt-3.jpeg",
    ],
  },

  EN: {
    label: "FEEDBACKS",
    title: "WHAT ARE PEOPLE SAYING ABOUT RIO INSIDE?",
    description1:
      "More than a guide, a complete experience in Rio de Janeiro.",
    description2:
      "See what our travelers have to say.",

    images: [
      "/images/feedback-en-1.png",
      "/images/feedback-en-2.png",
      "/images/feedback-en-3.png",
    ],
  },

  ES: {
    label: "FEEDBACKS",
    title: "¿QUÉ ESTÁN DICIENDO SOBRE RIO INSIDE?",
    description1:
      "Más que una guía, una experiencia completa en Río de Janeiro.",
    description2:
      "Descubre lo que dicen nuestros viajeros.",

    images: [
      "/images/feedback-es-1.png",
      "/images/feedback-es-2.png",
      "/images/feedback-es-3.png",
    ],
  },
};

export default function FeedbackSection() {
  const { language } = useLanguage();

  const t = translations[language];

  return (
    <section id="feedbacks" className="feedback-section">
      <div className="feedback-container">

        {/* TEXTO SUPERIOR */}
        <div className="feedback-heading">

          <span className="feedback-label">
            {t.label}
          </span>

          <h2>
            {t.title}
          </h2>

          <div className="feedback-divider">
            <span />
            <strong>✦</strong>
            <span />
          </div>

          <div className="feedback-description">
            <p>{t.description1}</p>
            <p>{t.description2}</p>
          </div>

        </div>

        {/* IMAGENS */}
        <div className="feedback-grid">
          {t.images.map((image, index) => (
            <div
              className="feedback-card"
              key={`${language}-${index}`}
            >
              <img
                src={image}
                alt={`Feedback Rio Inside ${index + 1}`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}