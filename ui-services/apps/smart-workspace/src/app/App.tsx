import * as React from 'react';

import { Landing } from './Landing';

import { Link, Route, Routes } from 'react-router-dom';

// import Accounts from 'accounts-app/Module';
const Accounts = React.lazy(() => import('accounts-app/Module').then());
export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/accounts">Accounts</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/accounts" element={<Accounts />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
