package com.example.SmartAI_collage.repository;

import com.example.SmartAI_collage.model.Timetable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TimetableRepository extends JpaRepository<Timetable, Integer> {
    List<Timetable> findByFaculty_UserId(String facultyId);
    List<Timetable> findByCourse_CourseId(Integer courseId);
}