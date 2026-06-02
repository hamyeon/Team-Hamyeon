import type {
  AnalyzeProductImagesData,
  AnalyzeProductImagesRequest,
  AnalyzeProductImagesServerResponse,
  ApiResponse,
} from './types';
import { PRODUCT_API_BASE_URL, PRODUCT_API_ENDPOINTS } from './types';

export async function analyzeProductImages(
  request: AnalyzeProductImagesRequest,
): Promise<ApiResponse<AnalyzeProductImagesData>> {
  const { frontImage, backImage, sideImage, defectImage } = request.images;

  if (!frontImage || !backImage || !sideImage) {
    return {
      success: false,
      data: null,
      error: {
        code: 40002,
        message: '앞면, 뒷면, 측면 이미지는 필수입니다.',
      },
    };
  }

  const formData = new FormData();

  formData.append('images', frontImage);
  formData.append('images', backImage);
  formData.append('images', sideImage);

  if (defectImage) {
    formData.append('images', defectImage);
  }

  try {
    const response = await fetch(
      `${PRODUCT_API_BASE_URL}${PRODUCT_API_ENDPOINTS.analyzeProductImages}`,
      {
        method: 'POST',
        body: formData,
      },
    );

    const result = (await response.json()) as AnalyzeProductImagesServerResponse;

    if (!response.ok || !result.success || !result.data) {
      return {
        success: false,
        data: null,
        error: result.error ?? {
          code: response.status,
          message: '이미지 분석에 실패했습니다.',
        },
      };
    }

    const [frontImageUrl, backImageUrl, sideImageUrl, defectImageUrl] =
      result.data.imageUrls;

    return {
      success: true,
      data: {
        imageUrls: {
          frontImageUrl,
          backImageUrl,
          sideImageUrl,
          defectImageUrl,
        },
        brand: result.data.brand,
        modelName: result.data.modelName,
        color: result.data.color,
        size: result.data.size,
        conditionDescription: result.data.conditionDescription,
        conditionGrade: result.data.conditionGrade,
      },
      error: null,
    };
  } catch {
    return {
      success: false,
      data: null,
      error: {
        code: 50003,
        message: '이미지 분석에 실패했습니다.',
      },
    };
  }
}