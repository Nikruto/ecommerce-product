import React, { useState, useContext } from "react";
import { toast } from "react-hot-toast";
import { CardContext } from "../context/cardContext";
import { LightboxContext } from "../context/lightboxContext";
import { ShoppingCartIcon } from "@heroicons/react/outline";

import ProductImage1 from "../img/product-1.jpg";
import ProductImage2 from "../img/product-2.jpg";
import ProductImage3 from "../img/product-3.jpg";
import ProductImage4 from "../img/product-4.jpg";

const Images = [ProductImage1, ProductImage2, ProductImage3, ProductImage4];

function Product() {
  const cardStore = useContext(CardContext);
  const lightboxStore = useContext(LightboxContext);

  const [counter, setCounter] = useState(0);
  const [imageCounter, setImageCounter] = useState(0);

  const onClickDecrement = () => setCounter((prev) => Math.max(prev - 1, 0));

  const onClickIncrement = () => setCounter((prev) => prev + 1);

  const onClickThumbnail = (index) => setImageCounter(index);

  const onClickAddToCart = () => {
    if (counter === 0) return;
    toast.success(
      `Successfully added ${counter} x Fall Limited Edition Sneakers`,
      {
        position: "top-left",
      }
    );
    cardStore.addItem(
      {
        id: 1,
        name: "Fall Limited Edition Sneakers",
        price: 125,
        image: ProductImage1,
      },
      counter
    );
  };

  return (
    <div className="md:p-12 md:py-16">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2">
          <div>
            <img
              alt="big product"
              onClick={() => lightboxStore.open(Images, imageCounter)}
              src={Images[imageCounter]}
              className="w-full md:rounded-xl cursor-pointer"
            />
          </div>
          <div className="hidden md:flex mt-8 space-x-8 select-none">
            {Images.map((currImage, index) => (
              <div
                onClick={() => onClickThumbnail(index)}
                className="relative cursor-pointer"
                key={currImage}
              >
                <img
                  alt="tiny product"
                  src={currImage}
                  className="rounded-lg"
                />
                {index === imageCounter && (
                  <div className="absolute bg-paleOrange opacity-75 w-full h-full top-0 left-0 rounded-lg border-2 border-orange"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 p-6 md:p-0 md:pt-12 md:ml-24">
          <span className="text-sm font-bold text-orange">SNEAKER COMPANY</span>
          <h2 className="mt-4 text-4xl font-bold">
            Fall Limited Edition Sneakers
          </h2>
          <p className="mt-8 tex-sm text-gray-500">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="mt-4 w-full flex justify-between md:flex-col items-center md:items-start">
            <div className="flex items-center">
              <h3 className="font-bold text-2xl">$125.00</h3>
              <div className="ml-4 bg-paleOrange text-orange font-bold px-2 rounded">
                50%
              </div>
            </div>
            <h4 className="mt-1 font-bold line-through text-gray-400">
              $250.00
            </h4>
          </div>
          <div className="mt-8 flex flex-col md:flex-row">
            <div className="flex">
              <div
                onClick={onClickDecrement}
                className="md:w-8 w-20 h-12 flex items-center justify-center bg-gray-200 rounded-l-md select-none cursor-pointer"
              >
                <span className="text-orange text-2xl font-bold pb-2">-</span>
              </div>
              <div className="md:w-16 flex-1 h-12 flex items-center justify-center bg-gray-200">
                <span className="text-lg font-bold">{counter}</span>
              </div>
              <div
                onClick={onClickIncrement}
                className="md:w-8 w-20 h-12 flex items-center justify-center bg-gray-200 rounded-r-md select-none cursor-pointer"
              >
                <span className="text-orange text-2xl font-bold pb-2">+</span>
              </div>
            </div>
            <div
              onClick={onClickAddToCart}
              className="md:ml-2 mt-4 md:mt-0 rounded-lg flex-1 flex items-center select-none cursor-pointer py-4 md:py-0 justify-center bg-orange"
            >
              <div className="flex items-center justify-center space-x-4">
                <ShoppingCartIcon className="w-4 h-4 text-white" />
                <span className="text-sm font-bold text-white">
                  Add to cart
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
