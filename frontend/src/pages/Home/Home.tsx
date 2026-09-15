import React, { useState } from 'react';
import { Box } from '@mui/material';

import { Header } from '../../components/navigation/Header';
import { Hero } from '../../sections/home/Hero';
import { ProductsSection } from '../../sections/products/ProductsSection';
import { StatsSection } from '../../sections/home/StatsSection';
import { ServicesCarousel } from '../../sections/home/ServicesCarousel';
import { FeaturedWorks } from '../../sections/about/FeaturedWorks';
import { WhoWeAre } from '../../sections/about/WhoWeAre';
import { ContactSection } from '../../sections/contact/ContactSection';
import { Footer } from '../../sections/contact/Footer';

import { QuoteModal } from '../../components/ui/QuoteModal';
import { ProductModal } from '../../components/ui/ProductModal';

import { Product } from '../../types/product';

export const Home: React.FC = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  const [quoteDefaultProduct, setQuoteDefaultProduct] =
    useState('');

  const handleOpenQuote = (defaultProd = '') => {
    setQuoteDefaultProduct(defaultProd);
    setQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteOpen(false);
  };

  const handleCloseProductModal = () => {
    setSelectedProduct(null);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100dvh',
        backgroundColor: '#FFFFFF',
        overflowX: 'hidden',
      }}
    >
      {/* FIRST VIEWPORT */}
      <Box
        sx={{
          width: '100%',
          height: '100dvh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box',
          backgroundColor: '#FFFFFF',
          overflow: 'hidden',
        }}
      >
        {/* OUTER FIGMA FRAME */}
        <Box
          sx={{
            position: 'relative',
            width: {
              xs: '94vw',
              sm: '92vw',
              md: '91vw',
              lg: '96vw',
            },
            maxWidth: '1552px',
            height: {
              xs: 'calc(100dvh - 24px)',
              sm: 'calc(100dvh - 32px)',
              md: 'min(805px, calc(100dvh - 40px))',
              lg: 'min(805px, calc(100dvh - 48px))',
            },
            maxHeight: {
              xs: 'calc(100dvh - 24px)',
              sm: 'calc(100dvh - 32px)',
              md: '805px',
            },
            boxSizing: 'border-box',
            borderRadius: {
              xs: '12px',
              sm: '14px',
              md: '16px',
            },
            backgroundColor: '#0052FF',
            overflow: 'hidden',
          }}
        >
          {/* FRAME 52 */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              boxSizing: 'border-box',
              borderRadius: {
                xs: '10px',
                sm: '12px',
                md: '16px',
              },
              overflow: 'hidden',
              background:
                'linear-gradient(180deg, #0245CA 0%, #01308D 100%)',
            }}
          >
            {/* HEADER */}
            <Header
              onOpenQuote={() => handleOpenQuote()}
            />

            {/* HERO */}
            <Hero
              onExploreProducts={() =>
                scrollToSection('products')
              }
              onExploreServices={() =>
                scrollToSection('services')
              }
            />
          </Box>
        </Box>
      </Box>

      {/* REST OF HOME PAGE */}
      <ProductsSection />

      <StatsSection />

      <ServicesCarousel />

      <FeaturedWorks />

      <WhoWeAre />

      <ContactSection />

      <Footer />

      {/* MODALS */}
      <QuoteModal
        open={quoteOpen}
        onClose={handleCloseQuote}
        defaultProduct={quoteDefaultProduct}
      />

      <ProductModal
        product={selectedProduct}
        open={Boolean(selectedProduct)}
        onClose={handleCloseProductModal}
        onGetQuote={(productTitle) =>
          handleOpenQuote(productTitle)
        }
      />
    </Box>
  );
};

export default Home;
