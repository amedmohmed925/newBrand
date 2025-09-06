import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Layout Components
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import AdminLayout from './components/Admin/AdminLayout';

// Pages
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductPage } from './pages/ProductPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderConfirmationPage } from './pages/OrderConfirmationPage';
import { AuthPage } from './pages/AuthPage';

// Admin Pages
import { AdminDashboard } from './pages/Admin/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Toaster 
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
              fontFamily: 'Cairo',
            },
            success: {
              iconTheme: {
                primary: '#D4A574',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
        
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/*" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="products" element={<div className="p-8 text-center text-gray-500 font-cairo">صفحة المنتجات قيد التطوير</div>} />
            <Route path="orders" element={<div className="p-8 text-center text-gray-500 font-cairo">صفحة الطلبات قيد التطوير</div>} />
            <Route path="customers" element={<div className="p-8 text-center text-gray-500 font-cairo">صفحة العملاء قيد التطوير</div>} />
            <Route path="analytics" element={<div className="p-8 text-center text-gray-500 font-cairo">صفحة التقارير قيد التطوير</div>} />
            <Route path="promotions" element={<div className="p-8 text-center text-gray-500 font-cairo">صفحة العروض قيد التطوير</div>} />
            <Route path="settings" element={<div className="p-8 text-center text-gray-500 font-cairo">صفحة الإعدادات قيد التطوير</div>} />
          </Route>

          {/* Public Routes */}
          <Route path="/*" element={
            <>
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/login" element={<AuthPage />} />
                <Route path="/register" element={<AuthPage />} />
                <Route path="/collections" element={<div className="min-h-screen flex items-center justify-center"><p className="text-gray-500 font-cairo">صفحة المجموعات قيد التطوير</p></div>} />
                <Route path="/about" element={<div className="min-h-screen flex items-center justify-center"><p className="text-gray-500 font-cairo">صفحة عن رونق قيد التطوير</p></div>} />
                <Route path="/contact" element={<div className="min-h-screen flex items-center justify-center"><p className="text-gray-500 font-cairo">صفحة التواصل قيد التطوير</p></div>} />
                <Route path="/account" element={<AuthPage />} />
              </Routes>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;