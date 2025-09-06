import { createContext, ReactNode } from 'react';
import { useCart } from '../hooks/useCart';

// Create cart context
export const CartContext = createContext<ReturnType<typeof useCart> | null>(null);

// Cart provider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const cart = useCart();
  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
};
