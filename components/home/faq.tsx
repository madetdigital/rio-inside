const questions = [
  "O que é o RioInside?",
  "Preciso pagar para usar?",
  "Como funciona o Concierge com IA?",
  "Posso reservar experiências pelo RioInside?",
  "O RioInside está disponível para estrangeiros?",
];

export default function FAQ() {
  return (
    <section className="bg-[#f1efe8] px-6 py-24 text-black md:px-10 md:py-36 lg:px-14">
      <p className="mb-8 text-xs uppercase tracking-[0.18em]">FAQ</p>

      <h2 className="mb-20 text-[13vw] uppercase leading-[0.8] tracking-[-0.07em] md:text-[8vw]">
        Questions?
      </h2>

      {questions.map((question) => (
        <details key={question} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between py-7 text-xl md:text-3xl">
            {question}
            <span className="text-2xl transition group-open:rotate-45">+</span>
          </summary>

          <p className="max-w-2xl pb-8 text-base leading-relaxed text-black/60">
            Estamos preparando essa experiência para o lançamento do
            RioInside. Em breve, esta seção terá todas as informações.
          </p>
        </details>
      ))}
    </section>
  );
}