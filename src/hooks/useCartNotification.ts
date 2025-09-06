import { useEffect } from 'react';
import toast from 'react-hot-toast';

export const useCartNotification = () => {
  useEffect(() => {
    // Check if this is a returning user with items in cart
    const hasVisitedBefore = localStorage.getItem('hasVisited');
    
    if (!hasVisitedBefore) {
      localStorage.setItem('hasVisited', 'true');
      return;
    }

    // Get cart data directly from localStorage to avoid conflicts
    const savedCart = localStorage.getItem('rawnaq_cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart) && parsedCart.length > 0) {
          const itemCount = parsedCart.reduce((sum, item) => sum + (item.quantity || 0), 0);
          
          if (itemCount > 0) {
            const timeout = setTimeout(() => {
              toast.success(
                `لديك ${itemCount} منتج في السلة`,
                {
                  duration: 4000,
                  icon: '🛍️',
                  style: {
                    background: '#F59E0B',
                    color: 'white',
                    fontFamily: 'Cairo, sans-serif',
                    direction: 'rtl',
                  },
                }
              );
            }, 2000); // Wait 2 seconds after page load

            return () => clearTimeout(timeout);
          }
        }
      } catch (error) {
        console.error('Error reading cart for notification:', error);
      }
    }
  }, []); // Only run once on mount
};
