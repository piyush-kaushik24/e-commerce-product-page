import React from "react";
import { iconClose, iconNext, iconPrevious } from "../assets";
import { images, thumbnails } from "../data/data";
type ImageViewLargeProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setIsImage: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ImageViewLarge = ({
  count,
  setCount,
  setIsImage,
}: ImageViewLargeProps) => {
  return (
    <div className="hidden md:block">
      <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <ul className="relative">
          {images.map(({ image, id }) => (
            <li key={id}>
              {count === id ? (
                <img
                  src={image}
                  className="h-90 w-full object-cover sm:h-120 md:rounded-xl"
                  alt={`Product Image ${id}`}
                />
              ) : null}
            </li>
          ))}
          <li className="absolute top-full left-1/2 flex -translate-x-1/2 translate-y-1/2 gap-6">
            {thumbnails.map(({ id, name, image }) => (
              <li key={id} className="w-20">
                <button
                  type="button"
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

          <li>
            <button
              type="button"
              onClick={() => {
                if (count > 1) {
                  setCount(count - 1);
                } else {
                  setCount(4);
                }
              }}
              className="absolute bottom-1/2 flex h-10 w-10 -translate-x-1/2 translate-y-full items-center justify-center rounded-full bg-white hover:cursor-pointer"
            >
              <img src={iconPrevious} alt="" />
            </button>

            <button
              type="button"

              onClick={() => {
                if (count < images.length) {
                  setCount(count + 1);
                } else {
                  setCount(1);
                }
              }}
              className="absolute right-0 bottom-1/2 flex h-10 w-10 translate-x-1/2 translate-y-full items-center justify-center rounded-full bg-white hover:cursor-pointer"
            >
              <img src={iconNext} alt="" />
            </button>

            <button
              type="button"
              aria-label="Close Menu"
              onClick={() => setIsImage(false)}
              className="absolute -top-10 right-0"
            >
              <img
                src={iconClose}
                alt=""
                className="w-5 hover:cursor-pointer"
              />
            </button>
          </li>
        </ul>
      </div>
      <div className="fixed inset-0 z-0 bg-black/75"></div>
    </div>
  );
};
