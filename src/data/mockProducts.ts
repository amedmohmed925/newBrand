import { Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'ثوب رمضاني مطرز',
    nameEn: 'Embroidered Ramadan Thobe',
    description: 'ثوب أنيق مطرز بخيوط ذهبية، مثالي للمناسبات الخاصة وشهر رمضان المبارك',
    descriptionEn: 'Elegant thobe embroidered with golden threads, perfect for special occasions and Ramadan',
    price: 299,
    originalPrice: 349,
    images: [
      'https://images.pexels.com/photos/8839979/pexels-photo-8839979.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8839977/pexels-photo-8839977.jpeg?auto=compress&cs=tinysrgb&w=800'
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
    price: 199,
    images: [
      'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8867481/pexels-photo-8867481.jpeg?auto=compress&cs=tinysrgb&w=800'
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
    price: 149,
    images: [
      'https://images.pexels.com/photos/8112359/pexels-photo-8112359.jpeg?auto=compress&cs=tinysrgb&w=800'
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
    price: 119,
    images: [
      'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800'
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
    price: 179,
    images: [
      'https://images.pexels.com/photos/7679662/pexels-photo-7679662.jpeg?auto=compress&cs=tinysrgb&w=800'
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
    price: 89,
    images: [
      'https://images.pexels.com/photos/8867526/pexels-photo-8867526.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'حجاب واكسسوارات',
    sizes: ['واحد'],
    colors: ['ذهبي', 'فضي', 'وردي', 'أزرق'],
    stock: 25,
    featured: true,
    tags: ['حرير', 'فاخر', 'حجاب']
  }
];