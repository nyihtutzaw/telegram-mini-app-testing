'use client';
import React, { useEffect, useState } from 'react';
import { products } from './data/dummy';
import { initBackButton, initMainButton } from '@tma.js/sdk';

import { ProductCard } from './components/ProductCard';
import { Product } from './types';
import { useRouter } from 'next/navigation';


export default function Home() {
  const [cart, setCart] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    const [backButton] = initBackButton();
    backButton.hide()
  }, [])





  const handleAddToCart = async (product: Product) => {
    if (product.outOfStock) {
      alert('This is out of stock');
      return;

    }
    setCart([...cart, product]);

  };

  useEffect(() => {
    const cartStorage = localStorage.getItem("carts");
    if (!cartStorage) {
      return;
    }

    setCart(JSON.parse(cartStorage));

  }, [])

  useEffect(() => {
    const [mainButton] = initMainButton();
    if (cart.length === 0) {
      mainButton.hide();
      return;
    }
    mainButton.show();
    mainButton.setText(`View Cart (${cart.length})`)
    mainButton.enable();
    mainButton.on("click", () => {
      localStorage.setItem("carts", JSON.stringify(cart));
      mainButton.hide();
      router.push("/cart");
      
    })
  }, [cart, cart.length, router])


  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-telegram-white py-4 md:px-8 px-2">
      <div className="flex w-full flex-1 flex-col px-4 text-center">
        <h2 className="text-xl font-medium text-telegram-black">Pickup Your Coffee</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} handleAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}