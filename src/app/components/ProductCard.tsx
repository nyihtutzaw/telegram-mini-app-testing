import { FC } from "react";
import { Product } from "../types";

type Prop = {
    product: Product;
    handleAddToCart: (product: Product) => void;
}

export const ProductCard: FC<Prop> = ({ product, handleAddToCart }) => {
    return (
        <div key={product.id} className="rounded-lg shadow-md overflow-hidden">
            <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
            <div className="p-4 flex justify-center flex-col">
                <h3 className="text-base font-medium text-telegram-black">{product.name}</h3>
                <span className="text-sm text-telegram-primary">{product.price} THB</span>
                <div className='flex justify-center'>
                    <button
                        className="w-40  mt-2 py-2 px-4 bg-telegram-primary text-white rounded-md hover:bg-telegram-dark-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-telegram-blue-500"
                        onClick={() => handleAddToCart(product)}
                    >
                        Add to Cart
                    </button>
                </div>

            </div>
        </div>
    )
}