import React from 'react';
import { useLocation } from 'react-router-dom';
import { usePageTitle, getPageTitleFromPath } from '../../hooks/usePageTitle';

interface PageTitleProps {
  customTitle?: string;
  brandName?: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({ 
  customTitle, 
  brandName = 'رونق' 
}) => {
  const location = useLocation();
  
  // استخدام التايتل المخصص أو الحصول عليه من المسار
  const title = customTitle || getPageTitleFromPath(location.pathname);
  
  usePageTitle({ title, brandName });
  
  // هذا المكون لا يعرض أي شيء، فقط يدير التايتل
  return null;
};
