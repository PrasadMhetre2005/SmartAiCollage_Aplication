package com.example.SmartAI_collage.controller;

import com.example.SmartAI_collage.dto.*;
import com.example.SmartAI_collage.service.AuthenticationService;

import lombok.Builder;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Builder
public class AuthenticationController {

    private final AuthenticationService service;

@PostMapping("/register")
public ResponseEntity<APIResponse<AuthenticationResponse>> register(
        @RequestBody RegisterRequest request) {

    AuthenticationResponse response =
            service.register(request);

    APIResponse<AuthenticationResponse> apiResponse =
            new APIResponse<>(
                    true,
                    "Registration successful",
                    response
            );

    return ResponseEntity.ok(apiResponse);
}
    
    @PostMapping("/login")
public ResponseEntity<APIResponse<AuthenticationResponse>> login(
        @RequestBody AuthenticationRequest request) {

    AuthenticationResponse response =
                     service.authenticate(request);

    APIResponse<AuthenticationResponse> apiResponse =
            new APIResponse<>(
                    true,
                    "Login successful",
                    response
            );

    return ResponseEntity.ok(apiResponse);
}
}