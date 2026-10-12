import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialMessages = [
  {
    id: 1,
    type: "assistant",
    text: "Hello! I'm your AI Academic Assistant. I can help you understand subjects, solve academic problems, prepare for exams, create study plans, and improve your technical skills.",
    time: "Now",
  },
];

const suggestedPrompts = [
  {
    icon: "bi-lightbulb",
    title: "Explain a topic",
    text: "Explain a difficult topic in simple words",
  },
  {
    icon: "bi-journal-text",
    title: "Assignment help",
    text: "Help me understand my assignment",
  },
  {
    icon: "bi-book",
    title: "Study plan",
    text: "Create a study plan for my exams",
  },
  {
    icon: "bi-code-slash",
    title: "Coding help",
    text: "Help me solve a Java programming problem",
  },
];

const subjects = [
  "All Subjects",
  "Data Structures",
  "Database Management",
  "Web Development",
  "Software Engineering",
  "Computer Networks",
  "Operating Systems",
];

function AIAssistant() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [selectedSubject, setSelectedSubject] =
    useState("All Subjects");
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const conversationCount = useMemo(
    () => messages.filter((message) => message.type === "user").length,
    [messages]
  );

  const generateAssistantReply = (question) => {
    const lowerQuestion = question.toLowerCase();

    if (
      lowerQuestion.includes("study plan") ||
      lowerQuestion.includes("exam")
    ) {
      return "I can help you create an effective study plan. Start by listing your subjects, exam dates, and the amount of time you can study each day. I can then organize your preparation into daily topics, revision sessions, practice questions, and mock tests.";
    }

    if (
      lowerQuestion.includes("code") ||
      lowerQuestion.includes("java") ||
      lowerQuestion.includes("program")
    ) {
      return "Sure! Share the programming problem or code you are working on. I can explain the logic step by step, identify errors, and help you understand the solution instead of only giving the final answer.";
    }

    if (
      lowerQuestion.includes("assignment") ||
      lowerQuestion.includes("homework")
    ) {
      return "Absolutely. Share your assignment question or topic. I can break it into smaller tasks, explain the concepts involved, and help you structure a clear answer.";
    }

    return `I understand your question about "${question}". In the connected AI version, I would use your selected academic context and relevant study materials to provide a detailed answer. For now, this frontend demo shows how the academic assistant conversation will work.`;
  };

  const sendMessage = (messageText = input) => {
    const trimmedMessage = messageText.trim();

    if (!trimmedMessage || isTyping) {
      return;
    }

    const userMessage = {
      id: Date.now(),
      type: "user",
      text: trimmedMessage,
      time: "Now",
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsTyping(true);

    window.setTimeout(() => {
      const assistantMessage = {
        id: Date.now() + 1,
        type: "assistant",
        text: generateAssistantReply(trimmedMessage),
        time: "Now",
      };

      setMessages((current) => [...current, assistantMessage]);
      setIsTyping(false);
    }, 850);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  const handlePromptClick = (prompt) => {
    setInput(prompt.text);
    sendMessage(prompt.text);
  };

  const clearConversation = () => {
    setMessages(initialMessages);
    setInput("");
    setIsTyping(false);
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 30px)",
        display: "flex",
        flexDirection: "column",
        background: "#f7f8fc",
        borderRadius: "18px",
        overflow: "hidden",
        border: "1px solid #e8ebf2",
      }}
    >
      {/* =====================================================
          HEADER
          ===================================================== */}
      <div
        style={{
          minHeight: "72px",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "15px",
          background: "#ffffff",
          borderBottom: "1px solid #edf0f5",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "11px",
            minWidth: 0,
          }}
        >
          <button
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="d-lg-none"
            style={{
              width: "34px",
              height: "34px",
              border: "1px solid #e5e7eb",
              borderRadius: "9px",
              background: "#ffffff",
              color: "#475569",
            }}
          >
            <i className="bi bi-list"></i>
          </button>

          <div
            style={{
              width: "40px",
              height: "40px",
              flex: "0 0 40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "11px",
              color: "#ffffff",
              background:
                "linear-gradient(135deg, #4f46e5, #7c3aed)",
              boxShadow:
                "0 7px 18px rgba(79, 70, 229, 0.22)",
            }}
          >
            <i
              className="bi bi-stars"
              style={{ fontSize: "17px" }}
            ></i>
          </div>

          <div style={{ minWidth: 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  color: "#172033",
                  fontSize: "16px",
                  fontWeight: 800,
                  letterSpacing: "-0.3px",
                }}
              >
                AI Academic Assistant
              </h2>

              <span
                style={{
                  padding: "3px 6px",
                  borderRadius: "5px",
                  color: "#059669",
                  background: "#ecfdf5",
                  fontSize: "6px",
                  fontWeight: 800,
                  letterSpacing: "0.5px",
                }}
              >
                ONLINE
              </span>
            </div>

            <span
              style={{
                display: "block",
                marginTop: "3px",
                color: "#94a3b8",
                fontSize: "8px",
              }}
            >
              Your intelligent academic companion
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "7px",
          }}
        >
          <button
            type="button"
            onClick={clearConversation}
            title="New conversation"
            style={{
              height: "34px",
              padding: "0 10px",
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              color: "#64748b",
              background: "#ffffff",
              fontSize: "8px",
              fontWeight: 700,
            }}
          >
            <i className="bi bi-plus-lg"></i>
            <span className="d-none d-sm-inline">
              New Chat
            </span>
          </button>

          <button
            type="button"
            onClick={() => navigate("/student/dashboard")}
            title="Back to dashboard"
            style={{
              width: "34px",
              height: "34px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              color: "#64748b",
              background: "#ffffff",
              fontSize: "10px",
            }}
          >
            <i className="bi bi-grid"></i>
          </button>
        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}
      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: "flex",
          position: "relative",
        }}
      >
        {/* ===================================================
            LEFT SIDEBAR
            =================================================== */}
        <aside
          className={`${
            sidebarOpen ? "d-flex" : "d-none"
          } d-lg-flex`}
          style={{
            width: "250px",
            flex: "0 0 250px",
            padding: "18px 14px",
            flexDirection: "column",
            background: "#ffffff",
            borderRight: "1px solid #edf0f5",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div
            style={{
              padding: "0 6px 12px",
              color: "#94a3b8",
              fontSize: "7px",
              fontWeight: 800,
              letterSpacing: "1px",
            }}
          >
            ACADEMIC CONTEXT
          </div>

          <label
            htmlFor="assistant-subject"
            style={{
              margin: "0 6px 6px",
              color: "#475569",
              fontSize: "8px",
              fontWeight: 700,
            }}
          >
            Subject
          </label>

          <select
            id="assistant-subject"
            value={selectedSubject}
            onChange={(event) =>
              setSelectedSubject(event.target.value)
            }
            style={{
              width: "100%",
              height: "37px",
              padding: "0 9px",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              outline: "none",
              color: "#475569",
              background: "#ffffff",
              fontSize: "8px",
            }}
          >
            {subjects.map((subject) => (
              <option key={subject}>{subject}</option>
            ))}
          </select>

          <div
            style={{
              height: "1px",
              margin: "18px 6px",
              background: "#edf0f5",
            }}
          ></div>

          <div
            style={{
              padding: "0 6px 10px",
              color: "#94a3b8",
              fontSize: "7px",
              fontWeight: 800,
              letterSpacing: "1px",
            }}
          >
            SUGGESTED PROMPTS
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            {suggestedPrompts.map((prompt) => (
              <button
                key={prompt.title}
                type="button"
                onClick={() => {
                  handlePromptClick(prompt);
                  setSidebarOpen(false);
                }}
                style={{
                  width: "100%",
                  padding: "9px",
                  display: "flex",
                  alignItems: "center",
                  gap: "9px",
                  border: "1px solid transparent",
                  borderRadius: "9px",
                  color: "#475569",
                  background: "#f8fafc",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    width: "27px",
                    height: "27px",
                    flex: "0 0 27px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "7px",
                    color: "#4f46e5",
                    background: "#eef2ff",
                    fontSize: "10px",
                  }}
                >
                  <i className={`bi ${prompt.icon}`}></i>
                </span>

                <span
                  style={{
                    minWidth: 0,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <strong
                    style={{
                      color: "#334155",
                      fontSize: "8px",
                      fontWeight: 700,
                    }}
                  >
                    {prompt.title}
                  </strong>

                  <small
                    style={{
                      marginTop: "2px",
                      color: "#94a3b8",
                      fontSize: "6px",
                      lineHeight: 1.4,
                    }}
                  >
                    {prompt.text}
                  </small>
                </span>
              </button>
            ))}
          </div>

          <div style={{ marginTop: "auto" }}>
            <div
              style={{
                padding: "12px",
                borderRadius: "11px",
                background:
                  "linear-gradient(135deg, #eef2ff, #f5f3ff)",
                border: "1px solid #e5e7ff",
              }}
            >
              <div
                style={{
                  width: "29px",
                  height: "29px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "8px",
                  borderRadius: "8px",
                  color: "#6366f1",
                  background: "#ffffff",
                }}
              >
                <i className="bi bi-shield-check"></i>
              </div>

              <strong
                style={{
                  display: "block",
                  color: "#3730a3",
                  fontSize: "8px",
                }}
              >
                Academic Assistant
              </strong>

              <span
                style={{
                  display: "block",
                  marginTop: "4px",
                  color: "#6366f1",
                  fontSize: "6px",
                  lineHeight: 1.5,
                }}
              >
                Use the assistant to understand concepts and
                improve your learning.
              </span>
            </div>
          </div>
        </aside>

        {/* ===================================================
            CHAT AREA
            =================================================== */}
        <main
          style={{
            flex: 1,
            minWidth: 0,
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
            background: "#f8fafc",
          }}
        >
          {/* Context bar */}
          <div
            style={{
              minHeight: "42px",
              padding: "7px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              background: "#ffffff",
              borderBottom: "1px solid #edf0f5",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
              }}
            >
              <i
                className="bi bi-book"
                style={{
                  color: "#6366f1",
                  fontSize: "9px",
                }}
              ></i>

              <span
                style={{
                  color: "#64748b",
                  fontSize: "7px",
                }}
              >
                Current subject:
              </span>

              <strong
                style={{
                  color: "#334155",
                  fontSize: "7px",
                }}
              >
                {selectedSubject}
              </strong>
            </div>

            <span
              style={{
                color: "#a0aec0",
                fontSize: "7px",
              }}
            >
              {conversationCount} question
              {conversationCount !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              minHeight: "400px",
              padding: "25px clamp(15px, 5vw, 65px)",
              overflowY: "auto",
            }}
          >
            {messages.map((message) => {
              const isUser = message.type === "user";

              return (
                <div
                  key={message.id}
                  style={{
                    display: "flex",
                    justifyContent: isUser
                      ? "flex-end"
                      : "flex-start",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "min(680px, 85%)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "9px",
                      flexDirection: isUser
                        ? "row-reverse"
                        : "row",
                    }}
                  >
                    <div
                      style={{
                        width: "31px",
                        height: "31px",
                        flex: "0 0 31px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "9px",
                        color: isUser
                          ? "#ffffff"
                          : "#6366f1",
                        background: isUser
                          ? "#4f46e5"
                          : "#eef2ff",
                        fontSize: "10px",
                      }}
                    >
                      <i
                        className={`bi ${
                          isUser
                            ? "bi-person"
                            : "bi-stars"
                        }`}
                      ></i>
                    </div>

                    <div
                      style={{
                        minWidth: 0,
                      }}
                    >
                      <div
                        style={{
                          padding: "11px 13px",
                          borderRadius: isUser
                            ? "13px 4px 13px 13px"
                            : "4px 13px 13px 13px",
                          color: isUser
                            ? "#ffffff"
                            : "#475569",
                          background: isUser
                            ? "#4f46e5"
                            : "#ffffff",
                          border: isUser
                            ? "0"
                            : "1px solid #e9edf4",
                          boxShadow: isUser
                            ? "0 5px 15px rgba(79,70,229,.12)"
                            : "0 5px 18px rgba(15,23,42,.025)",
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                            fontSize: "9px",
                            lineHeight: 1.7,
                            whiteSpace: "pre-wrap",
                          }}
                        >
                          {message.text}
                        </p>
                      </div>

                      <div
                        style={{
                          marginTop: "4px",
                          color: "#b0b8c5",
                          fontSize: "6px",
                          textAlign: isUser
                            ? "right"
                            : "left",
                        }}
                      >
                        {message.time}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Typing indicator */}
            {isTyping && (
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "9px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "31px",
                    height: "31px",
                    flex: "0 0 31px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "9px",
                    color: "#6366f1",
                    background: "#eef2ff",
                    fontSize: "10px",
                  }}
                >
                  <i className="bi bi-stars"></i>
                </div>

                <div
                  style={{
                    padding: "12px 14px",
                    display: "flex",
                    gap: "4px",
                    border: "1px solid #e9edf4",
                    borderRadius: "4px 13px 13px 13px",
                    background: "#ffffff",
                  }}
                >
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "#a5b4fc",
                    }}
                  ></span>

                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "#818cf8",
                    }}
                  ></span>

                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "#6366f1",
                    }}
                  ></span>
                </div>
              </div>
            )}
          </div>

          {/* =================================================
              INPUT AREA
              ================================================= */}
          <div
            style={{
              padding: "12px clamp(15px, 5vw, 65px) 16px",
              background: "#ffffff",
              borderTop: "1px solid #edf0f5",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "8px",
                  padding: "7px 7px 7px 13px",
                  border: "1px solid #dfe4ed",
                  borderRadius: "12px",
                  background: "#ffffff",
                  boxShadow:
                    "0 5px 20px rgba(15,23,42,.035)",
                }}
              >
                <button
                  type="button"
                  title="Attach study material"
                  style={{
                    width: "31px",
                    height: "31px",
                    flex: "0 0 31px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: 0,
                    borderRadius: "8px",
                    color: "#94a3b8",
                    background: "#f8fafc",
                    fontSize: "10px",
                  }}
                >
                  <i className="bi bi-paperclip"></i>
                </button>

                <textarea
                  value={input}
                  onChange={(event) =>
                    setInput(event.target.value)
                  }
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" &&
                      !event.shiftKey
                    ) {
                      event.preventDefault();
                      handleSubmit(event);
                    }
                  }}
                  rows="1"
                  placeholder="Ask anything about your studies..."
                  style={{
                    minHeight: "31px",
                    maxHeight: "90px",
                    flex: 1,
                    padding: "7px 0",
                    resize: "none",
                    border: 0,
                    outline: 0,
                    color: "#334155",
                    background: "transparent",
                    fontSize: "9px",
                    lineHeight: 1.6,
                  }}
                />

                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  style={{
                    width: "34px",
                    height: "34px",
                    flex: "0 0 34px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: 0,
                    borderRadius: "9px",
                    color: "#ffffff",
                    background:
                      input.trim() && !isTyping
                        ? "#4f46e5"
                        : "#c7d2fe",
                    cursor:
                      input.trim() && !isTyping
                        ? "pointer"
                        : "not-allowed",
                    fontSize: "10px",
                  }}
                >
                  <i className="bi bi-send-fill"></i>
                </button>
              </div>
            </form>

            <div
              style={{
                marginTop: "7px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
                color: "#b0b8c5",
                fontSize: "6px",
              }}
            >
              <i className="bi bi-info-circle"></i>
              AI responses are for academic assistance. Verify
              important information with your faculty or official
              study material.
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AIAssistant;