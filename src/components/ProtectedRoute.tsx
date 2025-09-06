import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn, isAdmin } from '../utils/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireAdmin = false 
}) => {
  const userLoggedIn = isLoggedIn();
  const userIsAdmin = isAdmin();

  if (!userLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (requireAdmin && !userIsAdmin) {
    return <Navigate to="/account" replace />;
  }

  return <>{children}</>;
};
