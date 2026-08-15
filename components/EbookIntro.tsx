"use client";

import { useLanguage } from "@/context/language-context";
import { trackBeginCheckout } from "@/lib/analytics";

const ebookData = {
  PT: {
    eyebrow: "RIO INSIDE • GUIA DIGITAL",

    titleStart: "Comece sua viagem com o Rio certo nas mãos.",
    titleHighlight: "",

    subtitle: "Este guia foi feito para você se…",

    items: [
      "Está planejando sua primeira viagem ao Rio e quer chegar com tudo resolvido — sem improvisar, sem depender da sorte.",

      "Já foi ao Rio mas sentiu que ficou na superfície e dessa vez quer viver a cidade de verdade, como quem é daqui.",

      "Vem de fora do Brasil e quer ir muito além do cartão-postal, entendendo a alma, o ritmo e os segredos de uma das cidades mais fascinantes do mundo.",

      "Não quer perder tempo pesquisando em dezenas de sites, blogs desatualizados e listas genéricas que poderiam ser de qualquer cidade.",

      "Quer chegar no Rio com a segurança de quem tem uma amiga carioca no ouvido, mostrando o melhor caminho a cada passo.",
    ],

    button: "QUERO GARANTIR MEU GUIA",

    secure: "ACESSO DIGITAL • COMPRA SEGURA",

    productImage: "/images/ebook-product-pt.png",

    checkout: "https://pay.kiwify.com.br/Y3jYzH7",
  },

  EN: {
    eyebrow: "RIO INSIDE • DIGITAL GUIDE",

    titleStart: "Start your journey with the right Rio in your hands.",
    titleHighlight: "",

    subtitle: "This guide was made for you if…",

    items: [
      "You're planning your first trip to Rio and want to arrive with everything figured out — without improvising or relying on luck.",

      "You've already been to Rio but felt like you only scratched the surface and now want to experience the city like a local.",

      "You're coming from outside Brazil and want to go far beyond the postcard, understanding the soul, rhythm and secrets of one of the world's most fascinating cities.",

      "You don't want to waste time searching through dozens of websites, outdated blogs and generic lists that could apply to any city.",

      "You want to arrive in Rio with the confidence of having a carioca friend in your ear, showing you the best way forward every step of the journey.",
    ],

    button: "GET MY GUIDE NOW",

    secure: "DIGITAL ACCESS • SECURE PURCHASE",

    productImage: "/images/ebook-product-en.png",

    checkout: "https://pay.kiwify.com/jc86map",
  },

  ES: {
    eyebrow: "RIO INSIDE • GUÍA DIGITAL",

    titleStart: "Empieza tu viaje con el Río correcto en tus manos.",
    titleHighlight: "",

    subtitle: "Esta guía fue hecha para ti si…",

    items: [
      "Estás planeando tu primer viaje a Río y quieres llegar con todo resuelto — sin improvisar ni depender de la suerte.",

      "Ya has estado en Río pero sentiste que solo conociste la superficie y esta vez quieres vivir la ciudad de verdad, como alguien de aquí.",

      "Vienes de fuera de Brasil y quieres ir mucho más allá de la postal, entendiendo el alma, el ritmo y los secretos de una de las ciudades más fascinantes del mundo.",

      "No quieres perder tiempo buscando en decenas de sitios, blogs desactualizados y listas genéricas que podrían servir para cualquier ciudad.",

      "Quieres llegar a Río con la seguridad de tener una amiga carioca en el oído, mostrándote el mejor camino en cada paso.",
    ],

    button: "QUIERO GARANTIZAR MI GUÍA",

    secure: "ACCESO DIGITAL • COMPRA SEGURA",

    productImage: "/images/ebook-product-es.png",

    checkout: "https://pay.kiwify.com/6jXfr1L",
  },
};

export default function EbookIntro() {
  const { language } = useLanguage();

  const t = ebookData[language];

  return (
    <section id="ebook" className="ebook-sales">

      {/* FOTO DE FUNDO */}
      <div className="ebook-sales-background" />

      {/* FILTRO CLEAN */}
      <div className="ebook-sales-overlay" />

      <div className="ebook-sales-container">

        {/* =====================================================
            TEXTO
        ====================================================== */}

        <div className="ebook-sales-content">

          <p className="ebook-sales-eyebrow">
            {t.eyebrow}
          </p>

          <h2 className="ebook-sales-title">
            <span>{t.titleStart}</span>

            {t.titleHighlight && (
              <strong>{t.titleHighlight}</strong>
            )}
          </h2>

          <div className="ebook-sales-line" />

          <p className="ebook-sales-subtitle">
            {t.subtitle}
          </p>

          <div className="ebook-sales-list">

            {t.items.map((item, index) => (
              <div
                key={index}
                className="ebook-sales-item"
              >

                <span className="ebook-sales-symbol">
                  ✦
                </span>

                <p>{item}</p>

              </div>
            ))}

          </div>

          <div className="ebook-sales-actions">

            <a
              href={t.checkout}
              onClick={() => trackBeginCheckout(language, t.checkout)}
              target="_blank"
              rel="noopener noreferrer"
              className="ebook-sales-button"
            >
              <span>{t.button}</span>

              <span className="ebook-sales-arrow">
                →
              </span>
            </a>

            <p className="ebook-sales-secure">
              {t.secure}
            </p>

          </div>

        </div>


        {/* =====================================================
            MOCKUP QUE VOCÊ VAI CRIAR
        ====================================================== */}

        <div className="ebook-sales-product">

          <img
            key={language}
            src={t.productImage}
            alt="Rio Inside Ebook"
            className="ebook-sales-product-image"
          />

        </div>

      </div>

    </section>
  );
}
