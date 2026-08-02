package com.example.SmartAI_collage.service;

import com.example.SmartAI_collage.dto.AttendanceDto;
import com.example.SmartAI_collage.model.Attendance;
import com.example.SmartAI_collage.model.Course;
import com.example.SmartAI_collage.model.User;
import com.example.SmartAI_collage.repository.AttendanceRepository;
import com.example.SmartAI_collage.repository.CourseRepository;
import com.example.SmartAI_collage.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AttendanceService {

    private final AttendanceRepository attendanceRepository;
    private final UserRepository userRepository;
    private final CourseRepository courseRepository;

    public AttendanceDto logAttendance(AttendanceDto request) {
        User student = userRepository.findById(request.getStudentId())
                .orElseThrow(() -> new RuntimeException("Student not found"));

        Course course = courseRepository.findById(request.getCourseId())
                .orElseThrow(() -> new RuntimeException("Course not found"));

        Attendance attendance = Attendance.builder()
                .student(student)
                .course(course)
                .date(request.getDate())
                .status(request.getStatus())
                .build();

        Attendance savedAttendance = attendanceRepository.save(attendance);
        return mapToDto(savedAttendance);
    }

    public List<AttendanceDto> getAttendanceByStudent(String studentId) {
        return attendanceRepository.findByStudent_UserId(studentId)
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    private AttendanceDto mapToDto(Attendance attendance) {
        return AttendanceDto.builder()
                .attendanceId(attendance.getAttendanceId())
                .studentId(attendance.getStudent().getUserId())
                .studentName(attendance.getStudent().getFullName())
                .courseId(attendance.getCourse().getCourseId())
                .courseName(attendance.getCourse().getCourseName())
                .date(attendance.getDate())
                .status(attendance.getStatus())
                .build();
    }
}