//package com.example.SmartAI_collage.config;
//
//import org.springframework.ai.embedding.EmbeddingModel;
//import org.springframework.ai.google.genai.GoogleGenAiTextEmbeddingModel;
//import org.springframework.ai.google.genai.api.GoogleGenAiApi;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//@Configuration
//public class AiConfig {
//
//    @Value("${spring.ai.google.genai.api-key}")
//    private String geminiApiKey;
//
//    @Bean
//    public EmbeddingModel embeddingModel() {
//        // Initialize the Google GenAI API client
//        GoogleGenAiApi googleGenAiApi = new GoogleGenAiApi(geminiApiKey);
//
//        // Return the configured EmbeddingModel for Spring AI to use
//        return new GoogleGenAiEmbeddingModel(googleGenAiApi);
//    }
//}