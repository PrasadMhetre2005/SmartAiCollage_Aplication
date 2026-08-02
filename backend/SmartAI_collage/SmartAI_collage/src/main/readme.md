# AI Smart College Assistant - Backend API

## 📌 Overview
A secure, scalable REST API built for an AI Smart College Assistant. This backend handles user authentication, academic management (courses, assignments, attendance, and timetables), and real-time user notifications.

## 🚀 Tech Stack
*   **Java 21**
*   **Spring Boot 3**
*   **Spring Security & JWT (Stateless Authentication)**
*   **MySQL (Relational Database)**
*   **Hibernate / Spring Data JPA**

## ✅ Completed Features & Modules

### Phase 1: Foundation
*   **User Management:** Role-based access control (Student, Faculty, Admin).
*   **Security:** Secure stateless authentication using JSON Web Tokens (JWT).

### Phase 2: Academic Core
*   **Course Management:** Creation and retrieval of academic courses linked to faculty.
*   **Assignments:** Tracking assignment details, deadlines, and submission links.
*   **Attendance:** Logging and retrieving student attendance records.
*   **Timetable Scheduling:** Conflict-free class scheduling with designated rooms and times.
*   **Notification Engine:** System for delivering alerts and tracking read receipts.

---

## 📡 API Endpoints Documentation

> **Security Note:** All endpoints mapped with ✅ require a valid JWT token in the request headers:
> `Authorization: Bearer <your_jwt_token>`

### 🔐 1. Authentication (`/api/auth`)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :---: |
| `POST` | `/register` | Register a new user (Student, Faculty, Admin). | ❌ |
| `POST` | `/login` | Authenticate a user and receive a JWT token. | ❌ |

### 📚 2. Courses (`/api/courses`)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :---: |
| `POST` | `/` | Create a new course assigned to a faculty member. | ✅ |
| `GET` | `/` | Retrieve a list of all courses. | ✅ |

### 📝 3. Assignments (`/api/assignments`)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :---: |
| `POST` | `/` | Create a new assignment for a specific course. | ✅ |
| `GET` | `/` | Retrieve a list of all assignments. | ✅ |

### 📅 4. Attendance (`/api/attendance`)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :---: |
| `POST` | `/` | Log a student's attendance for a specific course. | ✅ |
| `GET` | `/` | Retrieve all attendance records. | ✅ |

### ⏰ 5. Timetable (`/api/timetable`)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :---: |
| `POST` | `/` | Schedule a class session (day, time, room). | ✅ |
| `GET` | `/` | Retrieve the full academic timetable. | ✅ |

### 🔔 6. Notifications (`/api/notifications`)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :---: |
| `POST` | `/send` | Create and send a notification to a specific user. | ✅ |
| `GET` | `/user/{userId}`| Get all notifications for a user, sorted newest first. | ✅ |
| `PUT` | `/{notificationId}/read` | Mark a specific notification as read. | ✅ |

---

## 🛠️ Local Setup Instructions

1. **Clone the repository.**
2. **Ensure MySQL is running** locally on port `3306`.
3. **Configure the Database:** Update `src/main/resources/application.properties` with your local MySQL credentials:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/smart_college_db
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   spring.jpa.hibernate.ddl-auto=update