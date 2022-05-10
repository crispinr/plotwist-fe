import React from "react";

export default function Login() {
  return (
    <>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form>
              <h3> Welcome to Plotwist Community!</h3>
              <div className="mb-3 ">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              <div className="mb-3">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Log In
                </button>
              </div>
              <p className="forgot-password text-right">
                Forgot <a href="/">password?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
