'use client'; 

import { FC } from "react";
import { Product } from "../types";

type Prop = {
  product: Product;
  onRemoveFromCart: (product: Product) => void; // Function to remove from cart
};

export const CartItem: FC<Prop> = ({ product, onRemoveFromCart }) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center">
        <img
          className="w-10 h-10 mr-2 rounded-full object-cover"
          src={product.image} // Assuming 'image' property exists in Product type
          alt={product.name}
        />
        <div className="text-sm font-medium text-telegram-black">{product.name}</div>
      </div>
      <div className="flex items-center">
        <div className="text-sm font-medium text-telegram-black">{product.price} THB</div>
        <button
          className="ml-2 p-1 text-red-500 hover:text-red-700 focus:outline-none"
          onClick={() => onRemoveFromCart(product)}
        >
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.76190476 1.42474485C4.30437515 1.06717578 3.6714155 1 3 1H17c1 0 1.9477173 1.06717578 2.76190476 1.42474485L14.2380952 4.57525515C13.9716247 4.93282422 13.9447098 5.36825324 14.208719 5.72525515L18.5752552 10c1.5187257 1.5187257 1.5187257 3.98127422 0 5.5L14.208719 14.2747448C13.9447098 14.6317468 13.9716247 5.06717578 14.2380952 5.42474485L18.5752552 9c1.5187257-1.5187257 1.5187257-3.98127422 0-5.5zM6 10c0 1.1045695 0.8954305 2 2 2s2-0.8954305 2-2S8.8954305 8 8 8s-2 0.8954305-2 2z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
