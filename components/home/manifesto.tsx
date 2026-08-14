export default function Manifesto() {
  return (
    <section className="flex min-h-[85vh] items-center bg-[#e95d36] px-6 py-24 text-black md:px-10 lg:px-14">
      <div>
        <p className="mb-12 text-xs uppercase tracking-[0.18em]">
          Our point of view
        </p>

        <h2 className="max-w-7xl text-[11vw] font-medium uppercase leading-[0.83] tracking-[-0.07em] md:text-[7vw]">
          O Rio não é
          <br />
          para ser visitado.
          <br />
          É para ser vivido.
        </h2>

        <p className="mt-12 max-w-xl text-lg leading-relaxed">
          Nós conectamos você à cidade de um jeito mais humano,
          personalizado e inteligente.
        </p>
      </div>
    </section>
  );
}