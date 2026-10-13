import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

import StudentDashboard from "./pages/student/StudentDashboard";
import AIAssistant from "./pages/student/AIAssistant";
import Attendance from "./pages/student/Attendance";
import Assignments from "./pages/student/Assignments";
import Timetable from "./pages/student/Timetable";
import Documents from "./pages/student/Documents";
import StudyPlanner from "./pages/student/StudyPlanner";
import Quiz from "./pages/student/Quiz";
import CodingPractice from "./pages/student/CodingPractice";
import MockInterview from "./pages/student/MockInterview";
import Placement from "./pages/student/Placement";
import Notifications from "./pages/student/Notifications";
import Profile from "./pages/student/Profile";
import Settings from "./pages/student/Settings";

function Home() {
  return (
    <main className="app-container">
      <section className="hero-section">
        <div className="hero-content">
          <div className="brand-icon"><i className="bi bi-mortarboard-fill" /></div>
          <h1>AI Smart College <span>Assistant</span></h1>
          <p>Intelligent academic assistance, campus management, placement preparation, and personalized learning in one platform.</p>
          <div className="hero-buttons">
            <a href="/login" className="btn btn-primary btn-lg"><i className="bi bi-box-arrow-in-right me-2" />Login</a>
            <a href="/register" className="btn btn-outline-primary btn-lg"><i className="bi bi-person-plus me-2" />Register</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ModuleComingSoon({ title, role }) {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, background: "#f6f7ff", fontFamily: "Inter, sans-serif" }}>
      <section style={{ maxWidth: 560, width: "100%", textAlign: "center", padding: 36, borderRadius: 24, background: "white", boxShadow: "0 18px 55px rgba(25, 35, 80, .09)" }}>
        <div style={{ width: 60, height: 60, margin: "0 auto 18px", display: "grid", placeItems: "center", borderRadius: 18, background: "linear-gradient(135deg,#4f46e5,#7c3aed)", color: "white", fontSize: 25 }}><i className="bi bi-grid-1x2-fill" /></div>
        <h2 style={{ fontWeight: 800, color: "#17172b" }}>{title}</h2>
        <p style={{ color: "#73738a" }}>{role} module</p>
        <p style={{ color: "#8a8aa0", marginBottom: 22 }}>This module is scheduled for the next implementation phase.</p>
        <a className="btn btn-primary" href={`/${role.toLowerCase()}/dashboard`}>Back to dashboard</a>
      </section>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>

        {/* Student pages implemented in this frontend */}
        <Route path="/student" element={<Navigate to="/student/dashboard" replace />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/ai-assistant" element={<AIAssistant />} />
        <Route path="/student/attendance" element={<Attendance />} />
        <Route path="/student/assignments" element={<Assignments />} />
        <Route path="/student/timetable" element={<Timetable />} />
        <Route path="/student/documents" element={<Documents />} />
        <Route path="/student/study-planner" element={<StudyPlanner />} />
        <Route path="/student/quiz" element={<Quiz />} />
        <Route path="/student/coding-practice" element={<CodingPractice />} />
        <Route path="/student/mock-interview" element={<MockInterview />} />
        <Route path="/student/placement" element={<Placement />} />
        <Route path="/student/notifications" element={<Notifications />} />
        <Route path="/student/profile" element={<Profile />} />
        <Route path="/student/settings" element={<Settings />} />

        {/* Faculty pages: safe placeholders until their full modules are added */}
        <Route path="/faculty" element={<Navigate to="/faculty/dashboard" replace />} />
        <Route path="/faculty/dashboard" element={<ModuleComingSoon title="Faculty Dashboard" role="Faculty" />} />
        <Route path="/faculty/upload-material" element={<ModuleComingSoon title="Upload Study Material" role="Faculty" />} />
        <Route path="/faculty/attendance" element={<ModuleComingSoon title="Manage Attendance" role="Faculty" />} />
        <Route path="/faculty/assignments" element={<ModuleComingSoon title="Manage Assignments" role="Faculty" />} />
        <Route path="/faculty/notices" element={<ModuleComingSoon title="Manage Notices" role="Faculty" />} />
        <Route path="/faculty/timetable" element={<ModuleComingSoon title="Faculty Timetable" role="Faculty" />} />
        <Route path="/faculty/profile" element={<ModuleComingSoon title="Faculty Profile" role="Faculty" />} />
        <Route path="/faculty/settings" element={<ModuleComingSoon title="Faculty Settings" role="Faculty" />} />

        {/* Admin pages: safe placeholders until their full modules are added */}
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/admin/dashboard" element={<ModuleComingSoon title="Admin Dashboard" role="Admin" />} />
        <Route path="/admin/students" element={<ModuleComingSoon title="Student Management" role="Admin" />} />
        <Route path="/admin/faculty" element={<ModuleComingSoon title="Faculty Management" role="Admin" />} />
        <Route path="/admin/courses" element={<ModuleComingSoon title="Course & Subject Management" role="Admin" />} />
        <Route path="/admin/analytics" element={<ModuleComingSoon title="Analytics" role="Admin" />} />
        <Route path="/admin/reports" element={<ModuleComingSoon title="Reports" role="Admin" />} />
        <Route path="/admin/audit-logs" element={<ModuleComingSoon title="Audit Logs" role="Admin" />} />
        <Route path="/admin/profile" element={<ModuleComingSoon title="Admin Profile" role="Admin" />} />
        <Route path="/admin/settings" element={<ModuleComingSoon title="Admin Settings" role="Admin" />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
