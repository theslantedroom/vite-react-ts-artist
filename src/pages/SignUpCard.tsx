import React, { useState, useEffect } from 'react';

// @mui material components
import { Button, Alert, TextField, Box, Typography, useTheme } from '@mui/material';
import Switch from '@mui/material/Switch';

import { SignInCardLayout } from './SignInCardLayout';

export interface Props {}
export const SignUpCard: React.FC<Props> = ({}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (localStorage.getItem('checkbox') === 'true') {
      setCheckbox(true);
    }
  }, [checkbox]);

  return (
    <SignInCardLayout
      title="Sign Up"
      description="Enter your email and password to sign up"
      illustration={
        'https://images.unsplash.com/photo-1660988346190-03f48f9579b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'
      }
    >
      <Box component="form" role="form">
        <Box mb={2}>
          <TextField
            type="email"
            label="email"
            fullWidth
            name="email"
            autoComplete="email"
            autoFocus={false}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box mb={2}>
          <TextField
            type="password"
            label="password"
            fullWidth
            autoComplete="current-password"
            value={password}
            onChange={() => null}
            inputProps={{ maxLength: 50 }}
          />
        </Box>

        <Box mt={4} mb={1}>
          {/* BUTTON */}
          <Button size="large" variant="contained" fullWidth onClick={() => null}>
            sign up
          </Button>
          {error && <Alert severity="error">{error}</Alert>}
        </Box>
        <Box mt={3} textAlign="center">
          <Typography variant="caption">
            Have an account?{' '}
            <Typography sx={{ color: isDark ? 'yellow' : 'purple' }} variant="caption">
              Sign In
            </Typography>
          </Typography>
        </Box>
      </Box>
    </SignInCardLayout>
  );
};
