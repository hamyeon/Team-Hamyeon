'use client';

import { useEffect, useMemo, useRef } from 'react';
import * as styles from './ImageUploadButton.css';

type ImageUploadButtonProps = {
  label: string;
  required?: boolean;
  file?: File;
  imageUrl?: string;
  disabled?: boolean;
  onChange: (file: File) => void;
};

export function ImageUploadButton({
  label,
  required = false,
  file,
  imageUrl,
  disabled = false,
  onChange,
}: ImageUploadButtonProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const objectUrl = useMemo(() => {
    if (!file) {
      return undefined;
    }

    return URL.createObjectURL(file);
  }, [file]);

  useEffect(() => {
    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [objectUrl]);

  const previewSrc = imageUrl ?? objectUrl;

  const handleButtonClick = () => {
    if (disabled) {
      return;
    }

    inputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    if (!selectedFile.type.startsWith('image/')) {
      return;
    }

    onChange(selectedFile);

    event.target.value = '';
  };

  return (
    <>
      <button
        type="button"
        className={styles.button}
        disabled={disabled}
        onClick={handleButtonClick}
        aria-label={`${label} 이미지 업로드`}
      >
        {previewSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={previewSrc} alt={`${label} 이미지`} className={styles.previewImage} />
        ) : (
          <span className={styles.placeholder}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icons/icn_add_24px.svg"
              alt=""
              className={styles.addIcon}
              aria-hidden="true"
            />
            <span className={styles.label}>{label}</span>
            <span className={styles.requiredText}>{required ? '(필수)' : '(선택)'}</span>
          </span>
        )}
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className={styles.fileInput}
        disabled={disabled}
        onChange={handleFileChange}
      />
    </>
  );
}