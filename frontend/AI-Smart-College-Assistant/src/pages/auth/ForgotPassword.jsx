import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email or college ID is required.");
      return;
    }

    if (
      email.includes("@") &&
      !/^\S+@\S+\.\S+$/.test(email)
    ) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  const handleBackToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="forgot-password-container">

      {/* Header */}
      <div className="forgot-header">

        <div className="forgot-icon">
          <i className="bi bi-key-fill"></i>
        </div>

        <div>
          <h2>Forgot Password?</h2>
          <p>Recover access to your account</p>
        </div>

      </div>

      {!submitted ? (
        <>
          {/* Information */}
          <div className="forgot-info-box">

            <div className="forgot-info-icon">
              <i className="bi bi-shield-lock"></i>
            </div>

            <div>
              <h6>Don't worry, we've got you covered.</h6>

              <p>
                Enter your registered college email or ID.
                We'll send you instructions to reset your
                password securely.
              </p>
            </div>

          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate>

            <div className="forgot-form-group">

              <label htmlFor="forgotEmail">
                Email / College ID
              </label>

              <div
                className={`forgot-input-wrapper ${
                  error ? "input-error" : ""
                }`}
              >
                <i className="bi bi-envelope"></i>

                <input
                  id="forgotEmail"
                  type="text"
                  placeholder="Enter your registered email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);

                    if (error) {
                      setError("");
                    }
                  }}
                  autoComplete="email"
                />
              </div>

              {error && (
                <small className="forgot-error">
                  <i className="bi bi-exclamation-circle me-1"></i>
                  {error}
                </small>
              )}

            </div>

            <button
              type="submit"
              className="forgot-submit-btn"
            >
              <span>Send Reset Instructions</span>
              <i className="bi bi-arrow-right"></i>
            </button>

          </form>

          {/* Back */}
          <button
            type="button"
            className="back-login-btn"
            onClick={handleBackToLogin}
          >
            <i className="bi bi-arrow-left"></i>
            <span>Back to Login</span>
          </button>
        </>
      ) : (
        /* Success State */
        <div className="forgot-success">

          <div className="forgot-success-icon">
            <i className="bi bi-check-lg"></i>
          </div>

          <h3>Check Your Inbox</h3>

          <p>
            If an account exists for
            <strong> {email}</strong>, password
            reset instructions will be sent to you.
          </p>

          <div className="forgot-success-note">
            <i className="bi bi-info-circle"></i>

            <span>
              For security reasons, we don't reveal
              whether an account exists.
            </span>
          </div>

          <button
            type="button"
            className="forgot-submit-btn"
            onClick={handleBackToLogin}
          >
            <i className="bi bi-box-arrow-in-right"></i>
            <span>Return to Login</span>
          </button>

          <button
            type="button"
            className="try-another-btn"
            onClick={() => {
              setSubmitted(false);
              setEmail("");
            }}
          >
            Try another email
          </button>

        </div>
      )}

      {/* Security Footer */}
      <div className="forgot-security">

        <i className="bi bi-shield-check"></i>

        <span>
          Your account information is protected
          with secure authentication.
        </span>

      </div>

      {/* Login Link */}
      <div className="forgot-login-link">

        <span>Remember your password?</span>

        <Link to="/login">
          Sign in
          <i className="bi bi-arrow-up-right ms-1"></i>
        </Link>

      </div>

    </div>
  );
}

export default ForgotPassword;