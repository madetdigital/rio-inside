export default function Intro() {
  return (
    <section id="discover" className="bg-[#f1efe8] px-6 py-24 text-black md:px-10 md:py-36 lg:px-14">
      <p className="mb-8 text-xs uppercase tracking-[0.18em]">This is RioInside™</p>

      <h2 className="max-w-6xl text-[11vw] font-medium uppercase leading-[0.83] tracking-[-0.07em] md:text-[7vw]">
        Existe um Rio
        <br />
        além do óbvio.
      </h2>

      <div className="mt-16 grid gap-8 pt-8 md:grid-cols-2">
        <div />
        <p className="max-w-xl text-lg leading-relaxed md:text-2xl">
          Descubra experiências, lugares, sabores e histórias selecionadas
          para você viver a cidade como quem realmente conhece o Rio.
        </p>
      </div>
    </section>
  );
}