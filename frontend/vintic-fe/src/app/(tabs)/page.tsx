'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { HomeHeader } from '@/shared/ui/HomeHeader';
import { FloatingActionButton } from '@/shared/ui/FloatingActionButton';
import { ProductCard, type ProductCardData } from '@/shared/ui/ProductCard';
import * as styles from './page.css';

const RECOMMENDED_PRODUCTS: ProductCardData[] = [
  {
    id: 1,
    imageUrl: '/images/img_mock_product01.jpg',
    brand: 'Asics',
    name: '아식스 X 아트모스 핑크 X 오호스 젤 1130 RE 그레이',
    price: 317000,
    interestCount: 778,
    isLiked: false,
  },
  {
    id: 2,
    imageUrl: '/images/img_mock_product02.jpg',
    brand: 'Adidas',
    name: '아디다스 버뮤다 글로우 핑크',
    price: 43000,
    interestCount: 220,
    isLiked: false,
  },
  {
    id: 3,
    imageUrl: '/images/img_mock_product03.jpg',
    brand: 'Adidas',
    name: '아디다스 슈퍼스타 82 블랙 화이트',
    price: 76000,
    interestCount: 442,
    isLiked: false,
  },
  {
    id: 4,
    imageUrl: '/images/img_mock_product04.jpg',
    brand: 'Nike',
    name: '나이키 X 튠 에어포스 1 CVS 트와일라잇 마쉬',
    price: 178000,
    interestCount: 556,
    isLiked: false,
  },
];

const POPULAR_PRODUCTS: ProductCardData[] = [
  {
    id: 5,
    imageUrl: '/images/img_mock_product01.jpg',
    brand: 'Asics',
    name: '아식스 X 아트모스 핑크 X 오호스 젤 1130 RE 그레이',
    price: 317000,
    interestCount: 778,
    isLiked: false,
  },
  {
    id: 6,
    imageUrl: '/images/img_mock_product02.jpg',
    brand: 'Adidas',
    name: '아디다스 버뮤다 글로우 핑크',
    price: 43000,
    interestCount: 220,
    isLiked: false,
  },
  {
    id: 7,
    imageUrl: '/images/img_mock_product03.jpg',
    brand: 'Adidas',
    name: '아디다스 슈퍼스타 82 블랙 화이트',
    price: 76000,
    interestCount: 442,
    isLiked: false,
  },
  {
    id: 8,
    imageUrl: '/images/img_mock_product04.jpg',
    brand: 'Nike',
    name: '나이키 X 튠 에어포스 1 CVS 트와일라잇 마쉬',
    price: 178000,
    interestCount: 556,
    isLiked: false,
  },
];

export default function HomePage() {
  const router = useRouter();

  const [recommendedProducts, setRecommendedProducts] =
    useState<ProductCardData[]>(RECOMMENDED_PRODUCTS);
  const [popularProducts, setPopularProducts] = useState<ProductCardData[]>(POPULAR_PRODUCTS);

  const handleProductClick = (productId: number) => {
    router.push(`/products/${productId}`);
  };

  const toggleProductLike = (
    products: ProductCardData[],
    productId: number,
  ): ProductCardData[] => {
    return products.map((product) => {
      if (product.id !== productId) {
        return product;
      }

      const nextIsLiked = !product.isLiked;

      return {
        ...product,
        isLiked: nextIsLiked,
        interestCount: nextIsLiked
          ? product.interestCount + 1
          : Math.max(product.interestCount - 1, 0),
      };
    });
  };

  const handleLikeClick = (productId: number) => {
    setRecommendedProducts((prevProducts) => toggleProductLike(prevProducts, productId));
    setPopularProducts((prevProducts) => toggleProductLike(prevProducts, productId));
  };

  return (
    <main className={styles.page}>
      <HomeHeader />

      <section className={styles.bannerSection} aria-label="혜택 배너">
        <img
          src="/images/img_mock_banner.jpg"
          alt="6월 혜택 모음"
          className={styles.bannerImage}
        />

        <div className={styles.bannerDots} aria-hidden="true">
          <span className={styles.activeDot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
      </section>

      <section className={styles.productSection}>
        <h2 className={styles.sectionTitle}>하면됨 님께 딱 맞는 상품</h2>

        <div className={styles.productGrid}>
          {recommendedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={handleProductClick}
              onLikeClick={handleLikeClick}
            />
          ))}
        </div>
      </section>

      <section className={styles.productSection}>
        <h2 className={styles.sectionTitle}>지금 인기있는 상품</h2>

        <div className={styles.productGrid}>
          {popularProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={handleProductClick}
              onLikeClick={handleLikeClick}
            />
          ))}
        </div>
      </section>

      <Link href="/sell" className={styles.fabLink} aria-label="상품 등록하기 페이지로 이동">
        <FloatingActionButton>상품 등록하기</FloatingActionButton>
      </Link>
    </main>
  );
}