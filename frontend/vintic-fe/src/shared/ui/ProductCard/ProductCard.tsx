import type { KeyboardEvent, MouseEvent } from 'react';
import * as styles from './ProductCard.css';

export type ProductCardData = {
  id: number;
  imageUrl: string;
  brand: string;
  name: string;
  price: number;
  interestCount: number;
  isLiked?: boolean;
};

type ProductCardProps = {
  product: ProductCardData;
  onClick?: (productId: number) => void;
  onLikeClick?: (productId: number) => void;
};

const formatPrice = (price: number) => {
  return price.toLocaleString('ko-KR');
};

export function ProductCard({ product, onClick, onLikeClick }: ProductCardProps) {
  const handleCardClick = () => {
    onClick?.(product.id);
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    event.preventDefault();
    onClick?.(product.id);
  };

  const handleLikeClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onLikeClick?.(product.id);
  };

  const favoriteIconSrc = product.isLiked
    ? '/icons/icn_favorite_fill_24px.svg'
    : '/icons/icn_favorite_line_24px.svg';

  return (
    <article
      className={styles.card}
      role="button"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      aria-label={`${product.brand} ${product.name} 상품 상세 보기`}
    >
      <div className={styles.imageBox}>
        <img src={product.imageUrl} alt={product.name} className={styles.image} />

        <button
          type="button"
          className={styles.likeButton}
          onClick={handleLikeClick}
          aria-label={product.isLiked ? '관심 상품 해제' : '관심 상품 등록'}
        >
          <img src={favoriteIconSrc} alt="" className={styles.likeIcon} aria-hidden="true" />
        </button>
      </div>

      <div className={styles.info}>
        <p className={styles.brand}>{product.brand}</p>
        <p className={styles.name}>{product.name}</p>

        <p className={styles.priceText}>
          <strong className={styles.priceValue}>{formatPrice(product.price)}</strong>
          <span className={styles.priceUnit}>원</span>
        </p>

        <p className={styles.interest}>관심 {product.interestCount}</p>
      </div>
    </article>
  );
}