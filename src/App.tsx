import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AdminLayout from './components/Admin/AdminLayout';
import { useCartNotification } from './hooks/useCartNotification';
import { debugCart } from './utils/debugCart';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductPage } from './pages/ProductPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderConfirmationPage } from './pages/OrderConfirmationPage';
import { AuthPage } from './pages/AuthPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { CollectionsPage } from './pages/CollectionsPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AccountPage } from './pages/AccountPage';
import { AdminDashboard } from './pages/Admin/AdminDashboard';
import { AdminProducts } from './pages/Admin/AdminProducts';
import { AdminAddProduct } from './pages/Admin/AdminAddProduct';
import { AdminOrders } from './pages/Admin/AdminOrders';
import { AdminCustomers } from './pages/Admin/AdminCustomers';
import { AdminAnalytics } from './pages/Admin/AdminAnalytics';
import { AdminSettings } from './pages/Admin/AdminSettings';
import { AdminPromotions } from './pages/Admin/AdminPromotions';
import { AdminNotifications } from './pages/Admin/AdminNotifications';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { PageTitle } from './components/Layout/PageTitle';
import { ProtectedRoute } from './components/ProtectedRoute';

const App = () => {
  React.useEffect(() => {
    if (import.meta.env?.MODE === 'development') {
      debugCart();
    }
  }, []);
  useCartNotification();
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: { fontFamily: 'Cairo, sans-serif', direction: 'rtl' },
          }}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PageTitle />
                <Header />
                <HomePage />
                <Footer />
              </>
            }
          />
          <Route
            path="/shop"
            element={
              <>
                <PageTitle />
                <Header />
                <ShopPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/product/:id"
            element={
              <>
                <Header />
                <ProductPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Header />
                <CartPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <PageTitle />
                <Header />
                <CheckoutPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/order-confirmation"
            element={
              <>
                <Header />
                <OrderConfirmationPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/collections"
            element={
              <>
                <PageTitle />
                <Header />
                <CollectionsPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/categories"
            element={
              <>
                <PageTitle />
                <Header />
                <CategoriesPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <PageTitle />
                <Header />
                <AboutPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <PageTitle />
                <Header />
                <ContactPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <>
                  <PageTitle />
                  <Header />
                  <AccountPage />
                  <Footer />
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path="/auth"
            element={
              <>
                <PageTitle />
                <Header />
                <AuthPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <LoginPage />
            }
          />
          <Route
            path="/register"
            element={
              <RegisterPage />
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute requireAdmin={true}>
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/products"
            element={
              <ProtectedRoute requireAdmin={true}>
                <AdminLayout>
                  <AdminProducts />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/products/add"
            element={
              <ProtectedRoute requireAdmin={true}>
                <AdminLayout>
                  <AdminAddProduct />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/orders"
            element={
              <ProtectedRoute requireAdmin={true}>
                <AdminLayout>
                  <AdminOrders />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/customers"
            element={
              <ProtectedRoute requireAdmin={true}>
                <AdminLayout>
                  <AdminCustomers />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/analytics"
            element={
              <ProtectedRoute requireAdmin={true}>
                <AdminLayout>
                  <AdminAnalytics />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/settings"
            element={
              <ProtectedRoute requireAdmin={true}>
                <AdminLayout>
                  <AdminSettings />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/promotions"
            element={
              <ProtectedRoute requireAdmin={true}>
                <AdminLayout>
                  <AdminPromotions />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/notifications"
            element={
              <ProtectedRoute requireAdmin={true}>
                <AdminLayout>
                  <AdminNotifications />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
