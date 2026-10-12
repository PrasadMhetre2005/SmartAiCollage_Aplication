import { Link, Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="auth-layout">
      {/* Left Brand Panel */}
      <aside className="auth-brand-panel">
        <div className="auth-brand-content">
          <Link to="/" className="auth-brand-logo">
            <span className="auth-brand-icon">
              <i className="bi bi-stars"></i>
            </span>

            <span>
              <strong>Smart College</strong>
              <small>AI Assistant</small>
            </span>
          </Link>

          <div className="auth-brand-main">
            <span className="auth-eyebrow">
              <i className="bi bi-robot me-2"></i>
              AI Powered Campus
            </span>

            <h1>
              Your intelligent
              <span> college companion.</span>
            </h1>

            <p>
              Learn smarter, stay organized, prepare for placements, and get
              instant academic assistance with one intelligent platform.
            </p>

            <div className="auth-feature-list">
              <div className="auth-feature-item">
                <div className="auth-feature-icon">
                  <i className="bi bi-stars"></i>
                </div>

                <div>
                  <strong>AI Academic Assistant</strong>
                  <span>
                    Get contextual answers and academic guidance instantly.
                  </span>
                </div>
              </div>

              <div className="auth-feature-item">
                <div className="auth-feature-icon">
                  <i className="bi bi-graph-up-arrow"></i>
                </div>

                <div>
                  <strong>Track Your Progress</strong>
                  <span>
                    Monitor attendance, assignments, learning and performance.
                  </span>
                </div>
              </div>

              <div className="auth-feature-item">
                <div className="auth-feature-icon">
                  <i className="bi bi-briefcase"></i>
                </div>

                <div>
                  <strong>Placement Preparation</strong>
                  <span>
                    Practice aptitude, coding, quizzes and mock interviews.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="auth-brand-footer">
            <span>
              <i className="bi bi-shield-check me-2"></i>
              Secure &amp; Intelligent
            </span>

            <span className="auth-footer-dot"></span>

            <span>
              <i className="bi bi-lightning-charge me-2"></i>
              Built for Students
            </span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="auth-decoration auth-decoration-one"></div>
        <div className="auth-decoration auth-decoration-two"></div>
        <div className="auth-decoration auth-decoration-three"></div>

        <div className="auth-floating-card auth-floating-card-one">
          <i className="bi bi-stars"></i>
          <div>
            <strong>AI Assistant</strong>
            <small>Ready to help</small>
          </div>
        </div>

        <div className="auth-floating-card auth-floating-card-two">
          <i className="bi bi-check-circle-fill"></i>
          <div>
            <strong>Learning Progress</strong>
            <small>82% completed</small>
          </div>
        </div>
      </aside>

      {/* Right Form Panel */}
      <main className="auth-form-panel">
        <div className="auth-mobile-brand">
          <Link to="/" className="auth-brand-logo">
            <span className="auth-brand-icon">
              <i className="bi bi-stars"></i>
            </span>

            <span>
              <strong>Smart College</strong>
              <small>AI Assistant</small>
            </span>
          </Link>
        </div>

        <div className="auth-form-shell">
          <Outlet />
        </div>

        <div className="auth-form-footer">
          <span>
            <i className="bi bi-shield-lock me-1"></i>
            Your information is protected
          </span>

          <span>© {new Date().getFullYear()} AI Smart College Assistant</span>
        </div>
      </main>
    </div>
  );
}

export default AuthLayout;