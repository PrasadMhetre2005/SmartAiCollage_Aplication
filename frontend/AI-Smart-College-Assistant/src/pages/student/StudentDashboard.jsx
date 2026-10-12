import { useNavigate } from "react-router-dom";

const stats = [
  {
    title: "Attendance",
    value: "87%",
    subtitle: "Overall attendance",
    icon: "bi-calendar-check",
    className: "student-stat-indigo",
    progress: 87,
  },
  {
    title: "Assignments",
    value: "12",
    subtitle: "8 completed",
    icon: "bi-journal-check",
    className: "student-stat-blue",
    progress: 67,
  },
  {
    title: "Learning Progress",
    value: "74%",
    subtitle: "This semester",
    icon: "bi-graph-up-arrow",
    className: "student-stat-purple",
    progress: 74,
  },
  {
    title: "Placement Prep",
    value: "68%",
    subtitle: "Preparation score",
    icon: "bi-briefcase",
    className: "student-stat-orange",
    progress: 68,
  },
];

const schedule = [
  {
    time: "09:00 AM",
    endTime: "10:00 AM",
    subject: "Data Structures",
    faculty: "Prof. Rahul Sharma",
    room: "Room 204",
    icon: "bi-diagram-3",
    type: "Lecture",
  },
  {
    time: "10:15 AM",
    endTime: "11:15 AM",
    subject: "Database Management",
    faculty: "Prof. Priya Patil",
    room: "Lab 3",
    icon: "bi-database",
    type: "Practical",
  },
  {
    time: "12:00 PM",
    endTime: "01:00 PM",
    subject: "Web Development",
    faculty: "Prof. Amit Joshi",
    room: "Room 108",
    icon: "bi-code-slash",
    type: "Lecture",
  },
  {
    time: "02:00 PM",
    endTime: "03:00 PM",
    subject: "Software Engineering",
    faculty: "Prof. Neha Kulkarni",
    room: "Room 301",
    icon: "bi-kanban",
    type: "Lecture",
  },
];

const assignments = [
  {
    title: "React.js College Portal",
    subject: "Web Development",
    due: "Tomorrow",
    progress: 75,
    status: "In Progress",
    statusClass: "progress-status",
    icon: "bi-code-square",
  },
  {
    title: "Database Design Report",
    subject: "DBMS",
    due: "18 Oct",
    progress: 45,
    status: "In Progress",
    statusClass: "progress-status",
    icon: "bi-database-check",
  },
  {
    title: "Software Engineering Case Study",
    subject: "SE",
    due: "21 Oct",
    progress: 100,
    status: "Completed",
    statusClass: "completed-status",
    icon: "bi-check-circle",
  },
];

const notifications = [
  {
    title: "New assignment posted",
    description: "React.js College Portal assignment was added.",
    time: "10 min ago",
    icon: "bi-journal-text",
    className: "dashboard-notification-indigo",
  },
  {
    title: "Attendance updated",
    description: "Your DBMS attendance has been updated.",
    time: "1 hour ago",
    icon: "bi-calendar-check",
    className: "dashboard-notification-green",
  },
  {
    title: "Placement drive announced",
    description: "A new campus placement opportunity is available.",
    time: "3 hours ago",
    icon: "bi-briefcase",
    className: "dashboard-notification-orange",
  },
];

const quickActions = [
  {
    title: "Ask AI Assistant",
    description: "Get instant academic help",
    icon: "bi-stars",
    path: "/student/ai-assistant",
    className: "quick-action-ai",
  },
  {
    title: "View Attendance",
    description: "Check subject-wise attendance",
    icon: "bi-calendar-check",
    path: "/student/attendance",
    className: "quick-action-attendance",
  },
  {
    title: "Study Resources",
    description: "Access notes and materials",
    icon: "bi-folder2-open",
    path: "/student/documents",
    className: "quick-action-resources",
  },
  {
    title: "Practice Coding",
    description: "Improve technical skills",
    icon: "bi-code-slash",
    path: "/student/coding-practice",
    className: "quick-action-coding",
  },
];

function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="student-dashboard">
      {/* =====================================================
          WELCOME HEADER
          ===================================================== */}
      <section className="student-welcome-section">
        <div className="student-welcome-content">
          <div>
            <span className="student-welcome-label">
              <i className="bi bi-stars"></i>
              AI Smart College Assistant
            </span>

            <h2>
              Good afternoon, <span>Student!</span>
            </h2>

            <p>
              Here&apos;s what&apos;s happening with your academics today.
              Stay focused and keep making progress.
            </p>
          </div>

          <div className="student-welcome-date">
            <div className="student-date-icon">
              <i className="bi bi-calendar3"></i>
            </div>

            <div>
              <strong>Wednesday</strong>
              <span>October 8, 2026</span>
            </div>
          </div>
        </div>

        <div className="student-welcome-decoration decoration-one"></div>
        <div className="student-welcome-decoration decoration-two"></div>
        <div className="student-welcome-stars">
          <i className="bi bi-stars"></i>
        </div>
      </section>

      {/* =====================================================
          STATISTICS
          ===================================================== */}
      <section className="student-dashboard-stats">
        {stats.map((stat) => (
          <div className="student-stat-card" key={stat.title}>
            <div className="student-stat-top">
              <div className={`student-stat-icon ${stat.className}`}>
                <i className={`bi ${stat.icon}`}></i>
              </div>

              <span className="student-stat-menu">
                <i className="bi bi-three-dots"></i>
              </span>
            </div>

            <div className="student-stat-content">
              <span className="student-stat-title">{stat.title}</span>

              <div className="student-stat-value-row">
                <strong>{stat.value}</strong>
                <span>{stat.subtitle}</span>
              </div>
            </div>

            <div className="student-stat-progress">
              <div className="student-stat-progress-track">
                <div
                  className={`student-stat-progress-bar ${stat.className}`}
                  style={{ width: `${stat.progress}%` }}
                ></div>
              </div>

              <span>{stat.progress}%</span>
            </div>
          </div>
        ))}
      </section>

      {/* =====================================================
          MAIN GRID
          ===================================================== */}
      <div className="student-dashboard-grid">
        {/* ===================================================
            AI ASSISTANT
            =================================================== */}
        <section className="student-ai-dashboard-card">
          <div className="student-ai-dashboard-content">
            <div className="student-ai-icon-large">
              <i className="bi bi-stars"></i>
            </div>

            <span className="student-ai-label">
              AI ACADEMIC ASSISTANT
            </span>

            <h3>
              What would you like
              <span> to learn today?</span>
            </h3>

            <p>
              Ask questions about your subjects, assignments, study material,
              exams, or any academic topic.
            </p>

            <div className="student-ai-suggestions">
              <button
                type="button"
                onClick={() => navigate("/student/ai-assistant")}
              >
                <i className="bi bi-lightbulb"></i>
                Explain a topic
              </button>

              <button
                type="button"
                onClick={() => navigate("/student/ai-assistant")}
              >
                <i className="bi bi-journal-text"></i>
                Help with assignment
              </button>

              <button
                type="button"
                onClick={() => navigate("/student/ai-assistant")}
              >
                <i className="bi bi-book"></i>
                Study guidance
              </button>
            </div>

            <button
              type="button"
              className="student-ai-ask-button"
              onClick={() => navigate("/student/ai-assistant")}
            >
              <i className="bi bi-stars"></i>
              Start a conversation
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>

          <div className="student-ai-orb ai-orb-one"></div>
          <div className="student-ai-orb ai-orb-two"></div>
          <div className="student-ai-orb ai-orb-three"></div>

          <div className="student-ai-pattern">
            <i className="bi bi-stars"></i>
          </div>
        </section>

        {/* ===================================================
            TODAY'S SCHEDULE
            =================================================== */}
        <section className="student-dashboard-card schedule-card">
          <div className="student-dashboard-card-header">
            <div>
              <span className="student-card-eyebrow">
                TODAY&apos;S CLASSES
              </span>
              <h3>My Schedule</h3>
            </div>

            <button
              type="button"
              className="student-card-header-action"
              onClick={() => navigate("/student/timetable")}
            >
              View timetable
              <i className="bi bi-arrow-up-right"></i>
            </button>
          </div>

          <div className="student-schedule-list">
            {schedule.map((item, index) => (
              <div
                className={`student-schedule-item ${
                  index === 0 ? "schedule-current" : ""
                }`}
                key={`${item.subject}-${item.time}`}
              >
                <div className="schedule-time">
                  <strong>{item.time}</strong>
                  <span>{item.endTime}</span>
                </div>

                <div className="schedule-line">
                  <span className="schedule-dot"></span>
                  {index !== schedule.length - 1 && (
                    <span className="schedule-vertical-line"></span>
                  )}
                </div>

                <div className="schedule-subject-icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>

                <div className="schedule-info">
                  <div>
                    <strong>{item.subject}</strong>
                    {index === 0 && (
                      <span className="schedule-live-badge">NOW</span>
                    )}
                  </div>

                  <span>
                    {item.faculty} • {item.room}
                  </span>
                </div>

                <span className="schedule-type">{item.type}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================
            ASSIGNMENTS
            =================================================== */}
        <section className="student-dashboard-card assignments-card">
          <div className="student-dashboard-card-header">
            <div>
              <span className="student-card-eyebrow">
                ASSIGNMENTS
              </span>
              <h3>Recent Assignments</h3>
            </div>

            <button
              type="button"
              className="student-card-header-action"
              onClick={() => navigate("/student/assignments")}
            >
              View all
              <i className="bi bi-arrow-up-right"></i>
            </button>
          </div>

          <div className="student-assignment-list">
            {assignments.map((assignment) => (
              <div
                className="student-assignment-item"
                key={assignment.title}
              >
                <div className="assignment-icon">
                  <i className={`bi ${assignment.icon}`}></i>
                </div>

                <div className="assignment-main">
                  <div className="assignment-title-row">
                    <div>
                      <strong>{assignment.title}</strong>
                      <span>{assignment.subject}</span>
                    </div>

                    <span className={assignment.statusClass}>
                      {assignment.status}
                    </span>
                  </div>

                  <div className="assignment-progress-row">
                    <div className="assignment-progress">
                      <div
                        className="assignment-progress-bar"
                        style={{
                          width: `${assignment.progress}%`,
                        }}
                      ></div>
                    </div>

                    <span>{assignment.progress}%</span>
                  </div>

                  <div className="assignment-due">
                    <span>
                      <i className="bi bi-clock"></i>
                      Due {assignment.due}
                    </span>

                    <button
                      type="button"
                      onClick={() => navigate("/student/assignments")}
                    >
                      Open
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================
            NOTIFICATIONS
            =================================================== */}
        <section className="student-dashboard-card notifications-card">
          <div className="student-dashboard-card-header">
            <div>
              <span className="student-card-eyebrow">
                UPDATES
              </span>
              <h3>Recent Notifications</h3>
            </div>

            <button
              type="button"
              className="student-card-header-action"
              onClick={() => navigate("/student/notifications")}
            >
              See all
              <i className="bi bi-arrow-up-right"></i>
            </button>
          </div>

          <div className="student-dashboard-notifications">
            {notifications.map((notification) => (
              <button
                type="button"
                className="student-dashboard-notification"
                key={notification.title}
                onClick={() => navigate("/student/notifications")}
              >
                <span
                  className={`dashboard-notification-icon ${notification.className}`}
                >
                  <i className={`bi ${notification.icon}`}></i>
                </span>

                <span className="dashboard-notification-content">
                  <strong>{notification.title}</strong>
                  <small>{notification.description}</small>
                  <em>{notification.time}</em>
                </span>

                <i className="bi bi-chevron-right notification-arrow"></i>
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* =====================================================
          QUICK ACTIONS
          ===================================================== */}
      <section className="student-quick-actions-section">
        <div className="student-section-heading">
          <div>
            <span>SHORTCUTS</span>
            <h3>Quick Actions</h3>
          </div>

          <p>Access your frequently used student tools.</p>
        </div>

        <div className="student-quick-actions-grid">
          {quickActions.map((action) => (
            <button
              type="button"
              className={`student-quick-action ${action.className}`}
              key={action.title}
              onClick={() => navigate(action.path)}
            >
              <span className="quick-action-icon">
                <i className={`bi ${action.icon}`}></i>
              </span>

              <span className="quick-action-content">
                <strong>{action.title}</strong>
                <small>{action.description}</small>
              </span>

              <span className="quick-action-arrow">
                <i className="bi bi-arrow-up-right"></i>
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* =====================================================
          BOTTOM INSIGHTS
          ===================================================== */}
      <section className="student-dashboard-bottom-grid">
        {/* Study Progress */}
        <div className="student-dashboard-card study-progress-card">
          <div className="student-dashboard-card-header">
            <div>
              <span className="student-card-eyebrow">
                LEARNING
              </span>
              <h3>Study Progress</h3>
            </div>

            <button
              type="button"
              className="student-card-header-icon"
              onClick={() => navigate("/student/study-planner")}
              aria-label="Open study planner"
            >
              <i className="bi bi-arrow-up-right"></i>
            </button>
          </div>

          <div className="study-progress-main">
            <div className="study-progress-circle">
              <svg
                viewBox="0 0 120 120"
                className="study-progress-svg"
              >
                <circle
                  className="study-progress-background"
                  cx="60"
                  cy="60"
                  r="50"
                />

                <circle
                  className="study-progress-value"
                  cx="60"
                  cy="60"
                  r="50"
                />

                <text
                  x="60"
                  y="56"
                  textAnchor="middle"
                  className="study-progress-number"
                >
                  74%
                </text>

                <text
                  x="60"
                  y="72"
                  textAnchor="middle"
                  className="study-progress-label"
                >
                  Complete
                </text>
              </svg>
            </div>

            <div className="study-progress-details">
              <div>
                <span>
                  <i className="bi bi-check-circle-fill"></i>
                  Completed
                </span>
                <strong>18 topics</strong>
              </div>

              <div>
                <span>
                  <i className="bi bi-clock-fill"></i>
                  In progress
                </span>
                <strong>7 topics</strong>
              </div>

              <div>
                <span>
                  <i className="bi bi-circle"></i>
                  Remaining
                </span>
                <strong>5 topics</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Placement Preparation */}
        <div className="student-dashboard-card placement-card">
          <div className="student-dashboard-card-header">
            <div>
              <span className="student-card-eyebrow">
                CAREER
              </span>
              <h3>Placement Preparation</h3>
            </div>

            <button
              type="button"
              className="student-card-header-icon"
              onClick={() => navigate("/student/placement")}
              aria-label="Open placement preparation"
            >
              <i className="bi bi-arrow-up-right"></i>
            </button>
          </div>

          <div className="placement-score">
            <div>
              <strong>68%</strong>
              <span>Overall preparation</span>
            </div>

            <span className="placement-score-badge">
              <i className="bi bi-arrow-up"></i>
              12%
            </span>
          </div>

          <div className="placement-progress-track">
            <div className="placement-progress-fill"></div>
          </div>

          <div className="placement-skills">
            <div>
              <span>DSA</span>
              <strong>76%</strong>
            </div>

            <div>
              <span>Aptitude</span>
              <strong>82%</strong>
            </div>

            <div>
              <span>Communication</span>
              <strong>61%</strong>
            </div>

            <div>
              <span>Interview</span>
              <strong>54%</strong>
            </div>
          </div>

          <button
            type="button"
            className="placement-practice-button"
            onClick={() => navigate("/student/coding-practice")}
          >
            Continue preparation
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </section>
    </div>
  );
}

export default StudentDashboard;