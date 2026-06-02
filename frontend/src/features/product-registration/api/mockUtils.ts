import type { ApiFailureResponse, ApiSuccessResponse } from './types';

export function delay(ms = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function createSuccessResponse<T>(data: T): ApiSuccessResponse<T> {
  return {
    success: true,
    data,
    error: null,
  };
}

export function createFailureResponse(
  code: number,
  message: string,
): ApiFailureResponse {
  return {
    success: false,
    data: null,
    error: {
      code,
      message,
    },
  };
}