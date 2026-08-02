package com.example.SmartAI_collage.dto;

import com.example.SmartAI_collage.model.AttendanceStatus;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class AttendanceDto {
    private Integer attendanceId;
    private String studentId;
    private String studentName;
    private Integer courseId;
    private String courseName;
    private LocalDate date;
    private AttendanceStatus status;
}