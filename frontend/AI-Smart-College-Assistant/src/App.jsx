import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import StudentDashboard from "./pages/student/StudentDashboard";    
import AIAssistant from "./pages/student/AIAssistant";

/*
|--------------------------------------------------------------------------
| Temporary Dashboard Components
|--------------------------------------------------------------------------
| These are intentionally small route-safe components.
| They will be replaced by the actual dashboard pages as we build them.
*/

function ModuleComingSoon({ title, role }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px",
        background: "#f8f9ff",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          padding: "45px",
          textAlign: "center",
          background: "#ffffff",
          borderRadius: "24px",
          boxShadow: "0 20px 60px rgba(17, 24, 39, 0.08)",
        }}
      >
        <div
          style={{
            width: "65px",
            height: "65px",
            margin: "0 auto 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "18px",
            background:
              "linear-gradient(135deg, #4f46e5, #7c3aed)",
            color: "#ffffff",
            fontSize: "26px",
          }}
        >
          <i className="bi bi-grid-1x2-fill"></i>
        </div>

        <h2
          style={{
            marginBottom: "10px",
            fontWeight: "800",
            color: "#111827",
          }}
        >
          {title}
        </h2>

        <p
          style={{
            marginBottom: "8px",
            color: "#6b7280",
          }}
        >
          {role} module
        </p>

        <small style={{ color: "#9ca3af" }}>
          This module is part of the AI Smart College
          Assistant frontend and will be implemented in the
          next development steps.
        </small>
      </div>
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| Home
|--------------------------------------------------------------------------
*/

function Home() {
  return (
    <div className="app-container">
      <div className="hero-section">

        <div className="hero-content">

          <div className="brand-icon">
            <i className="bi bi-mortarboard-fill"></i>
          </div>

          <h1>
            AI Smart College
            <span> Assistant</span>
          </h1>

          <p>
            Intelligent academic assistance, campus
            management, placement preparation and
            personalized learning in one platform.
          </p>

          <div className="hero-buttons">

            <a
              href="/login"
              className="btn btn-primary btn-lg"
            >
              <i className="bi bi-box-arrow-in-right me-2"></i>
              Login
            </a>

            <a
              href="/register"
              className="btn btn-outline-primary btn-lg"
            >
              <i className="bi bi-person-plus me-2"></i>
              Register
            </a>

          </div>

        </div>

      </div>
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| App Router
|--------------------------------------------------------------------------
*/

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* ======================================================
            PUBLIC
            ====================================================== */}

        <Route path="/" element={<Home />} />

        {/* ======================================================
            AUTHENTICATION
            ====================================================== */}

        <Route element={<AuthLayout />}>

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
  path="/student/ai-assistant"
  element={<AIAssistant />}
/>

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />

        </Route>

        {/* ======================================================
            STUDENT MODULES
            ====================================================== */}

        <Route
          path="/student/dashboard"
          element={
            <ModuleComingSoon
              title="Student Dashboard"
              role="Student"
            />
          }
        />

        <Route
          path="/student/ai-assistant"
          element={
            <ModuleComingSoon
              title="AI Academic Assistant"
              role="Student"
            />
          }
        />

        <Route
          path="/student/attendance"
          element={
            <ModuleComingSoon
              title="Attendance"
              role="Student"
            />
          }
        />

        <Route
          path="/student/assignments"
          element={
            <ModuleComingSoon
              title="Assignments"
              role="Student"
            />
          }
        />

        <Route
          path="/student/timetable"
          element={
            <ModuleComingSoon
              title="Timetable"
              role="Student"
            />
          }
        />

        <Route
          path="/student/documents"
          element={
            <ModuleComingSoon
              title="Documents & Knowledge Base"
              role="Student"
            />
          }
        />

        <Route
          path="/student/study-planner"
          element={
            <ModuleComingSoon
              title="AI Study Planner"
              role="Student"
            />
          }
        />

        <Route
          path="/student/quiz"
          element={
            <ModuleComingSoon
              title="Dynamic Quiz"
              role="Student"
            />
          }
        />

        <Route
          path="/student/coding-practice"
          element={
            <ModuleComingSoon
              title="Coding Practice"
              role="Student"
            />
          }
        />

        <Route
          path="/student/mock-interview"
          element={
            <ModuleComingSoon
              title="AI Mock Interview"
              role="Student"
            />
          }
        />

        <Route
          path="/student/placement"
          element={
            <ModuleComingSoon
              title="Placement Preparation"
              role="Student"
            />
          }
        />

        <Route
          path="/student/notifications"
          element={
            <ModuleComingSoon
              title="Notifications"
              role="Student"
            />
          }
        />

        <Route
          path="/student/profile"
          element={
            <ModuleComingSoon
              title="Student Profile"
              role="Student"
            />
          }
        />

        <Route
          path="/student/settings"
          element={
            <ModuleComingSoon
              title="Student Settings"
              role="Student"
            />
          }
        />

        {/* ======================================================
            FACULTY MODULES
            ====================================================== */}

        <Route
          path="/faculty/dashboard"
          element={
            <ModuleComingSoon
              title="Faculty Dashboard"
              role="Faculty"
            />
          }
        />

        <Route
          path="/faculty/upload-material"
          element={
            <ModuleComingSoon
              title="Upload Study Material"
              role="Faculty"
            />
          }
        />

        <Route
          path="/faculty/attendance"
          element={
            <ModuleComingSoon
              title="Manage Attendance"
              role="Faculty"
            />
          }
        />

        <Route
          path="/faculty/assignments"
          element={
            <ModuleComingSoon
              title="Manage Assignments"
              role="Faculty"
            />
          }
        />

        <Route
          path="/faculty/notices"
          element={
            <ModuleComingSoon
              title="Manage Notices"
              role="Faculty"
            />
          }
        />

        <Route
          path="/faculty/timetable"
          element={
            <ModuleComingSoon
              title="Faculty Timetable"
              role="Faculty"
            />
          }
        />

        <Route
          path="/faculty/profile"
          element={
            <ModuleComingSoon
              title="Faculty Profile"
              role="Faculty"
            />
          }
        />

        <Route
          path="/faculty/settings"
          element={
            <ModuleComingSoon
              title="Faculty Settings"
              role="Faculty"
            />
          }
        />

        {/* ======================================================
            ADMIN MODULES
            ====================================================== */}

        <Route
          path="/admin/dashboard"
          element={
            <ModuleComingSoon
              title="Admin Dashboard"
              role="Admin"
            />
          }
        />

        <Route
          path="/admin/students"
          element={
            <ModuleComingSoon
              title="Student Management"
              role="Admin"
            />
          }
        />

        <Route
          path="/admin/faculty"
          element={
            <ModuleComingSoon
              title="Faculty Management"
              role="Admin"
            />
          }
        />

        <Route
          path="/admin/courses"
          element={
            <ModuleComingSoon
              title="Course & Subject Management"
              role="Admin"
            />
          }
        />

        <Route
          path="/admin/analytics"
          element={
            <ModuleComingSoon
              title="Analytics"
              role="Admin"
            />
          }
        />

        <Route
          path="/admin/reports"
          element={
            <ModuleComingSoon
              title="Reports"
              role="Admin"
            />
          }
        />

        <Route
          path="/admin/audit-logs"
          element={
            <ModuleComingSoon
              title="Audit Logs"
              role="Admin"
            />
          }
        />

        <Route
          path="/admin/profile"
          element={
            <ModuleComingSoon
              title="Admin Profile"
              role="Admin"
            />
          }
        />

        <Route
          path="/admin/settings"
          element={
            <ModuleComingSoon
              title="Admin Settings"
              role="Admin"
            />
          }
        />

        {/* ======================================================
            INVALID ROUTES
            ====================================================== */}

        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;