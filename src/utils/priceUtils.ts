export const formatPrice = (price: number): string => {
  return `${price.toLocaleString('ar-EG')} ج.م`;
};

export const formatPriceRange = (minPrice: number, maxPrice: number): string => {
  return `${minPrice.toLocaleString('ar-EG')} - ${maxPrice.toLocaleString('ar-EG')} ج.م`;
};

export const formatCurrency = (amount: number): string => {
  return formatPrice(amount);
};
