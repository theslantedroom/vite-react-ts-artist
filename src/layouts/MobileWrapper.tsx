import React from 'react';
import { Box } from '@mui/material';

//style
export const MobileWrapper = ({ children }: any) => {
  return (
    <Box
      id="mobile-wrapper"
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'auto',
      }}
    >
      {children}
    </Box>
  );
};
