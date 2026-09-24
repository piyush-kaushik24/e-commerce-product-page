import { useState } from "react";

import { iconNext, iconPrevious } from "../assets";
import { images, thumbnails } from "../data/data";
import { ImageViewLarge } from "./ImageViewLarge";

export const ImageView = () => {
  const [count, setCount] = useState(1);
  const [isImage, setIsImage] = useState(false);

  return (
    <section>
      <ul className="relative">
        {images.map(({ image, id }) => (
          <li onClick={() => setIsImage(true)} key={id}>
            {count === id ? (
              <img
                src={image}
                className="h-90 w-full object-cover sm:h-120 md:rounded-xl"
                alt={`Product Image ${id}`}
              />
            ) : null}
          </li>
        ))}
        <li className="hidden gap-4 py-4 md:flex">
          {thumbnails.map(({ id, name, image }) => (
            <li key={id}>
              <button
                type="button"
                aria-pressed={id === count}
                onClick={() => setCount(id)}
                className={`${id === count ? "ring-orange ring-2" : ""} rounded-lg hover:cursor-pointer hover:opacity-80`}
              >
                <img
                  src={image}
                  alt={name}
                  className={`${id === count ? "opacity-60" : ""} rounded-lg`}
                />
              </button>
            </li>
          ))}
        </li>

        <li className="md:hidden">
          <button
            type="button"
            aria-label="Next Image"
            onClick={() => {
              if (count > 1) {
                setCount(count - 1);
              } else {
                setCount(4);
              }
            }}
            className="absolute bottom-1/2 flex h-10 w-10 translate-x-3 translate-y-full items-center justify-center rounded-full bg-white"
          >
            <img src={iconPrevious} alt="" />
          </button>

          <button
            type="button"
            aria-label="Previous Image"
            onClick={() => {
              if (count < images.length) {
                setCount(count + 1);
              } else {
                setCount(1);
              }
            }}
            className="absolute right-0 bottom-1/2 flex h-10 w-10 -translate-x-3 translate-y-full items-center justify-center rounded-full bg-white"
          >
            <img src={iconNext} alt="" />
          </button>
        </li>
      </ul>
      {isImage ? (
        <ImageViewLarge
          count={count}
          setIsImage={setIsImage}
          setCount={setCount}
        />
      ) : null}
    </section>
  );
};
