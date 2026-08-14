export default function FinalGallery() {
  const images = [
    "/final-rio-1.jpeg",
    "/images/gallery-1.jpeg",
    "/final-rio-2.jpeg",
    "/images/gallery-2.jpeg",
    "/final-rio-3.jpeg",
    "/images/gallery-3.jpeg",
    "/final-rio-4.jpeg",
    "/images/gallery-4.jpeg",
    "/final-rio-5.jpeg",
    "/images/gallery-5.jpeg",
  ];

  return (
    <section className="final-gallery">

      <div className="final-gallery-track">

        {/* PRIMEIRA SEQUÊNCIA */}
        <div className="final-gallery-group">

          {images.map((image, index) => (
            <div
              className="final-gallery-item"
              key={`first-${index}`}
            >
              <img
                src={image}
                alt={`Rio de Janeiro ${index + 1}`}
              />
            </div>
          ))}

        </div>


        {/* SEGUNDA SEQUÊNCIA IDÊNTICA */}
        <div
          className="final-gallery-group"
          aria-hidden="true"
        >

          {images.map((image, index) => (
            <div
              className="final-gallery-item"
              key={`second-${index}`}
            >
              <img
                src={image}
                alt=""
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
