import React from 'react';
import EmailLogin from './EmailLogin';
import GoogleLogin from './GoogleLogin';
import Facebook from './Facebook';
import Github from './Github';

function LoginForm() {
  return (
    <div className="container mt-5">
      <div className="card p-4 shadow" style={{ maxWidth: "400px", margin: "auto" }}>
        <h3 className="text-center mb-3">Login</h3>

        {/* Email/Password Login */}
        <EmailLogin />

        <div className="text-center my-3">
          <span className="text-muted">or sign in with</span>
        </div>

        {/* Social Buttons */}
        <div className="d-flex justify-content-center gap-3">
          <GoogleLogin />
          <Facebook />
          <Github />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
