package com.example.SmartAI_collage.service;

import com.example.SmartAI_collage.model.Course;
import com.example.SmartAI_collage.repository.CourseRepository;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.ai.document.Document;
import org.springframework.ai.vectorstore.SearchRequest;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class RagService {

    private final VectorStore vectorStore;
    private final ChatClient chatClient;
    private final CourseRepository courseRepository;

    public RagService(VectorStore vectorStore, ChatClient.Builder chatClientBuilder, CourseRepository courseRepository) {
        this.vectorStore = vectorStore;
        this.chatClient = chatClientBuilder.build();
        this.courseRepository = courseRepository;
    }

    // --- Step 1: The Data Ingestion Pipeline (ETL) ---
    public void ingestDatabaseToPinecone() {
        List<Course> courses = courseRepository.findAll();

        List<Document> documents = courses.stream().map(course -> {
            // Flatten the relational data into a readable text format
            String textContent = String.format("Course Code: %s, Name: %s, Taught by: %s, Credits: %d",
                    course.getCourseCode(),
                    course.getCourseName(),
                    course.getFaculty() != null ? course.getFaculty().getFullName() : "TBD",
                    course.getCredits());

            // Convert to a Spring AI Document with metadata
            return new Document(textContent, Map.of("type", "Course", "id", course.getCourseId()));
        }).collect(Collectors.toList());

        // Automatically calls Google API to create embeddings and saves them to Pinecone
        vectorStore.add(documents);
    }

    // --- Step 2: The Retrieval-Augmented Generation (RAG) Workflow ---
    public String askCollegeAssistant(String userQuestion) {
        // 1. Search Pinecone for the 3 most relevant documents based on the question
        SearchRequest searchRequest = SearchRequest.builder()
                .query(userQuestion)
                .topK(3)
                .build();

        List<Document> similarDocuments = vectorStore.similaritySearch(searchRequest); //

        // 2. Extract the raw text context from the retrieved documents
        String context = similarDocuments.stream()
                .map(Document::getText)
                .collect(Collectors.joining("\n"));

        // 3. Build a Prompt Template instructing the AI to strictly use the retrieved context
        String promptString = "You are a helpful college assistant. Use the following context to answer the student's question.\n\n" +
                "Context:\n{context}\n\n" +
                "Question:\n{question}";

        Prompt prompt = new PromptTemplate(promptString)
                .create(Map.of("context", context, "question", userQuestion));

        // 4. Send the composite prompt to Gemini and return the natural language response
        return chatClient.prompt(prompt)
                .call()
                .content();
    }
}