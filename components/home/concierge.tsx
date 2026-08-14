export default function Concierge() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-[#18231d] px-6 py-12 text-white md:px-10 lg:px-14">
      <div className="absolute right-[-8%] top-[8%] text-[45vw] font-medium leading-none text-white/[0.035]">
        AI
      </div>

      <div className="relative z-10 w-full">
        <p className="mb-7 text-xs uppercase tracking-[0.18em]">
          RioInside Intelligence
        </p>

        <h2 className="max-w-6xl text-[13vw] uppercase leading-[0.78] tracking-[-0.07em] md:text-[8vw]">
          Ask.
          <br />
          Discover.
          <br />
          Live.
        </h2>

        <div className="mt-14 flex flex-col justify-between gap-8 pt-6 md:flex-row">
          <p className="max-w-lg text-lg leading-relaxed text-white/75">
            “Organize meu sábado no Rio.”
            <br />
            O Inside AI entende você, cria seu roteiro e conecta cada parte da
            experiência.
          </p>

          <button className="w-fit rounded-full border border-white px-7 py-4 text-xs uppercase tracking-[0.15em] transition hover:bg-white hover:text-black">
            Fale com o Concierge ↗
          </button>
        </div>
      </div>
    </section>
  );
}