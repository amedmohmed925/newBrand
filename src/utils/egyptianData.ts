// دالة مساعدة لحساب الأسعار المصرية
export const convertToEGP = (saudiPrice: number): number => {
  // معدل التحويل التقريبي من الريال السعودي إلى الجنيه المصري (1 ريال = ~4.2 جنيه)
  return Math.round(saudiPrice * 4.2);
};

// الحد الأدنى للشحن المجاني بالجنيه المصري
export const FREE_SHIPPING_THRESHOLD = 800;

// معلومات الاتصال المصرية
export const CONTACT_INFO = {
  phone: '+20 10 1234 5678',
  whatsapp: '201012345678',
  address: 'القاهرة، جمهورية مصر العربية',
  area: 'شارع التحرير، وسط البلد',
  city: 'القاهرة'
};

// معلومات الشحن المصرية
export const SHIPPING_INFO = {
  localDelivery: '1-3 أيام عمل داخل القاهرة الكبرى',
  nationalDelivery: '3-7 أيام عمل للمحافظات الأخرى'
};
