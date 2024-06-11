'use client';

import React, { useState, useRef } from 'react';
import { Product } from '../types';

type Prop = {
    product: Product;
    handleAddToCart: (product: Product) => void;
};

export const ProductCard: React.FC<Prop> = ({ product, handleAddToCart }) => {
    const [isAdding, setIsAdding] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClick = () => {
        setIsAdding(true); // Start animation
        handleAddToCart(product);
        setTimeout(() => setIsAdding(false), 500); // Stop animation after 500ms (adjust as needed)
    };

    return (
        <div key={product.id} className="rounded-lg shadow-md overflow-hidden">
            <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
            <div className="p-4 flex justify-center flex-col">
                <h3 className="text-base font-medium text-telegram-black">{product.name}</h3>
                <span className="text-sm text-telegram-primary">{product.price} THB</span>
                <div className="flex justify-center">
                    <button
                        ref={buttonRef}
                        className={`w-40  mt-2 py-2 px-4 bg-telegram-primary text-white rounded-md hover:bg-telegram-dark-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-telegram-blue-500 ${isAdding ? 'animate-pulse' : ''
                            }`}
                        onClick={handleClick}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};
