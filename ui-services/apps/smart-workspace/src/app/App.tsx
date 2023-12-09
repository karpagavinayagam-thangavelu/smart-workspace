import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';
import Accounts from 'accounts-app/Module';
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
        <Route path="/" element={<NxWelcome title="smart-workspace" />} />
        <Route path="/accounts" element={<Accounts/>} />
      
      </Routes>
    </React.Suspense>
  );
}

export default App;
