"use client";

import { useLanguage } from "@/context/language-context";
import { trackBeginCheckout } from "@/lib/analytics";

const content = {
  PT: {
    installment: "12x de",
    price: "R$7,23",
    cash: "ou R$69,90 à vista",
    button: "QUERO GARANTIR MEU GUIA",
    secure:
      "Compra 100% segura. Receba seu acesso imediatamente após a confirmação do pagamento.",
    checkout: "https://pay.kiwify.com.br/Y3jYzH7",
  },

  EN: {
    installment: "",
    price: "$15",
    cash: "one-time payment",
    button: "GET MY GUIDE NOW",
    secure:
      "100% secure purchase. Get immediate access after payment confirmation.",
    checkout: "https://pay.kiwify.com/jc86map",
  },

  ES: {
    installment: "",
    price: "$15",
    cash: "pago único",
    button: "QUIERO MI GUÍA",
    secure:
      "Compra 100% segura. Recibe acceso inmediato después de la confirmación del pago.",
    checkout: "https://pay.kiwify.com/6jXfr1L",
  },
};

export default function PurchaseCta() {
  const { language } = useLanguage();

  const t = content[language] ?? content.PT;

  return (
    <section className="purchase-cta">
      <div className="purchase-cta-box">

        <div className="purchase-cta-content">

          <div className="purchase-cta-price">
            {t.installment && (
              <span className="purchase-cta-installment">
                {t.installment}
              </span>
            )}

            <strong>{t.price}</strong>
          </div>

          <p className="purchase-cta-cash">
            {t.cash}
          </p>

          <a
            href={t.checkout}
            onClick={() => trackBeginCheckout(language, t.checkout)}
            target="_blank"
            rel="noopener noreferrer"
            className="purchase-cta-button"
          >
            <span>{t.button}</span>
            <span className="purchase-cta-arrow">→</span>
          </a>

          <p className="purchase-cta-secure">
            <span className="purchase-cta-check">✓</span>
            {t.secure}
          </p>

        </div>

      </div>
    </section>
  );
}
