package com.example.SmartAI_collage.controller;

import com.example.SmartAI_collage.service.RagService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/ai")
@RequiredArgsConstructor
public class AiController {

    private final RagService ragService;

    // Trigger this endpoint once via Postman to sync your MySQL courses to Pinecone
    @PostMapping("/ingest")
    public ResponseEntity<String> ingestData() {
        ragService.ingestDatabaseToPinecone();
        return ResponseEntity.ok("Successfully ingested MySQL course data into Pinecone Vector Store!");
    }

    // The main chat endpoint for your frontend to communicate with the Assistant
    @PostMapping("/chat")
    public ResponseEntity<Map<String, String>> chatWithAssistant(@RequestBody Map<String, String> request) {
        String question = request.get("question");
        String answer = ragService.askCollegeAssistant(question);
        return ResponseEntity.ok(Map.of("question", question, "answer", answer));
    }
}