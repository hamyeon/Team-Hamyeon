import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const header = style({
  position: 'sticky',
  top: 0,
  zIndex: 20,
  
  width: '100%',
  paddingTop: vars.spacing[12],
  paddingRight: vars.spacing[20],
  paddingLeft: vars.spacing[20],
  paddingBottom: vars.spacing[12],
  background: vars.color.white,
});

export const searchForm = style({
  position: 'relative',
  width: '100%',
});

export const searchInput = style({
  width: '100%',
  height: '44px',
  paddingTop: 0,
  paddingRight: vars.spacing[44],
  paddingBottom: 0,
  paddingLeft: vars.spacing[12],

  border: `1px solid ${vars.color.gray2}`,
  borderRadius: vars.radius[4],
  background: vars.color.white,
  outline: 'none',

  color: vars.color.black,

  fontSize: vars.typography.fontSize.body02,
  fontWeight: vars.typography.fontWeight.regular,
  lineHeight: vars.typography.lineHeight[160],
  letterSpacing: vars.typography.letterSpacing.default,

  selectors: {
    '&::placeholder': {
      color: vars.color.gray5,
    },

    '&:focus': {
      borderColor: vars.color.black,
    },

    '&::-webkit-search-cancel-button': {
      appearance: 'none',
    },
  },
});

export const searchButton = style({
  position: 'absolute',
  top: '50%',
  right: vars.spacing[12],
  transform: 'translateY(-50%)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '24px',
  height: '24px',
  padding: 0,

  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
});

export const searchIcon = style({
  display: 'block',
  width: '24px',
  height: '24px',
  flexShrink: 0,
});