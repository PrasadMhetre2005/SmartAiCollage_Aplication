package com.example.SmartAI_collage.repository;

import com.example.SmartAI_collage.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note, Long> {
}