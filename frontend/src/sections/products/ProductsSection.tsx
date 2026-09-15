import React, { useState } from 'react';

import {
  Typography,
  Button,
  Box,
} from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import {
  productsData,
  INITIAL_PRODUCTS_COUNT,
} from '../../data/products';

import { ProductCard } from '../../components/cards/ProductCard';

import Camera from '../../assets/images/products/Camera.png';
import Breathe from '../../assets/images/products/breathe.png';
import ANPR from '../../assets/images/products/anpr.png';

export const ProductsSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll
    ? productsData
    : productsData.slice(0, INITIAL_PRODUCTS_COUNT);

  const toggleViewAll = () => {
    setShowAll((prev) => !prev);
  };

  const productImages = [
    ANPR,
    Breathe,
    Camera,
  ];

  return (
    <Box
      id="products"
      component="section"
      sx={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        height: {
          xs: 'auto',
          md: '100dvh',
        },
        minHeight: {
          xs: 'auto',
          md: 0,
        },
        boxSizing: 'border-box',
        px: {
          xs: '18px',
          sm: '22px',
          md: '24px',
        },
        pt: {
          xs: '24px',
          sm: '26px',
          md: '28px',
        },
        pb: {
          xs: '28px',
          sm: '28px',
          md: '24px',
        },
        display: {
          xs: 'block',
          md: 'flex',
        },
        flexDirection: {
          md: 'column',
        },
        overflow: {
          xs: 'visible',
          md: 'hidden',
        },
      }}
    >
      {/* SECTION HEADER */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          justifyContent: 'space-between',
          alignItems: {
            xs: 'flex-start',
            md: 'flex-end',
          },
          gap: {
            xs: '20px',
            md: '32px',
          },
          flexShrink: 0,
        }}
      >
        {/* LEFT CONTENT */}
        <Box
          sx={{
            maxWidth: '620px',
          }}
        >
          <Typography
            component="h2"
            sx={{
              margin: 0,
              fontFamily:
                "'Trueno', 'Plus Jakarta Sans', 'Outfit', 'Montserrat', sans-serif",
              fontWeight: 600,
              letterSpacing: '0%',
              fontSize: {
                xs: '28px',
                sm: '32px',
                md: '36px',
              },
              lineHeight: 1.18,
              color: '#303030',
              '& span': {
                color: '#0052FF',
              },
            }}
          >
            Proactive physical security,
            <br />
            <Box component="span">
              powered by AI.
            </Box>
          </Typography>

          <Typography
            component="p"
            sx={{
              margin: 0,
              marginTop: '12px',
              fontFamily:
                "'Manrope', sans-serif",
              fontSize: {
                xs: '14px',
                md: '16px',
              },
              fontWeight: 400,
              lineHeight: 1.35,
              color: '#737373',
              maxWidth: '520px',
            }}
          >
            Every variety follows its own growing rhythm. Reserve your batch
            and we'll harvest it when it's ready, not when it's convenient.
          </Typography>
        </Box>

        {/* DESKTOP VIEW ALL / SHOW LESS */}
        <Button
          variant="contained"
          onClick={toggleViewAll}
          endIcon={
            showAll ? (
              <KeyboardArrowUpIcon />
            ) : (
              <ArrowForwardIcon />
            )
          }
          sx={{
            display: {
              xs: 'none',
              md: 'inline-flex',
            },
            flexShrink: 0,
            width: {
              md: '150px',
              lg: '155px',
              xl: '160px',
            },
            minWidth: {
              md: '150px',
              lg: '155px',
              xl: '160px',
            },
            height: '49px',
            borderRadius: '12px',
            backgroundColor: '#0052FF',
            color: '#FFFFFF',
            fontFamily:
              "'Manrope', sans-serif",
            fontSize: '15px',
            fontWeight: 600,
            lineHeight: 1,
            textTransform: 'none',
            whiteSpace: 'nowrap',
            wordBreak: 'keep-all',
            flexWrap: 'nowrap',
            boxShadow: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            '& .MuiButton-startIcon, & .MuiButton-endIcon': {
              flexShrink: 0,
            },
            '& .MuiButton-endIcon': {
              marginLeft: '8px',
              marginRight: 0,
              flexShrink: 0,
              '& svg': {
                fontSize: '20px',
              },
            },
            '&:hover': {
              backgroundColor: '#0052FF',
              boxShadow: 'none',
            },
          }}
        >
          {showAll ? 'Show Less' : 'View All'}
        </Button>
      </Box>

      {/* PRODUCTS GRID */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, minmax(0, 1fr))',
            md: 'repeat(3, minmax(0, 1fr))',
          },
          gap: '24px',
          width: '100%',
          marginTop: {
            xs: '28px',
            sm: '30px',
            md: '32px',
          },
          flex: {
            md: 1,
          },
          minHeight: {
            md: 0,
          },
        }}
      >
        {visibleProducts.map((product, index) => {
          const productWithImage =
            index < productImages.length
              ? {
                  ...product,
                  image: productImages[index],
                }
              : product;

          return (
            <Box
              key={product.id}
              sx={{
                width: '100%',
                height: {
                  xs: '400px',
                  sm: '430px',
                  md: '100%',
                },
                minHeight: 0,
                minWidth: 0,
                borderRadius: '16px',
                overflow: 'hidden',
                animation:
                  index >= INITIAL_PRODUCTS_COUNT
                    ? 'fadeInUp 0.45s ease forwards'
                    : 'none',
                '@keyframes fadeInUp': {
                  from: {
                    opacity: 0,
                    transform:
                      'translateY(18px)',
                  },
                  to: {
                    opacity: 1,
                    transform:
                      'translateY(0)',
                  },
                },
              }}
            >
              <ProductCard
                product={productWithImage}
              />
            </Box>
          );
        })}
      </Box>

      {/* MOBILE VIEW ALL / SHOW LESS */}
      <Box
        sx={{
          display: {
            xs: 'flex',
            md: 'none',
          },
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '24px',
          marginBottom: '4px',
        }}
      >
        <Button
          variant="contained"
          onClick={toggleViewAll}
          endIcon={
            showAll ? (
              <KeyboardArrowUpIcon />
            ) : (
              <ArrowForwardIcon />
            )
          }
          sx={{
            width: '140px',
            minWidth: '140px',
            height: '46px',
            borderRadius: '12px',
            backgroundColor: '#0052FF',
            color: '#FFFFFF',
            fontFamily:
              "'Manrope', sans-serif",
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: 1,
            textTransform: 'none',
            whiteSpace: 'nowrap',
            wordBreak: 'keep-all',
            flexWrap: 'nowrap',
            boxShadow: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& .MuiButton-endIcon': {
              marginLeft: '8px',
              marginRight: 0,
              flexShrink: 0,
              '& svg': {
                fontSize: '19px',
              },
            },
            '&:hover': {
              backgroundColor: '#0052FF',
              boxShadow: 'none',
            },
          }}
        >
          {showAll ? 'Show Less' : 'View All'}
        </Button>
      </Box>
    </Box>
  );
};

export default ProductsSection;
