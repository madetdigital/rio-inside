import Header from "@/components/layout/header";

import Hero from "@/components/home/hero";
import EbookIntro from "@/components/EbookIntro";
import About from "@/components/home/about";

import InsideExperience from "@/components/home/inside-experience";
import AboutStory from "@/components/home/about-story";
import BonusSection from "@/components/home/bonus-section";

import FeedbackSection from "@/components/home/feedback-section";
import PurchaseCta from "@/components/PurchaseCta";
import GuaranteeSection from "@/components/guarantee-section";
import FaqSection from "@/components/faq-section";

import FinalGallery from "@/components/home/final-gallery";

import Footer from "@/components/footer";

import { LanguageProvider } from "@/context/language-context";

export default function Home() {
  return (
    <LanguageProvider>
      <main>

        {/* HEADER */}
        <Header />


        {/* 01 — CAPA */}
        <Hero />


        {/* 02 — EBOOK */}
        <EbookIntro />


        {/* 03 — GALERIA */}
        <FinalGallery />


        {/* 04 — SOBRE / ANFITRIÃ CARIOCA */}
        <About />


        {/* 05 — NOVA TELA
            "VOCÊ QUE QUER CONHECER O RIO DE VERDADE."
            Vamos criar esse componente em seguida.
        */}


        {/* 06 — O QUE VOCÊ ENCONTRA NO RIO INSIDE */}
        <InsideExperience />


        {/* 07 — HISTÓRIA / EXPERIÊNCIA */}
        <AboutStory />


        {/* 08 — BÔNUS */}
        <BonusSection />


        {/* 09 — FEEDBACKS */}
        <FeedbackSection />


        {/* 10 — COMPRA */}
        <PurchaseCta />


        {/* 11 — GARANTIA */}
        <GuaranteeSection />


        {/* 12 — PERGUNTAS FREQUENTES */}
        <FaqSection />


        {/* 13 — RODAPÉ */}
        <Footer />

      </main>
    </LanguageProvider>
  );
}
