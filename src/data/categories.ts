export interface Category {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  description?: string;
  descriptionEn?: string;
  subcategories?: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  nameEn: string;
  categoryId: string;
}

export const categories: Category[] = [
  {
    id: 'tshirts',
    name: 'تيشيرتات',
    nameEn: 'T-Shirts',
    icon: '👕',
    description: 'تيشيرتات رجالية بتصاميم متنوعة',
    descriptionEn: 'Men\'s t-shirts with various designs',
    subcategories: [
      { id: 'casual-tshirts', name: 'تيشيرتات كاجوال', nameEn: 'Casual T-Shirts', categoryId: 'tshirts' },
      { id: 'polo-tshirts', name: 'تيشيرتات بولو', nameEn: 'Polo T-Shirts', categoryId: 'tshirts' },
      { id: 'sport-tshirts', name: 'تيشيرتات رياضية', nameEn: 'Sport T-Shirts', categoryId: 'tshirts' },
      { id: 'printed-tshirts', name: 'تيشيرتات بطبعات عربية', nameEn: 'Arabic Printed T-Shirts', categoryId: 'tshirts' },
      { id: 'plain-tshirts', name: 'تيشيرتات سادة', nameEn: 'Plain T-Shirts', categoryId: 'tshirts' },
      { id: 'long-sleeve-tshirts', name: 'تيشيرتات بأكمام طويلة', nameEn: 'Long Sleeve T-Shirts', categoryId: 'tshirts' },
      { id: 'short-sleeve-tshirts', name: 'تيشيرتات بأكمام قصيرة', nameEn: 'Short Sleeve T-Shirts', categoryId: 'tshirts' },
    ]
  },
  {
    id: 'pants',
    name: 'بناطيل',
    nameEn: 'Pants',
    icon: '👖',
    description: 'بناطيل رجالية بأنواع مختلفة',
    descriptionEn: 'Men\'s pants in different styles',
    subcategories: [
      { id: 'jeans', name: 'بناطيل جينز', nameEn: 'Jeans', categoryId: 'pants' },
      { id: 'casual-pants', name: 'بناطيل كاجوال', nameEn: 'Casual Pants', categoryId: 'pants' },
      { id: 'sport-pants', name: 'بناطيل رياضية', nameEn: 'Sport Pants', categoryId: 'pants' },
      { id: 'formal-pants', name: 'بناطيل رسمية', nameEn: 'Formal Pants', categoryId: 'pants' },
      { id: 'shorts', name: 'بناطيل قصيرة (شورت)', nameEn: 'Shorts', categoryId: 'pants' },
      { id: 'cargo-pants', name: 'بناطيل كارجو', nameEn: 'Cargo Pants', categoryId: 'pants' },
      { id: 'chino-pants', name: 'بناطيل شينو', nameEn: 'Chino Pants', categoryId: 'pants' },
    ]
  },
  {
    id: 'shirts',
    name: 'قمصان',
    nameEn: 'Shirts',
    icon: '👔',
    description: 'قمصان رجالية رسمية وكاجوال',
    descriptionEn: 'Men\'s formal and casual shirts',
    subcategories: [
      { id: 'formal-shirts', name: 'قمصان رسمية', nameEn: 'Formal Shirts', categoryId: 'shirts' },
      { id: 'casual-shirts', name: 'قمصان كاجوال', nameEn: 'Casual Shirts', categoryId: 'shirts' },
      { id: 'short-sleeve-shirts', name: 'قمصان بأكمام قصيرة', nameEn: 'Short Sleeve Shirts', categoryId: 'shirts' },
      { id: 'long-sleeve-shirts', name: 'قمصان بأكمام طويلة', nameEn: 'Long Sleeve Shirts', categoryId: 'shirts' },
      { id: 'linen-shirts', name: 'قمصان كتان', nameEn: 'Linen Shirts', categoryId: 'shirts' },
      { id: 'cotton-shirts', name: 'قمصان قطنية', nameEn: 'Cotton Shirts', categoryId: 'shirts' },
      { id: 'denim-shirts', name: 'قمصان جينز', nameEn: 'Denim Shirts', categoryId: 'shirts' },
    ]
  },
  {
    id: 'jackets',
    name: 'جاكيتات ومعاطف',
    nameEn: 'Jackets & Coats',
    icon: '🧥',
    description: 'جاكيتات ومعاطف رجالية',
    descriptionEn: 'Men\'s jackets and coats',
    subcategories: [
      { id: 'denim-jackets', name: 'جاكيتات جينز', nameEn: 'Denim Jackets', categoryId: 'jackets' },
      { id: 'leather-jackets', name: 'جاكيتات جلدية', nameEn: 'Leather Jackets', categoryId: 'jackets' },
      { id: 'sport-jackets', name: 'جاكيتات رياضية', nameEn: 'Sport Jackets', categoryId: 'jackets' },
      { id: 'winter-coats', name: 'معاطف شتوية', nameEn: 'Winter Coats', categoryId: 'jackets' },
      { id: 'bomber-jackets', name: 'جاكيتات بومبر', nameEn: 'Bomber Jackets', categoryId: 'jackets' },
      { id: 'casual-blazers', name: 'بليزرات كاجوال', nameEn: 'Casual Blazers', categoryId: 'jackets' },
    ]
  },
  {
    id: 'islamic-wear',
    name: 'ملابس إسلامية',
    nameEn: 'Islamic Wear',
    icon: '🕋',
    description: 'ملابس إسلامية تقليدية وعصرية',
    descriptionEn: 'Traditional and modern Islamic wear',
    subcategories: [
      { id: 'thobes', name: 'ثياب رجالية', nameEn: 'Men\'s Thobes', categoryId: 'islamic-wear' },
      { id: 'jalabiyas', name: 'جلابيات', nameEn: 'Jalabiyas', categoryId: 'islamic-wear' },
      { id: 'ramadan-shirts', name: 'قمصان رمضانية', nameEn: 'Ramadan Shirts', categoryId: 'islamic-wear' },
      { id: 'prayer-wear', name: 'ملابس صلاة', nameEn: 'Prayer Wear', categoryId: 'islamic-wear' },
      { id: 'islamic-caps', name: 'طواقي إسلامية', nameEn: 'Islamic Caps', categoryId: 'islamic-wear' },
      { id: 'keffiyeh', name: 'كوفيات فلسطينية', nameEn: 'Palestinian Keffiyeh', categoryId: 'islamic-wear' },
    ]
  },
  {
    id: 'sportswear',
    name: 'ملابس رياضية',
    nameEn: 'Sportswear',
    icon: '👟',
    description: 'ملابس رياضية للرجال',
    descriptionEn: 'Men\'s sportswear',
    subcategories: [
      { id: 'sport-tshirts', name: 'تيشيرتات رياضية', nameEn: 'Sport T-Shirts', categoryId: 'sportswear' },
      { id: 'sport-pants', name: 'بناطيل رياضية', nameEn: 'Sport Pants', categoryId: 'sportswear' },
      { id: 'sport-shorts', name: 'شورتات رياضية', nameEn: 'Sport Shorts', categoryId: 'sportswear' },
      { id: 'sport-jackets', name: 'جاكيتات رياضية', nameEn: 'Sport Jackets', categoryId: 'sportswear' },
      { id: 'gym-wear', name: 'ملابس جيم', nameEn: 'Gym Wear', categoryId: 'sportswear' },
      { id: 'running-wear', name: 'ملابس جري', nameEn: 'Running Wear', categoryId: 'sportswear' },
    ]
  },
  {
    id: 'accessories',
    name: 'إكسسوارات',
    nameEn: 'Accessories',
    icon: '🧦',
    description: 'إكسسوارات رجالية متنوعة',
    descriptionEn: 'Various men\'s accessories',
    subcategories: [
      { id: 'belts', name: 'أحزمة', nameEn: 'Belts', categoryId: 'accessories' },
      { id: 'socks', name: 'جوارب', nameEn: 'Socks', categoryId: 'accessories' },
      { id: 'hats', name: 'قبعات', nameEn: 'Hats', categoryId: 'accessories' },
      { id: 'caps', name: 'كاب', nameEn: 'Caps', categoryId: 'accessories' },
      { id: 'scarves', name: 'شالات', nameEn: 'Scarves', categoryId: 'accessories' },
      { id: 'wallets', name: 'محافظ', nameEn: 'Wallets', categoryId: 'accessories' },
      { id: 'bags', name: 'حقائب يد رجالية', nameEn: 'Men\'s Bags', categoryId: 'accessories' },
    ]
  }
];

// Helper functions
export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(cat => cat.id === id);
};

export const getSubcategoryById = (id: string): Subcategory | undefined => {
  for (const category of categories) {
    const subcategory = category.subcategories?.find(sub => sub.id === id);
    if (subcategory) return subcategory;
  }
  return undefined;
};

export const getSubcategoriesByCategoryId = (categoryId: string): Subcategory[] => {
  const category = getCategoryById(categoryId);
  return category?.subcategories || [];
};
