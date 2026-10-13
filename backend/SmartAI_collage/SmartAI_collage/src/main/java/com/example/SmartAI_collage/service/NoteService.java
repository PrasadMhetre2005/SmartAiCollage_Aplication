package com.example.SmartAI_collage.service;

import com.example.SmartAI_collage.model.Course;
import com.example.SmartAI_collage.model.Note;
import com.example.SmartAI_collage.repository.CourseRepository;
import com.example.SmartAI_collage.repository.NoteRepository;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.util.List;

@Service
public class NoteService {

    private final NoteRepository noteRepository;
    private final CourseRepository courseRepository;

    @Value("${file.upload-dir}")
    private String uploadDir;

    public NoteService(
            NoteRepository noteRepository,
            CourseRepository courseRepository) {

        this.noteRepository = noteRepository;
        this.courseRepository = courseRepository;
    }

    public Note uploadNote(
            MultipartFile file,
            String title,
            Long courseId) throws IOException {

        if (file == null || file.isEmpty()) {
            throw new IllegalArgumentException("PDF file cannot be empty");
        }

        if (!"application/pdf".equalsIgnoreCase(file.getContentType())) {
            throw new IllegalArgumentException("Only PDF files are allowed");
        }

        Course course = courseRepository.findById(Math.toIntExact(courseId))
                .orElseThrow(() ->
                        new RuntimeException("Course not found with ID: " + courseId));

        Path uploadPath = Paths.get(uploadDir);

        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        String originalFileName = file.getOriginalFilename();

        if (originalFileName == null || originalFileName.isBlank()) {
            throw new IllegalArgumentException("Invalid file name");
        }

        String fileName = System.currentTimeMillis()
                + "_"
                + Paths.get(originalFileName)
                .getFileName()
                .toString();

        Path filePath = uploadPath.resolve(fileName);

        Files.copy(
                file.getInputStream(),
                filePath,
                StandardCopyOption.REPLACE_EXISTING
        );

        Note note = Note.builder()
                .course(course)
                .title(title)
                .fileUrl("/uploads/notes/" + fileName)
                .build();

        return noteRepository.save(note);
    }

    public List<Note> getAllNotes() {
        return noteRepository.findAll();
    }

    public Note getNoteById(Long noteId) {
        return noteRepository.findById(noteId)
                .orElseThrow(() ->
                        new RuntimeException("Note not found with ID: " + noteId));
    }
}