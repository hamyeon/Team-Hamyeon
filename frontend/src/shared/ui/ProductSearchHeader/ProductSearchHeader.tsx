import type { ChangeEvent, FormEvent } from 'react';
import * as styles from './ProductSearchHeader.css';

type ProductSearchHeaderProps = {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onSubmit?: (value: string) => void;
  className?: string;
};

export function ProductSearchHeader({
  value,
  placeholder = '찾으시는 상품을 입력해주세요',
  onChange,
  onSubmit,
  className,
}: ProductSearchHeaderProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedValue = value.trim();

    if (!trimmedValue) {
      onSubmit?.('');
      return;
    }

    onSubmit?.(trimmedValue);
  };

  return (
    <header className={[styles.header, className].filter(Boolean).join(' ')}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          type="search"
          className={styles.searchInput}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          enterKeyHint="search"
          aria-label="상품 검색어"
        />

        <button type="submit" className={styles.searchButton} aria-label="상품 검색">
          <img
            src="/icons/icn_search_gray_24px.svg"
            alt=""
            className={styles.searchIcon}
            aria-hidden="true"
          />
        </button>
      </form>
    </header>
  );
}