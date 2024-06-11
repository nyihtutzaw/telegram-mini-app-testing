import { FC } from "react";
import { Product } from "../types";

type Prop={
  product:Product
}

export const CartItem:FC<Prop>=({ product })=> {
    return (
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm font-medium text-telegram-black">{product.name}</div>
        <div className="text-sm font-medium text-telegram-black">{product.price} USD</div>
      </div>
    );
  }