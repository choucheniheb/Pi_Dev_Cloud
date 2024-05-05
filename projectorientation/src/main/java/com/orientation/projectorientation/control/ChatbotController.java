package com.orientation.projectorientation.control;

import org.springframework.http.ResponseEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import com.orientation.projectorientation.service.ChatbotService;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/chat")
public class ChatbotController {

    @Autowired
    private ChatbotService chatbotService;

    @GetMapping("/response")
    public ResponseEntity<String> getChatbotResponse(@RequestParam("question") String question) {
        String response = chatbotService.getResponse(question);
        return ResponseEntity.ok(response);
    }
}

