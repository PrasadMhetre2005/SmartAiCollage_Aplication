
import React from "react";

export default function StudentModulePage({ type = "study" }) {
  const titles = {
    study: "Study Planner",
    timetable: "Timetable",
    documents: "Study Resources",
    quiz: "Quiz",
    coding: "Coding Practice",
    interview: "Mock Interview",
    placement: "Placement Preparation",
  };

  const title = titles[type] || "Student Module";

  return (
    <main className="container py-4">
      <h1 className="fw-bold">{title}</h1>
      <p className="text-secondary">
        Welcome to your {title.toLowerCase()} module.
      </p>
      <div className="card border-0 shadow-sm p-4">
        <p className="mb-0">
          This module is ready for frontend feature integration.
        </p>
      </div>
    </main>
  );
}
