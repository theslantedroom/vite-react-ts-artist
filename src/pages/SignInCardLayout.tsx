import React, { useMemo } from 'react';

// @mui material components
import { Box, Typography, Grid, IconButton, Paper, useTheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';

import { mainLight, mainDark } from '../theme/palettes/gradients';
// Contexts
import { usePaletteModeContext } from '../theme/MuiThemeProvider';
export interface Props {
  header?: any;
  title?: string;
  description?: string;
  illustration?: string;
  children?: any;
}
/**
 * desktop is vertical split, mobile single column
 */
export const SignInCardLayout: React.FC<Props> = ({
  header,
  title,
  description,
  illustration,
  children,
}) => {
  const { togglePaletteMode } = usePaletteModeContext();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const arrowFunction = () => {
    console.log('xxxxx');
    togglePaletteMode();
  };

  const DarkModeBtn = useMemo(() => {
    return (
      <IconButton onClick={arrowFunction}>
        {isDark ? <NightlightRoundIcon /> : <LightModeIcon />}
      </IconButton>
    );
  }, [isDark]);

  return (
    <Paper>
      <Box width="100%" height="100%">
        <Box
          sx={{
            m: 5,
            position: 'absolute',
            right: 5,
          }}
        >
          {DarkModeBtn}
        </Box>
        <Grid container>
          <Grid
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
              }}
            />
          </Grid>
          <Grid item xs={11} sm={8} md={5} lg={4} xl={3} sx={{ mx: 'auto' }}>
            <Box display="flex" flexDirection="column" justifyContent="center" height="100vh">
              <Box p={3} textAlign="center">
                {!header ? (
                  <>
                    <Box mb={1} textAlign="center">
                      <Typography variant="h4" fontWeight="bold">
                        {title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text">
                      {description}
                    </Typography>
                  </>
                ) : (
                  header
                )}
              </Box>
              <Box p={3}>{children}</Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};
