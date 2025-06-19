import { useState, useMemo } from 'react';
import type { Product, CartItem } from '../types/common';

export default function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => {
      const item = prev.find(i => i.id === productId);
      if (item?.quantity && item.quantity > 1) {
        return prev.map(i =>
          i.id === productId ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      return prev.filter(i => i.id !== productId);
    });
  };

  const total = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  return { cartItems, addToCart, removeFromCart, total };
}
