package com.example.SmartAI_collage.service;

import com.example.SmartAI_collage.dto.CourseDto;
import com.example.SmartAI_collage.model.Course;
import com.example.SmartAI_collage.model.User;
import com.example.SmartAI_collage.repository.CourseRepository;
import com.example.SmartAI_collage.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CourseService {

    private final CourseRepository courseRepository;
    private final UserRepository userRepository;

    public CourseDto createCourse(CourseDto request) {
        User faculty = null;
        if (request.getFacultyId() != null) {
            faculty = userRepository.findById(request.getFacultyId())
                    .orElseThrow(() -> new RuntimeException("Faculty not found"));
        }

        Course course = Course.builder()
                .courseCode(request.getCourseCode())
                .courseName(request.getCourseName())
                .faculty(faculty)
                .credits(request.getCredits())
                .build();

        Course savedCourse = courseRepository.save(course);
        return mapToDto(savedCourse);
    }

    public List<CourseDto> getAllCourses() {
        return courseRepository.findAll()
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    private CourseDto mapToDto(Course course) {
        return CourseDto.builder()
                .courseId(course.getCourseId())
                .courseCode(course.getCourseCode())
                .courseName(course.getCourseName())
                .facultyId(course.getFaculty() != null ? course.getFaculty().getUserId() : null)
                .facultyName(course.getFaculty() != null ? course.getFaculty().getFullName() : null)
                .credits(course.getCredits())
                .build();
    }
}