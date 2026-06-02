import type {
  ApiResponse,
  RegisterProductData,
  RegisterProductRequest,
  RegisterProductResponse,
  RegisterProductServerRequest,
} from './types';
import { PRODUCT_API_BASE_URL, PRODUCT_API_ENDPOINTS } from './types';

const toImageUrlArray = (
  imageUrls: RegisterProductRequest['imageUrls'],
): string[] => {
  return [
    imageUrls.frontImageUrl,
    imageUrls.backImageUrl,
    imageUrls.sideImageUrl,
    imageUrls.defectImageUrl,
  ].filter((imageUrl): imageUrl is string => Boolean(imageUrl));
};

export async function registerProduct(
  request: RegisterProductRequest,
): Promise<ApiResponse<RegisterProductData>> {
  const imageUrls = toImageUrlArray(request.imageUrls);

  if (imageUrls.length < 3 || imageUrls.length > 4) {
    return {
      success: false,
      data: null,
      error: {
        code: 40001,
        message: '이미지 URL은 최소 3개, 최대 4개까지 등록할 수 있습니다.',
      },
    };
  }

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

  if (!request.sellingPrice || request.sellingPrice <= 0) {
    return {
      success: false,
      data: null,
      error: {
        code: 40001,
        message: '최종 판매 가격은 필수입니다.',
      },
    };
  }

  const requestBody: RegisterProductServerRequest = {
    imageUrls,
    brand: request.brand,
    modelName: request.modelName,
    color: request.color,
    size: request.size,
    conditionGrade: request.conditionGrade,
    componentStatus: request.componentStatus,
    recommendedPrice: request.recommendedPrice,
    baseMarketPrice: request.baseMarketPrice,
    priceRange: request.priceRange,
    sellingPrice: request.sellingPrice,
    reason: request.reason,
    sellerDescription: request.sellerDescription,
  };

  try {
    const response = await fetch(
      `${PRODUCT_API_BASE_URL}${PRODUCT_API_ENDPOINTS.registerProduct}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      },
    );

    const result = (await response.json()) as RegisterProductResponse;

    if (!response.ok || !result.success || !result.data) {
      return {
        success: false,
        data: null,
        error: result.error ?? {
          code: response.status,
          message: '상품 등록에 실패했습니다.',
        },
      };
    }

    return {
      success: true,
      data: result.data,
      error: null,
    };
  } catch (error) {
    return {
      success: false,
      data: null,
      error: {
        code: 50002,
        message:
          error instanceof Error
            ? `상품 등록 요청에 실패했습니다: ${error.message}`
            : '상품 등록 요청에 실패했습니다.',
      },
    };
  }
}