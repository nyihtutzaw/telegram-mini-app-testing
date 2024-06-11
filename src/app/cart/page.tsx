'use client';

import React, { useEffect, useState } from 'react';
import { initBackButton, initMainButton, initPopup } from '@tma.js/sdk';
import { useRouter } from 'next/navigation';
import { Product } from '../types';
import { CartItem } from '../components/CartItem';

export default function Cart() {
  const router = useRouter();
  const [cart, setCart] = useState<Product[]>([]);


  useEffect(() => {
    const [backButton] = initBackButton();
    backButton.show();
    backButton.on('click', () => {
      router.replace('/');
    });
  }, [router])



  // Function to handle removing a product from the cart
  const handleRemoveFromCart = (productToRemove: Product) => {
    const updatedCart = cart.filter((product) => product.id !== productToRemove.id);
    setCart(updatedCart);
    localStorage.setItem('carts', JSON.stringify(updatedCart)); // Update localStorage
  };

  useEffect(() => {
    const cartStorage = localStorage.getItem('carts');
    if (!cartStorage) {
      return;
    }

    setCart(JSON.parse(cartStorage));
  }, [])

  const handleCheckout = () => {
    const popup = initPopup();
    popup
      .open({
        title: 'Your Order has been submitted',
        message: 'You will receive confirmation message from the bot',
        buttons: [{ id: 'my-id', type: 'default', text: 'Return to Home' }],
      })
      .then(() => {
        setCart([]);
        localStorage.removeItem("carts");
        router.replace("/");
      });
  }



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
        <div className='py-4'>
          <button className='bg-telegram-primary py-2 px-4' onClick={handleCheckout}><p className='text-telegram-primary-text'>Checkout</p></button>
        </div>
      </div>
    </div>
  );
}
