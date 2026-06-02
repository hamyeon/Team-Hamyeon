'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ProductCard, type ProductCardData } from '@/shared/ui/ProductCard';
import { ProductSearchHeader } from '@/shared/ui/ProductSearchHeader';
import * as styles from './page.css';

const MOCK_PRODUCTS: ProductCardData[] = [
  {
    id: 1,
    imageUrl: '/images/img_mock_product.jpg',
    brand: 'BAPE',
    name: '베이프 슬라이드 #1 블랙',
    price: 234000,
    interestCount: 556,
    isLiked: false,
  },
  {
    id: 2,
    imageUrl: '/images/img_mock_product.jpg',
    brand: 'BAPE',
    name: '베이프 슬라이드 #1 블랙',
    price: 234000,
    interestCount: 556,
    isLiked: false,
  },
  {
    id: 3,
    imageUrl: '/images/img_mock_product.jpg',
    brand: 'BAPE',
    name: '베이프 슬라이드 #1 블랙',
    price: 234000,
    interestCount: 556,
    isLiked: false,
  },
  {
    id: 4,
    imageUrl: '/images/img_mock_product.jpg',
    brand: 'BAPE',
    name: '베이프 슬라이드 #1 블랙',
    price: 234000,
    interestCount: 556,
    isLiked: false,
  },
  {
    id: 5,
    imageUrl: '/images/img_mock_product.jpg',
    brand: 'BAPE',
    name: '베이프 슬라이드 #1 블랙',
    price: 234000,
    interestCount: 556,
    isLiked: false,
  },
  {
    id: 6,
    imageUrl: '/images/img_mock_product.jpg',
    brand: 'BAPE',
    name: '베이프 슬라이드 #1 블랙',
    price: 234000,
    interestCount: 556,
    isLiked: false,
  },
];

export default function ProductsPage() {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState('');
  const [submittedKeyword, setSubmittedKeyword] = useState('');
  const [products, setProducts] = useState<ProductCardData[]>(MOCK_PRODUCTS);

  const filteredProducts = useMemo(() => {
    const keyword = submittedKeyword.trim().toLowerCase();

    if (!keyword) {
      return products;
    }

    return products.filter((product) => {
      const brand = product.brand.toLowerCase();
      const name = product.name.toLowerCase();

      return brand.includes(keyword) || name.includes(keyword);
    });
  }, [products, submittedKeyword]);

  const handleSearchSubmit = (keyword: string) => {
    setSubmittedKeyword(keyword);
  };

  const handleProductClick = (productId: number) => {
    router.push(`/products/${productId}`);
  };

  const handleLikeClick = (productId: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
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
      }),
    );
  };

  return (
    <main className={styles.page}>
      <ProductSearchHeader
        value={searchValue}
        onChange={setSearchValue}
        onSubmit={handleSearchSubmit}
      />

      <section className={styles.content}>
        <div className={styles.sortRow}>
          <button type="button" className={styles.activeSortButton}>
            인기순
          </button>
          <button type="button" className={styles.sortButton}>
            최신순
          </button>
        </div>

        {filteredProducts.length > 0 ? (
          <div className={styles.productGrid}>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={handleProductClick}
                onLikeClick={handleLikeClick}
              />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p className={styles.emptyTitle}>검색 결과가 없어요</p>
            <p className={styles.emptyDescription}>
              다른 상품명이나 브랜드로 다시 검색해보세요.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}