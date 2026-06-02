import type {
  AnalyzeRecommendedPriceData,
  AnalyzeRecommendedPriceRequest,
  AnalyzeRecommendedPriceResponse,
  ApiResponse,
} from './types';
import { PRODUCT_API_BASE_URL, PRODUCT_API_ENDPOINTS } from './types';

export async function analyzeRecommendedPrice(
  request: AnalyzeRecommendedPriceRequest,
): Promise<ApiResponse<AnalyzeRecommendedPriceData>> {
  if (!request.brand.trim()) {
    return {
      success: false,
      data: null,
      error: {
        code: 40001,
        message: '브랜드는 필수입니다.',
      },
    };
  }

  if (!request.modelName.trim()) {
    return {
      success: false,
      data: null,
      error: {
        code: 40001,
        message: '모델명은 필수입니다.',
      },
    };
  }

  if (!request.color.trim()) {
    return {
      success: false,
      data: null,
      error: {
        code: 40001,
        message: '컬러는 필수입니다.',
      },
    };
  }

  if (!request.size || request.size <= 0) {
    return {
      success: false,
      data: null,
      error: {
        code: 40001,
        message: '신발 사이즈는 필수입니다.',
      },
    };
  }

  if (!request.conditionGrade) {
    return {
      success: false,
      data: null,
      error: {
        code: 40001,
        message: '상품 상태 등급은 필수입니다.',
      },
    };
  }

  if (!request.componentStatus) {
    return {
      success: false,
      data: null,
      error: {
        code: 40001,
        message: '구성품 상태는 필수입니다.',
      },
    };
  }

  try {
    const response = await fetch(
      `${PRODUCT_API_BASE_URL}${PRODUCT_API_ENDPOINTS.analyzeRecommendedPrice}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          brand: request.brand,
          modelName: request.modelName,
          color: request.color,
          size: request.size,
          conditionGrade: request.conditionGrade,
          componentStatus: request.componentStatus,
        }),
      },
    );

    const result = (await response.json()) as AnalyzeRecommendedPriceResponse;

    if (!response.ok || !result.success || !result.data) {
      return {
        success: false,
        data: null,
        error: result.error ?? {
          code: response.status,
          message: '추천 가격 계산에 실패했습니다.',
        },
      };
    }

    return {
      success: true,
      data: {
        recommendedPrice: result.data.recommendedPrice,
        baseMarketPrice: result.data.baseMarketPrice,
        kreamAveragePrice: result.data.kreamAveragePrice,
        ebayAveragePrice: result.data.ebayAveragePrice,
        minRecommendedPrice: result.data.minRecommendedPrice,
        maxRecommendedPrice: result.data.maxRecommendedPrice,
        priceRange: result.data.priceRange,
        reason: result.data.reason,
        kreamMatches: result.data.kreamMatches,
        ebayMatches: result.data.ebayMatches,
      },
      error: null,
    };
  } catch (error) {
    return {
      success: false,
      data: null,
      error: {
        code: 50001,
        message:
          error instanceof Error
            ? `추천 가격 계산 요청에 실패했습니다: ${error.message}`
            : '추천 가격 계산 요청에 실패했습니다.',
      },
    };
  }
}