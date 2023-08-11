import type { PaletteMode } from '@mui/material';
import { colors } from './colors';

export const darkPalette = {
  mode: 'dark' as PaletteMode,

  primary: {
    main: colors.seashell,
    dark: colors.middleGrey,
  },
  secondary: {
    main: colors.royalAirForceBlue,
  },
  error: {
    main: colors.red,
  },
  warning: {
    main: colors.darkGreen,
  },
  info: {
    main: colors.royalAirForceBlue,
  },
  success: {
    main: colors.resolutionBlue,
  },
  background: {
    default: colors.black,
    paper: colors.blackestBlack,
  },
  text: {
    primary: colors.white,
    secondary: colors.middleGrey2,
  },
  action: {
    hover: colors.veryDarkGrey,
  },
  divider: colors.middleGrey,
};
