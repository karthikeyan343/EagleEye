import React from 'react';
import { Box } from '@mui/material';
import { Header } from '../../components/navigation/Header';
import { ProductsSection } from '../../sections/products/ProductsSection';
import { Footer } from '../../sections/contact/Footer';

export const ProductsPage: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100dvh', backgroundColor: '#FFFFFF' }}>
      <Header onOpenQuote={() => {}} />
      <Box sx={{ pt: 12 }}>
        <ProductsSection />
      </Box>
      <Footer />
    </Box>
  );
};

export default ProductsPage;
