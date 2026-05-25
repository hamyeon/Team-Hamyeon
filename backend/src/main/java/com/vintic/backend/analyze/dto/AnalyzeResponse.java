package com.vintic.backend.analyze.dto;

public record AnalyzeResponse(
        String imgUrl,
        String brand,
        String modelName,
        String color,
        Integer size,
        String conditionDescription,
        String conditinoGrade
) {}
