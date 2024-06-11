'use client';
import React, { useState } from 'react';
import { products } from './data/dummy';
import { ProductCard } from './components/ProductCard';
import { Product } from './types';

export default function Home() {
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddToCart = (product:Product) => {
    setCart([...cart, product]);
  };

  const handleOpenCart = () => {
    // Simulate navigation to cart page (replace with your actual navigation logic)
    console.log('Navigate to cart page');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-telegram-white py-4 px-8">
      <main className="flex w-full flex-1 flex-col px-4 text-center">
        <div className='flex flex-row justify-between'>
          <span className="text-2xl font-bold text-telegram-black">
            Welcome to Zaw Coffee
          </span>
          <button
            className="w-40  mt-2 py-2 px-4 bg-telegram-primary text-white rounded-md hover:bg-telegram-dark-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-telegram-blue-500"
          >
            View Cart ({cart.length})
          </button>
        </div>
        <h2 className="text-xl font-medium mt-8 text-telegram-black">Our Products</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} handleAddToCart={handleAddToCart} />
          ))}
        </div>
      </main>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.Telegram.WebApp.ready(function () {
              window.Telegram.WebApp.MainButton.setText('View Cart (' + ${cart.length} + ')');
              window.Telegram.WebApp.MainButton.onClick(function () {
                window.open('/cart', '_self'); // Replace with your actual cart page URL
              });
            });
          `,
        }}
      />
    </div>
  );
}