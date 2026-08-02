package com.example.SmartAI_collage.repository;

import com.example.SmartAI_collage.model.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Integer> {
    // Fetches notifications for a specific user, sorted newest to oldest
    List<Notification> findByUser_UserIdOrderByTimestampDesc(String userId);
}