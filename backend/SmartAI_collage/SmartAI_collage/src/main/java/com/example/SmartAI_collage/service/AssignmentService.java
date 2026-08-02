package com.example.SmartAI_collage.service;

import com.example.SmartAI_collage.dto.AssignmentDto;
import com.example.SmartAI_collage.model.Assignment;
import com.example.SmartAI_collage.model.Course;
import com.example.SmartAI_collage.repository.AssignmentRepository;
import com.example.SmartAI_collage.repository.CourseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AssignmentService {

    private final AssignmentRepository assignmentRepository;
    private final CourseRepository courseRepository;

    public AssignmentDto createAssignment(AssignmentDto request) {
        Course course = courseRepository.findById(request.getCourseId())
                .orElseThrow(() -> new RuntimeException("Course not found with ID: " + request.getCourseId()));

        Assignment assignment = Assignment.builder()
                .course(course)
                .title(request.getTitle())
                .description(request.getDescription())
                .deadline(request.getDeadline())
                .submissionLink(request.getSubmissionLink())
                .build();

        Assignment savedAssignment = assignmentRepository.save(assignment);
        return mapToDto(savedAssignment);
    }

    public List<AssignmentDto> getAssignmentsByCourse(Integer courseId) {
        return assignmentRepository.findByCourse_CourseId(courseId)
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    private AssignmentDto mapToDto(Assignment assignment) {
        return AssignmentDto.builder()
                .assignmentId(assignment.getAssignmentId())
                .courseId(assignment.getCourse().getCourseId())
                .courseName(assignment.getCourse().getCourseName())
                .title(assignment.getTitle())
                .description(assignment.getDescription())
                .deadline(assignment.getDeadline())
                .submissionLink(assignment.getSubmissionLink())
                .build();
    }
}