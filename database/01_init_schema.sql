-- Create the database
CREATE DATABASE IF NOT EXISTS smart_college_db;
USE smart_college_db;

-- 1. Users Table (Core profiles and credentials)
CREATE TABLE Users (
    user_id VARCHAR(50) PRIMARY KEY, -- Could be a Roll Number or Employee ID
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('STUDENT', 'FACULTY', 'ADMIN', 'HOD') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Courses/Subjects Table (Academic mappings)
CREATE TABLE Courses (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    course_code VARCHAR(20) UNIQUE NOT NULL,
    course_name VARCHAR(100) NOT NULL,
    faculty_id VARCHAR(50),
    credits INT NOT NULL,
    FOREIGN KEY (faculty_id) REFERENCES Users(user_id) ON DELETE SET NULL
);

-- 3. Attendance Table (Daily logs per subject)
CREATE TABLE Attendance (
    attendance_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id VARCHAR(50) NOT NULL,
    course_id INT NOT NULL,
    date DATE NOT NULL,
    status ENUM('PRESENT', 'ABSENT', 'LATE') NOT NULL,
    FOREIGN KEY (student_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES Courses(course_id) ON DELETE CASCADE
);