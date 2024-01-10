// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { AnimatePresence } from 'framer-motion';

export function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="../login" replace={true} />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="../login" replace={true} />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;
