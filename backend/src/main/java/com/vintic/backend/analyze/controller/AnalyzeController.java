package com.vintic.backend.analyze.controller;

import com.vintic.backend.analyze.service.S3UploaderService;
import com.vintic.backend.common.dto.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

//S3UploaderService에 프론트가 보낸 이미지를 전달하는 컨트롤러
@RestController
@RequestMapping("/api/v1/products")
@RequiredArgsConstructor
public class AnalyzeController {

    private final S3UploaderService s3UploaderService;

    @PostMapping("/analyze")
    public ResponseEntity<?> analyzeImage(@RequestPart("image") MultipartFile image) {
        // 빈 파일이 오면 쫓아냄
        if (image == null || image.isEmpty()) {
            return ResponseEntity.badRequest().body(ApiResponse.fail(400, "이미지 파일이 없습니다."));
        }

        try {
            // 서비스 호출 (이미지 S3 저장 후 URL 반환)
            String imageUrl = s3UploaderService.uploadImage(image);


            return ResponseEntity.ok(ApiResponse.success(imageUrl));

        } catch (Exception e) {
            // 업로드 중 에러가 터지면 500 에러 반환
            e.printStackTrace();
            return ResponseEntity.internalServerError().body(ApiResponse.fail(500,"이미지 업로드에 실패했습니다."));
        }
    }


}
