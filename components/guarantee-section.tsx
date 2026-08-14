"use client";

import { useLanguage } from "@/context/language-context";

const translations = {
  PT: {
    eyebrow: "GARANTIA RIO INSIDE",
    title1: "Compra sem risco,",
    title2: "confiança total.",
    paragraph1: "Eu tenho tanta certeza do que esse guia entrega que a garantia existe não por obrigação, mas porque eu genuinamente não quero que você fique com algo que não te sirva.",
    guarantee: "7 dias de garantia incondicional.",
    paragraph2: " Se por qualquer motivo o guia não atender o que você esperava, basta solicitar o reembolso direto pela plataforma e 100% do valor é devolvido. Sem perguntas, sem julgamento, sem burocracia.",
    paragraph3: "Mas sabe o que eu acredito de verdade? Que depois de abrir esse guia, você vai querer ir logo pro Rio.",
    secure: "Compra 100% segura. Receba seu acesso imediatamente após a confirmação do pagamento.",
  },
  EN: {
    eyebrow: "RIO INSIDE GUARANTEE",
    title1: "Risk-free purchase,",
    title2: "complete confidence.",
    paragraph1: "I am so confident in what this guide delivers that the guarantee exists not out of obligation, but because I genuinely do not want you to keep something that does not work for you.",
    guarantee: "7-day unconditional guarantee.",
    paragraph2: " If for any reason the guide does not meet your expectations, simply request a refund directly through the platform and 100% of the amount will be returned. No questions, no judgment, no bureaucracy.",
    paragraph3: "But do you know what I truly believe? After opening this guide, you will want to head straight to Rio.",
    secure: "100% secure purchase. Receive access immediately after payment confirmation.",
  },
  ES: {
    eyebrow: "GARANTÍA RIO INSIDE",
    title1: "Compra sin riesgo,",
    title2: "confianza total.",
    paragraph1: "Estoy tan segura de lo que ofrece esta guía que la garantía existe no por obligación, sino porque sinceramente no quiero que te quedes con algo que no te sirva.",
    guarantee: "7 días de garantía incondicional.",
    paragraph2: " Si por cualquier motivo la guía no cumple con tus expectativas, solo tienes que solicitar el reembolso directamente en la plataforma y recibirás el 100% del importe. Sin preguntas, sin juicios y sin burocracia.",
    paragraph3: "Pero ¿sabes lo que creo de verdad? Que después de abrir esta guía, querrás irte enseguida a Río.",
    secure: "Compra 100% segura. Recibe tu acceso inmediatamente después de la confirmación del pago.",
  },
};

export default function GuaranteeSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section key={language} className="rio-guarantee">
      <div className="rio-guarantee-content">
        <span className="rio-guarantee-eyebrow">{t.eyebrow}</span>
        <h2>{t.title1}<br />{t.title2}</h2>
        <div className="rio-guarantee-line"><span /><i>✦</i><span /></div>
        <div className="rio-guarantee-text">
          <p>{t.paragraph1}</p>
          <p><strong>{t.guarantee}</strong>{t.paragraph2}</p>
          <p>{t.paragraph3}</p>
        </div>
        <small className="rio-guarantee-secure"><span>✓</span>{t.secure}</small>
      </div>
    </section>
  );
}
