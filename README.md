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

These instructions use Windows PowerShell and the repository's Spring Boot backend.

### 1. Start and check MySQL

Start the MySQL Windows service if it is stopped. The service is commonly named `MYSQL80`; check the actual name on your machine first:

```powershell
Get-Service *mysql*
Start-Service MYSQL80
Test-NetConnection localhost -Port 3306
```

`TcpTestSucceeded` should be `True`. `Start-Service` may require an elevated PowerShell window. If the service is already running, do not start it again.

### 2. Create the database schema

Using MySQL Workbench (or the MySQL command-line client), open and execute these scripts in order:

1. `database/01_init_schema.sql`
2. `database/02_extended_schema..sql`

The first script creates and selects `smart_college_db`; the second adds the extended tables. Run these scripts against a new database, because the table statements are not intended to be rerun over existing tables. The backend also has Hibernate schema updates enabled for its mapped entities.

### 3. Set backend environment variables

The backend reads secrets from environment variables instead of storing them in `application.properties`. In the PowerShell window that will run the backend, set the database password and AI service keys. Replace each placeholder locally; do not commit real values or paste them into chat.

```powershell
$env:DB_PASSWORD = "<password for the MySQL root user>"
$env:GEMINI_API_KEY = "<your Gemini API key>"
$env:PINECONE_API_KEY = "<your Pinecone API key>"

$jwtBytes = New-Object byte[] 32
$rng = [System.Security.Cryptography.RandomNumberGenerator]::Create()
$rng.GetBytes($jwtBytes)
$env:JWT_SECRET = [Convert]::ToBase64String($jwtBytes)
$rng.Dispose()
Remove-Variable jwtBytes, rng
```

These values apply only to the current PowerShell session. Set them again in any new terminal. `DB_PASSWORD` must match the local MySQL `root` account because that is the configured database username.

### 4. Run the backend

From the repository root:

```powershell
Set-Location .\backend\SmartAI_collage\SmartAI_collage
.\mvnw.cmd spring-boot:run
```

The API listens on `http://localhost:8080`. Watch the startup output for database authentication or schema errors. Once startup completes, check `smart_college_db` in MySQL Workbench to confirm the mapped tables exist.

To run the backend tests instead of starting the server:

```powershell
Set-Location .\backend\SmartAI_collage\SmartAI_collage
.\mvnw.cmd test
```
