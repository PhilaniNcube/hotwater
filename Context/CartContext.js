import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const router = useRouter();

  const getInitialCart = () => {
    JSON.parse(localStorage.getItem('cart'));
  };

  useEffect(() => {
    const initialCart = getInitialCart();

    if (initialCart) {
      setCart(initialCart);
    }
  }, []);

  const [cart, setCart] = useState([]);

  console.log('cart', cart);

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

    setCart(newCart);
  };

  const cartTotal = cart.reduce((acc, item) => {
    return acc + Number(item.price * item.qty);
  }, 0);

  const exposed = {
    cart,
    addToCart,
    removeItemFromCart,
    addCartQty,
    reduceCartQty,
    cartTotal,
  };

  return (
    <CartContext.Provider value={exposed}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
