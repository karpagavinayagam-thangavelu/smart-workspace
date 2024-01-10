
import React from "react";

const AuthVerifier = React.lazy(() => import('auth-app/auth-verifier').then());
export function Landing() {
  return (
    <div >
      <div className="intro-banner">
        <div className="content">

          <h1>One stop Portal</h1>

          <h2>For all applications</h2>
          <AuthVerifier >123</AuthVerifier>
        </div>
      </div>
    </div>
  );
}
export default Landing;
