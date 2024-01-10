// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
// import styles from './App.module.scss';

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
 import { Accounts } from '@smart/accounts';
export function App() {
  return (
    <div>
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="accounts/main">Accounts</Link>
          </li>
          <li>
            <Link to="accounts/page2">Page 2</Link>
          </li>
        </ul>
        <Accounts />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route path="/main" element={<Accounts />} />
        <Route
          path="/accounts/page2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
              <Accounts />
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
      <NxWelcome title="accounts-app" />
    </div>
  );
}

export default App;
