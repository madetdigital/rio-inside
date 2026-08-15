"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/language-context";
import { trackBeginCheckout } from "@/lib/analytics";

const photos = [
  "/images/about-1.jpeg",
  "/images/about-2.jpeg",
  "/images/about-3.jpg",
];

const translations = {
  PT: {
    title: "O olhar de quem vive o Rio, feito para quem quer conhecê-lo de verdade.",

    paragraphs: [
      "Há 5 anos eu me mudei para o Rio sem conhecer absolutamente nada.",

      "Nenhum restaurante. Nenhum bar. Nenhum bairro.",

      "Fui descobrindo tudo no método mais caro que existe: tentativa e erro. Lugares que não valiam o deslocamento, experiências que qualquer carioca te diria pra evitar, tempo e dinheiro que não voltam mais.",

      "Mas também descobri o outro lado, lugares que fazem você entender por que essa cidade vicia. Os quiosques que viram ponto fixo. Os restaurantes que você quer levar todo mundo que visita. As experiências que só quem vive aqui sabe que existem.",

      "Com o tempo, virei a referência do Rio pra todo mundo que conheço. Amigos, amigos de amigos, pessoas que me seguem no Instagram, todo mundo me pedia indicação antes de vir.",

      "E eu sempre pensava: como teria sido a minha chegada se eu tivesse tido isso?",

      "Foi por isso que criei o Rio Inside, uma curadoria real, baseada em anos de vivência, dos lugares e experiências que realmente fazem diferença nessa cidade.",

      "Não é uma lista genérica. Não é o que aparece no Google. É o Rio de quem vive aqui com tudo o que isso significa.",
    ],

    imageLabel: "Ver imagem",
    button: "Quero conhecer esse Rio",
    checkout: "https://pay.kiwify.com.br/Y3jYzH7",
  },

  EN: {
    title: "The perspective of someone who lives in Rio, made for those who want to truly discover it.",

    paragraphs: [
      "Five years ago, I moved to Rio without knowing absolutely anything.",

      "Not a single restaurant. Not a single bar. Not a single neighborhood.",

      "I discovered everything through the most expensive method there is: trial and error. Places that weren't worth the journey, experiences any carioca would tell you to avoid, and time and money you simply can't get back.",

      "But I also discovered the other side — places that make you understand why this city is addictive. The beach kiosks that become your regular spots. The restaurants you want to take everyone who visits. The experiences only those who live here know exist.",

      "Over time, I became everyone's go-to person for Rio. Friends, friends of friends, people who follow me on Instagram — everyone would ask me for recommendations before coming.",

      "And I always thought: what would my arrival have been like if I'd had something like this?",

      "That's why I created Rio Inside: a real curation based on years of living here, featuring the places and experiences that truly make a difference in this city.",

      "It's not a generic list. It's not what comes up on Google. It's the Rio of those who actually live here — with everything that means.",
    ],

    imageLabel: "View image",
    button: "I want to discover this Rio",
    checkout: "https://pay.kiwify.com/jc86map",
  },

  ES: {
    title: "La mirada de quien vive Río, hecha para quien quiere conocerlo de verdad.",

    paragraphs: [
      "Hace 5 años me mudé a Río sin conocer absolutamente nada.",

      "Ningún restaurante. Ningún bar. Ningún barrio.",

      "Fui descubriendo todo con el método más caro que existe: prueba y error. Lugares que no valían el desplazamiento, experiencias que cualquier carioca te diría que evitaras, tiempo y dinero que no vuelven.",

      "Pero también descubrí el otro lado: lugares que te hacen entender por qué esta ciudad es adictiva. Los quioscos que se convierten en lugares habituales. Los restaurantes a los que quieres llevar a todos los que te visitan. Las experiencias que solo quienes viven aquí saben que existen.",

      "Con el tiempo, me convertí en la referencia de Río para todos los que conozco. Amigos, amigos de amigos, personas que me siguen en Instagram: todos me pedían recomendaciones antes de venir.",

      "Y siempre pensaba: ¿cómo habría sido mi llegada si hubiera tenido algo así?",

      "Por eso creé Rio Inside: una selección real, basada en años de experiencia viviendo aquí, de los lugares y experiencias que realmente marcan la diferencia en esta ciudad.",

      "No es una lista genérica. No es lo que aparece en Google. Es el Río de quienes viven aquí, con todo lo que eso significa.",
    ],

    imageLabel: "Ver imagen",
    button: "Quiero conocer este Río",
    checkout: "https://pay.kiwify.com/6jXfr1L",
  },
};

export default function AboutStory() {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((current) => (current + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-story">
      <div className="about-story-container">

        {/* TÍTULO */}
        <div className="about-story-heading">
          <h2>{t.title}</h2>
        </div>

        {/* TEXTO + FOTOS */}
        <div className="about-story-body">

          <div className="about-story-content">
            <div className="about-story-text">

              {t.paragraphs.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}

              <a
                className="about-story-button"
                href={t.checkout}
                onClick={() => trackBeginCheckout(language, t.checkout)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{t.button}</span>
                <span aria-hidden="true">↗</span>
              </a>

            </div>
          </div>

          {/* FOTOS AUTOMÁTICAS */}
          <div className="about-story-carousel">
            <div className="about-story-carousel-frame">

              {photos.map((photo, index) => (
                <div
                  key={photo}
                  className={`about-story-slide ${
                    index === currentPhoto ? "active" : ""
                  }`}
                >
                  <Image
                    src={photo}
                    alt={`Rio de Janeiro ${index + 1}`}
                    fill
                    sizes="(max-width: 780px) 100vw, 45vw"
                    className="about-story-image"
                    priority={index === 0}
                  />
                </div>
              ))}

              <div className="about-story-dots">

                {photos.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`${t.imageLabel} ${index + 1}`}
                    className={`about-story-dot ${
                      index === currentPhoto ? "active" : ""
                    }`}
                    onClick={() => setCurrentPhoto(index)}
                  />
                ))}

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
