"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "@/context/language-context";

const translations = {
  PT: {
    title: "O QUE ESPERA POR VOCÊ DENTRO DO RIO INSIDE:",

    cards: [
      {
        number: "01",
        title: "Os endereços que os cariocas guardam pra si",
        text:
          "Restaurantes, bares e quiosques que você não vai encontrar em nenhuma busca do Google.",
      },
      {
        number: "02",
        title: "A cena local de verdade",
        text:
          "Dos clássicos que resistem ao tempo às novidades que estão ditando o que é o Rio hoje.",
      },
      {
        number: "03",
        title: "Segurança sem paranoia",
        text:
          "Dicas reais de quem circula pela cidade há 5 anos com total tranquilidade, pra você curtir cada momento sem medo.",
      },
      {
        number: "04",
        title:
          "Uma rede de contatos que normalmente só quem tem um amigo carioca consegue",
        text:
          "Motorista particular, transfer, guia, fotógrafo e videomaker, todos de confiança e prontos para elevar a sua experiência.",
      },
      {
        number: "05",
        title:
          "Tudo que você precisaria de meses vivendo aqui para descobrir",
        text:
          "Entrego pra você antes mesmo de pousar.",
      },
    ],

    closingBefore:
      "Eu crio roteiros personalizados com base no seu ",
    closingHighlight1: "ESTILO DE VIAGEM",
    closingMiddle: ", ",
    closingHighlight2: "TEMPO E ORÇAMENTO",
    closingAfter:
      " pra você viver o melhor do Rio sem perder tempo nem dinheiro.",
  },

  EN: {
    title: "WHAT AWAITS YOU INSIDE RIO INSIDE:",

    cards: [
      {
        number: "01",
        title: "The places cariocas keep to themselves",
        text:
          "Restaurants, bars and beach kiosks you won't find in an ordinary Google search.",
      },
      {
        number: "02",
        title: "The real local scene",
        text:
          "From timeless classics to the new places shaping Rio today.",
      },
      {
        number: "03",
        title: "Safety without paranoia",
        text:
          "Real tips from someone who has moved around the city for years with confidence, so you can enjoy every moment without fear.",
      },
      {
        number: "04",
        title:
          "A network usually reserved for those with a carioca friend",
        text:
          "Private drivers, transfers, guides, photographers and videomakers you can trust.",
      },
      {
        number: "05",
        title:
          "What would take months of living here to discover",
        text:
          "Delivered to you before you even land.",
      },
    ],

    closingBefore:
      "I create personalized itineraries based on your ",
    closingHighlight1: "TRAVEL STYLE",
    closingMiddle: ", ",
    closingHighlight2: "TIME AND BUDGET",
    closingAfter:
      " so you can experience the best of Rio without wasting time or money.",
  },

  ES: {
    title: "LO QUE TE ESPERA DENTRO DE RIO INSIDE:",

    cards: [
      {
        number: "01",
        title:
          "Los lugares que los cariocas se guardan para sí",
        text:
          "Restaurantes, bares y quioscos que no vas a encontrar en una búsqueda común de Google.",
      },
      {
        number: "02",
        title: "La escena local de verdad",
        text:
          "Desde los clásicos que resisten al tiempo hasta las novedades que están definiendo el Río de hoy.",
      },
      {
        number: "03",
        title: "Seguridad sin paranoia",
        text:
          "Consejos reales de quien circula por la ciudad hace años con total tranquilidad, para que disfrutes cada momento sin miedo.",
      },
      {
        number: "04",
        title:
          "Una red de contactos que normalmente solo consigue quien tiene un amigo carioca",
        text:
          "Chofer privado, transfer, guía, fotógrafo y videomaker, todos de confianza y listos para elevar tu experiencia.",
      },
      {
        number: "05",
        title:
          "Todo lo que necesitarías meses viviendo aquí para descubrir",
        text:
          "Te lo entrego antes incluso de aterrizar.",
      },
    ],

    closingBefore:
      "Creo itinerarios personalizados según tu ",
    closingHighlight1: "ESTILO DE VIAJE",
    closingMiddle: ", ",
    closingHighlight2: "TIEMPO Y PRESUPUESTO",
    closingAfter:
      " para que vivas lo mejor de Río sin perder tiempo ni dinero.",
  },
};

export default function InsideExperience() {
  const { language } = useLanguage();
  const t = translations[language];

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [transitionEnabled, setTransitionEnabled] =
    useState(true);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const loopCards = useMemo(
    () => [...t.cards, ...t.cards],
    [t.cards]
  );

  useEffect(() => {
    setCurrent(0);
    setTransitionEnabled(false);

    const timeout = setTimeout(() => {
      setTransitionEnabled(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, [language]);

  /* PASSAGEM AUTOMÁTICA */
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [paused]);

  function handleTransitionEnd() {
    if (current >= t.cards.length) {
      setTransitionEnabled(false);
      setCurrent(current - t.cards.length);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
    }
  }

  function goToCard(index: number) {
    setTransitionEnabled(true);
    setCurrent(index);
  }

  /* =========================================================
     SWIPE MOBILE
  ========================================================= */

  function handleTouchStart(
    event: React.TouchEvent<HTMLDivElement>
  ) {
    setPaused(true);

    touchEndX.current = null;
    touchStartX.current = event.touches[0].clientX;
  }

  function handleTouchMove(
    event: React.TouchEvent<HTMLDivElement>
  ) {
    touchEndX.current = event.touches[0].clientX;
  }

  function handleTouchEnd() {
    if (
      touchStartX.current === null ||
      touchEndX.current === null
    ) {
      setPaused(false);
      return;
    }

    const distance =
      touchStartX.current - touchEndX.current;

    const minimumSwipe = 45;

    /* dedo para esquerda → próximo */
    if (distance > minimumSwipe) {
      setTransitionEnabled(true);
      setCurrent((prev) => prev + 1);
    }

    /* dedo para direita → anterior */
    if (distance < -minimumSwipe) {
      setTransitionEnabled(true);

      setCurrent((prev) => {
        if (prev <= 0) {
          return t.cards.length - 1;
        }

        return prev - 1;
      });
    }

    touchStartX.current = null;
    touchEndX.current = null;

    setTimeout(() => {
      setPaused(false);
    }, 500);
  }

  const activeDot =
    current % t.cards.length;

  return (
    <section id="o-que-inclui" className="inside-experience">

      <div className="inside-experience-bg" />
      <div className="inside-experience-overlay" />
      <div className="inside-experience-wash" />

      <div className="inside-experience-container">

        {/* TÍTULO */}
        <div className="inside-experience-heading">
          <h2>{t.title}</h2>
        </div>

        {/* CARROSSEL */}
        <div
          className="inside-experience-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

          <div
            className="inside-experience-viewport"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >

            <div
              className="inside-experience-track"
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(calc(-${current} * (29vw + 18px)))`,

                transition: transitionEnabled
                  ? "transform 900ms cubic-bezier(0.22, 1, 0.36, 1)"
                  : "none",
              }}
            >

              {loopCards.map((card, index) => (
                <article
                  key={`${card.number}-${index}`}
                  className="inside-experience-card"
                >
                  <span className="inside-experience-number">
                    {card.number}
                  </span>

                  <div className="inside-experience-card-line" />

                  <h3>{card.title}</h3>

                  <p>{card.text}</p>
                </article>
              ))}

            </div>

          </div>

          {/* BOLINHAS */}
          <div className="inside-experience-dots">

            {t.cards.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Card ${index + 1}`}
                onClick={() => goToCard(index)}
                className={`inside-experience-dot ${
                  activeDot === index
                    ? "active"
                    : ""
                }`}
              />
            ))}

          </div>

        </div>

        {/* FRASE FINAL */}
        <div className="inside-experience-closing">
          <p>
            {t.closingBefore}

            <strong>
              {t.closingHighlight1}
            </strong>

            {t.closingMiddle}

            <strong>
              {t.closingHighlight2}
            </strong>

            {t.closingAfter}
          </p>
        </div>

      </div>
    </section>
  );
}
