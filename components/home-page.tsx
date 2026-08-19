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
import { LanguageProvider, type Language } from "@/context/language-context";

export default function HomePage({ language }: { language: Language }) {
  return (
    <LanguageProvider initialLanguage={language}>
      <main>
        <Header />
        <Hero />
        <EbookIntro />
        <FinalGallery />
        <About />
        <InsideExperience />
        <AboutStory />
        <BonusSection />
        <FeedbackSection />
        <PurchaseCta />
        <GuaranteeSection />
        <FaqSection />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
