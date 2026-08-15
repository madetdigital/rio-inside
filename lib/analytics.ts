import { sendGAEvent } from "@next/third-parties/google";

import type { Language } from "@/context/language-context";

const checkoutLanguages: Record<Language, "pt" | "en" | "es"> = {
  PT: "pt",
  EN: "en",
  ES: "es",
};

export function trackBeginCheckout(
  language: Language,
  checkoutUrl: string,
) {
  try {
    sendGAEvent("event", "begin_checkout", {
      checkout_language: checkoutLanguages[language],
      checkout_provider: "kiwify",
      checkout_url: checkoutUrl,
    });
  } catch {
    // Analytics must never prevent the checkout link from opening.
  }
}
