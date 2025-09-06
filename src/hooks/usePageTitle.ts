import { useEffect } from 'react';

interface PageTitleOptions {
  title: string;
  brandName?: string;
}

export const usePageTitle = ({ title, brandName = 'رونق' }: PageTitleOptions) => {
  useEffect(() => {
    const fullTitle = `${title} | ${brandName}`;
    document.title = fullTitle;
    
    // تنظيف التايتل عند إلغاء المكون
    return () => {
      document.title = brandName;
    };
  }, [title, brandName]);
};

// دالة مساعدة لتحديد تايتل الصفحة بناءً على المسار
export const getPageTitleFromPath = (pathname: string): string => {
  const titleMap: Record<string, string> = {
    '/': 'الرئيسية',
    '/shop': 'المتجر',
    '/cart': 'عربة التسوق',
    '/checkout': 'إتمام الطلب',
    '/order-confirmation': 'تأكيد الطلب',
    '/auth': 'تسجيل الدخول',
    '/admin': 'لوحة التحكم'
  };

  // للمنتجات المحددة
  if (pathname.startsWith('/product/')) {
    return 'تفاصيل المنتج';
  }

  return titleMap[pathname] || 'صفحة غير معروفة';
};
