import { useState, useEffect } from 'react';
import { CartItem, Product } from '../types';

const CART_STORAGE_KEY = 'rawnaq_cart';

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    console.log('🔍 Loading cart from localStorage...');
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    console.log('📦 Raw saved cart:', savedCart);
    
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        console.log('✅ Parsed cart:', parsedCart);
        
        // Validate cart data structure
        if (Array.isArray(parsedCart)) {
          const validItems = parsedCart.filter(item => 
            item && 
            item.product && 
            item.product.id && 
            item.quantity && 
            item.size && 
            item.color
          );
          console.log('✅ Valid items:', validItems);
          setItems(validItems);
        } else {
          console.warn('⚠️ Cart data is not an array:', parsedCart);
        }
      } catch (error) {
        console.error('❌ Error loading cart from localStorage:', error);
        // Clear corrupted data
        localStorage.removeItem(CART_STORAGE_KEY);
      }
    } else {
      console.log('📭 No saved cart found');
    }
    setIsInitialized(true);
  }, []);

  // Save cart to localStorage whenever items change (but not on initial load)
  useEffect(() => {
    if (!isInitialized) return; // Don't save on initial load
    
    console.log('💾 Saving cart to localStorage:', items);
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
      localStorage.setItem('rawnaq_cart_updated', new Date().toISOString());
      console.log('✅ Cart saved successfully');
    } catch (error) {
      console.error('❌ Error saving cart to localStorage:', error);
      // Handle storage quota exceeded or other errors
      if (error instanceof DOMException && error.code === 22) {
        // Storage quota exceeded
        console.warn('Local storage quota exceeded. Clearing old data...');
        localStorage.clear();
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
        localStorage.setItem('rawnaq_cart_updated', new Date().toISOString());
      }
    }
  }, [items, isInitialized]);

  const addItem = (product: Product, size: string, color: string, quantity: number = 1) => {
    console.log('🛒 Adding item to cart:', { product: product.name, size, color, quantity });
    
    // Validate input data
    if (!product || !product.id || !size || !color || quantity <= 0) {
      console.error('❌ Invalid product data provided to addItem');
      return;
    }

    setItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.product.id === product.id && item.size === size && item.color === color
      );

      if (existingItem) {
        console.log('♻️ Updating existing item quantity');
        return prevItems.map(item =>
          item === existingItem
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      console.log('✨ Adding new item to cart');
      return [...prevItems, { product, size, color, quantity }];
    });
  };

  const updateQuantity = (productId: string, size: string, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, size, color);
      return;
    }

    setItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productId && item.size === size && item.color === color
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeItem = (productId: string, size: string, color: string) => {
    setItems(prevItems =>
      prevItems.filter(
        item => !(item.product.id === productId && item.size === size && item.color === color)
      )
    );
  };

  const clearCart = () => {
    console.log('🗑️ Clearing entire cart');
    setItems([]);
  };

  // Additional utility functions
  const exportCart = () => {
    return JSON.stringify(items);
  };

  const importCart = (cartData: string) => {
    try {
      const parsedData = JSON.parse(cartData);
      if (Array.isArray(parsedData)) {
        setItems(parsedData);
        return true;
      }
    } catch (error) {
      console.error('Error importing cart data:', error);
    }
    return false;
  };

  const getCartSummary = () => {
    return {
      itemCount,
      total,
      uniqueItems: items.length,
      lastUpdated: new Date().toISOString()
    };
  };

  const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return {
    items,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    total,
    itemCount,
    exportCart,
    importCart,
    getCartSummary,
  };
};