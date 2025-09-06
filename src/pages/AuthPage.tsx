import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IslamicIcon } from '../components/Icons/IslamicIcon';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

interface LoginFormData {
  email: string;
  password: string;
}

interface RegisterFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const loginSchema = yup.object({
  email: yup.string().email('البريد الإلكتروني غير صحيح').required('البريد الإلكتروني مطلوب'),
  password: yup.string().min(6, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل').required('كلمة المرور مطلوبة')
});

const registerSchema = yup.object({
  fullName: yup.string().required('الاسم الكامل مطلوب'),
  email: yup.string().email('البريد الإلكتروني غير صحيح').required('البريد الإلكتروني مطلوب'),
  password: yup.string().min(6, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل').required('كلمة المرور مطلوبة'),
  confirmPassword: yup.string()
    .required('تأكيد كلمة المرور مطلوب')
    .oneOf([yup.ref('password')], 'كلمات المرور غير متطابقة')
});

export const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loginForm = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema)
  });

  const registerForm = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema)
  });

  const handleLogin = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('تم تسجيل الدخول بنجاح!');
      // Redirect or update auth state
    } catch (error) {
      toast.error('خطأ في تسجيل الدخول. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (data: RegisterFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('تم إنشاء الحساب بنجاح!');
      // Redirect or update auth state
    } catch (error) {
      toast.error('خطأ في إنشاء الحساب. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      // Simulate Google OAuth
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('تم تسجيل الدخول بنجاح باستخدام Google!');
    } catch (error) {
      toast.error('خطأ في تسجيل الدخول بـ Google.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50 via-white to-olive-50 relative">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <IslamicIcon type="pattern" className="w-full h-full text-gold-500" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 opacity-20">
        <IslamicIcon type="crescent" size="lg" className="text-gold-400" />
      </div>
      <div className="absolute bottom-20 right-20 opacity-20">
        <IslamicIcon type="star" size="lg" className="text-olive-400" />
      </div>

      <div className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <IslamicIcon type="crescent" className="text-gold-500" />
              <span className="text-3xl font-bold font-cairo text-gray-900">رونق</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 font-cairo mb-2">
              {isLogin ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}
            </h1>
            <p className="text-gray-600 font-cairo">
              {isLogin ? 'أهلاً بعودتك إلى رونق' : 'انضم إلى عائلة رونق'}
            </p>
          </div>

          {/* Auth Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
            {/* Google Sign In */}
            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 font-cairo transition-colors disabled:opacity-50"
            >
              <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="w-5 h-5" />
              {isLogin ? 'تسجيل الدخول بـ Google' : 'التسجيل بـ Google'}
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white/80 text-gray-500 font-cairo">أو</span>
              </div>
            </div>

            {/* Login Form */}
            {isLogin ? (
              <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    {...loginForm.register('email')}
                    type="email"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo text-right"
                    placeholder="example@email.com"
                    dir="ltr"
                  />
                  {loginForm.formState.errors.email && (
                    <p className="text-red-600 text-sm mt-1 font-cairo">
                      {loginForm.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                    كلمة المرور
                  </label>
                  <div className="relative">
                    <input
                      {...loginForm.register('password')}
                      type={showPassword ? 'text' : 'password'}
                      className="w-full px-3 py-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo text-right"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeSlashIcon className="h-5 w-5" />
                      ) : (
                        <EyeIcon className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {loginForm.formState.errors.password && (
                    <p className="text-red-600 text-sm mt-1 font-cairo">
                      {loginForm.formState.errors.password.message}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-gold-500 focus:ring-gold-500" />
                    <span className="mr-2 text-sm text-gray-600 font-cairo">تذكرني</span>
                  </label>
                  <a href="/forgot-password" className="text-sm text-gold-600 hover:text-gold-700 font-cairo">
                    نسيت كلمة المرور؟
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gold-500 text-white py-3 px-4 rounded-lg font-semibold font-cairo hover:bg-gold-600 focus:ring-4 focus:ring-gold-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      جاري تسجيل الدخول...
                    </>
                  ) : (
                    <>
                      <IslamicIcon type="star" size="sm" />
                      تسجيل الدخول
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Register Form */
              <form onSubmit={registerForm.handleSubmit(handleRegister)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    {...registerForm.register('fullName')}
                    type="text"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo text-right"
                    placeholder="أدخل اسمك الكامل"
                  />
                  {registerForm.formState.errors.fullName && (
                    <p className="text-red-600 text-sm mt-1 font-cairo">
                      {registerForm.formState.errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    {...registerForm.register('email')}
                    type="email"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo text-right"
                    placeholder="example@email.com"
                    dir="ltr"
                  />
                  {registerForm.formState.errors.email && (
                    <p className="text-red-600 text-sm mt-1 font-cairo">
                      {registerForm.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                    كلمة المرور
                  </label>
                  <div className="relative">
                    <input
                      {...registerForm.register('password')}
                      type={showPassword ? 'text' : 'password'}
                      className="w-full px-3 py-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo text-right"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeSlashIcon className="h-5 w-5" />
                      ) : (
                        <EyeIcon className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {registerForm.formState.errors.password && (
                    <p className="text-red-600 text-sm mt-1 font-cairo">
                      {registerForm.formState.errors.password.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                    تأكيد كلمة المرور
                  </label>
                  <input
                    {...registerForm.register('confirmPassword')}
                    type="password"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo text-right"
                    placeholder="••••••••"
                  />
                  {registerForm.formState.errors.confirmPassword && (
                    <p className="text-red-600 text-sm mt-1 font-cairo">
                      {registerForm.formState.errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gold-500 text-white py-3 px-4 rounded-lg font-semibold font-cairo hover:bg-gold-600 focus:ring-4 focus:ring-gold-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      جاري إنشاء الحساب...
                    </>
                  ) : (
                    <>
                      <IslamicIcon type="crescent" size="sm" />
                      إنشاء حساب
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Toggle Form */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 font-cairo">
                {isLogin ? 'ليس لديك حساب؟' : 'لديك حساب بالفعل؟'}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="mr-1 text-gold-600 hover:text-gold-700 font-semibold"
                >
                  {isLogin ? 'إنشاء حساب جديد' : 'تسجيل الدخول'}
                </button>
              </p>
            </div>

            {/* Guest Checkout */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <Link
                to="/checkout"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 font-cairo transition-colors"
              >
                <IslamicIcon type="pattern" size="sm" className="text-gray-400" />
                متابعة كضيف
              </Link>
              <p className="text-xs text-gray-500 font-cairo text-center mt-2">
                يمكنك الطلب دون إنشاء حساب
              </p>
            </div>

            {/* Privacy Notice */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-2">
                <IslamicIcon type="crescent" size="sm" className="text-gold-500 mt-1 flex-shrink-0" />
                <div className="text-xs text-gray-600 font-cairo">
                  <p className="font-semibold mb-1">بياناتك آمنة معنا</p>
                  <p>نحن نحترم خصوصيتك ولن نشارك بياناتك مع أطراف ثالثة. تسجيل الدخول بـ Google آمن ومشفر.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};