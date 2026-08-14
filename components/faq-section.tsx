"use client";

import { useLanguage } from "@/context/language-context";

const translations = {
  PT: {
    title: ["PERGUNTAS", "FREQUENTES"],
    subtitle: "Tudo o que você precisa saber antes de garantir o seu guia.",
    items: [
      { question: "Para quem é esse guia?", answers: ["Para quem está planejando uma viagem ao Rio e quer aproveitar cada dia com as melhores escolhas, sem improvisar e sem cair em cilada.", "Para quem já foi ao Rio e quer, dessa vez, uma experiência mais autêntica, longe do roteiro turístico de sempre. E também para quem vem de fora do país e quer entender a cidade de verdade, com o olhar de quem vive aqui.", "Se você quer o melhor do Rio com mais segurança e menos desperdício de tempo, esse guia foi feito pra você."] },
      { question: "O conteúdo é atualizado?", answers: ["Sim. O guia reúne lugares que fazem parte da rotina de quem vive no Rio hoje — não é uma lista tirada de sites desatualizados.", "A curadoria é baseada em experiências reais e recentes na cidade."] },
      { question: "Qual é o perfil dos lugares indicados?", answers: ["Uma mistura dos clássicos cariocas que todo mundo deveria conhecer com as novidades da cena local que ainda não chegaram em nenhum guia por aí.", "Não é uma lista de lugares baratos nem de lugares caros — é uma seleção de lugares que valem a pena. O critério é sempre a experiência."] },
      { question: "O guia fala só de comida e bebida?", answers: ["Não só. Além da curadoria de restaurantes, bares e quiosques, o guia traz dicas práticas de segurança com o olhar de quem mora no Rio há anos.", "E vai além: você também recebe uma lista de contatos de confiança — transfer, motorista particular para trechos curtos e longos, guia turístico e até fotógrafo e videomaker.", "Tudo para a sua experiência no Rio ser completa do começo ao fim."] },
      { question: "Como vou receber o guia depois da compra?", answers: ["O acesso é imediato e 100% digital.", "Assim que a compra for confirmada, você já pode começar a explorar o conteúdo de qualquer dispositivo, na hora que quiser."] },
    ],
  },
  EN: {
    title: ["FREQUENTLY ASKED", "QUESTIONS"],
    subtitle: "Everything you need to know before getting your guide.",
    items: [
      { question: "Who is this guide for?", answers: ["For anyone planning a trip to Rio who wants to make the best choices every day, without improvising or falling into tourist traps.", "For those who have already visited Rio and now want a more authentic experience, away from the usual tourist itinerary. It is also for international visitors who want to truly understand the city through the eyes of someone who lives here.", "If you want the best of Rio with greater confidence and less wasted time, this guide was made for you."] },
      { question: "Is the content updated?", answers: ["Yes. The guide features places that are part of everyday life for people living in Rio today — it is not a list copied from outdated websites.", "The curation is based on real and recent experiences in the city."] },
      { question: "What kind of places are recommended?", answers: ["A mix of Rio classics everyone should know and new local spots that have not yet made it into other guides.", "It is not a list of cheap or expensive places — it is a selection of places that are truly worth it. The experience always comes first."] },
      { question: "Is the guide only about food and drinks?", answers: ["No. In addition to curated restaurants, bars and beach kiosks, the guide includes practical safety advice from someone who has lived in Rio for years.", "It goes further: you also receive a list of trusted contacts for transfers, private drivers, tour guides, photographers and videomakers.", "Everything you need for a complete Rio experience from beginning to end."] },
      { question: "How will I receive the guide after purchasing?", answers: ["Access is immediate and 100% digital.", "As soon as your purchase is confirmed, you can explore the content on any device, whenever you want."] },
    ],
  },
  ES: {
    title: ["PREGUNTAS", "FRECUENTES"],
    subtitle: "Todo lo que necesitas saber antes de conseguir tu guía.",
    items: [
      { question: "¿Para quién es esta guía?", answers: ["Para quienes están planeando un viaje a Río y quieren aprovechar cada día tomando las mejores decisiones, sin improvisar ni caer en trampas para turistas.", "Para quienes ya han visitado Río y esta vez quieren una experiencia más auténtica, lejos del itinerario turístico de siempre. También para quienes vienen de otro país y quieren entender la ciudad de verdad, con la mirada de quien vive aquí.", "Si quieres disfrutar lo mejor de Río con más seguridad y menos pérdida de tiempo, esta guía fue hecha para ti."] },
      { question: "¿El contenido está actualizado?", answers: ["Sí. La guía reúne lugares que forman parte de la vida cotidiana de quienes viven hoy en Río; no es una lista tomada de sitios web desactualizados.", "La selección se basa en experiencias reales y recientes en la ciudad."] },
      { question: "¿Qué tipo de lugares se recomiendan?", answers: ["Una combinación de clásicos cariocas que todos deberían conocer y novedades de la escena local que todavía no aparecen en otras guías.", "No es una lista de lugares baratos ni caros: es una selección de lugares que realmente valen la pena. El criterio siempre es la experiencia."] },
      { question: "¿La guía habla solo de comida y bebida?", answers: ["No. Además de la selección de restaurantes, bares y quioscos, la guía incluye consejos prácticos de seguridad con la mirada de quien vive en Río desde hace años.", "Y va más allá: también recibes una lista de contactos de confianza para traslados, conductores privados, guías turísticos, fotógrafos y videomakers.", "Todo para que tu experiencia en Río sea completa de principio a fin."] },
      { question: "¿Cómo recibiré la guía después de la compra?", answers: ["El acceso es inmediato y 100% digital.", "En cuanto se confirme la compra, podrás empezar a explorar el contenido desde cualquier dispositivo, cuando quieras."] },
    ],
  },
};

export default function FaqSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section key={language} className="rio-faq">
      <div className="rio-faq-overlay" />
      <div className="rio-faq-container">
        <div className="rio-faq-heading">
          <span className="rio-faq-eyebrow">RIO INSIDE</span>
          <h2>{t.title[0]}<br />{t.title[1]}</h2>
          <p>{t.subtitle}</p>
        </div>
        <div className="rio-faq-list">
          {t.items.map((item) => (
            <details className="rio-faq-item" key={item.question}>
              <summary><span>{item.question}</span><span className="rio-faq-plus" /></summary>
              <div className="rio-faq-answer">
                {item.answers.map((answer) => <p key={answer}>{answer}</p>)}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
