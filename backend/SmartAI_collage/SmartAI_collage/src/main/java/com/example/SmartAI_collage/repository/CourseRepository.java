package com.example.SmartAI_collage.repository;

import com.example.SmartAI_collage.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Integer> {
    List<Course> findByFaculty_UserId(String facultyId);
}