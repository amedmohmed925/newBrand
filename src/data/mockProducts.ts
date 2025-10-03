import { Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'تيشيرت رجالي قطني - علم فلسطين',
    nameEn: 'Cotton Men\'s T-Shirt - Palestine Flag',
    description: 'تيشيرت رجالي عصري بتصميم علم فلسطين، قطن 100% مريح ومناسب للارتداء اليومي',
    descriptionEn: 'Modern men\'s t-shirt with Palestine flag design, 100% cotton comfortable for daily wear',
    price: 250,
    originalPrice: 300,
    images: [
      'https://pixelettastore.com/wp-content/uploads/2025/07/%D8%B9%D9%84%D9%89-1.png',
      'https://pixelettastore.com/wp-content/uploads/2025/07/%D8%B9%D9%84%D9%89-%D9%87%D8%B0%D9%87-3.png'
    ],
    category: 'tshirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['أبيض', 'أسود', 'رمادي'],
    stock: 15,
    featured: true,
    limited: true,
    tags: ['قطن', 'فلسطين', 'رجالي', 'printed-tshirts']
  },
  {
    id: '2',
    name: 'تيشيرت شبابي أبيض - خريطة فلسطين',
    nameEn: 'White Youth T-Shirt - Palestine Map',
    description: 'تيشيرت شبابي أبيض بتصميم خريطة فلسطين، قماش عالي الجودة ومريح',
    descriptionEn: 'White youth t-shirt with Palestine map design, high quality and comfortable fabric',
    price: 280,
    images: [
      'https://pixelettastore.com/wp-content/uploads/2025/07/%D8%AE%D8%B1%D9%8A%D8%B7%D8%A9-5.png',
      'https://pixelettastore.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-27-at-5.52.26-AM-1.jpeg'
    ],
    category: 'tshirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['أبيض', 'بيج', 'رمادي فاتح'],
    stock: 18,
    featured: true,
    new: true,
    tags: ['شبابي', 'خريطة', 'فلسطين', 'printed-tshirts']
  },
  {
    id: '3',
    name: 'تيشيرت رجالي - تصميم الغراس',
    nameEn: 'Men\'s T-Shirt - Al-Gheras Design',
    description: 'تيشيرت رجالي بتصميم الغراس الفلسطيني، قطن ناعم ومتين',
    descriptionEn: 'Men\'s t-shirt with Palestinian Al-Gheras design, soft and durable cotton',
    price: 260,
    images: [
      'https://pixelettastore.com/wp-content/uploads/2025/07/%D8%BA%D8%B1%D8%A7%D9%852.png',
      'https://pixelettastore.com/wp-content/uploads/2025/07/%D8%A8%D8%A7%D8%A8-%D8%A7%D9%84%D9%86%D8%AC%D8%A7%D8%B1-%D8%A7%D8%A8%D9%8A%D8%B6.png'
    ],
    category: 'tshirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['أبيض', 'أسود', 'كحلي'],
    stock: 20,
    tags: ['قطن', 'غراس', 'رجالي', 'casual-tshirts']
  },
  {
    id: '4',
    name: 'تيشيرت رجالي - تصميم باب النجار',
    nameEn: 'Men\'s T-Shirt - Bab Al-Najjar Design',
    description: 'تيشيرت رجالي بتصميم باب النجار التراثي، قماش عالي الجودة',
    descriptionEn: 'Men\'s t-shirt with traditional Bab Al-Najjar design, high quality fabric',
    price: 270,
    images: [
      'https://pixelettastore.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-27-at-5.52.24-AM-1.jpeg'
    ],
    category: 'tshirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['أبيض', 'رمادي', 'بيج'],
    stock: 12,
    new: true,
    tags: ['تراثي', 'باب النجار', 'رجالي', 'printed-tshirts']
  },
  {
    id: '5',
    name: 'تيشيرت رجالي - كوفية فلسطينية',
    nameEn: 'Men\'s T-Shirt - Palestinian Keffiyeh',
    description: 'تيشيرت رجالي بطبعة الكوفية الفلسطينية، قطن مريح وعصري',
    descriptionEn: 'Men\'s t-shirt with Palestinian Keffiyeh print, comfortable and modern cotton',
    price: 290,
    images: [
      'https://pixelettastore.com/wp-content/uploads/2025/07/%D9%83%D8%A7%D9%81%D9%8A%D9%8A%D9%862.png'
    ],
    category: 'tshirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['أسود', 'أبيض', 'رمادي'],
    stock: 15,
    tags: ['كوفية', 'فلسطيني', 'رجالي', 'printed-tshirts']
  },
  {
    id: '6',
    name: 'تيشيرت رجالي - تصميم القدس',
    nameEn: 'Men\'s T-Shirt - Jerusalem Design',
    description: 'تيشيرت رجالي فاخر بتصميم معالم القدس، قماش قطني ممتاز',
    descriptionEn: 'Luxury men\'s t-shirt with Jerusalem landmarks design, premium cotton fabric',
    price: 310,
    images: [
      'https://pixelettastore.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-27-at-5.52.31-AM-3.jpeg'
    ],
    category: 'tshirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['أسود', 'كحلي', 'رمادي', 'أبيض'],
    stock: 25,
    featured: true,
    tags: ['القدس', 'فاخر', 'رجالي', 'printed-tshirts']
  }
];