import React, { useContext } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XIcon,
} from "@heroicons/react/solid";
import { LightboxContext } from "../context/lightboxContext";

function Lightbox() {
  const lightboxStore = useContext(LightboxContext);

  const onClickLeft = () =>
    lightboxStore.setActiveImage(
      lightboxStore.imageIndex === 0
        ? lightboxStore.images.length - 1
        : lightboxStore.imageIndex - 1
    );
  const onClickRight = () =>
    lightboxStore.setActiveImage(
      lightboxStore.imageIndex === lightboxStore.images.length - 1
        ? 0
        : lightboxStore.imageIndex + 1
    );

  const onClickThumbnail = (index) => lightboxStore.setActiveImage(index);

  return (
    <div>
      {lightboxStore.isOpen && (
        <div className="fixed w-full h-full min-h-full min-w-full bg-black/75 z-40 flex items-center justify-center select-none">
          <div className="p-4 max-w-md flex flex-col items-center">
            <div className="flex w-full justify-end">
              <XIcon
                onClick={lightboxStore.close}
                className="w-6 h-6 text-white cursor-pointer"
              />
            </div>
            <div className="relative mt-2">
              <img
                alt="big product"
                src={lightboxStore.images[lightboxStore.imageIndex]}
                className="rounded-lg"
              />
              <div
                onClick={onClickLeft}
                className="absolute bg-white p-2 rounded-full transofrm -translate-y-1/2 -translate-x-1/2 top-1/2 left-0 cursor-pointer"
              >
                <ChevronLeftIcon className="w-8 h-8" />
              </div>
              <div
                onClick={onClickRight}
                className="absolute bg-white p-2 rounded-full transofrm -translate-y-1/2 translate-x-1/2 top-1/2 right-0 cursor-pointer"
              >
                <ChevronRightIcon className="w-8 h-8" />
              </div>
            </div>

            <div className="flex mt-8 space-x-8 select-none">
              {lightboxStore.images.map((currImage, index) => (
                <div className="relative cursor-pointer" key={currImage}>
                  <img
                    alt="tiny product"
                    onClick={() => onClickThumbnail(index)}
                    src={currImage}
                    className="rounded-lg w-16"
                  />
                  {index === lightboxStore.imageIndex && (
                    <div className="absolute bg-paleOrange opacity-75 w-full h-full top-0 left-0 rounded-lg border-2 border-orange"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Lightbox;
