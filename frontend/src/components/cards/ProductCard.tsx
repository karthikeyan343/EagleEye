import React from 'react';
import { Box, Typography } from '@mui/material';

import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: '16px',
        overflow: 'hidden',
        backgroundColor: product.bgColor || '#f0f0f0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      {/* ================= PRODUCT IMAGE ================= */}
      {product.image && (
        <Box
          component="img"
          src={product.image}
          alt={product.title}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
          }}
        />
      )}

      {/* ================= GRADIENT OVERLAY ================= */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '60%',
          background:
            'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
          zIndex: 2,
        }}
      />

      {/* ================= PRODUCT TEXT ================= */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 3,
          p: {
            xs: '18px',
            sm: '20px',
            md: '24px',
          },
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}
      >
        <Typography
          component="h3"
          sx={{
            margin: 0,
            fontFamily:
              "'Trueno', 'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: {
              xs: '20px',
              sm: '22px',
              md: '24px',
            },
            lineHeight: 1,
            letterSpacing: '-0.04em',
            color: '#FFFFFF',
          }}
        >
          {product.title}
        </Typography>

        <Typography
          component="p"
          sx={{
            margin: 0,
            marginTop: '4px',
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 500,
            fontSize: {
              xs: '11px',
              sm: '12px',
            },
            lineHeight: 1.3,
            color: 'rgba(255, 255, 255, 0.85)',
          }}
        >
          {product.subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCard;
