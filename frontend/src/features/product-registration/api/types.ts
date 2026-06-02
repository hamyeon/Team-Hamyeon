import type {
  ComponentStatus,
  ConditionGrade,
  ProductImageFiles,
  ProductImageUrls,
} from '../model/types';

export const PRODUCT_API_BASE_URL = '/backend';

export const PRODUCT_API_ENDPOINTS = {
  analyzeProductImages: '/api/products/analyze',
  analyzeRecommendedPrice: '/api/products/calculate-price',
  registerProduct: '/api/products',
} as const;

export type ApiError = {
  code: number;
  message: string;
};

export type ApiSuccessResponse<T> = {
  success: true;
  data: T;
  error: null;
};

export type ApiFailureResponse = {
  success: false;
  data: null;
  error: ApiError;
};

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiFailureResponse;

export type AnalyzeProductImagesRequest = {
  images: ProductImageFiles;
};

export type AnalyzeProductImagesData = {
  imageUrls: ProductImageUrls;
  brand: string;
  modelName: string;
  color: string;
  size: number;
  conditionDescription: string;
  conditionGrade: ConditionGrade;
};

export type AnalyzeProductImagesServerData = {
  imageUrls: string[];
  brand: string;
  modelName: string;
  color: string;
  size: number;
  conditionDescription: string;
  conditionGrade: ConditionGrade;
};

export type AnalyzeProductImagesServerResponse =
  ApiResponse<AnalyzeProductImagesServerData>;

export type AnalyzeRecommendedPriceRequest = {
  brand: string;
  modelName: string;
  color: string;
  size: number;
  conditionGrade: ConditionGrade;
  componentStatus: ComponentStatus;
};

export type MarketMatch = {
  source: 'KREAM' | 'EBAY';
  brand: string;
  modelName: string;
  color: string;
  size: number;
  conditionGrade: string;
  componentStatus: ComponentStatus | null;
  price: number;
  url: string;
};

export type AnalyzeRecommendedPriceData = {
  recommendedPrice: number;
  baseMarketPrice: number;
  kreamAveragePrice: number;
  ebayAveragePrice: number;
  minRecommendedPrice: number;
  maxRecommendedPrice: number;
  priceRange: string;
  reason: string;
  kreamMatches: MarketMatch[];
  ebayMatches: MarketMatch[];
};

export type AnalyzeRecommendedPriceResponse =
  ApiResponse<AnalyzeRecommendedPriceData>;

export type RegisterProductRequest = {
  imageUrls: ProductImageUrls;
  brand: string;
  modelName: string;
  color: string;
  size: number;
  conditionGrade: ConditionGrade;
  componentStatus: ComponentStatus;
  recommendedPrice: number;
  baseMarketPrice: number;
  priceRange: string;
  sellingPrice: number;
  reason: string;
  sellerDescription?: string;
};

export type RegisterProductServerRequest = {
  imageUrls: string[];
  brand: string;
  modelName: string;
  color: string;
  size: number;
  conditionGrade: ConditionGrade;
  componentStatus: ComponentStatus;
  recommendedPrice: number;
  baseMarketPrice: number;
  priceRange: string;
  sellingPrice: number;
  reason: string;
  sellerDescription?: string;
};

export type RegisterProductData = {
  id: number;
  imageUrls: string[];
  brand: string;
  modelName: string;
  color: string;
  size: number;
  conditionGrade: ConditionGrade;
  componentStatus: ComponentStatus;
  recommendedPrice: number;
  baseMarketPrice: number;
  priceRange: string;
  sellingPrice: number;
  reason: string;
  sellerDescription?: string;
  createdAt: string;
};

export type RegisterProductResponse =
  ApiResponse<RegisterProductData>;