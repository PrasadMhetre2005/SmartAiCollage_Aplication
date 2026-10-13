package com.example.SmartAI_collage.controller;

import com.example.SmartAI_collage.model.Note;
import com.example.SmartAI_collage.service.NoteService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/notes")
public class NoteController {

    private final NoteService noteService;

    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @PostMapping("/upload")
    public ResponseEntity<Note> uploadNote(
            @RequestParam("file") MultipartFile file,
            @RequestParam("title") String title,
            @RequestParam("courseId") Long courseId) {

        try {

            Note note = noteService.uploadNote(
                    file,
                    title,
                    courseId
            );

            return ResponseEntity.ok(note);

        } catch (IOException e) {

            return ResponseEntity.internalServerError().build();

        } catch (IllegalArgumentException e) {

            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Note>> getAllNotes() {
        return ResponseEntity.ok(noteService.getAllNotes());
    }

    @GetMapping("/{noteId}")
    public ResponseEntity<Note> getNoteById(
            @PathVariable Long noteId) {

        return ResponseEntity.ok(
                noteService.getNoteById(noteId)
        );
    }
}