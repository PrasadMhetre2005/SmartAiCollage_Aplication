package com.example.SmartAI_collage.dto;

import lombok.Builder;
import lombok.Data;

import java.time.DayOfWeek;
import java.time.LocalTime;

@Data
@Builder
public class TimetableDto {
    private Integer timetableId;
    private Integer courseId;
    private String courseName;
    private String facultyId;
    private String facultyName;
    private DayOfWeek dayOfWeek;
    private LocalTime startTime;
    private LocalTime endTime;
    private String roomNumber;
}