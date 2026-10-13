package com.example.SmartAI_collage.service;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

@Service
public class AiService {

    private final ChatClient chatClient;

    // Spring auto-injects the ChatClient.Builder configured with your API key
    public AiService(ChatClient.Builder builder) {
        this.chatClient = builder.build();
    }

    public String askQuestion(String question) {
        return chatClient.prompt(question)
                .call()
                .content();
    }
}