import React, { useContext } from "react";
import { CardContext } from "../context/cardContext";
import { ShoppingCartIcon, TrashIcon } from "@heroicons/react/outline";

const CardPreview = () => {
  const cardStore = useContext(CardContext);

  const onClickRemoveItem = (itemId) => {
    cardStore.removeItem(itemId);
  };

  return (
    <div className="flex items-center md:relative group">
      <div className="p-2 cursor-pointer relative z-20">
        <ShoppingCartIcon className="w-6 h-6" />
      </div>

      <div className="absolute top-12 left-0 w-full p-4 md:w-auto transform md:top-1/2 md:-left-28 pt-8 hidden group-hover:block">
        <div className="bg-white md:w-72 min-h-[13rem] shadow-md rounded flex flex-col">
          <div className="font-bold text-sm border-b p-4">Cart</div>
          {cardStore.items.length === 0 && (
            <div className="flex flex-1 items-center justify-center">
              <span className="text-sm text-gray-400 font-bold">
                Your cart is empty
              </span>
            </div>
          )}

          {cardStore.items.length !== 0 && (
            <div className="flex flex-1 flex-col p-4">
              {cardStore.items.map((item) => (
                <div className="flex items-center" key={item.data.id}>
                  <img
                    alt="product thumbnail"
                    src={item.data.image}
                    className="w-10 h-10 rounded"
                  />
                  <div className="ml-2 font-bold flex-1">
                    <h4 className="text-sm">{item.data.name}</h4>
                    <p className="text-xs text-gray-500">
                      ${item.data.price.toFixed(2)} x {item.amount}{" "}
                      <span className="text-black">
                        ${(item.data.price * item.amount).toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <div
                    onClick={() => onClickRemoveItem(item.data.id)}
                    className="flex items-center ml-2 cursor-pointer"
                  >
                    <TrashIcon className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              ))}
              <div className="mt-auto bg-orange text-white text-center p-3 rounded-lg cursor-pointer select-none">
                Checkout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
