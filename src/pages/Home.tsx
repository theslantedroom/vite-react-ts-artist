import React, { useState, useEffect } from 'react';

// @mui material components
import { useMediaQuery, Stack, Box, Typography, useTheme } from '@mui/material';

// Contexts
import { usePaletteModeContext } from '../theme/MuiThemeProvider';
// data
import { globalSiteData } from '../hardData/globalSiteData';
import { HomeLayout } from './HomeLayout';
export interface Props {}
export const Home: React.FC<Props> = ({}) => {
  const descSX = {
    textAlign: 'center',
  };
  return (
    <HomeLayout illustration={globalSiteData.mainImg}>
      <Box mb={4} textAlign="center">
        <Typography variant="h4" fontWeight="bold">
          {globalSiteData.fullName}
        </Typography>
      </Box>
      <Box>
        <Stack direction="column" justifyContent="flex-start" alignItems="stretch" spacing={2}>
          <Typography sx={descSX}>{globalSiteData.description['main']}</Typography>
          <Typography sx={descSX}>{globalSiteData.description['fact']}</Typography>
          <Typography sx={descSX}>{globalSiteData.description['style']}</Typography>
        </Stack>
      </Box>
    </HomeLayout>
  );
};
