import React, { useState } from 'react';

const Cart = ({ setOpen, cartCount, setCartCount }) => {
  const addCart = () => {
    setCartCount((val) => val + 1);
  }

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <nav className="bg-blue-500 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="car_bg max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HKX</span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" onClick={handleOpen} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cart {cartCount}</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Cart;