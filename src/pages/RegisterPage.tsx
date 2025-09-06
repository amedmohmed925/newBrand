import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IslamicIcon } from '../components/Icons/IslamicIcon';
import { usePageTitle } from '../hooks/usePageTitle';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  agreeToTerms: boolean;
  subscribeNewsletter: boolean;
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  subscribeNewsletter: boolean;
  createdAt: string;
}

export const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    agreeToTerms: false,
    subscribeNewsletter: true
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  usePageTitle({ title: 'إنشاء حساب جديد' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.firstName.trim()) {
      toast.error('يرجى إدخال الاسم الأول');
      return false;
    }
    if (!formData.lastName.trim()) {
      toast.error('يرجى إدخال الاسم الأخير');
      return false;
    }
    if (!formData.email.trim()) {
      toast.error('يرجى إدخال البريد الإلكتروني');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('البريد الإلكتروني غير صحيح');
      return false;
    }
    if (formData.password.length < 6) {
      toast.error('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error('كلمة المرور وتأكيدها غير متطابقتين');
      return false;
    }
    if (!formData.phone.trim()) {
      toast.error('يرجى إدخال رقم الهاتف');
      return false;
    }
    if (!formData.agreeToTerms) {
      toast.error('يجب الموافقة على الشروط والأحكام');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    // محاكاة تأخير الشبكة
    await new Promise(resolve => setTimeout(resolve, 1500));

    // التحقق من عدم وجود البريد الإلكتروني مسبقاً
    const existingUsers: User[] = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const emailExists = existingUsers.some((user: User) => user.email === formData.email);

    if (emailExists) {
      toast.error('البريد الإلكتروني مستخدم مسبقاً');
      setIsLoading(false);
      return;
    }

    // إنشاء الحساب الجديد
    const newUser = {
      id: Date.now().toString(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      role: 'user',
      subscribeNewsletter: formData.subscribeNewsletter,
      createdAt: new Date().toISOString()
    };

    // حفظ المستخدم الجديد
    existingUsers.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));

    // تسجيل دخول تلقائي
    localStorage.setItem('currentUser', JSON.stringify({
      email: newUser.email,
      name: `${newUser.firstName} ${newUser.lastName}`,
      role: newUser.role,
      isLoggedIn: true
    }));

    toast.success('تم إنشاء الحساب بنجاح! مرحباً بك في رونق');
    navigate('/account');
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <IslamicIcon type="crescent" size="lg" className="text-gold-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 font-cairo">
            إنشاء حساب جديد
          </h2>
          <p className="mt-2 text-sm text-gray-600 font-cairo">
            انضم إلى عائلة رونق واستمتع بتجربة تسوق فريدة
          </p>
        </div>

        {/* Register Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                الاسم الأول *
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
                placeholder="أحمد"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                الاسم الأخير *
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
                placeholder="محمد"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-cairo mb-2">
              البريد الإلكتروني *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="appearance-none relative block w-full px-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 font-cairo mb-2">
              رقم الهاتف *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="appearance-none relative block w-full px-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
              placeholder="+20 10 1234 5678"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 font-cairo mb-2">
              كلمة المرور *
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
                placeholder="6 أحرف على الأقل"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 font-cairo mb-2">
              تأكيد كلمة المرور *
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                autoComplete="new-password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
                placeholder="أعد إدخال كلمة المرور"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-3">
            <div className="flex items-center">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
                required
              />
              <label htmlFor="agreeToTerms" className="mr-2 block text-sm text-gray-900 font-cairo">
                أوافق على{' '}
                <Link to="/terms" className="text-gold-600 hover:text-gold-500">
                  الشروط والأحكام
                </Link>
                {' '}و{' '}
                <Link to="/privacy" className="text-gold-600 hover:text-gold-500">
                  سياسة الخصوصية
                </Link>
                *
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="subscribeNewsletter"
                name="subscribeNewsletter"
                type="checkbox"
                checked={formData.subscribeNewsletter}
                onChange={handleChange}
                className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
              />
              <label htmlFor="subscribeNewsletter" className="mr-2 block text-sm text-gray-900 font-cairo">
                أريد الاشتراك في النشرة البريدية لتلقي العروض والتحديثات
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gold-600 hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 disabled:opacity-50 disabled:cursor-not-allowed font-cairo transition-colors"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white ml-2"></div>
                  جاري إنشاء الحساب...
                </div>
              ) : (
                'إنشاء حساب'
              )}
            </button>
          </div>

          <div className="text-center">
            <span className="text-sm text-gray-600 font-cairo">
              لديك حساب بالفعل؟{' '}
              <Link to="/login" className="font-medium text-gold-600 hover:text-gold-500">
                تسجيل الدخول
              </Link>
            </span>
          </div>
        </form>

        {/* Decorative elements */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-4">
            <IslamicIcon type="star" size="sm" className="text-gold-300" />
            <IslamicIcon type="pattern" size="sm" className="text-gold-300" />
            <IslamicIcon type="star" size="sm" className="text-gold-300" />
          </div>
        </div>
      </div>
    </div>
  );
};
