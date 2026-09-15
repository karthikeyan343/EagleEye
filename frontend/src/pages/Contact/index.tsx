import React from 'react';
import { Box } from '@mui/material';
import { Header } from '../../components/navigation/Header';
import { ContactSection } from '../../sections/contact/ContactSection';
import { Footer } from '../../sections/contact/Footer';

export const ContactPage: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100dvh', backgroundColor: '#FFFFFF' }}>
      <Header onOpenQuote={() => {}} />
      <Box sx={{ pt: 12 }}>
        <ContactSection />
      </Box>
      <Footer />
    </Box>
  );
};

export default ContactPage;
