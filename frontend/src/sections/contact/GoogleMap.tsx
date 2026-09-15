import React from 'react';
import { Box } from '@mui/material';

export const GoogleMap: React.FC = () => {
  return (
    <Box
      component="div"
      sx={{
        position: 'relative',
        width: '100%',
        height: {
          xs: '300px',
          sm: '340px',
          md: '400px',
          lg: '460px',
          xl: '500px',
        },
        minWidth: 0,
        overflow: 'hidden',
        borderRadius: {
          xs: '12px',
          sm: '14px',
          md: '16px',
        },
        backgroundColor: '#F8FAFC',
        border: '1px solid #E2E8F0',
        boxShadow: {
          xs: '0 6px 20px rgba(0, 0, 0, 0.05)',
          md: '0 10px 30px rgba(0, 0, 0, 0.06)',
        },
        isolation: 'isolate',

        '& iframe': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          minWidth: 0,
          minHeight: 0,
          border: 0,
          display: 'block',
        },

        '@media (prefers-reduced-motion: reduce)': {
          scrollBehavior: 'auto',
        },
      }}
    >
      <iframe
        title="Eagle Eye Solution Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9737130283253!2d80.2078!3d12.9732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzIzLjUiTiA4MMKwMTInMjzgMSJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </Box>
  );
};

export default GoogleMap;
