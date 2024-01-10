import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './landing/Landing';
import React from 'react';
const Accounts = React.lazy(() => import('accounts-app/Module').then());
const AuthApp = React.lazy(() => import('auth-app/Module').then());

export function AppRoutes() {
  return (
    <BrowserRouter basename={process.env.BASE_ROUTE_URL || ''}>
      <React.Suspense>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/accounts/*" element={<Accounts />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/auth/*" element={<AuthApp />} />
          <Route path="/home" element={
            <>
              <AuthApp />
              <Accounts />
            </>} />
        </Routes>
        
      </React.Suspense>
    </BrowserRouter>
  );
}
export default AppRoutes;
