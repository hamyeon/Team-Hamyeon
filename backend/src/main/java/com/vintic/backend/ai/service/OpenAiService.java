package com.vintic.backend.ai.service;

import com.vintic.backend.ai.prompt.ProductAnalysisPrompt; // 작성하신 프롬프트 클래스 import
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
public class OpenAiService {
    @Value("${openai.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    public String analyzeProductImage(String imageUrl) {
        String url = "https://api.openai.com/v1/chat/completions";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(apiKey);

        Map<String, Object> body = new HashMap<>();
        body.put("model", "gpt-4o"); // 최신 멀티모달 모델

        // 시스템 메시지: 프롬프트 세팅
        Map<String, Object> systemMessage = new HashMap<>();
        systemMessage.put("role", "system");
        systemMessage.put("content", ProductAnalysisPrompt.SYSTEM_PROMPT);

        // 유저 메시지: S3에 올라간 이미지 URL 세팅
        Map<String, Object> userMessage = new HashMap<>();
        userMessage.put("role", "user");

        Map<String, Object> imageUrlMap = new HashMap<>();
        imageUrlMap.put("url", imageUrl);

        Map<String, Object> imageContent = new HashMap<>();
        imageContent.put("type", "image_url");
        imageContent.put("image_url", imageUrlMap);

        userMessage.put("content", Collections.singletonList(imageContent));

        //95 메시지 리스트에 시스템 역할과 유저 역할을 순서대로 삽입
        body.put("messages", Arrays.asList(systemMessage, userMessage));

        // OpenAI가 무조건 JSON 형태로만 대답하도록 강제하는 옵션
        Map<String, Object> responseFormat = new HashMap<>();
        responseFormat.put("type", "json_object");
        body.put("response_format", responseFormat);

        body.put("max_tokens", 1000);

        HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        // API 호출
        ResponseEntity<String> response = restTemplate.exchange(
                url, HttpMethod.POST, requestEntity, String.class
        );

        return response.getBody();
    }
}
