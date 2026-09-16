"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
} from "@/components/site/gallery-data";

type Filter = GalleryCategory | "All";

export function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredItems =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.categories.includes(filter));

  const activeItem = activeIndex !== null ? filteredItems[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? null : (current + 1) % filteredItems.length,
        );
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? null
            : (current - 1 + filteredItems.length) % filteredItems.length,
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, filteredItems.length]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter("All")}
          className="filter-chip"
          data-active={filter === "All"}
        >
          All Work
        </button>
        {galleryCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            className="filter-chip"
            data-active={filter === category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filteredItems.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-panel)]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {activeItem ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 text-3xl leading-none text-white/80 transition hover:text-white"
          >
            &times;
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex((current) =>
                current !== null
                  ? (current - 1 + filteredItems.length) % filteredItems.length
                  : current,
              );
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 px-3 py-4 text-3xl text-white/80 transition hover:text-white md:left-6"
          >
            &#8249;
          </button>

          <div
            className="relative mx-auto"
            style={{ width: "90vw", height: "85vh" }}
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeItem.src}
              alt={activeItem.alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex((current) =>
                current !== null ? (current + 1) % filteredItems.length : current,
              );
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-4 text-3xl text-white/80 transition hover:text-white md:right-6"
          >
            &#8250;
          </button>
        </div>
      ) : null}
    </div>
  );
}
