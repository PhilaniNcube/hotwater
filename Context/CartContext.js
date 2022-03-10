import { createContext, useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../utils/supabase';

const defaultCart = {
  products: {},
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const cart = 'cart';

  const exposed = {
    cart,
  };

  return (
    <CartContext.Provider value={exposed}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
