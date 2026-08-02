package com.example.SmartAI_collage.service;

import com.example.SmartAI_collage.dto.TimetableDto;
import com.example.SmartAI_collage.model.Course;
import com.example.SmartAI_collage.model.Timetable;
import com.example.SmartAI_collage.model.User;
import com.example.SmartAI_collage.repository.CourseRepository;
import com.example.SmartAI_collage.repository.TimetableRepository;
import com.example.SmartAI_collage.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TimetableService {

    private final TimetableRepository timetableRepository;
    private final CourseRepository courseRepository;
    private final UserRepository userRepository;

    public TimetableDto createSchedule(TimetableDto request) {
        Course course = courseRepository.findById(request.getCourseId())
                .orElseThrow(() -> new RuntimeException("Course not found"));

        User faculty = userRepository.findById(request.getFacultyId())
                .orElseThrow(() -> new RuntimeException("Faculty not found"));

        Timetable timetable = Timetable.builder()
                .course(course)
                .faculty(faculty)
                .dayOfWeek(request.getDayOfWeek())
                .startTime(request.getStartTime())
                .endTime(request.getEndTime())
                .roomNumber(request.getRoomNumber())
                .build();

        Timetable savedTimetable = timetableRepository.save(timetable);
        return mapToDto(savedTimetable);
    }

    public List<TimetableDto> getScheduleByFaculty(String facultyId) {
        return timetableRepository.findByFaculty_UserId(facultyId)
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    private TimetableDto mapToDto(Timetable timetable) {
        return TimetableDto.builder()
                .timetableId(timetable.getTimetableId())
                .courseId(timetable.getCourse().getCourseId())
                .courseName(timetable.getCourse().getCourseName())
                .facultyId(timetable.getFaculty().getUserId())
                .facultyName(timetable.getFaculty().getFullName())
                .dayOfWeek(timetable.getDayOfWeek())
                .startTime(timetable.getStartTime())
                .endTime(timetable.getEndTime())
                .roomNumber(timetable.getRoomNumber())
                .build();
    }
}