import React from 'react';

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
// @mui material components
import { Box, Grid, Paper, useTheme, useMediaQuery } from '@mui/material';
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
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));

  console.log('isLg', isLg);
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
      <Box id="1" width="100%" height="100%">
        <Grid container sx={{ overflow: 'auto' }}>
          <Grid
            id="leftPanelOnWideScreen"
            item
            xs={12}
            lg={6}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            {isLg ? (
              <Box sx={{ width: '100%', pl: 3 }}>
                <LiteYouTubeEmbed id="u31qwQUeGuM" title="Demo" />
              </Box>
            ) : null}
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
