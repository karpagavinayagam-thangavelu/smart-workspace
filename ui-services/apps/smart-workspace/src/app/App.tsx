import * as React from 'react';
import AppRoutes from './App.routes';
// const AuthApp = React.lazy(() => import('auth-app').then());

export function App() {
  return (
    <React.Suspense fallback={<div />}>
      <AppRoutes/>
    </React.Suspense>
  );
}

export default App;
