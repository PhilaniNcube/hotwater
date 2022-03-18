import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const router = useRouter();
  const [cart, setCart] = useState();

  const getInitialCart = () => {
    JSON.parse(localStorage.getItem('cart'));
  };

  useEffect(() => {
    const initialCart = JSON.parse(localStorage.getItem('cart'));

    if (initialCart) {
      setCart(initialCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, qty = 1) => {
    const item = cart.find((i) => i.id === product.id);

    if (item) {
      item.qty += qty;
      setCart([...cart]);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          qty,
        },
      ]);
    }

    router.push('/cart');
  };

  const reduceCartQty = (product) => {
    const item = cart.find((i) => i.id === product.id);

    if (item) {
      item.qty = item.qty === 0 ? 0 : item.qty - 1;
      setCart([...cart]);
    }
  };

  const addCartQty = (product) => {
    const item = cart.find((i) => i.id === product.id);

    if (item) {
      item.qty = item.qty + 1;
      setCart([...cart]);
    }
  };

  const removeItemFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });

    console.log(newCart);
    setCart(newCart);
  };

  const cartTotal = cart?.reduce((acc, item) => {
    return acc + Number(item.price * item.qty);
  }, 0);

  const exposed = {
    cart,
    cartTotal,
    addToCart,
    removeItemFromCart,
    addCartQty,
    reduceCartQty,
  };

  return (
    <CartContext.Provider value={exposed}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
