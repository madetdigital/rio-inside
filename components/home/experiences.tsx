const experiences = [
  {
    category: "Experience",
    title: "Rio além do cartão-postal",
    image: "/images/experience-1.jpg",
  },
  {
    category: "Taste",
    title: "Sabores que contam a cidade",
    image: "/images/experience-2.jpg",
  },
  {
    category: "Lifestyle",
    title: "Viva o ritmo carioca",
    image: "/images/experience-3.jpg",
  },
];

export default function Experiences() {
  return (
    <section className="bg-[#f1efe8] px-6 py-24 text-black md:px-10 md:py-36 lg:px-14">
      <div className="mb-16 flex items-end justify-between">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.18em]">
            Curated by RioInside
          </p>

          <h2 className="text-[12vw] uppercase leading-[0.82] tracking-[-0.07em] md:text-[7vw]">
            Experiences
          </h2>
        </div>

        <a className="hidden border-b border-black pb-1 text-xs uppercase tracking-widest md:block" href="#">
          Ver todas
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-12">
        {experiences.map((experience, index) => (
          <article
            key={experience.title}
            className={`group ${
              index === 0
                ? "md:col-span-7"
                : index === 1
                  ? "md:col-span-5 md:pt-28"
                  : "md:col-span-6 md:col-start-4 md:mt-20"
            }`}
          >
            <div className="aspect-[4/5] overflow-hidden bg-neutral-300">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                style={{ backgroundImage: `url('${experience.image}')` }}
              />
            </div>

            <div className="flex justify-between pt-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-black/50">
                  {experience.category}
                </p>
                <h3 className="mt-2 text-xl">{experience.title}</h3>
              </div>
              <span>↗</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}