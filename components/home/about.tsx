"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/language-context";

const translations = {
  PT: {
    label: "CONHEÇA A RIO INSIDE",
    title1: "UMA ANFITRIÃ AO",
    title2: "SEU LADO, ANTES",
    title3: "MESMO DE VOCÊ CHEGAR.",
    text:
      "Conheça a pessoa que transformou anos vivendo o Rio em um guia para a sua viagem.",
    badges: ["VIVÊNCIA REAL", "CURADORIA LOCAL", "ESCOLHAS CONFIÁVEIS"],
    button: "CONHECER O GUIA",
    checkout: "https://pay.kiwify.com.br/Y3jYzH7",
    play: "Reproduzir vídeo",
    video: "/videos/quem-somos-pt.MP4",
  },

  EN: {
    label: "MEET RIO INSIDE",
    title1: "A HOST BY",
    title2: "YOUR SIDE, BEFORE",
    title3: "YOU EVEN ARRIVE.",
    text:
      "Meet the person who turned years of living in Rio into a guide for your trip.",
    badges: ["REAL EXPERIENCE", "LOCAL CURATION", "TRUSTED CHOICES"],
    button: "DISCOVER THE GUIDE",
    checkout: "https://pay.kiwify.com/jc86map",
    play: "Play video",
    video: "/videos/quem-somos-en.MP4",
  },

  ES: {
    label: "CONOCE RIO INSIDE",
    title1: "UNA ANFITRIONA A",
    title2: "TU LADO, ANTES",
    title3: "INCLUSO DE QUE LLEGUES.",
    text:
      "Conoce a la persona que transformó años viviendo Río en una guía para tu viaje.",
    badges: ["EXPERIENCIA REAL", "CURADURÍA LOCAL", "ELECCIONES CONFIABLES"],
    button: "CONOCER LA GUÍA",
    checkout: "https://pay.kiwify.com/6jXfr1L",
    play: "Reproducir vídeo",
    video: "/videos/quem-somos-es.MP4",
  },
};

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.pause();
    video.load();
    setPlaying(false);
  }, [language]);

  function toggleVideo() {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  return (
    <section id="quem-somos" className="about-section">
      <div className="about-container">

        <span className="about-label">
          {t.label}
        </span>

        <div className="about-content">

          {/* CELULAR + VÍDEO */}
          <div className="about-phone-area">

            <div className="about-phone">

              <div className="about-phone-island" />

              <video
                ref={videoRef}
                key={language}
                className="about-video"
                src={t.video}
                playsInline
                preload="metadata"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
                onClick={toggleVideo}
              />

              {!playing && (
                <button
                  type="button"
                  className="about-play"
                  onClick={toggleVideo}
                  aria-label={t.play}
                >
                  <span />
                </button>
              )}

            </div>

          </div>

          {/* TEXTO */}
          <div className="about-text">

            <div className="about-copy">

              <h2>
                {t.title1}
                <br />
                {t.title2}
                <br />
                {t.title3}
              </h2>

              <p>
                {t.text}
              </p>

              <div className="about-badges" aria-label={t.badges.join(", ")}>
                {t.badges.map((badge) => (
                  <span key={badge}>{badge}</span>
                ))}
              </div>

              <a
                className="about-guide-button"
                href="#comprar"
              >
                <span>{t.button}</span>
                <span aria-hidden="true">↗</span>
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
