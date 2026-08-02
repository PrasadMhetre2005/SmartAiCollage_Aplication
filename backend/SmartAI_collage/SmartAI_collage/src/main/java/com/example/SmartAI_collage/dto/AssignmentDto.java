package com.example.SmartAI_collage.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class AssignmentDto {
    private Integer assignmentId;
    private Integer courseId;
    private String courseName;
    private String title;
    private String description;
    private LocalDateTime deadline;
    private String submissionLink;
}