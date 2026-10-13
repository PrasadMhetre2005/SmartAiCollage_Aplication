package com.example.SmartAI_collage.service;

import com.example.SmartAI_collage.dto.RegisterRequest;
import com.example.SmartAI_collage.model.Role;
import com.example.SmartAI_collage.model.User;
import com.example.SmartAI_collage.repository.UserRepository;
import com.example.SmartAI_collage.security.JwtService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class AuthenticationServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @Mock
    private JwtService jwtService;

    @Mock
    private AuthenticationManager authenticationManager;

    @InjectMocks
    private AuthenticationService authenticationService;

    @Test
    void registrationCannotAssignPrivilegedRole() {
        RegisterRequest request = RegisterRequest.builder()
                .userId("student-1")
                .fullName("Student One")
                .email("student@example.edu")
                .password("test-password")
                .role("ADMIN")
                .build();
        when(userRepository.findByEmail(request.getEmail())).thenReturn(Optional.empty());
        when(passwordEncoder.encode(request.getPassword())).thenReturn("encoded-password");
        when(jwtService.generateToken(any(User.class))).thenReturn("test-token");

        authenticationService.register(request);

        ArgumentCaptor<User> userCaptor = ArgumentCaptor.forClass(User.class);
        verify(userRepository).save(userCaptor.capture());
        assertEquals(Role.STUDENT, userCaptor.getValue().getRole());
        assertEquals("encoded-password", userCaptor.getValue().getPasswordHash());
    }
}