'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  productRegistrationSchema,
  type ProductRegistrationFormValues,
} from '@/features/product-registration/model/schema';
import type { ProductImageFiles } from '@/features/product-registration/model/types';
import { PRODUCT_REGISTRATION_STEPS } from '@/features/product-registration/model/steps';

export function ProductRegistrationFlow() {
  const [step, setStep] = useState(PRODUCT_REGISTRATION_STEPS.IMAGE_UPLOAD);
  const [images, setImages] = useState<ProductImageFiles>({});

  const form = useForm<ProductRegistrationFormValues>({
    resolver: zodResolver(productRegistrationSchema),
    defaultValues: {
      brand: '',
      modelName: '',
      color: '',
      size: 0,
      conditionDescription: '',
      conditionGrade: 'B',
      componentStatus: 'all',
      description: '',
    },
  });

  return <div>상품 등록 플로우</div>;
}