import type { PaletteMode } from '@mui/material';
import { colors } from './colors';

export const lightPalette = {
  mode: 'light' as PaletteMode,

  primary: {
    main: colors.darkBlue,
    dark: colors.resolutionBlue,
    light: colors.royalAirForceBlue,
    contrastText: colors.azureBlue,
  },
  secondary: {
    main: colors.darkGreen,
  },
  error: {
    main: colors.red,
  },
  success: {
    main: colors.darkGreen,
  },
  background: {
    default: colors.white,
    paper: colors.seashell,
  },
  text: {
    primary: colors.darkestBlue,
    secondary: colors.darkBlue,
  },
  action: {
    hover: colors.veryLightGrey,
  },
  divider: colors.middleGrey,
};
