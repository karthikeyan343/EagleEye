import { useEffect, useState } from 'react';
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import heroCameraImg from '../../assets/images/common/HeroCamera.png';

interface HeroProps {
  onExploreProducts: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onExploreServices,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [, setIsResolving] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotating(true);

      setTimeout(() => {
        setIsRotating(false);
        setIsResolving(true);

        setTimeout(() => {
          setActiveIndex((prev) => (prev + 1) % 3);
          setIsResolving(false);
        }, 600);
      }, 900);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        boxSizing: 'border-box',
        background:
          'linear-gradient(180deg, #0245CA 0%, #01308D 100%)',
      }}
    >
      {/* =====================================================
          CAMERA
      ===================================================== */}
      <Box
        component="img"
        src={heroCameraImg}
        alt="EagleEye AI Smart Camera"
        sx={{
          position: 'absolute',
          zIndex: 2,
          display: 'block',
          width: 'auto',
          height: {
            xs: '32%',
            sm: '36%',
            md: '44%',
            lg: '52%',
          },
          maxHeight: '466px',
          left: {
            xs: '50%',
            sm: '54%',
            md: '61%',
            lg: '64%',
          },
          top: {
            xs: '14%',
            sm: '16%',
            md: '17%',
          },
          transform: 'translateX(-50%)',
          objectFit: 'contain',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />

      {/* =====================================================
          SLIDER INDICATORS
      ===================================================== */}
      <Box
        sx={{
          position: 'absolute',
          zIndex: 5,
          right: {
            xs: '10px',
            sm: '12px',
            md: '16px',
            lg: '20px',
            xl: '24px',
          },
          top: {
            xs: '48%',
            sm: '47%',
            md: '45%',
            lg: '44%',
            xl: '43%',
          },
          transform: 'translateY(-50%)',
          display: {
            xs: 'none',
            sm: 'flex',
          },
          flexDirection: 'column',
          alignItems: 'center',
          gap: {
            sm: '7px',
            md: '8px',
            lg: '9px',
            xl: '10px',
          },
        }}
      >
        {[0, 1, 2].map((index) => {
          const active = activeIndex === index;

          return (
            <Box
              key={index}
              sx={{
                position: 'relative',
                width: {
                  sm: '24px',
                  md: '30px',
                  lg: '38px',
                  xl: '46px',
                },
                height: {
                  sm: '24px',
                  md: '30px',
                  lg: '38px',
                  xl: '46px',
                },
                flexShrink: 0,
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.55)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
                opacity: active ? 1 : 0.7,
                transition: 'opacity 300ms ease',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: '-1px',
                  borderRadius: '50%',
                  border: '2px solid transparent',
                  borderTopColor: '#FFFFFF',
                  borderRightColor: '#FFFFFF',
                  opacity: active ? 1 : 0,
                  animation:
                    active && isRotating
                      ? 'indicatorArcSpin 900ms cubic-bezier(0.4, 0, 0.2, 1)'
                      : 'none',
                  '@keyframes indicatorArcSpin': {
                    from: {
                      transform: 'rotate(0deg)',
                    },
                    to: {
                      transform: 'rotate(360deg)',
                    },
                  },
                },
              }}
            >
              <Box
                sx={{
                  width: {
                    sm: '5px',
                    md: '6px',
                    lg: '7px',
                    xl: '8px',
                  },
                  height: {
                    sm: '5px',
                    md: '6px',
                    lg: '7px',
                    xl: '8px',
                  },
                  borderRadius: '50%',
                  backgroundColor: active
                    ? '#FFFFFF'
                    : 'rgba(255,255,255,0.55)',
                  transform: active
                    ? 'scale(1)'
                    : 'scale(0.7)',
                  transition:
                    'transform 600ms ease, background-color 300ms ease',
                }}
              />
            </Box>
          );
        })}
      </Box>

      {/* =====================================================
          BOTTOM CONTENT
      ===================================================== */}
      <Box
        sx={{
          position: 'absolute',
          zIndex: 10,
          left: {
            xs: '18px',
            sm: '22px',
            md: '24px',
          },
          right: {
            xs: '18px',
            sm: '22px',
            md: '24px',
          },
          bottom: {
            xs: '18px',
            sm: '22px',
            md: '24px',
          },
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'column',
            md: 'row',
          },
          alignItems: {
            xs: 'flex-start',
            sm: 'flex-start',
            md: 'flex-end',
          },
          justifyContent: 'space-between',
          gap: {
            xs: '30px',
            sm: '38px',
            md: '38px',
            lg: '50px',
          },
          minWidth: 0,
        }}
      >
        {/* HEADING */}
        <Box
          sx={{
            width: {
              xs: '100%',
              sm: '100%',
              md: '48%',
            },
            maxWidth: {
              xs: '340px',
              sm: '420px',
              md: '555px',
            },
            minWidth: 0,
            flexShrink: 1,
          }}
        >
          <Typography
            component="h1"
            sx={{
              margin: 0,
              color: '#FFFFFF',
              fontFamily:
                "'Trueno', 'Plus Jakarta Sans', 'Outfit', 'Montserrat', sans-serif",
              fontSize:
                'clamp(30px, 3.1vw, 48px)',
              fontWeight: 600,
              lineHeight: 1.06,
              letterSpacing:
                'clamp(-1.2px, -0.07vw, -0.5px)',
              whiteSpace: 'normal',
            }}
          >
            AI to protect the
            <br />
            physical world
          </Typography>
        </Box>

        {/* RIGHT CONTENT */}
        <Box
          sx={{
            width: {
              xs: '100%',
              sm: '100%',
              md: '48%',
            },
            maxWidth: {
              xs: '390px',
              sm: '480px',
              md: '588px',
            },
            minWidth: 0,
            flexShrink: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: {
              xs: '18px',
              sm: '22px',
              md: '24px',
              lg: '24px',
              xl: '26px',
            },
          }}
        >
          <Typography
            sx={{
              margin: 0,
              width: '100%',
              color: '#FFFFFF',
              fontFamily: "'Sora', sans-serif",
              fontSize:
                'clamp(18px, 0.95vw, 30px)',
              fontWeight: 400,
              lineHeight: {
                xs: 1.35,
                sm: 1.3,
                md: 1.25,
                lg: 1.25,
              },
              letterSpacing: 0,
              maxWidth: '588px',
            }}
          >
            Trusted by over 30,000 organizations, Verkada builds physical
            security solutions that integrate seamlessly behind a single,
            cloud-based software platform.
          </Typography>

          {/* BUTTONS */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: {
                xs: '8px',
                sm: '10px',
                md: '12px',
                lg: '14px',
                xl: '16px',
              },
              flexWrap: 'nowrap',
              mt: 1,
              width: '100%',
            }}
          >
            <Button
              onClick={onExploreServices}
              sx={{
                width: {
                  xs: '82px',
                  sm: '90px',
                  md: '104px',
                  lg: '110px',
                  xl: '113px',
                },
                minWidth: 0,
                height: {
                  xs: '34px',
                  sm: '36px',
                  md: '40px',
                  lg: '43px',
                  xl: '46px',
                },
                px: {
                  xs: '10px',
                  sm: '12px',
                  md: '16px',
                  lg: '20px',
                  xl: '24px',
                },
                borderRadius: {
                  xs: '7px',
                  sm: '8px',
                  md: '9px',
                  lg: '10px',
                  xl: '12px',
                },
                backgroundColor: '#FFFFFF',
                color: '#111111',
                fontFamily: "'Manrope', sans-serif",
                fontSize: {
                  xs: '10px',
                  sm: '11px',
                  md: '12px',
                  lg: '14px',
                  xl: '16px',
                },
                fontWeight: 500,
                lineHeight: 1,
                textTransform: 'none',
                whiteSpace: 'nowrap',
                boxShadow: 'none',
                flexShrink: 0,
                '&:hover': {
                  backgroundColor: '#FFFFFF',
                  boxShadow: 'none',
                },
              }}
            >
              Services
            </Button>

            <Button
              onClick={onExploreProducts}
              endIcon={
                <ArrowForwardIcon
                  sx={{
                    fontSize: {
                      xs: '13px',
                      sm: '14px',
                      md: '15px',
                      lg: '16px',
                      xl: '18px',
                    },
                  }}
                />
              }
              sx={{
                width: {
                  xs: '94px',
                  sm: '104px',
                  md: '112px',
                  lg: '113px',
                  xl: '113px',
                },
                minWidth: 0,
                height: {
                  xs: '34px',
                  sm: '36px',
                  md: '40px',
                  lg: '43px',
                  xl: '46px',
                },
                px: {
                  xs: '10px',
                  sm: '12px',
                  md: '14px',
                  lg: '16px',
                  xl: '16px',
                },
                borderRadius: {
                  xs: '7px',
                  sm: '8px',
                  md: '9px',
                  lg: '10px',
                  xl: '12px',
                },
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                border:
                  '1px solid rgba(255,255,255,0.75)',
                fontFamily: "'Manrope', sans-serif",
                fontSize: {
                  xs: '10px',
                  sm: '11px',
                  md: '12px',
                  lg: '14px',
                  xl: '16px',
                },
                fontWeight: 500,
                lineHeight: 1,
                textTransform: 'none',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                '&:hover': {
                  backgroundColor:
                    'rgba(255,255,255,0.08)',
                  borderColor: '#FFFFFF',
                },
              }}
            >
              Products
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
