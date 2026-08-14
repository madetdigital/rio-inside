export default function Newsletter() {
  return (
    <section className="bg-[#111] px-6 py-24 text-white md:px-10 md:py-32 lg:px-14">
      <div className="grid gap-16 md:grid-cols-2">
        <h2 className="text-[11vw] uppercase leading-[0.8] tracking-[-0.07em] md:text-[6vw]">
          Stay
          <br />
          Inside.
        </h2>

        <div className="flex flex-col justify-end">
          <p className="mb-10 max-w-md text-white/65">
            Receba novidades, experiências e tudo que está acontecendo no Rio.
          </p>

          <form className="flex border-b border-white/40 pb-4">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="w-full bg-transparent outline-none placeholder:text-white/40"
            />
            <button type="submit" className="text-xl">
              ↗
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}