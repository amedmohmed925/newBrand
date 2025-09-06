// معلومات الحسابات التجريبية
export const DEMO_ACCOUNTS = {
  user: {
    email: 'user@demo.com',
    password: '123456',
    name: 'أحمد محمد',
    role: 'user'
  },
  admin: {
    email: 'admin@demo.com',
    password: 'admin123', 
    name: 'مدير النظام',
    role: 'admin'
  }
};

export interface User {
  email: string;
  name: string;
  role: string;
  isLoggedIn: boolean;
}

// التحقق من تسجيل الدخول
export const getCurrentUser = (): User | null => {
  const userData = localStorage.getItem('currentUser');
  return userData ? JSON.parse(userData) : null;
};

// حفظ بيانات المستخدم
export const saveUser = (user: User): void => {
  localStorage.setItem('currentUser', JSON.stringify(user));
};

// تسجيل الخروج
export const logoutUser = (): void => {
  localStorage.removeItem('currentUser');
};

// التحقق من صحة البيانات
export const validateLogin = (email: string, password: string): User | null => {
  const account = Object.values(DEMO_ACCOUNTS).find(
    acc => acc.email === email && acc.password === password
  );

  if (account) {
    return {
      email: account.email,
      name: account.name,
      role: account.role,
      isLoggedIn: true
    };
  }

  return null;
};

// التحقق من أن المستخدم مدير
export const isAdmin = (): boolean => {
  const user = getCurrentUser();
  return user?.role === 'admin';
};

// التحقق من أن المستخدم مسجل دخول
export const isLoggedIn = (): boolean => {
  const user = getCurrentUser();
  return user?.isLoggedIn === true;
};
