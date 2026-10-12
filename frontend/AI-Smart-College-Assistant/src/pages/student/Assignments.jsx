import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const assignmentsData = [
  {
    id: 1,
    title: "Binary Search Tree Implementation",
    subject: "Data Structures & Algorithms",
    code: "CS301",
    description:
      "Implement insertion, deletion, searching, and traversal operations for a Binary Search Tree.",
    dueDate: "12 Oct 2026",
    submittedDate: null,
    status: "Pending",
    priority: "High",
    marks: 20,
    progress: 70,
  },
  {
    id: 2,
    title: "Database Normalization",
    subject: "Database Management System",
    code: "CS302",
    description:
      "Prepare a detailed analysis of 1NF, 2NF, 3NF and BCNF with suitable examples.",
    dueDate: "14 Oct 2026",
    submittedDate: null,
    status: "In Progress",
    priority: "Medium",
    marks: 15,
    progress: 45,
  },
  {
    id: 3,
    title: "TCP/IP Protocol Analysis",
    subject: "Computer Networks",
    code: "CS303",
    description:
      "Explain the TCP/IP model and analyze the role of each layer with practical examples.",
    dueDate: "10 Oct 2026",
    submittedDate: null,
    status: "Pending",
    priority: "High",
    marks: 15,
    progress: 20,
  },
  {
    id: 4,
    title: "Process Scheduling Algorithms",
    subject: "Operating Systems",
    code: "CS304",
    description:
      "Compare FCFS, SJF, Priority Scheduling and Round Robin using sample processes.",
    dueDate: "08 Oct 2026",
    submittedDate: "07 Oct 2026",
    status: "Submitted",
    priority: "Medium",
    marks: 20,
    progress: 100,
  },
  {
    id: 5,
    title: "Software Development Life Cycle",
    subject: "Software Engineering",
    code: "CS305",
    description:
      "Create a comparative report covering major SDLC models and their use cases.",
    dueDate: "16 Oct 2026",
    submittedDate: null,
    status: "In Progress",
    priority: "Low",
    marks: 10,
    progress: 60,
  },
  {
    id: 6,
    title: "Responsive Portfolio Website",
    subject: "Web Technology",
    code: "CS306",
    description:
      "Build a responsive portfolio using HTML5, CSS3, Bootstrap and JavaScript.",
    dueDate: "18 Oct 2026",
    submittedDate: null,
    status: "Pending",
    priority: "Medium",
    marks: 25,
    progress: 30,
  },
];

function Assignments() {
  const navigate = useNavigate();

  const [filter, setFilter] = useState("All");
  const [subjectFilter, setSubjectFilter] = useState("All Subjects");
  const [search, setSearch] = useState("");
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const subjects = useMemo(
    () => [
      "All Subjects",
      ...new Set(assignmentsData.map((item) => item.subject)),
    ],
    []
  );

  const filteredAssignments = useMemo(() => {
    return assignmentsData.filter((assignment) => {
      const matchesStatus =
        filter === "All" || assignment.status === filter;

      const matchesSubject =
        subjectFilter === "All Subjects" ||
        assignment.subject === subjectFilter;

      const searchText = search.trim().toLowerCase();

      const matchesSearch =
        !searchText ||
        assignment.title.toLowerCase().includes(searchText) ||
        assignment.subject.toLowerCase().includes(searchText) ||
        assignment.code.toLowerCase().includes(searchText);

      return matchesStatus && matchesSubject && matchesSearch;
    });
  }, [filter, subjectFilter, search]);

  const counts = useMemo(() => {
    return {
      total: assignmentsData.length,
      pending: assignmentsData.filter(
        (item) => item.status === "Pending"
      ).length,
      progress: assignmentsData.filter(
        (item) => item.status === "In Progress"
      ).length,
      submitted: assignmentsData.filter(
        (item) => item.status === "Submitted"
      ).length,
    };
  }, []);

  const getPriorityStyle = (priority) => {
    if (priority === "High") {
      return {
        background: "#fee2e2",
        color: "#dc2626",
      };
    }

    if (priority === "Medium") {
      return {
        background: "#fef3c7",
        color: "#b45309",
      };
    }

    return {
      background: "#dcfce7",
      color: "#15803d",
    };
  };

  const getStatusStyle = (status) => {
    if (status === "Submitted") {
      return {
        background: "#dcfce7",
        color: "#15803d",
      };
    }

    if (status === "In Progress") {
      return {
        background: "#e0e7ff",
        color: "#4338ca",
      };
    }

    return {
      background: "#fff7ed",
      color: "#c2410c",
    };
  };

  const handleOpenAssignment = (assignment) => {
    setSelectedAssignment(assignment);
  };

  const handleStartAssignment = (assignment) => {
    setSelectedAssignment(assignment);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#172033",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          position: "sticky",
          top: 0,
          zIndex: 20,
        }}
      >
        <div
          className="container-fluid"
          style={{
            padding: "16px 24px",
          }}
        >
          <div className="d-flex align-items-center justify-content-between gap-3">
            <div className="d-flex align-items-center gap-3">
              <button
                type="button"
                onClick={() => navigate("/student/dashboard")}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  border: "1px solid #e5e7eb",
                  background: "#ffffff",
                  color: "#475569",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <i className="bi bi-arrow-left fs-5"></i>
              </button>

              <div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#64748b",
                    marginBottom: 2,
                  }}
                >
                  Student Portal
                </div>

                <h1
                  style={{
                    margin: 0,
                    fontSize: 24,
                    fontWeight: 800,
                    color: "#111827",
                  }}
                >
                  Assignments
                </h1>
              </div>
            </div>

            <div className="d-flex align-items-center gap-2">
              <button
                type="button"
                onClick={() => navigate("/student/notifications")}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  border: "1px solid #e5e7eb",
                  background: "#ffffff",
                  color: "#475569",
                  cursor: "pointer",
                }}
              >
                <i className="bi bi-bell"></i>
              </button>

              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #4f46e5, #7c3aed)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                }}
              >
                S
              </div>
            </div>
          </div>
        </div>
      </header>

      <main
        className="container-fluid"
        style={{
          maxWidth: 1500,
          margin: "0 auto",
          padding: "28px 24px 50px",
        }}
      >
        {/* Intro */}
        <section className="mb-4">
          <div
            style={{
              background:
                "linear-gradient(135deg, #eef2ff 0%, #f5f3ff 55%, #ffffff 100%)",
              border: "1px solid #e0e7ff",
              borderRadius: 22,
              padding: "28px",
            }}
          >
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#ffffff",
                    border: "1px solid #e0e7ff",
                    color: "#4f46e5",
                    padding: "7px 12px",
                    borderRadius: 999,
                    fontSize: 13,
                    fontWeight: 700,
                    marginBottom: 14,
                  }}
                >
                  <i className="bi bi-journal-text"></i>
                  Academic Work
                </div>

                <h2
                  style={{
                    fontSize: "clamp(24px, 3vw, 34px)",
                    fontWeight: 800,
                    marginBottom: 10,
                    color: "#111827",
                  }}
                >
                  Manage your assignments
                </h2>

                <p
                  style={{
                    margin: 0,
                    maxWidth: 720,
                    color: "#64748b",
                    lineHeight: 1.7,
                  }}
                >
                  Track upcoming work, continue assignments in progress,
                  and review your submitted academic tasks from one place.
                </p>
              </div>

              <div className="col-lg-4 mt-4 mt-lg-0">
                <div
                  style={{
                    background: "#ffffff",
                    borderRadius: 18,
                    padding: 20,
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 10px 30px rgba(15,23,42,0.05)",
                  }}
                >
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{ marginBottom: 10 }}
                  >
                    <span
                      style={{
                        color: "#64748b",
                        fontSize: 13,
                      }}
                    >
                      Completion Rate
                    </span>

                    <strong
                      style={{
                        color: "#4f46e5",
                        fontSize: 20,
                      }}
                    >
                      {Math.round(
                        (counts.submitted / counts.total) * 100
                      )}
                      %
                    </strong>
                  </div>

                  <div
                    style={{
                      height: 9,
                      background: "#eef2f7",
                      borderRadius: 999,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${
                          (counts.submitted / counts.total) * 100
                        }%`,
                        height: "100%",
                        background:
                          "linear-gradient(90deg, #4f46e5, #7c3aed)",
                        borderRadius: 999,
                      }}
                    ></div>
                  </div>

                  <div
                    style={{
                      marginTop: 10,
                      color: "#64748b",
                      fontSize: 12,
                    }}
                  >
                    {counts.submitted} of {counts.total} assignments
                    submitted
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-4">
          <div className="row g-3">
            {[
              {
                label: "Total Assignments",
                value: counts.total,
                icon: "bi-journal-text",
                background: "#eef2ff",
                color: "#4f46e5",
              },
              {
                label: "Pending",
                value: counts.pending,
                icon: "bi-clock-history",
                background: "#fff7ed",
                color: "#ea580c",
              },
              {
                label: "In Progress",
                value: counts.progress,
                icon: "bi-arrow-repeat",
                background: "#eef2ff",
                color: "#4338ca",
              },
              {
                label: "Submitted",
                value: counts.submitted,
                icon: "bi-check2-circle",
                background: "#ecfdf5",
                color: "#059669",
              },
            ].map((item) => (
              <div className="col-sm-6 col-xl-3" key={item.label}>
                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e5e7eb",
                    borderRadius: 18,
                    padding: 20,
                    height: "100%",
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <div
                        style={{
                          color: "#64748b",
                          fontSize: 13,
                          marginBottom: 7,
                        }}
                      >
                        {item.label}
                      </div>

                      <div
                        style={{
                          color: "#111827",
                          fontSize: 29,
                          fontWeight: 800,
                        }}
                      >
                        {item.value}
                      </div>
                    </div>

                    <div
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 13,
                        background: item.background,
                        color: item.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <i className={`bi ${item.icon} fs-5`}></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Filters */}
        <section className="mb-4">
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: 18,
              padding: 16,
            }}
          >
            <div className="row g-3 align-items-center">
              <div className="col-lg-5">
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <i
                    className="bi bi-search"
                    style={{
                      position: "absolute",
                      left: 14,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#94a3b8",
                    }}
                  ></i>

                  <input
                    type="text"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search assignments..."
                    className="form-control"
                    style={{
                      height: 44,
                      paddingLeft: 40,
                      borderRadius: 11,
                      borderColor: "#dbe1ea",
                      boxShadow: "none",
                    }}
                  />
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <select
                  value={subjectFilter}
                  onChange={(event) =>
                    setSubjectFilter(event.target.value)
                  }
                  className="form-select"
                  style={{
                    height: 44,
                    borderRadius: 11,
                    borderColor: "#dbe1ea",
                    boxShadow: "none",
                  }}
                >
                  {subjects.map((subject) => (
                    <option key={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div
                  className="d-flex gap-2"
                  style={{
                    overflowX: "auto",
                    paddingBottom: 2,
                  }}
                >
                  {["All", "Pending", "In Progress", "Submitted"].map(
                    (status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => setFilter(status)}
                        style={{
                          whiteSpace: "nowrap",
                          border: "1px solid",
                          borderColor:
                            filter === status
                              ? "#4f46e5"
                              : "#e2e8f0",
                          background:
                            filter === status
                              ? "#4f46e5"
                              : "#ffffff",
                          color:
                            filter === status
                              ? "#ffffff"
                              : "#475569",
                          borderRadius: 10,
                          padding: "9px 13px",
                          fontSize: 12,
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        {status}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Assignment Cards */}
        <section>
          <div className="row g-4">
            {filteredAssignments.length > 0 ? (
              filteredAssignments.map((assignment) => (
                <div
                  className="col-md-6 col-xl-4"
                  key={assignment.id}
                >
                  <article
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e5e7eb",
                      borderRadius: 20,
                      padding: 20,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: "0 5px 18px rgba(15,23,42,0.03)",
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-start gap-2">
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          background: "#f1f5f9",
                          color: "#475569",
                          padding: "6px 9px",
                          borderRadius: 8,
                          fontSize: 11,
                          fontWeight: 700,
                        }}
                      >
                        <i className="bi bi-book"></i>
                        {assignment.code}
                      </span>

                      <span
                        style={{
                          ...getPriorityStyle(assignment.priority),
                          padding: "6px 9px",
                          borderRadius: 999,
                          fontSize: 10,
                          fontWeight: 800,
                        }}
                      >
                        {assignment.priority} Priority
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: 18,
                        fontWeight: 800,
                        color: "#111827",
                        lineHeight: 1.35,
                        margin: "17px 0 7px",
                      }}
                    >
                      {assignment.title}
                    </h3>

                    <div
                      style={{
                        color: "#4f46e5",
                        fontSize: 12,
                        fontWeight: 700,
                        marginBottom: 12,
                      }}
                    >
                      {assignment.subject}
                    </div>

                    <p
                      style={{
                        color: "#64748b",
                        fontSize: 13,
                        lineHeight: 1.65,
                        marginBottom: 18,
                      }}
                    >
                      {assignment.description}
                    </p>

                    <div
                      style={{
                        marginTop: "auto",
                      }}
                    >
                      <div
                        className="d-flex justify-content-between"
                        style={{
                          marginBottom: 8,
                          fontSize: 12,
                        }}
                      >
                        <span style={{ color: "#64748b" }}>
                          Progress
                        </span>

                        <strong style={{ color: "#334155" }}>
                          {assignment.progress}%
                        </strong>
                      </div>

                      <div
                        style={{
                          height: 7,
                          background: "#eef2f7",
                          borderRadius: 999,
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            width: `${assignment.progress}%`,
                            height: "100%",
                            background:
                              assignment.status === "Submitted"
                                ? "#059669"
                                : "#4f46e5",
                            borderRadius: 999,
                          }}
                        ></div>
                      </div>

                      <div
                        className="d-flex justify-content-between align-items-center"
                        style={{
                          marginTop: 16,
                          paddingTop: 15,
                          borderTop: "1px solid #f1f5f9",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              fontSize: 11,
                              color: "#94a3b8",
                              marginBottom: 3,
                            }}
                          >
                            Due Date
                          </div>

                          <div
                            style={{
                              fontSize: 12,
                              fontWeight: 700,
                              color: "#334155",
                            }}
                          >
                            <i className="bi bi-calendar3 me-1"></i>
                            {assignment.dueDate}
                          </div>
                        </div>

                        <span
                          style={{
                            ...getStatusStyle(assignment.status),
                            padding: "6px 9px",
                            borderRadius: 999,
                            fontSize: 10,
                            fontWeight: 800,
                          }}
                        >
                          {assignment.status}
                        </span>
                      </div>

                      <div className="d-flex gap-2 mt-3">
                        <button
                          type="button"
                          onClick={() =>
                            handleOpenAssignment(assignment)
                          }
                          style={{
                            flex: 1,
                            border: "1px solid #dbe1ea",
                            background: "#ffffff",
                            color: "#475569",
                            borderRadius: 10,
                            padding: "10px 12px",
                            fontSize: 12,
                            fontWeight: 700,
                            cursor: "pointer",
                          }}
                        >
                          <i className="bi bi-eye me-1"></i>
                          View
                        </button>

                        {assignment.status !== "Submitted" && (
                          <button
                            type="button"
                            onClick={() =>
                              handleStartAssignment(assignment)
                            }
                            style={{
                              flex: 1,
                              border: 0,
                              background:
                                "linear-gradient(135deg, #4f46e5, #7c3aed)",
                              color: "#ffffff",
                              borderRadius: 10,
                              padding: "10px 12px",
                              fontSize: 12,
                              fontWeight: 700,
                              cursor: "pointer",
                            }}
                          >
                            <i className="bi bi-play-circle me-1"></i>
                            Continue
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                </div>
              ))
            ) : (
              <div className="col-12">
                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e5e7eb",
                    borderRadius: 20,
                    padding: "60px 20px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 18,
                      background: "#eef2ff",
                      color: "#4f46e5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                      fontSize: 25,
                    }}
                  >
                    <i className="bi bi-search"></i>
                  </div>

                  <h3
                    style={{
                      fontSize: 19,
                      fontWeight: 800,
                    }}
                  >
                    No assignments found
                  </h3>

                  <p
                    style={{
                      color: "#64748b",
                      fontSize: 13,
                    }}
                  >
                    Try changing your search or filter options.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Assignment Modal */}
      {selectedAssignment && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedAssignment(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15,23,42,0.55)",
            backdropFilter: "blur(5px)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: 650,
              maxHeight: "90vh",
              overflowY: "auto",
              background: "#ffffff",
              borderRadius: 22,
              boxShadow: "0 25px 70px rgba(15,23,42,0.25)",
            }}
          >
            <div
              style={{
                padding: "22px 24px",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              <div className="d-flex justify-content-between align-items-start gap-3">
                <div>
                  <div
                    style={{
                      color: "#4f46e5",
                      fontSize: 12,
                      fontWeight: 800,
                      marginBottom: 7,
                    }}
                  >
                    {selectedAssignment.code} •{" "}
                    {selectedAssignment.subject}
                  </div>

                  <h2
                    style={{
                      margin: 0,
                      fontSize: 23,
                      fontWeight: 800,
                      color: "#111827",
                    }}
                  >
                    {selectedAssignment.title}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedAssignment(null)}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    border: "1px solid #e5e7eb",
                    background: "#ffffff",
                    color: "#64748b",
                    cursor: "pointer",
                  }}
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
            </div>

            <div style={{ padding: 24 }}>
              <div
                style={{
                  background: "#f8fafc",
                  borderRadius: 14,
                  padding: 16,
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    color: "#64748b",
                    marginBottom: 7,
                  }}
                >
                  Assignment Description
                </div>

                <p
                  style={{
                    margin: 0,
                    color: "#334155",
                    lineHeight: 1.7,
                    fontSize: 14,
                  }}
                >
                  {selectedAssignment.description}
                </p>
              </div>

              <div className="row g-3 mb-4">
                <div className="col-sm-4">
                  <div
                    style={{
                      border: "1px solid #e5e7eb",
                      borderRadius: 13,
                      padding: 14,
                    }}
                  >
                    <div
                      style={{
                        color: "#94a3b8",
                        fontSize: 11,
                      }}
                    >
                      Due Date
                    </div>

                    <strong
                      style={{
                        display: "block",
                        marginTop: 5,
                        fontSize: 13,
                      }}
                    >
                      {selectedAssignment.dueDate}
                    </strong>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div
                    style={{
                      border: "1px solid #e5e7eb",
                      borderRadius: 13,
                      padding: 14,
                    }}
                  >
                    <div
                      style={{
                        color: "#94a3b8",
                        fontSize: 11,
                      }}
                    >
                      Maximum Marks
                    </div>

                    <strong
                      style={{
                        display: "block",
                        marginTop: 5,
                        fontSize: 13,
                      }}
                    >
                      {selectedAssignment.marks}
                    </strong>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div
                    style={{
                      border: "1px solid #e5e7eb",
                      borderRadius: 13,
                      padding: 14,
                    }}
                  >
                    <div
                      style={{
                        color: "#94a3b8",
                        fontSize: 11,
                      }}
                    >
                      Status
                    </div>

                    <strong
                      style={{
                        display: "block",
                        marginTop: 5,
                        fontSize: 13,
                      }}
                    >
                      {selectedAssignment.status}
                    </strong>
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: 16,
                  borderRadius: 14,
                  background: "#eef2ff",
                  marginBottom: 20,
                }}
              >
                <div className="d-flex justify-content-between mb-2">
                  <span
                    style={{
                      fontSize: 12,
                      color: "#475569",
                    }}
                  >
                    Your Progress
                  </span>

                  <strong
                    style={{
                      fontSize: 13,
                      color: "#4338ca",
                    }}
                  >
                    {selectedAssignment.progress}%
                  </strong>
                </div>

                <div
                  style={{
                    height: 8,
                    background: "#dbeafe",
                    borderRadius: 999,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${selectedAssignment.progress}%`,
                      height: "100%",
                      background: "#4f46e5",
                      borderRadius: 999,
                    }}
                  ></div>
                </div>
              </div>

              <div className="d-flex gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedAssignment(null)}
                  style={{
                    flex: 1,
                    border: "1px solid #dbe1ea",
                    background: "#ffffff",
                    color: "#475569",
                    borderRadius: 11,
                    padding: "12px 16px",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Close
                </button>

                {selectedAssignment.status !== "Submitted" && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedAssignment(null);
                    }}
                    style={{
                      flex: 1,
                      border: 0,
                      background:
                        "linear-gradient(135deg, #4f46e5, #7c3aed)",
                      color: "#ffffff",
                      borderRadius: 11,
                      padding: "12px 16px",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Start Assignment
                    <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Assignments;