import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const roles = [
    {
      id: "student",
      label: "Student",
      icon: "bi-person-fill",
    },
    {
      id: "faculty",
      label: "Faculty",
      icon: "bi-person-workspace",
    },
    {
      id: "admin",
      label: "Admin",
      icon: "bi-shield-lock-fill",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email or ID is required.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must contain at least 6 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    /*
      Frontend demo authentication.

      Backend/API authentication can be connected later.
      For now, users are redirected according to the selected role.
    */

    if (role === "student") {
      navigate("/student/dashboard");
    } else if (role === "faculty") {
      navigate("/faculty/dashboard");
    } else {
      navigate("/admin/dashboard");
    }
  };

  const handleDemoLogin = (selectedRole) => {
    setRole(selectedRole);

    setFormData({
      email:
        selectedRole === "student"
          ? "student@college.edu"
          : selectedRole === "faculty"
            ? "faculty@college.edu"
            : "admin@college.edu",
      password: "123456",
    });

    setErrors({});
  };

  return (
    <div className="login-container">

      {/* Header */}
      <div className="login-header">

        <div className="login-icon">
          <i className="bi bi-box-arrow-in-right"></i>
        </div>

        <div>
          <h2>Welcome Back</h2>
          <p>Sign in to continue to your dashboard</p>
        </div>

      </div>

      {/* Role Selection */}
      <div className="role-selector">

        <div className="role-selector-title">
          <span>Login as</span>
        </div>

        <div className="role-options">
          {roles.map((item) => (
            <button
              type="button"
              key={item.id}
              className={`role-option ${
                role === item.id ? "active" : ""
              }`}
              onClick={() => setRole(item.id)}
            >
              <i className={`bi ${item.icon}`}></i>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} noValidate>

        {/* Email */}
        <div className="login-form-group">

          <label htmlFor="email">
            Email / College ID
          </label>

          <div
            className={`login-input-wrapper ${
              errors.email ? "input-error" : ""
            }`}
          >
            <i className="bi bi-person"></i>

            <input
              id="email"
              type="text"
              name="email"
              placeholder={
                role === "student"
                  ? "Enter student ID or email"
                  : role === "faculty"
                    ? "Enter faculty ID or email"
                    : "Enter admin email"
              }
              value={formData.email}
              onChange={handleChange}
              autoComplete="username"
            />
          </div>

          {errors.email && (
            <small className="login-error">
              <i className="bi bi-exclamation-circle me-1"></i>
              {errors.email}
            </small>
          )}

        </div>

        {/* Password */}
        <div className="login-form-group">

          <div className="password-label-row">
            <label htmlFor="password">
              Password
            </label>

            <Link to="/forgot-password">
              Forgot password?
            </Link>
          </div>

          <div
            className={`login-input-wrapper ${
              errors.password ? "input-error" : ""
            }`}
          >
            <i className="bi bi-lock"></i>

            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() =>
                setShowPassword((previous) => !previous)
              }
              aria-label={
                showPassword
                  ? "Hide password"
                  : "Show password"
              }
            >
              <i
                className={`bi ${
                  showPassword
                    ? "bi-eye-slash"
                    : "bi-eye"
                }`}
              ></i>
            </button>
          </div>

          {errors.password && (
            <small className="login-error">
              <i className="bi bi-exclamation-circle me-1"></i>
              {errors.password}
            </small>
          )}

        </div>

        {/* Remember Me */}
        <div className="login-options">

          <label className="remember-me">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) =>
                setRememberMe(e.target.checked)
              }
            />

            <span className="custom-checkbox">
              <i className="bi bi-check"></i>
            </span>

            <span>Remember me</span>
          </label>

          <span className="secure-login">
            <i className="bi bi-shield-check"></i>
            Secure Login
          </span>

        </div>

        {/* Submit */}
        <button
          type="submit"
          className="login-submit-btn"
        >
          <span>Sign In</span>
          <i className="bi bi-arrow-right"></i>
        </button>

      </form>

      {/* Divider */}
      <div className="login-divider">
        <span>OR</span>
      </div>

      {/* Google-style button */}
      <button
        type="button"
        className="google-login-btn"
        onClick={() => {
          alert(
            "Google authentication will be connected with the backend later."
          );
        }}
      >
        <span className="google-icon">G</span>
        <span>Continue with Google</span>
      </button>

      {/* Demo Accounts */}
      <div className="demo-login-section">

        <div className="demo-heading">
          <i className="bi bi-lightning-charge-fill"></i>
          <span>Frontend Demo Login</span>
        </div>

        <p>
          Use a demo account to preview each dashboard.
        </p>

        <div className="demo-buttons">

          <button
            type="button"
            onClick={() => handleDemoLogin("student")}
          >
            <i className="bi bi-person"></i>
            Student
          </button>

          <button
            type="button"
            onClick={() => handleDemoLogin("faculty")}
          >
            <i className="bi bi-person-workspace"></i>
            Faculty
          </button>

          <button
            type="button"
            onClick={() => handleDemoLogin("admin")}
          >
            <i className="bi bi-shield-lock"></i>
            Admin
          </button>

        </div>

      </div>

      {/* Register */}
      <div className="register-prompt">
        <span>Don't have an account?</span>

        <Link to="/register">
          Create an account
          <i className="bi bi-arrow-up-right ms-1"></i>
        </Link>
      </div>

    </div>
  );
}

export default Login;