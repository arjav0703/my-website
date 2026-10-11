import React from "react";

interface GalleryImage {
  src: string;
  alt: string;
}

export default function Gallery() {
  const images: GalleryImage[] = [
    { src: "/images/sg1.png", alt: "lightboard" },
    { src: "/images/sg2.png", alt: "a can" },
    { src: "/images/car.png", alt: "a car :)"},
    { src: "/images/ole.webp", alt: "a piece of jewellery" },
    { src: "/images/apple.webp", alt: "close up shot of an apple" },
    { src: "/images/oldman.webp", alt: "a street vendor selling clothes" },
    { src: "/images/coolplace.png", alt: "this cool place in my town:)"},
    { src: "/images/sg4.png", alt: "gorjus foto" },
    { src: "/images/sg5.png", alt: "mcd" },
    { src: "/images/bnw.webp", alt: "that's me!" },
    { src: "/images/trash.webp", alt: "an abandoned street" },
    { src: "/images/light.webp", alt: "night light" },
    { src: "/images/window.webp", alt: "rays of sun"},
    { src: "/images/lens.webp", alt: "macro shot of a camera lens" }
  ];

  return (
    <div className="bg-[#212529] min-h-screen">
      <div className="pt-10 pb-20 max-w-7xl mx-auto px-8">
        <GalleryHeader />
        <ImageGrid images={images} />
      </div>
    </div>
  );
}

function GalleryHeader() {
  return (
    <section className="nes-container is-dark is-rounded mb-10">
      <h1 className="nes-text is-warning text-2xl sm:text-4xl text-center">
        <i className="nes-icon star is-medium"></i> GALLERY{" "}
        <i className="nes-icon star is-medium"></i>
      </h1>
      <p className="text-center text-gray-400 mt-4">
        A collection of my photography and creative work
      </p>
    </section>
  );
}

function ImageGrid({ images }: { images: GalleryImage[] }) {
  return (
    <section className="nes-container is-dark is-rounded">
      <div className="columns-1 sm:columns-1 md:columns-2 lg:columns-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="mb-4 break-inside-avoid group cursor-pointer"
          >
            <div className="nes-container is-rounded p-1 bg-gray-700 hover:bg-gray-600 transition-colors">
              <img src={image.src} alt={image.alt} className="w-full rounded" />
            </div>
            <p className="text-xs text-gray-500 mt-1 text-center opacity-0 group-hover:opacity-100 transition-opacity">
              {image.alt}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
