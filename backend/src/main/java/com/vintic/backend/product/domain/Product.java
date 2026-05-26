package com.vintic.backend.product.domain;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String imageUrl;

    private String brand;
    private String model;
    private String colorway;
    private Integer sizeKr;
    private String conditionGrade;
    private Boolean boxIncluded;

    private Integer recommendedPrice;
    private Integer baseMarketPrice;
    private String priceRange;
    private Integer finalPrice;

    @Column(length = 1000)
    private String reason;

    @Column(length = 1000)
    private String description;

    private LocalDateTime createdAt;

    protected Product() {
    }

    public Product(
            String imageUrl,
            String brand,
            String model,
            String colorway,
            Integer sizeKr,
            String conditionGrade,
            Boolean boxIncluded,
            Integer recommendedPrice,
            Integer baseMarketPrice,
            String priceRange,
            Integer finalPrice,
            String reason,
            String description
    ) {
        this.imageUrl = imageUrl;
        this.brand = brand;
        this.model = model;
        this.colorway = colorway;
        this.sizeKr = sizeKr;
        this.conditionGrade = conditionGrade;
        this.boxIncluded = boxIncluded;
        this.recommendedPrice = recommendedPrice;
        this.baseMarketPrice = baseMarketPrice;
        this.priceRange = priceRange;
        this.finalPrice = finalPrice;
        this.reason = reason;
        this.description = description;
        this.createdAt = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getBrand() {
        return brand;
    }

    public String getModel() {
        return model;
    }

    public String getColorway() {
        return colorway;
    }

    public Integer getSizeKr() {
        return sizeKr;
    }

    public String getConditionGrade() {
        return conditionGrade;
    }

    public Boolean getBoxIncluded() {
        return boxIncluded;
    }

    public Integer getRecommendedPrice() {
        return recommendedPrice;
    }

    public Integer getBaseMarketPrice() {
        return baseMarketPrice;
    }

    public String getPriceRange() {
        return priceRange;
    }

    public Integer getFinalPrice() {
        return finalPrice;
    }

    public String getReason() {
        return reason;
    }

    public String getDescription() {
        return description;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
}