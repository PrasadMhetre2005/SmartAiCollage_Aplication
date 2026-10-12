import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    studentId: "",
    email: "",
    phone: "",
    department: "",
    year: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const departments = [
    "Computer Engineering",
    "Information Technology",
    "Artificial Intelligence & Data Science",
    "Electronics & Telecommunication",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
  ];

  const years = [
    "First Year",
    "Second Year",
    "Third Year",
    "Final Year",
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

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.studentId.trim()) {
      newErrors.studentId = "Student ID is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!formData.department) {
      newErrors.department = "Please select your department.";
    }

    if (!formData.year) {
      newErrors.year = "Please select your academic year.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Password must contain at least 6 characters.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        "Please confirm your password.";
    } else if (
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match.";
    }

    if (!agreeTerms) {
      newErrors.terms =
        "Please accept the terms and conditions.";
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
      Frontend-only registration.

      Backend API/database integration can be connected later.
    */

    alert(
      "Registration successful! You can now sign in."
    );

    navigate("/login");
  };

  return (
    <div className="register-container">

      {/* Header */}
      <div className="register-header">

        <div className="register-icon">
          <i className="bi bi-person-plus-fill"></i>
        </div>

        <div>
          <h2>Create Account</h2>
          <p>
            Join the AI Smart College platform
          </p>
        </div>

      </div>

      {/* Progress Indicator */}
      <div className="register-progress">

        <div className="register-progress-step active">
          <span>1</span>
          <small>Personal</small>
        </div>

        <div className="register-progress-line"></div>

        <div className="register-progress-step active">
          <span>2</span>
          <small>Academic</small>
        </div>

        <div className="register-progress-line"></div>

        <div className="register-progress-step">
          <span>3</span>
          <small>Security</small>
        </div>

      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
      >

        {/* Personal Information */}
        <div className="register-section-title">
          <div>
            <i className="bi bi-person-vcard"></i>
          </div>

          <div>
            <h6>Personal Information</h6>
            <span>Tell us about yourself</span>
          </div>
        </div>

        <div className="register-grid">

          {/* Full Name */}
          <div className="register-form-group full-width">

            <label htmlFor="fullName">
              Full Name
            </label>

            <div
              className={`register-input-wrapper ${
                errors.fullName
                  ? "input-error"
                  : ""
              }`}
            >
              <i className="bi bi-person"></i>

              <input
                id="fullName"
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            {errors.fullName && (
              <small className="register-error">
                {errors.fullName}
              </small>
            )}

          </div>

          {/* Student ID */}
          <div className="register-form-group">

            <label htmlFor="studentId">
              Student ID
            </label>

            <div
              className={`register-input-wrapper ${
                errors.studentId
                  ? "input-error"
                  : ""
              }`}
            >
              <i className="bi bi-person-badge"></i>

              <input
                id="studentId"
                type="text"
                name="studentId"
                placeholder="e.g. STU2026001"
                value={formData.studentId}
                onChange={handleChange}
              />
            </div>

            {errors.studentId && (
              <small className="register-error">
                {errors.studentId}
              </small>
            )}

          </div>

          {/* Phone */}
          <div className="register-form-group">

            <label htmlFor="phone">
              Phone Number
            </label>

            <div
              className={`register-input-wrapper ${
                errors.phone
                  ? "input-error"
                  : ""
              }`}
            >
              <i className="bi bi-phone"></i>

              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="10-digit mobile number"
                maxLength="10"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {errors.phone && (
              <small className="register-error">
                {errors.phone}
              </small>
            )}

          </div>

          {/* Email */}
          <div className="register-form-group full-width">

            <label htmlFor="email">
              College Email
            </label>

            <div
              className={`register-input-wrapper ${
                errors.email
                  ? "input-error"
                  : ""
              }`}
            >
              <i className="bi bi-envelope"></i>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="yourname@college.edu"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {errors.email && (
              <small className="register-error">
                {errors.email}
              </small>
            )}

          </div>

        </div>

        {/* Academic Information */}
        <div className="register-section-title academic-title">
          <div>
            <i className="bi bi-mortarboard"></i>
          </div>

          <div>
            <h6>Academic Information</h6>
            <span>Your college details</span>
          </div>
        </div>

        <div className="register-grid">

          {/* Department */}
          <div className="register-form-group">

            <label htmlFor="department">
              Department
            </label>

            <div
              className={`register-input-wrapper ${
                errors.department
                  ? "input-error"
                  : ""
              }`}
            >
              <i className="bi bi-building"></i>

              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
              >
                <option value="">
                  Select department
                </option>

                {departments.map((department) => (
                  <option
                    key={department}
                    value={department}
                  >
                    {department}
                  </option>
                ))}
              </select>
            </div>

            {errors.department && (
              <small className="register-error">
                {errors.department}
              </small>
            )}

          </div>

          {/* Year */}
          <div className="register-form-group">

            <label htmlFor="year">
              Academic Year
            </label>

            <div
              className={`register-input-wrapper ${
                errors.year
                  ? "input-error"
                  : ""
              }`}
            >
              <i className="bi bi-calendar3"></i>

              <select
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
              >
                <option value="">
                  Select year
                </option>

                {years.map((year) => (
                  <option
                    key={year}
                    value={year}
                  >
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {errors.year && (
              <small className="register-error">
                {errors.year}
              </small>
            )}

          </div>

        </div>

        {/* Security */}
        <div className="register-section-title security-title">
          <div>
            <i className="bi bi-shield-lock"></i>
          </div>

          <div>
            <h6>Account Security</h6>
            <span>Create a secure password</span>
          </div>
        </div>

        <div className="register-grid">

          {/* Password */}
          <div className="register-form-group">

            <label htmlFor="password">
              Password
            </label>

            <div
              className={`register-input-wrapper ${
                errors.password
                  ? "input-error"
                  : ""
              }`}
            >
              <i className="bi bi-lock"></i>

              <input
                id="password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                placeholder="Minimum 6 characters"
                value={formData.password}
                onChange={handleChange}
              />

              <button
                type="button"
                className="register-password-toggle"
                onClick={() =>
                  setShowPassword(
                    (previous) => !previous
                  )
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
              <small className="register-error">
                {errors.password}
              </small>
            )}

          </div>

          {/* Confirm Password */}
          <div className="register-form-group">

            <label htmlFor="confirmPassword">
              Confirm Password
            </label>

            <div
              className={`register-input-wrapper ${
                errors.confirmPassword
                  ? "input-error"
                  : ""
              }`}
            >
              <i className="bi bi-lock-fill"></i>

              <input
                id="confirmPassword"
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                name="confirmPassword"
                placeholder="Re-enter password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              <button
                type="button"
                className="register-password-toggle"
                onClick={() =>
                  setShowConfirmPassword(
                    (previous) => !previous
                  )
                }
              >
                <i
                  className={`bi ${
                    showConfirmPassword
                      ? "bi-eye-slash"
                      : "bi-eye"
                  }`}
                ></i>
              </button>
            </div>

            {errors.confirmPassword && (
              <small className="register-error">
                {errors.confirmPassword}
              </small>
            )}

          </div>

        </div>

        {/* Terms */}
        <div className="register-terms">

          <label className="register-check-label">

            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) =>
                setAgreeTerms(e.target.checked)
              }
            />

            <span className="register-checkbox">
              <i className="bi bi-check"></i>
            </span>

            <span>
              I agree to the{" "}
              <a href="#terms">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="#privacy">
                Privacy Policy
              </a>
            </span>

          </label>

          {errors.terms && (
            <small className="register-error">
              {errors.terms}
            </small>
          )}

        </div>

        {/* Submit */}
        <button
          type="submit"
          className="register-submit-btn"
        >
          <i className="bi bi-person-check"></i>
          <span>Create My Account</span>
          <i className="bi bi-arrow-right"></i>
        </button>

      </form>

      {/* Login */}
      <div className="login-prompt">

        <span>
          Already have an account?
        </span>

        <Link to="/login">
          Sign in
          <i className="bi bi-arrow-up-right ms-1"></i>
        </Link>

      </div>

    </div>
  );
}

export default Register;