import { useState, useMemo } from 'react';

export default function useCart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => setCartItems(prev => [...prev, product]);
  const removeFromCart = (index) => setCartItems(prev => prev.filter((_, i) => i !== index));
  const total = useMemo(() => cartItems.reduce((sum, item) => sum + item.price, 0), [cartItems]);

  return { cartItems, addToCart, removeFromCart, total };
}
