import { CartItem } from '../types';

export const cartUtils = {
  // Get cart data with metadata
  getCartWithMetadata: () => {
    const cartData = localStorage.getItem('rawnaq_cart');
    const lastUpdated = localStorage.getItem('rawnaq_cart_updated');
    
    if (cartData) {
      try {
        return {
          items: JSON.parse(cartData) as CartItem[],
          lastUpdated: lastUpdated ? new Date(lastUpdated) : null,
          itemCount: JSON.parse(cartData).reduce((sum: number, item: CartItem) => sum + item.quantity, 0)
        };
      } catch (error) {
        console.error('Error reading cart data:', error);
      }
    }
    
    return {
      items: [],
      lastUpdated: null,
      itemCount: 0
    };
  },

  // Save cart with timestamp
  saveCartWithTimestamp: (items: CartItem[]) => {
    try {
      localStorage.setItem('rawnaq_cart', JSON.stringify(items));
      localStorage.setItem('rawnaq_cart_updated', new Date().toISOString());
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  },

  // Check if cart is older than specified hours
  isCartStale: (hours: number = 24) => {
    const { lastUpdated } = cartUtils.getCartWithMetadata();
    if (!lastUpdated) return false;
    
    const hoursSinceUpdate = (Date.now() - lastUpdated.getTime()) / (1000 * 60 * 60);
    return hoursSinceUpdate > hours;
  },

  // Clear old cart data
  clearStaleCart: () => {
    if (cartUtils.isCartStale(24)) { // Clear cart older than 24 hours
      localStorage.removeItem('rawnaq_cart');
      localStorage.removeItem('rawnaq_cart_updated');
      return true;
    }
    return false;
  },

  // Get cart summary for debugging
  getCartSummary: () => {
    const { items, lastUpdated, itemCount } = cartUtils.getCartWithMetadata();
    const totalValue = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    
    return {
      itemCount,
      uniqueProducts: items.length,
      totalValue,
      lastUpdated,
      isStale: cartUtils.isCartStale()
    };
  }
};
