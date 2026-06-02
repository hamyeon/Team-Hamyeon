import type { NextConfig } from 'next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

const backendBaseUrl = process.env.BACKEND_BASE_URL;

if (!backendBaseUrl) {
  throw new Error('BACKEND_BASE_URL 환경변수가 설정되지 않았습니다.')
}

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/backend/:path*',
        destination: `${backendBaseUrl}/:path*`,
      },
    ];
  },
};

export default withVanillaExtract(nextConfig);
