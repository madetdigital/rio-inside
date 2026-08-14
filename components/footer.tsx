"use client";

import { useLanguage } from "@/context/language-context";

const translations = {
  PT: {
    line1: "O Rio por dentro.", line2: "Como quem é daqui.", follow: "SIGA O RIO INSIDE",
    copyright: "© 2026 RIO INSIDE. TODOS OS DIREITOS RESERVADOS.", terms: "TERMOS DE USO",
    privacy: "POLÍTICA DE PRIVACIDADE", location: "RIO DE JANEIRO · BRASIL",
  },
  EN: {
    line1: "Rio from the inside.", line2: "Like someone who lives here.", follow: "FOLLOW RIO INSIDE",
    copyright: "© 2026 RIO INSIDE. ALL RIGHTS RESERVED.", terms: "TERMS OF USE",
    privacy: "PRIVACY POLICY", location: "RIO DE JANEIRO · BRAZIL",
  },
  ES: {
    line1: "Río desde dentro.", line2: "Como quien vive aquí.", follow: "SIGUE A RIO INSIDE",
    copyright: "© 2026 RIO INSIDE. TODOS LOS DERECHOS RESERVADOS.", terms: "TÉRMINOS DE USO",
    privacy: "POLÍTICA DE PRIVACIDAD", location: "RÍO DE JANEIRO · BRASIL",
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer key={language} className="rio-footer">
      <div className="rio-footer-main">
        <div className="rio-footer-brand">
          <span className="rio-footer-label">RIO INSIDE</span>
          <h2>{t.line1}<br />{t.line2}</h2>
        </div>
        <div className="rio-footer-social">
          <span className="rio-footer-label">{t.follow}</span>
          <a href="https://www.instagram.com/rio.inside?igsh=MWs3OWx0c2M4YmtvYg==" target="_blank" rel="noopener noreferrer">
            <span>@rio.inside</span><span className="rio-footer-arrow">↗</span>
          </a>
        </div>
      </div>
      <div className="rio-footer-divider" />
      <div className="rio-footer-bottom">
        <span className="rio-footer-copyright">{t.copyright}</span>
        <div className="rio-footer-legal">
          <a href="/termos-de-uso">{t.terms}</a><span>•</span>
          <a href="/politica-de-privacidade">{t.privacy}</a>
        </div>
        <span className="rio-footer-location">{t.location}</span>
      </div>
    </footer>
  );
}
