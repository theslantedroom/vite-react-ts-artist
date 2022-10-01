import React, { useCallback, useState, useMemo } from 'react';

import { Stack, Box, Divider, Chip, Link } from '@mui/material';

export const appRoutes = [{ path: '/', element: null, navText: 'Home' }];
console.log('appRoutes', appRoutes);
function Navbar() {
  return (
    <Box
      sx={{
        direction: 'row',
        alignItems: 'center',
        spacing: 1,
        p: 1,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      {appRoutes.map((route, index) => {
        return <Chip label={route.navText} />;
      })}
    </Box>
  );
}

export default Navbar;
