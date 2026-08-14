"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/language-context";

const translations = {
  PT: {
    title: "O que espera por você dentro do Rio Inside:",
    closing:
      "Eu crio roteiros personalizados com base no seu estilo de viagem, tempo e orçamento pra você viver o melhor do Rio sem perder tempo nem dinheiro.",

    cards: [
      {
        number: "01",
        title: "Os endereços que os cariocas guardam pra si",
        text:
          "Restaurantes, bares e quiosques que você não vai encontrar em nenhuma busca do Google.",
        image: "/images/inside-1.jpeg",
      },
      {
        number: "02",
        title: "A cena local de verdade",
        text:
          "Dos clássicos que resistem ao tempo às novidades que estão ditando o que é o Rio hoje.",
        image: "/images/inside-2.jpeg",
      },
      {
        number: "03",
        title: "Segurança sem paranoia",
        text:
          "Dicas reais de quem circula pela cidade há 5 anos com total tranquilidade, pra você curtir cada momento sem medo.",
        image: "/images/inside-3.jpeg",
      },
      {
        number: "04",
        title:
          "Uma rede de contatos que normalmente só quem tem um amigo carioca consegue",
        text:
          "Motorista particular, transfer, guia, fotógrafo e videomaker, todos de confiança e prontos para elevar a sua experiência.",
        image: "/images/inside-4.jpeg",
      },
      {
        number: "05",
        title:
          "Tudo que você precisaria de meses vivendo aqui para descobrir",
        text:
          "Entrego pra você antes mesmo de pousar.",
        image: "/images/inside-5.jpeg",
      },
    ],
  },

  EN: {
    title: "What awaits you inside Rio Inside:",
    closing:
      "I create personalized itineraries based on your travel style, time and budget so you can experience the best of Rio without wasting time or money.",

    cards: [
      {
        number: "01",
        title: "The addresses cariocas keep to themselves",
        text:
          "Restaurants, bars and beach kiosks you won't find through an ordinary Google search.",
        image: "/images/inside-1.jpeg",
      },
      {
        number: "02",
        title: "The real local scene",
        text:
          "From timeless classics to the new places shaping Rio today.",
        image: "/images/inside-2.jpeg",
      },
      {
        number: "03",
        title: "Safety without paranoia",
        text:
          "Real tips from someone who has moved around the city for years with confidence, so you can enjoy every moment without fear.",
        image: "/images/inside-3.jpeg",
      },
      {
        number: "04",
        title: "A network usually reserved for those with a carioca friend",
        text:
          "Private drivers, transfers, guides, photographers and videomakers you can trust.",
        image: "/images/inside-4.jpeg",
      },
      {
        number: "05",
        title: "What would take months of living here to discover",
        text:
          "Delivered to you before you even land.",
        image: "/images/inside-5.jpeg",
      },
    ],
  },

  ES: {
    title: "Lo que te espera dentro de Rio Inside:",
    closing:
      "Creo itinerarios personalizados según tu estilo de viaje, tiempo y presupuesto para que vivas lo mejor de Río sin perder tiempo ni dinero.",

    cards: [
      {
        number: "01",
        title: "Los lugares que los cariocas se guardan para sí",
        text:
          "Restaurantes, bares y quioscos que no vas a encontrar en una búsqueda común de Google.",
        image: "/images/inside-1.jpeg",
      },
      {
        number: "02",
        title: "La escena local de verdad",
        text:
          "Desde los clásicos que resisten al tiempo hasta las novedades que marcan el Río de hoy.",
        image: "/images/inside-2.jpeg",
      },
      {
        number: "03",
        title: "Seguridad sin paranoia",
        text:
          "Consejos reales de quien circula por la ciudad hace años con total tranquilidad.",
        image: "/images/inside-3.jpeg",
      },
      {
        number: "04",
        title: "Una red de contactos que normalmente solo consigue quien tiene un amigo carioca",
        text:
          "Chofer privado, transfer, guía, fotógrafo y videomaker de confianza.",
        image: "/images/inside-4.jpeg",
      },
      {
        number: "05",
        title: "Todo lo que tardarías meses viviendo aquí en descubrir",
        text:
          "Te lo entrego antes incluso de aterrizar.",
        image: "/images/inside-5.jpeg",
      },
    ],
  },
};

export default function InsideCards() {
  const { language } = useLanguage();
  const t = translations[language];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % t.cards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [t.cards.length]);

  function goToCard(index: number) {
    setCurrent(index);
  }

  return (
    <section className="inside-cards-section">
      <div className="inside-cards-container">

        <div className="inside-cards-heading">
          <h2>{t.title}</h2>
          <div className="inside-cards-heading-line" />
        </div>

        <div className="inside-cards-viewport">
          <div
            className="inside-cards-track"
            style={{
              transform: `translateX(calc(-${current} * (33.333% + 16px)))`,
            }}
          >
            {t.cards.map((card) => (
              <article className="inside-card" key={card.number}>

                <div
                  className="inside-card-image"
                  style={{
                    backgroundImage: `url('${card.image}')`,
                  }}
                />

                <div className="inside-card-content">

                  <span className="inside-card-number">
                    {card.number}
                  </span>

                  <h3>{card.title}</h3>

                  <p>{card.text}</p>

                </div>

              </article>
            ))}
          </div>
        </div>

        <div className="inside-cards-dots">
          {t.cards.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Card ${index + 1}`}
              className={`inside-cards-dot ${
                current === index ? "active" : ""
              }`}
              onClick={() => goToCard(index)}
            />
          ))}
        </div>

        <p className="inside-cards-closing">
          {t.closing}
        </p>

      </div>
    </section>
  );
}