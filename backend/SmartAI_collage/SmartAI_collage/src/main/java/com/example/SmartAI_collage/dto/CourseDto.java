package com.example.SmartAI_collage.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CourseDto {
    private Integer courseId;
    private String courseCode;
    private String courseName;
    private String facultyId;
    private String facultyName;
    private Integer credits;
}