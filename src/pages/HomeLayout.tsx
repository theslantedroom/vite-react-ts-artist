import React, { useMemo } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
// @mui material components
import { Box, Typography, Grid, IconButton, Paper, useTheme, useMediaQuery } from '@mui/material';
// Contexts
import { usePaletteModeContext } from '../theme/MuiThemeProvider';
export interface Props {
  illustration?: string;
  children?: any;
}
/**
 * desktop is vertical split, mobile single column
 */
export const HomeLayout: React.FC<Props> = ({ illustration, children }) => {
  const theme = useTheme();
  const { togglePaletteMode } = usePaletteModeContext();
  const splitScreen = useMediaQuery('(min-width:1280px)');
  const isWide = useMediaQuery('(min-width:450px)');
  const isDark = theme.palette.mode === 'dark';

  const DarkModeBtn = useMemo(() => {
    if (!isWide) return null;
    return (
      <IconButton onClick={togglePaletteMode}>
        {isDark ? <NightlightRoundIcon /> : <LightModeIcon />}
      </IconButton>
    );
  }, [isDark, isWide]);
  const descSX = {
    textAlign: 'center',
  };

  return (
    <Paper
      sx={{
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          m: 1,
          position: 'absolute',
          right: 1,
        }}
      >
        {DarkModeBtn}
      </Box>
      <Box id="1" width="100%" height="100%">
        <Grid container sx={{ overflow: 'auto' }}>
          <Grid
            id="imgPanel"
            item
            xs={12}
            lg={6}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <Box
              display={{ xs: 'none', lg: 'flex' }}
              width="calc(100% - 2rem)"
              height="calc(100vh - 2rem)"
              sx={{
                backgroundImage: `url(${illustration})`,
                borderRadius: theme.shape.borderRadius,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </Grid>
          <Grid
            id="rMainPanel"
            item
            xs={11}
            sm={10}
            md={9}
            lg={4}
            xl={3}
            sx={!splitScreen ? { mx: 'auto' } : {}}
          >
            <Box
              id="1"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="100vh"
            >
              <Box
                id="2"
                sx={
                  splitScreen
                    ? { overflow: 'auto', width: '50vw', maxHeight: '100vh' }
                    : { maxHeight: '100vh' }
                }
                p={3}
              >
                {children}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};
