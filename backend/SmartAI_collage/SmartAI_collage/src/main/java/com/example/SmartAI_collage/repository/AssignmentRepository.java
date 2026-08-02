package com.example.SmartAI_collage.repository;

import com.example.SmartAI_collage.model.Assignment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AssignmentRepository extends JpaRepository<Assignment, Integer> {
    // Custom query to fetch assignments by the associated course ID
    List<Assignment> findByCourse_CourseId(Integer courseId);
}