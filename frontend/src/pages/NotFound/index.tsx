import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export const NotFoundPage: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8FAFC',
        textAlign: 'center',
        px: 3,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Trueno', 'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: { xs: '80px', sm: '120px' },
            color: '#0052FF',
            lineHeight: 1,
            mb: 2,
          }}
        >
          404
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Trueno', 'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            color: '#0F172A',
            mb: 2,
          }}
        >
          Page Not Found
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Manrope', sans-serif",
            color: '#64748B',
            mb: 4,
          }}
        >
          The page you are looking for does not exist or has been moved.
        </Typography>
        <Button
          variant="contained"
          href="/"
          startIcon={<HomeIcon />}
          sx={{
            backgroundColor: '#0052FF',
            color: '#FFFFFF',
            borderRadius: '12px',
            px: 4,
            py: 1.5,
            fontWeight: 600,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#0042D0',
            },
          }}
        >
          Return Home
        </Button>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
