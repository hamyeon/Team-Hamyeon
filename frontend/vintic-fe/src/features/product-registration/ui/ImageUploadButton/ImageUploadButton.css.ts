import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const button = style({
  position: 'relative',
  width: '100%',
  aspectRatio: '1 / 1',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  border: `1px solid ${vars.color.gray3}`,
  borderRadius: vars.radius[12],
  background: vars.color.gray1,
  color: vars.color.black,
  cursor: 'pointer',

  transition: 'background-color 0.12s ease, opacity 0.12s ease',

  selectors: {
    '&:active:not(:disabled)': {
      background: vars.color.gray3,
    },
    '&:disabled': {
      cursor: 'not-allowed',
      color: vars.color.gray4,
    },
  },
});

export const placeholder = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const addIcon = style({
  display: 'block',
  width: '24px',
  height: '24px',
  marginBottom: vars.spacing[8],
});

export const label = style({
  color: vars.color.black,
  fontSize: vars.typography.fontSize.head02,
  fontWeight: vars.typography.fontWeight.semibold,
  lineHeight: vars.typography.lineHeight[140],
  letterSpacing: vars.typography.letterSpacing.default,
});

export const requiredText = style({
  color: vars.color.black,
  fontSize: vars.typography.fontSize.body06,
  fontWeight: vars.typography.fontWeight.regular,
  lineHeight: vars.typography.lineHeight[140],
  letterSpacing: vars.typography.letterSpacing.default,
});

export const previewImage = style({
  position: 'absolute',
  inset: 0,
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const fileInput = style({
  display: 'none',
});