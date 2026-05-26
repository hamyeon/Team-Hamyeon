package com.vintic.backend.analyze.controller;

import com.vintic.backend.ai.service.OpenAiService;
import com.vintic.backend.analyze.service.ProductAnalyzeService;
import com.vintic.backend.analyze.service.S3UploaderService;
import com.vintic.backend.common.dto.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;



//S3UploaderService에 프론트가 보낸 이미지를 전달하는 컨트롤러
@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class AnalyzeController {

    private final OpenAiService openAiService;
    private final ProductAnalyzeService productAnalyzeService;
    private final S3UploaderService s3UploaderService;

    @PostMapping(value = "/analyze", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> analyzeImage(@RequestPart("image") MultipartFile image) {
        // 빈 파일이 오면 쫓아냄
        if (image == null || image.isEmpty()) {
            return ResponseEntity.badRequest().body(ApiResponse.fail(400, "이미지 파일이 없습니다."));
        }

        try {
            // 서비스 호출 (이미지 S3 저장 후 URL 반환)
            String imageUrl = s3UploaderService.uploadImage(image);

            // 획득한 S3 URL을 OpenAI API에 전달
            String aiAnalysisResult = openAiService.analyzeProductImage(imageUrl);

            // 최종 AI 분석 결과를 기존 공통 ApiResponse 성공 포맷에 담아 반환
            return ResponseEntity.ok(ApiResponse.success(aiAnalysisResult));

        } catch (Exception e) {
            // 업로드 중 에러가 터지면 500 에러 반환
            e.printStackTrace();
            return ResponseEntity.internalServerError().body(ApiResponse.fail(500,"이미지 업로드에 실패했습니다."));
        }
    }


}
