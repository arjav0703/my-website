import React from "react";

export default function Gallery() {
  const images = [
    { src: "/images/car.webp", alt: "closeup shot of a toy car" },
    { src: "/images/ole.webp", alt: "close up shot of a Jewellery" },
    { src: "/images/apple.webp", alt: "close up shot of an apple" },
    {
      src: "/images/oldman.webp",
      alt: "picture of a street vendor selling clothes",
    },
    { src: "/images/trash.webp", alt: "picture of an abandoned street" },
    { src: "/images/boat2.webp", alt: "picure of a boat during sunset" },
    { src: "/images/light.webp", alt: "shot of a light in darkness" },
    {
      src: "/images/window.webp",
      alt: "rays of sun pouring in through a window",
    },
    { src: "/images/tree.webp", alt: "a blurred image a tree during rain" },
    { src: "/images/lens.webp", alt: "macro shot of a camera lens" },
    { src: "/images/lego.webp", alt: "cinematic image of a lego plane model" },
    {
      src: "/images/leaf.webp",
      alt: "close up shot of water droplets on a green leaf",
    },
  ];

  return (
    <div className="bg-[#212529] min-h-screen">
      <div className="pt-10 pb-20 max-w-7xl mx-auto px-8">
        {/* Header */}
        <section className="nes-container is-dark is-rounded mb-10">
          <h1 className="nes-text is-warning text-2xl sm:text-4xl text-center">
            <i className="nes-icon star is-small"></i> GALLERY{" "}
            <i className="nes-icon star is-small"></i>
          </h1>
          <p className="text-center text-gray-400 mt-4">
            A collection of my photography and creative work
          </p>
        </section>

        {/* Gallery Grid */}
        <section className="nes-container is-dark is-rounded">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="mb-4 break-inside-avoid group cursor-pointer"
              >
                <div className="nes-container is-rounded p-1 bg-gray-700 hover:bg-gray-600 transition-colors">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full rounded"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.alt}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
