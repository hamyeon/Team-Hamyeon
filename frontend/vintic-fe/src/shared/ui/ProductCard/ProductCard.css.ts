import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const card = style({
  width: '100%',
  cursor: 'pointer',
  outline: 'none',

  selectors: {
    '&:active': {
      opacity: 0.8,
    },
  },
});

export const imageBox = style({
  position: 'relative',
  width: '100%',
  aspectRatio: '1 / 1',
  overflow: 'hidden',
  background: vars.color.gray1,
});

export const image = style({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const likeButton = style({
  position: 'absolute',
  top: vars.spacing[8],
  right: vars.spacing[8],
  zIndex: 2,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '24px',
  height: '24px',
  padding: 0,

  border: 'none',
  background: 'transparent',
  cursor: 'pointer',

  selectors: {
    '&:active': {
      opacity: 0.8,
    },
  },
});

export const likeIcon = style({
  display: 'block',
  width: '24px',
  height: '24px',
  pointerEvents: 'none',
});

export const info = style({
  marginTop: vars.spacing[12],
});

export const brand = style({
  margin: 0,
  color: vars.color.black,

  fontSize: vars.typography.fontSize.body03,
  fontWeight: vars.typography.fontWeight.semibold,
  lineHeight: vars.typography.lineHeight[160],
  letterSpacing: vars.typography.letterSpacing.default,
});

export const name = style({
  margin: 0,
  color: vars.color.black,

  fontSize: vars.typography.fontSize.body04,
  fontWeight: vars.typography.fontWeight.medium,
  lineHeight: vars.typography.lineHeight[160],
  letterSpacing: vars.typography.letterSpacing.default,

  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const priceText = style({
  display: 'flex',
  alignItems: 'center',

  margin: 0,
  color: vars.color.black,
  lineHeight: vars.typography.lineHeight[140],
  letterSpacing: vars.typography.letterSpacing.default,
});

export const priceValue = style({
  fontSize: vars.typography.fontSize.body03,
  fontWeight: vars.typography.fontWeight.semibold,
});

export const priceUnit = style({
  marginLeft: '1px',

  fontSize: vars.typography.fontSize.body04,
  fontWeight: vars.typography.fontWeight.medium,
});

export const interest = style({
  margin: 0,
  color: vars.color.gray5,

  fontSize: vars.typography.fontSize.caption01,
  fontWeight: vars.typography.fontWeight.regular,
  lineHeight: vars.typography.lineHeight[160],
  letterSpacing: vars.typography.letterSpacing.default,
});