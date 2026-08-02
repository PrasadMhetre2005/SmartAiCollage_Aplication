package com.example.SmartAI_collage.service;

import com.example.SmartAI_collage.dto.NotificationDto;
import com.example.SmartAI_collage.model.Notification;
import com.example.SmartAI_collage.model.User;
import com.example.SmartAI_collage.repository.NotificationRepository;
import com.example.SmartAI_collage.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class NotificationService {

    private final NotificationRepository notificationRepository;
    private final UserRepository userRepository;

    public NotificationDto sendNotification(String userId, String message) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Notification notification = Notification.builder()
                .user(user)
                .message(message)
                .timestamp(LocalDateTime.now())
                .isRead(false)
                .build();

        Notification savedNotification = notificationRepository.save(notification);
        return mapToDto(savedNotification);
    }

    public List<NotificationDto> getUserNotifications(String userId) {
        return notificationRepository.findByUser_UserIdOrderByTimestampDesc(userId)
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    public NotificationDto markAsRead(Integer notificationId) {
        Notification notification = notificationRepository.findById(notificationId)
                .orElseThrow(() -> new RuntimeException("Notification not found"));

        notification.setRead(true);
        Notification updatedNotification = notificationRepository.save(notification);

        return mapToDto(updatedNotification);
    }

    private NotificationDto mapToDto(Notification notification) {
        return NotificationDto.builder()
                .notificationId(notification.getNotificationId())
                .userId(notification.getUser().getUserId())
                .message(notification.getMessage())
                .timestamp(notification.getTimestamp())
                .isRead(notification.isRead())
                .build();
    }
}