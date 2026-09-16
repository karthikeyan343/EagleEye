import React from 'react';
import { Box, Typography } from '@mui/material';

import mukeshImg from '../../assets/images/products/Camera.png';
import irfanImg from '../../assets/images/products/Camera.png';

interface Founder {
  id: string;
  name: string;
  role: string;
  image: string;
}

const founders: Founder[] = [
  {
    id: '1',
    name: 'Mukesh',
    role: 'Founder & CEO',
    image: mukeshImg,
  },
  {
    id: '2',
    name: 'Irfan',
    role: 'Co-Founder',
    image: irfanImg,
  },
];

const founderParagraphs: string[] = [
  "EagleEye Solution was built with a simple belief: security shouldn't create more problems or add unnecessary complexity. We started with the vision of making business operations more secure, practical, automated, and accurate.",
  'As we grew, our focus expanded beyond individual products toward building connected digital ecosystems. From surveillance and networking to software integration and industrial solutions, we bring scalable and reliable technology into everyday operational environments.',
  'Today, we continue to innovate with purpose — staying curious, building smarter solutions, creating lasting partnerships, and turning technology into something businesses can count on.',
];

export const WhoWeAre: React.FC = () => {
  return (
    <Box
      id="who-we-are"
      component="section"
      sx={{
        width: {
          xs: 'calc(100% - 20px)',
          sm: 'calc(100% - 32px)',
          md: 'calc(100% - 64px)',
          lg: 'calc(100% - 80px)',
        },
        mx: 'auto',
        backgroundColor: '#0A0A0A',
        color: '#FFFFFF',
        borderRadius: '16px',
        my: {
          xs: 2,
          md: 0,
        },
        p: {
          xs: '20px',
          sm: '24px',
          md: '32px',
          lg: '36px',
        },
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* SECTION HEADER */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          textAlign: 'left',
          mb: {
            xs: '24px',
            sm: '28px',
            md: '32px',
          },
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 600,
            fontSize: {
              xs: '24px',
              sm: '28px',
              md: '32px',
            },
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
          }}
        >
          Who we are?
        </Typography>
      </Box>

      {/* MAIN TWO-COLUMN GRID */}
      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            lg: 'repeat(2, minmax(0, 1fr))',
          },
          gap: {
            xs: '20px',
            sm: '24px',
            md: '28px',
          },
          alignItems: 'stretch',
        }}
      >
        {/* LEFT SIDE: FOUNDERS CARDS (SIDE-BY-SIDE) */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, minmax(0, 1fr))',
            },
            gap: {
              xs: '14px',
              sm: '16px',
              md: '20px',
            },
            alignItems: 'stretch',
          }}
        >
          {founders.map((founder) => (
            <Box
              key={founder.id}
              sx={{
                position: 'relative',
                width: '100%',
                height: {
                  xs: '280px',
                  sm: '320px',
                  md: '360px',
                  lg: '100%',
                },
                minHeight: {
                  lg: '380px',
                },
                overflow: 'hidden',
                borderRadius: '16px',
                backgroundColor: '#151515',
                cursor: 'default',
                '&:hover img': {
                  transform: 'scale(1.04)',
                },
              }}
            >
              {/* FOUNDER IMAGE */}
              <Box
                component="img"
                src={founder.image}
                alt={founder.name}
                loading="lazy"
                sx={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  transition: 'transform 0.5s ease',
                }}
              />

              {/* GRADIENT OVERLAY */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.30) 45%, rgba(0,0,0,0) 75%)',
                  pointerEvents: 'none',
                }}
              />

              {/* FOUNDER DETAILS */}
              <Box
                sx={{
                  position: 'absolute',
                  left: {
                    xs: '16px',
                    sm: '20px',
                  },
                  right: {
                    xs: '16px',
                    sm: '20px',
                  },
                  bottom: {
                    xs: '16px',
                    sm: '20px',
                  },
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 600,
                    fontSize: {
                      xs: '18px',
                      sm: '20px',
                      md: '22px',
                    },
                    lineHeight: 1.2,
                    color: '#FFFFFF',
                    m: 0,
                  }}
                >
                  {founder.name}
                </Typography>

                <Typography
                  component="p"
                  sx={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 500,
                    fontSize: {
                      xs: '12px',
                      sm: '13px',
                      md: '14px',
                    },
                    lineHeight: 1.4,
                    color: '#dea216',
                    mt: '4px',
                    mb: 0,
                  }}
                >
                  {founder.role}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* RIGHT SIDE: A NOTE FROM THE FOUNDERS */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            p: {
              xs: '20px',
              sm: '28px',
              md: '32px',
            },
            boxSizing: 'border-box',
            borderRadius: '16px',
            border: '1px solid rgba(39, 39, 39, 1)',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography
            component="h3"
            sx={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 600,
              fontSize: {
                xs: '18px',
                sm: '20px',
                md: '22px',
              },
              lineHeight: 1.3,
              color: '#FFFFFF',
              mb: '18px',
            }}
          >
            A Note From The Founders
          </Typography>

          {founderParagraphs.map((paragraph, index) => (
            <Typography
              key={index}
              component="p"
              sx={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 400,
                fontSize: {
                  xs: '12.5px',
                  sm: '13px',
                  md: '13.5px',
                },
                lineHeight: 1.65,
                color: '#B5B9C4',
                mb:
                  index === founderParagraphs.length - 1
                    ? 0
                    : '14px',
              }}
            >
              {paragraph}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default WhoWeAre;