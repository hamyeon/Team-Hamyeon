import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const page = style({
  minHeight: '100dvh',
  background: vars.color.white,
});