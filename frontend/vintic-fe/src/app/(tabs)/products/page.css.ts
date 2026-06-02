import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const page = style({
  minHeight: '100%',
  background: vars.color.white,
});

export const content = style({
  paddingTop: vars.spacing[8],
  paddingRight: vars.spacing[20],
  paddingLeft: vars.spacing[20],
  paddingBottom: vars.spacing[24],
});

export const sortRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[4],
  marginBottom: vars.spacing[12],
});

export const activeSortButton = style({
  padding: 0,
  border: 'none',
  background: 'transparent',
  color: vars.color.black,
  cursor: 'pointer',

  fontSize: vars.typography.fontSize.body05,
  fontWeight: vars.typography.fontWeight.semibold,
  lineHeight: vars.typography.lineHeight[160],
  letterSpacing: vars.typography.letterSpacing.default,
});

export const sortButton = style({
  padding: 0,
  border: 'none',
  background: 'transparent',
  color: vars.color.gray5,
  cursor: 'pointer',

  fontSize: vars.typography.fontSize.body05,
  fontWeight: vars.typography.fontWeight.regular,
  lineHeight: vars.typography.lineHeight[160],
  letterSpacing: vars.typography.letterSpacing.default,
});

export const productGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  columnGap: vars.spacing[12],
  rowGap: vars.spacing[24],
});

export const emptyState = style({
  minHeight: '360px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});

export const emptyTitle = style({
  margin: 0,
  color: vars.color.black,

  fontSize: vars.typography.fontSize.body03,
  fontWeight: vars.typography.fontWeight.semibold,
  lineHeight: vars.typography.lineHeight[160],
  letterSpacing: vars.typography.letterSpacing.default,
});

export const emptyDescription = style({
  marginTop: vars.spacing[4],
  marginBottom: 0,
  color: vars.color.gray5,

  fontSize: vars.typography.fontSize.body05,
  fontWeight: vars.typography.fontWeight.regular,
  lineHeight: vars.typography.lineHeight[160],
  letterSpacing: vars.typography.letterSpacing.default,
});