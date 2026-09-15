import React from 'react';
import { Box } from '@mui/material';
import { Header } from '../../components/navigation/Header';
import { WhoWeAre } from '../../sections/about/WhoWeAre';
import { FeaturedWorks } from '../../sections/about/FeaturedWorks';
import { Footer } from '../../sections/contact/Footer';

export const AboutPage: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100dvh', backgroundColor: '#FFFFFF' }}>
      <Header onOpenQuote={() => {}} />
      <Box sx={{ pt: 12 }}>
        <WhoWeAre />
        <FeaturedWorks />
      </Box>
      <Footer />
    </Box>
  );
};

export default AboutPage;
