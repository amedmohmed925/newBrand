// دالة للتشخيص المتقدم للسلة
export const debugCart = () => {
  console.group('🔍 Cart Debug Information');
  
  // فحص Local Storage
  const savedCart = localStorage.getItem('rawnaq_cart');
  const lastUpdated = localStorage.getItem('rawnaq_cart_updated');
  
  console.log('📦 Raw cart data:', savedCart);
  console.log('⏰ Last updated:', lastUpdated);
  
  if (savedCart) {
    try {
      const parsed = JSON.parse(savedCart);
      console.log('✅ Parsed cart:', parsed);
      console.log('📊 Cart length:', parsed?.length || 'Not an array');
      
      if (Array.isArray(parsed)) {
        parsed.forEach((item, index) => {
          console.log(`Item ${index}:`, {
            productId: item?.product?.id,
            productName: item?.product?.name,
            quantity: item?.quantity,
            size: item?.size,
            color: item?.color,
            valid: !!(item && item.product && item.product.id && item.quantity && item.size && item.color)
          });
        });
      }
    } catch (error) {
      console.error('❌ Parse error:', error);
    }
  } else {
    console.log('📭 No cart data found');
  }
  
  // فحص جميع مفاتيح Local Storage
  console.log('🗂️ All localStorage keys:');
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key || '');
    console.log(`  ${key}:`, value?.substring(0, 100) + (value && value.length > 100 ? '...' : ''));
  }
  
  console.groupEnd();
};

// اضافة إلى window object للاستخدام في Console
if (typeof window !== 'undefined') {
  (window as typeof window & { debugCart: typeof debugCart }).debugCart = debugCart;
}
