'use client';

import React, { useEffect, useState } from 'react';

import { initBackButton, initMainButton } from '@tma.js/sdk';
import { useRouter } from 'next/navigation';
import { Product } from '../types';
import { CartItem } from '../components/CartItem';

export default function Cart() {
  const router = useRouter();
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const [backButton] = initBackButton();
    const [mainButton] = initMainButton();

    backButton.show();

    backButton.on('click', () => {
      // mainButton.setText(`View Cart (${cart.length})`)
      router.replace('/');
    });

    mainButton.show();
    mainButton.setText("Checkout")
  },[router])







  // Function to handle removing a product from the cart
  const handleRemoveFromCart = (productToRemove: Product) => {
    const updatedCart = cart.filter((product) => product.id !== productToRemove.id);
    setCart(updatedCart);
    localStorage.setItem('carts', JSON.stringify(updatedCart)); // Update localStorage
  };

  useEffect(() => {
    const [mainButton] = initMainButton();
    const cartStorage = localStorage.getItem('carts');
    if (!cartStorage) {
      return;
    }

    setCart(JSON.parse(cartStorage));
  }, [])

 

  // Calculate total amount
  const calculateTotalAmount = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  const totalAmount = calculateTotalAmount();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-telegram-white py-4 md:px-8 px-2">
      <div className="flex w-full flex-1 flex-col px-4 text-center">
        <h2 className="text-xl font-medium text-telegram-black">Your Carts</h2>
        {cart.map((eachCart, index) => (
          <CartItem
            key={`cart-${index}`}
            product={eachCart}
            onRemoveFromCart={handleRemoveFromCart} // Pass the function as a prop
          />
        ))}
        <div className="flex justify-between mt-4 text-sm font-medium text-telegram-black">
          <span>Total:</span>
          <span>{totalAmount} THB</span>
        </div>
      </div>
    </div>
  );
}
