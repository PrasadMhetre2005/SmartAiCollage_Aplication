package com.example.SmartAI_collage.controller;

import com.example.SmartAI_collage.dto.NotificationDto;
import com.example.SmartAI_collage.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/notifications")
@RequiredArgsConstructor
public class NotificationController {

    private final NotificationService notificationService;

    // Admin or System can use this to manually push a notification
    @PostMapping("/send")
    public ResponseEntity<NotificationDto> sendNotification(@RequestBody Map<String, String> request) {
        String userId = request.get("userId");
        String message = request.get("message");
        return ResponseEntity.ok(notificationService.sendNotification(userId, message));
    }

    // Retrieve all notifications for the currently logged-in user (requires userId in the path)
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<NotificationDto>> getUserNotifications(@PathVariable String userId) {
        return ResponseEntity.ok(notificationService.getUserNotifications(userId));
    }

    // Mark a specific notification as read
    @PutMapping("/{notificationId}/read")
    public ResponseEntity<NotificationDto> markAsRead(@PathVariable Integer notificationId) {
        return ResponseEntity.ok(notificationService.markAsRead(notificationId));
    }
}