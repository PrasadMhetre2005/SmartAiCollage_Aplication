package com.example.SmartAI_collage.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String userId; // e.g., Roll number or Employee ID
    private String fullName;
    private String email;
    private String password;
    private String role; // "STUDENT", "FACULTY", "ADMIN", or "HOD"
}