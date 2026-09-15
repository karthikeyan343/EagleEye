import React from 'react';
import { Box } from '@mui/material';
import { Header } from '../../components/navigation/Header';
import { ServicesCarousel } from '../../sections/home/ServicesCarousel';
import { Footer } from '../../sections/contact/Footer';

export const SolutionsPage: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100dvh', backgroundColor: '#FFFFFF' }}>
      <Header onOpenQuote={() => {}} />
      <Box sx={{ pt: 12 }}>
        <ServicesCarousel />
      </Box>
      <Footer />
    </Box>
  );
};

export default SolutionsPage;
