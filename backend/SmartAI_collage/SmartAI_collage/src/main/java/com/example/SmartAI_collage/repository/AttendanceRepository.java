package com.example.SmartAI_collage.repository;

import com.example.SmartAI_collage.model.Attendance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AttendanceRepository extends JpaRepository<Attendance, Integer> {
    List<Attendance> findByCourse_CourseId(Integer courseId);
    List<Attendance> findByStudent_UserId(String studentId);
}