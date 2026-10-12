import { useState } from "react";
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";

const studentMenu = [
  {
    section: "Overview",
    items: [
      {
        label: "Dashboard",
        icon: "bi-grid-1x2-fill",
        path: "/student/dashboard",
      },
      {
        label: "AI Assistant",
        icon: "bi-stars",
        path: "/student/ai-assistant",
        badge: "AI",
      },
    ],
  },
  {
    section: "Academics",
    items: [
      {
        label: "Attendance",
        icon: "bi-calendar-check",
        path: "/student/attendance",
      },
      {
        label: "Assignments",
        icon: "bi-journal-text",
        path: "/student/assignments",
      },
      {
        label: "Timetable",
        icon: "bi-calendar3",
        path: "/student/timetable",
      },
      {
        label: "Study Resources",
        icon: "bi-folder2-open",
        path: "/student/documents",
      },
      {
        label: "Study Planner",
        icon: "bi-list-check",
        path: "/student/study-planner",
      },
    ],
  },
  {
    section: "Placement Preparation",
    items: [
      {
        label: "Aptitude & Quiz",
        icon: "bi-patch-question",
        path: "/student/quiz",
      },
      {
        label: "Coding Practice",
        icon: "bi-code-slash",
        path: "/student/coding-practice",
      },
      {
        label: "Mock Interview",
        icon: "bi-mic",
        path: "/student/mock-interview",
      },
      {
        label: "Placement",
        icon: "bi-briefcase",
        path: "/student/placement",
      },
    ],
  },
  {
    section: "Account",
    items: [
      {
        label: "Notifications",
        icon: "bi-bell",
        path: "/student/notifications",
        badge: "3",
      },
      {
        label: "My Profile",
        icon: "bi-person",
        path: "/student/profile",
      },
      {
        label: "Settings",
        icon: "bi-gear",
        path: "/student/settings",
      },
    ],
  },
];

function StudentLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const getPageTitle = () => {
    const currentItem = studentMenu
      .flatMap((section) => section.items)
      .find((item) => location.pathname === item.path);

    return currentItem?.label || "Student Dashboard";
  };

  const getBreadcrumb = () => {
    const currentItem = studentMenu
      .flatMap((section) => section.items)
      .find((item) => location.pathname === item.path);

    if (!currentItem) {
      return "Student Portal";
    }

    return currentItem.label;
  };

  const handleLogout = () => {
    setProfileOpen(false);
    navigate("/login");
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="student-layout">
      {/* =====================================================
          MOBILE OVERLAY
          ===================================================== */}
      {sidebarOpen && (
        <div
          className="student-sidebar-overlay"
          onClick={closeSidebar}
          aria-hidden="true"
        ></div>
      )}

      {/* =====================================================
          SIDEBAR
          ===================================================== */}
      <aside
        className={`student-sidebar ${
          sidebarOpen ? "student-sidebar-open" : ""
        }`}
      >
        {/* Logo */}
        <div className="student-sidebar-header">
          <NavLink
            to="/student/dashboard"
            className="student-sidebar-brand"
            onClick={closeSidebar}
          >
            <span className="student-brand-icon">
              <i className="bi bi-stars"></i>
            </span>

            <span className="student-brand-text">
              <strong>Smart College</strong>
              <small>AI Assistant</small>
            </span>
          </NavLink>

          <button
            type="button"
            className="student-sidebar-close"
            onClick={closeSidebar}
            aria-label="Close navigation"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {/* Student Mini Profile */}
        <div className="student-mini-profile">
          <div className="student-avatar">
            <span>SD</span>
            <span className="student-online-dot"></span>
          </div>

          <div className="student-mini-profile-info">
            <strong>Student</strong>
            <span>Student Portal</span>
          </div>

          <button
            type="button"
            className="student-mini-profile-more"
            onClick={() => navigate("/student/profile")}
            aria-label="Open profile"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        {/* Navigation */}
        <nav className="student-sidebar-nav">
          {studentMenu.map((section) => (
            <div className="student-nav-section" key={section.section}>
              <div className="student-nav-section-title">
                {section.section}
              </div>

              <div className="student-nav-items">
                {section.items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={closeSidebar}
                    className={({ isActive }) =>
                      `student-nav-link ${
                        isActive ? "student-nav-link-active" : ""
                      }`
                    }
                  >
                    <span className="student-nav-icon">
                      <i className={`bi ${item.icon}`}></i>
                    </span>

                    <span className="student-nav-label">{item.label}</span>

                    {item.badge && (
                      <span
                        className={`student-nav-badge ${
                          item.badge === "AI"
                            ? "student-nav-badge-ai"
                            : ""
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Sidebar Bottom */}
        <div className="student-sidebar-bottom">
          <div className="student-help-card">
            <div className="student-help-icon">
              <i className="bi bi-headset"></i>
            </div>

            <div>
              <strong>Need Help?</strong>
              <span>Ask the AI Assistant</span>
            </div>

            <button
              type="button"
              onClick={() => {
                closeSidebar();
                navigate("/student/ai-assistant");
              }}
              aria-label="Open AI Assistant"
            >
              <i className="bi bi-arrow-up-right"></i>
            </button>
          </div>

          <button
            type="button"
            className="student-logout-button"
            onClick={handleLogout}
          >
            <span>
              <i className="bi bi-box-arrow-right"></i>
              Logout
            </span>

            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </aside>

      {/* =====================================================
          MAIN AREA
          ===================================================== */}
      <div className="student-main-area">
        {/* ===================================================
            TOPBAR
            =================================================== */}
        <header className="student-topbar">
          <div className="student-topbar-left">
            <button
              type="button"
              className="student-mobile-menu-button"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open navigation"
            >
              <i className="bi bi-list"></i>
            </button>

            <div className="student-page-heading">
              <div className="student-breadcrumb">
                <span>Student Portal</span>
                <i className="bi bi-chevron-right"></i>
                <strong>{getBreadcrumb()}</strong>
              </div>

              <h1>{getPageTitle()}</h1>
            </div>
          </div>

          <div className="student-topbar-right">
            {/* Search */}
            <button
              type="button"
              className="student-topbar-icon-button student-search-button"
              onClick={() => navigate("/student/ai-assistant")}
              title="Search / Ask AI"
              aria-label="Search"
            >
              <i className="bi bi-search"></i>
            </button>

            {/* Notifications */}
            <div className="student-topbar-dropdown-wrapper">
              <button
                type="button"
                className={`student-topbar-icon-button ${
                  notificationsOpen
                    ? "student-topbar-icon-button-active"
                    : ""
                }`}
                onClick={() => {
                  setNotificationsOpen(!notificationsOpen);
                  setProfileOpen(false);
                }}
                aria-label="Notifications"
              >
                <i className="bi bi-bell"></i>
                <span className="student-notification-dot">3</span>
              </button>

              {notificationsOpen && (
                <div className="student-dropdown student-notification-dropdown">
                  <div className="student-dropdown-header">
                    <div>
                      <strong>Notifications</strong>
                      <span>Recent updates</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => navigate("/student/notifications")}
                    >
                      View all
                    </button>
                  </div>

                  <div className="student-notification-list">
                    <button
                      type="button"
                      className="student-notification-item"
                      onClick={() => navigate("/student/assignments")}
                    >
                      <span className="student-notification-item-icon assignment">
                        <i className="bi bi-journal-check"></i>
                      </span>

                      <span>
                        <strong>New assignment</strong>
                        <small>Web Development assignment added</small>
                        <em>10 min ago</em>
                      </span>
                    </button>

                    <button
                      type="button"
                      className="student-notification-item"
                      onClick={() => navigate("/student/attendance")}
                    >
                      <span className="student-notification-item-icon attendance">
                        <i className="bi bi-calendar-check"></i>
                      </span>

                      <span>
                        <strong>Attendance updated</strong>
                        <small>Your attendance has been updated</small>
                        <em>1 hour ago</em>
                      </span>
                    </button>

                    <button
                      type="button"
                      className="student-notification-item"
                      onClick={() => navigate("/student/placement")}
                    >
                      <span className="student-notification-item-icon placement">
                        <i className="bi bi-briefcase"></i>
                      </span>

                      <span>
                        <strong>Placement opportunity</strong>
                        <small>New company drive announced</small>
                        <em>3 hours ago</em>
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Profile */}
            <div className="student-topbar-dropdown-wrapper">
              <button
                type="button"
                className="student-profile-trigger"
                onClick={() => {
                  setProfileOpen(!profileOpen);
                  setNotificationsOpen(false);
                }}
              >
                <span className="student-topbar-avatar">SD</span>

                <span className="student-topbar-profile-text">
                  <strong>Student</strong>
                  <small>Student</small>
                </span>

                <i className="bi bi-chevron-down"></i>
              </button>

              {profileOpen && (
                <div className="student-dropdown student-profile-dropdown">
                  <div className="student-profile-dropdown-header">
                    <span className="student-profile-large-avatar">SD</span>

                    <div>
                      <strong>Student</strong>
                      <span>student@college.edu</span>
                    </div>
                  </div>

                  <div className="student-dropdown-divider"></div>

                  <button
                    type="button"
                    className="student-profile-menu-item"
                    onClick={() => {
                      setProfileOpen(false);
                      navigate("/student/profile");
                    }}
                  >
                    <i className="bi bi-person"></i>
                    My Profile
                  </button>

                  <button
                    type="button"
                    className="student-profile-menu-item"
                    onClick={() => {
                      setProfileOpen(false);
                      navigate("/student/settings");
                    }}
                  >
                    <i className="bi bi-gear"></i>
                    Settings
                  </button>

                  <div className="student-dropdown-divider"></div>

                  <button
                    type="button"
                    className="student-profile-menu-item danger"
                    onClick={handleLogout}
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* ===================================================
            PAGE CONTENT
            =================================================== */}
        <main className="student-page-content">
          <Outlet />
        </main>

        {/* ===================================================
            FOOTER
            =================================================== */}
        <footer className="student-footer">
          <span>
            © {new Date().getFullYear()} AI Smart College Assistant
          </span>

          <span className="student-footer-divider"></span>

          <span>
            <i className="bi bi-stars me-1"></i>
            Powered by AI
          </span>

          <span className="student-footer-divider"></span>

          <button
            type="button"
            onClick={() => navigate("/student/ai-assistant")}
          >
            Need assistance?
          </button>
        </footer>
      </div>
    </div>
  );
}

export default StudentLayout;