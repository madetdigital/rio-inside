const pillars = [
  ["01", "Explore", "Praias, natureza, cultura e lugares que você não encontra em qualquer roteiro."],
  ["02", "Taste", "Restaurantes, bares, cafés, rooftops e gastronomia carioca."],
  ["03", "Lifestyle", "Wellness, esporte, beleza, luxo e tudo que faz parte da vida no Rio."],
  ["04", "Events", "Shows, samba, festas, festivais, esporte, arte e cultura."],
  ["05", "Move", "Transfers, motoristas, transporte e experiências privativas."],
  ["06", "Inside AI", "Seu concierge inteligente para organizar a experiência inteira."],
];

export default function Pillars() {
  return (
    <section className="bg-[#111] px-6 py-24 text-white md:px-10 md:py-36 lg:px-14">
      <div className="mb-20 flex items-end justify-between">
        <h2 className="text-[13vw] font-medium uppercase leading-[0.8] tracking-[-0.07em] md:text-[8vw]">
          Inside
          <br />
          Rio.
        </h2>

        <p className="hidden max-w-xs text-sm text-white/60 md:block">
          Uma cidade. Infinitas maneiras de viver.
        </p>
      </div>

      <div>
        {pillars.map(([number, title, description]) => (
          <a
            href="#"
            key={title}
            className="group grid gap-5 py-7 md:grid-cols-[80px_1fr_1fr_40px] md:items-center"
          >
            <span className="text-xs text-white/50">{number}</span>

            <h3 className="text-4xl uppercase tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-3 md:text-6xl">
              {title}
            </h3>

            <p className="max-w-md text-sm leading-relaxed text-white/60">
              {description}
            </p>

            <span className="text-2xl">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}