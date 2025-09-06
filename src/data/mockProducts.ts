import { Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'ثوب رمضاني مطرز',
    nameEn: 'Embroidered Ramadan Thobe',
    description: 'ثوب أنيق مطرز بخيوط ذهبية، مثالي للمناسبات الخاصة وشهر رمضان المبارك',
    descriptionEn: 'Elegant thobe embroidered with golden threads, perfect for special occasions and Ramadan',
    price: 1250,
    originalPrice: 1450,
    images: [
      'https://pixelettastore.com/wp-content/uploads/2025/07/%D8%B9%D9%84%D9%89-1.png',
      'https://pixelettastore.com/wp-content/uploads/2025/07/%D8%B9%D9%84%D9%89-%D9%87%D8%B0%D9%87-3.png'
    ],
    category: 'ثياب رجالي',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['أبيض', 'بيج', 'رمادي'],
    stock: 15,
    featured: true,
    limited: true,
    tags: ['رمضان', 'مطرز', 'مناسبات']
  },
  {
    id: '2',
    name: 'عباية حديثة بتطريز هندسي',
    nameEn: 'Modern Abaya with Geometric Embroidery',
    description: 'عباية عصرية بتصميم هندسي مستوحى من الفن الإسلامي، مناسبة للارتداء اليومي',
    descriptionEn: 'Modern abaya with geometric design inspired by Islamic art, suitable for daily wear',
    price: 850,
    images: [
      'https://pixelettastore.com/wp-content/uploads/2025/07/%D8%AE%D8%B1%D9%8A%D8%B7%D8%A9-5.png',
      'https://pixelettastore.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-27-at-5.52.26-AM-1.jpeg'
    ],
    category: 'عبايات',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['أسود', 'كحلي', 'رمادي فاتح'],
    stock: 8,
    featured: true,
    new: true,
    tags: ['عباية', 'هندسي', 'حديث']
  },
  {
    id: '3',
    name: 'قميص قطني بكم طويل',
    nameEn: 'Long Sleeve Cotton Shirt',
    description: 'قميص قطني مريح بأكمام طويلة، مثالي للطقس المعتدل والارتداء الكاجوال',
    descriptionEn: 'Comfortable cotton shirt with long sleeves, perfect for moderate weather and casual wear',
    price: 620,
    images: [
      'https://pixelettastore.com/wp-content/uploads/2025/07/%D8%BA%D8%B1%D8%A7%D9%852.png',
      'https://pixelettastore.com/wp-content/uploads/2025/07/%D8%A8%D8%A7%D8%A8-%D8%A7%D9%84%D9%86%D8%AC%D8%A7%D8%B1-%D8%A7%D8%A8%D9%8A%D8%B6.png'
    ],
    category: 'قمصان',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['أبيض', 'أزرق فاتح', 'بيج'],
    stock: 20,
    tags: ['قطن', 'كاجوال', 'مريح']
  },
  {
    id: '4',
    name: 'تنورة طويلة بطيات',
    nameEn: 'Long Pleated Skirt',
    description: 'تنورة طويلة أنيقة بطيات ناعمة، تجمع بين الأناقة والراحة',
    descriptionEn: 'Elegant long skirt with soft pleats, combining elegance and comfort',
    price: 495,
    images: [
      'https://pixelettastore.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-27-at-5.52.24-AM-1.jpeg'
    ],
    category: 'تنانير',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['أسود', 'كحلي', 'بني'],
    stock: 12,
    new: true,
    tags: ['تنورة', 'طيات', 'أنيق']
  },
  {
    id: '5',
    name: 'كردجان صوفي دافئ',
    nameEn: 'Warm Wool Cardigan',
    description: 'كردجان صوفي دافئ ومريح، مثالي للطقس البارد مع لمسة عصرية',
    descriptionEn: 'Warm and comfortable wool cardigan, perfect for cold weather with a modern touch',
    price: 750,
    images: [
      'https://pixelettastore.com/wp-content/uploads/2025/07/%D9%83%D8%A7%D9%81%D9%8A%D9%8A%D9%862.png'
    ],
    category: 'ملابس خارجية',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['بيج', 'رمادي', 'كحلي'],
    stock: 10,
    tags: ['صوف', 'دافئ', 'شتوي']
  },
  {
    id: '6',
    name: 'حجاب حريري فاخر',
    nameEn: 'Luxury Silk Hijab',
    description: 'حجاب حريري فاخر بملمس ناعم وألوان زاهية، يضفي أناقة على إطلالتك',
    descriptionEn: 'Luxury silk hijab with soft texture and vibrant colors, adds elegance to your look',
    price: 370,
    images: [
      'https://pixelettastore.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-27-at-5.52.31-AM-3.jpeg'
    ],
    category: 'حجاب واكسسوارات',
    sizes: ['واحد'],
    colors: ['ذهبي', 'فضي', 'وردي', 'أزرق'],
    stock: 25,
    featured: true,
    tags: ['حرير', 'فاخر', 'حجاب']
  }
];