package com.example.SmartAI_collage.controller;

import com.example.SmartAI_collage.dto.TimetableDto;
import com.example.SmartAI_collage.service.TimetableService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/timetable")
@RequiredArgsConstructor
public class TimetableController {

    private final TimetableService timetableService;

    @PostMapping
    public ResponseEntity<TimetableDto> createSchedule(@RequestBody TimetableDto timetableDto) {
        return ResponseEntity.ok(timetableService.createSchedule(timetableDto));
    }

    @GetMapping("/faculty/{facultyId}")
    public ResponseEntity<List<TimetableDto>> getScheduleByFaculty(@PathVariable String facultyId) {
        return ResponseEntity.ok(timetableService.getScheduleByFaculty(facultyId));
    }
}