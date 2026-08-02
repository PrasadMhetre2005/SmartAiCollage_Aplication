package com.example.SmartAI_collage.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class NotificationDto {
    private Integer notificationId;
    private String userId;
    private String message;
    private LocalDateTime timestamp;
    private boolean isRead;
}