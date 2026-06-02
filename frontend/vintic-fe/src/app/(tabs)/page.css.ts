import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const page = style({
  position: 'relative',
  minHeight: '100%',
  background: vars.color.white,
});

export const bannerSection = style({
  width: '100%',
});

export const bannerImage = style({
  display: 'block',
  width: '100%',
  aspectRatio: '375 / 100',
  height: 'auto',
  objectFit: 'cover',
});

export const bannerDots = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing[4],
  marginTop: vars.spacing[12],
  height: '16px',
});

export const activeDot = style({
  display: 'block',
  width: '6px',
  height: '6px',
  borderRadius: vars.radius[24],
  background: vars.color.gray5,
});

export const dot = style({
  display: 'block',
  width: '6px',
  height: '6px',
  borderRadius: vars.radius[24],
  background: vars.color.gray2,
});

export const productSection = style({
  paddingTop: vars.spacing[28],
  paddingRight: vars.spacing[20],
  paddingLeft: vars.spacing[20],
  paddingBottom: vars.spacing[16],
});

export const sectionTitle = style({
  marginTop: 0,
  marginBottom: vars.spacing[16],
  color: vars.color.black,

  fontSize: vars.typography.fontSize.head03,
  fontWeight: vars.typography.fontWeight.semibold,
  lineHeight: vars.typography.lineHeight[160],
  letterSpacing: vars.typography.letterSpacing.default,
});

export const productGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  columnGap: vars.spacing[12],
  rowGap: vars.spacing[24],
});

export const fabLink = style({
  position: 'fixed',
  right: vars.spacing[20],
  bottom: `calc(64px + ${vars.spacing[20]} + env(safe-area-inset-bottom))`,
  zIndex: 20,
  textDecoration: 'none',
});