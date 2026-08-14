const images = [
  "/images/gallery-1.jpeg",
  "/images/gallery-2.jpeg",
  "/images/gallery-3.jpeg",
  "/images/gallery-4.jpeg",
  "/images/gallery-5.jpeg",
];

export default function Gallery() {
  return (
    <section className="w-full overflow-hidden bg-[#f5f3ee]">

      {/* ESPAÇO ENTRE O HERO E AS FOTOS */}
      <div className="h-[38px] md:h-[40px]" />

      {/* FOTOS */}
      <div className="gallery-track-wrapper">
        <div className="gallery-track">
          {[...images, ...images].map((image, index) => (
            <div key={index} className="gallery-item">
              <img
                src={image}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ESPAÇO ENTRE AS FOTOS E A PRÓXIMA SEÇÃO */}
      <div className="h-[38px] md:h-[40px]" />

    </section>
  );
}