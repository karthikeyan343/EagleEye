import React from 'react';
import { Box, Container, Typography } from '@mui/material';

import anprImg from '../../assets/images/products/Camera.png';
import breathImg from '../../assets/images/products/breathe.png';
import cctvImg from '../../assets/images/products/anpr.png';

interface FeaturedCardData {
  image: string;
  imageAlt: string;
  title: string;
  description?: string;
  badgeText?: string;
  background?: string;
  width: {
    xs: string;
    sm?: string;
    md: string;
    lg?: string;
  };
  height?: {
    xs: string;
    sm?: string;
    md: string;
    lg?: string;
  };
  contentPosition?: 'top' | 'bottom';
}

interface FeaturedCardProps extends FeaturedCardData {}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  image,
  imageAlt,
  title,
  description,
  badgeText = 'Ready to Harvest | 5–7 day grow cycle',
  background = '#FFFFFF',
  width,
  height = {
    xs: '204px',
    sm: '260px',
    md: '340px',
    lg: '390px',
  },
  contentPosition = 'bottom',
}) => {
  return (
    <Box
      className="featured-card"
      sx={{
        position: 'relative',
        width,
        height,
        minWidth: 0,
        maxWidth: '100%',
        flexShrink: 0,
        overflow: 'hidden',
        borderRadius: {
          xs: '12px',
          sm: '14px',
          md: '16px',
        },
        background,
        boxSizing: 'border-box',
        isolation: 'isolate',
        transition:
          'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
        '&:hover': {
          transform: 'translateY(-6px)',
        },
        '@media (prefers-reduced-motion: reduce)': {
          transition: 'none',
          '&:hover': {
            transform: 'none',
          },
        },
        '&:hover .featured-card-image': {
          transform: 'scale(1.045)',
        },
        '&:hover .featured-card-gradient': {
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.02) 30%, rgba(0,0,0,0.82) 100%)',
        },
        '&:hover .featured-card-content': {
          transform: 'translateY(-5px)',
        },
      }}
    >
      {/* IMAGE */}
      <Box
        className="featured-card-image"
        component="img"
        src={image}
        alt={imageAlt}
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          display: 'block',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 1,
          transform: 'scale(1)',
          transition:
            'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
          willChange: 'transform',
          '@media (prefers-reduced-motion: reduce)': {
            transition: 'none',
          },
        }}
      />

      {/* GRADIENT */}
      <Box
        className="featured-card-gradient"
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.75) 100%)',
          zIndex: 2,
          pointerEvents: 'none',
          transition: 'background 0.5s ease',
          '@media (prefers-reduced-motion: reduce)': {
            transition: 'none',
          },
        }}
      />

      {/* CONTENT */}
      <Box
        className="featured-card-content"
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          zIndex: 3,
          ...(contentPosition === 'top'
            ? {
                top: 0,
                bottom: 'auto',
              }
            : {
                top: 'auto',
                bottom: 0,
              }),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: {
            xs: '6px',
            sm: '8px',
            md: '9px',
          },
          px: {
            xs: '10px',
            sm: '14px',
            md: '18px',
            lg: '20px',
          },
          pb: {
            xs: '10px',
            sm: '14px',
            md: '18px',
            lg: '20px',
          },
          boxSizing: 'border-box',
          transition:
            'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
          '@media (prefers-reduced-motion: reduce)': {
            transition: 'none',
          },
        }}
      >
        {/* TITLE */}
        <Typography
          component="h3"
          sx={{
            margin: 0,
            padding: 0,
            width: '100%',
            maxWidth: '100%',
            fontFamily: "'Trueno', 'Inter', sans-serif",
            fontWeight: 700,
            fontSize: {
              xs: '15px',
              sm: '18px',
              md: '21px',
              lg: '23px',
            },
            lineHeight: {
              xs: '120%',
              sm: '115%',
              md: '110%',
              lg: '105%',
            },
            letterSpacing: '-0.025em',
            color: '#FFFFFF',
            whiteSpace: 'normal',
            overflowWrap: 'break-word',
            wordBreak: 'normal',
            transition: 'letter-spacing 0.4s ease',
            '.featured-card:hover &': {
              letterSpacing: '-0.025em',
            },
            '@media (prefers-reduced-motion: reduce)': {
              transition: 'none',
            },
          }}
        >
          {title}
        </Typography>

        {/* DESCRIPTION */}
        {description && (
          <Typography
            sx={{
              margin: 0,
              padding: 0,
              width: '100%',
              maxWidth: {
                xs: '100%',
                sm: '90%',
                md: '482px',
              },
              fontFamily: "'Sora', 'Inter', sans-serif",
              fontWeight: 400,
              fontSize: {
                xs: '10px',
                sm: '12px',
                md: '14px',
              },
              lineHeight: '140%',
              color: 'rgba(255,255,255,0.9)',
              overflowWrap: 'break-word',
            }}
          >
            {description}
          </Typography>
        )}

        {/* BADGE */}
        {badgeText && (
          <Box
            sx={{
              minHeight: {
                xs: '22px',
                sm: '24px',
                md: '26px',
              },
              width: 'fit-content',
              maxWidth: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: {
                xs: '8px',
                sm: '9px',
                md: '11px',
              },
              py: {
                xs: '4px',
                sm: '5px',
                md: '6px',
              },
              borderRadius: '46px',
              border:
                '1px solid rgba(255, 255, 255, 0.3)',
              background:
                'rgba(255, 255, 255, 0.04)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxSizing: 'border-box',
              transition:
                'background 0.4s ease, border-color 0.4s ease, transform 0.4s ease',
              '.featured-card:hover &': {
                background:
                  'rgba(255, 255, 255, 0.10)',
                borderColor:
                  'rgba(255, 255, 255, 0.5)',
                transform: 'translateY(-2px)',
              },
              '@media (prefers-reduced-motion: reduce)': {
                transition: 'none',
              },
            }}
          >
            <Typography
              sx={{
                margin: 0,
                padding: 0,
                fontFamily: "'Inter', sans-serif",
                fontSize: {
                  xs: '8px',
                  sm: '9px',
                  md: '10px',
                  lg: '11px',
                },
                fontWeight: 500,
                lineHeight: '12px',
                color: '#FFFFFF',
                whiteSpace: 'nowrap',
                maxWidth: '100%',
              }}
            >
              {badgeText}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export const FeaturedWorks: React.FC = () => {
  const description =
    "Every variety follows its own growing rhythm. Reserve your batch and we'll harvest it when it's ready not when it's convenient.";

  const cards: FeaturedCardData[] = [
    {
      image: anprImg,
      imageAlt: 'AI ANPR Camera',
      title: 'AI ANPR Camera',
      badgeText:
        'Ready to Harvest | 5–7 day grow cycle',
      background: '#F97316',
      width: {
        xs: '100%',
        sm: '100%',
        md: 'calc(62% - 8px)',
        lg: 'calc(62% - 8px)',
      },
      height: {
        xs: '204px',
        sm: '260px',
        md: '340px',
        lg: '390px',
      },
      contentPosition: 'bottom',
    },
    {
      image: breathImg,
      imageAlt: 'AI ANPR Combo',
      title: 'AI ANPR Combo',
      badgeText:
        'Ready to Harvest | 5–7 day grow cycle',
      background: '#2563EB',
      width: {
        xs: '100%',
        sm: '100%',
        md: 'calc(38% - 16px)',
        lg: 'calc(38% - 16px)',
      },
      height: {
        xs: '204px',
        sm: '260px',
        md: '340px',
        lg: '390px',
      },
      contentPosition: 'bottom',
    },
    {
      image: cctvImg,
      imageAlt: 'AI CCTV Camera',
      title: 'AI CCTV Camera',
      badgeText:
        'Ready to Harvest | 5–7 day grow cycle',
      background: '#DC2626',
      width: {
        xs: '100%',
        sm: '100%',
        md: '100%',
        lg: '100%',
      },
      height: {
        xs: '204px',
        sm: '260px',
        md: '340px',
        lg: '390px',
      },
      contentPosition: 'bottom',
    },
  ];

  return (
    <Box
      id="featured-works"
      component="section"
      sx={{
        width: '100%',
        maxWidth: '100%',
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        boxSizing: 'border-box',
        py: {
          xs: '28px',
          sm: '36px',
          md: '44px',
          lg: '52px',
        },
        minHeight: 'auto',
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: {
            xs: 'calc(100% - 30px)',
            sm: 'calc(100% - 40px)',
            md: 'calc(100% - 64px)',
            lg: 'calc(100% - 96px)',
          },
          maxWidth: '1552px',
          mx: 'auto',
          px: {
            xs: 0,
            sm: 0,
            md: 0,
            lg: 0,
          },
          boxSizing: 'border-box',
          backgroundColor: '#FFFFFF',
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            width: '100%',
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            mb: {
              xs: '18px',
              sm: '22px',
              md: '26px',
              lg: '30px',
            },
          }}
        >
          {/* HEADING */}
          <Typography
            component="h1"
            sx={{
              margin: 0,
              padding: 0,
              width: '100%',
              fontFamily:
                "'Trueno', 'Inter', sans-serif",
              fontWeight: 600,
              fontSize: {
                xs: '25px',
                sm: '29px',
                md: '34px',
                lg: '36px',
              },
              lineHeight: {
                xs: '115%',
                sm: '110%',
                md: '105%',
                lg: '100%',
              },
              letterSpacing: '-0.02em',
              color: '#111827',
              overflowWrap: 'break-word',
            }}
          >
            Our Featured{' '}
            <Box
              component="span"
              sx={{
                color: '#1BA8EF',
              }}
            >
              Works
            </Box>
          </Typography>

          {/* SUBTITLE */}
          <Typography
            sx={{
              width: {
                xs: '100%',
                sm: '100%',
                md: '536px',
                lg: '536px',
              },
              maxWidth: '100%',
              margin: 0,
              marginTop: {
                xs: '10px',
                sm: '12px',
                md: '14px',
              },
              fontFamily:
                "'Trueno', 'Inter', sans-serif",
              fontWeight: 400,
              fontSize: {
                xs: '12px',
                sm: '13px',
                md: '15px',
                lg: '16px',
              },
              lineHeight: {
                xs: '145%',
                sm: '140%',
                md: '135%',
                lg: '125%',
              },
              letterSpacing: '0%',
              color: '#6B7280',
              overflowWrap: 'break-word',
            }}
          >
            {description}
          </Typography>
        </Box>

        {/* FEATURED CARDS */}
        <Box
          sx={{
            width: '100%',
            maxWidth: '100%',
            display: 'flex',
            flexDirection: {
              xs: 'column',
              sm: 'column',
              md: 'row',
            },
            flexWrap: {
              xs: 'nowrap',
              sm: 'nowrap',
              md: 'wrap',
            },
            gap: {
              xs: '12px',
              sm: '16px',
              md: '16px',
              lg: '20px',
            },
            boxSizing: 'border-box',
            overflow: 'visible',
            alignItems: 'stretch',
          }}
        >
          {cards.map((card, index) => (
            <FeaturedCard
              key={`${card.title}-${index}`}
              {...card}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedWorks;
