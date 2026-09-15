import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
} from '@mui/material';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import mukeshImg from '../../assets/images/products/Camera.png';
import irfanImg from '../../assets/images/products/Camera.png';
import breathImg from '../../assets/images/products/breathe.png';
import cctvImg from '../../assets/images/products/anpr.png';

interface Founder {
  id: string;
  name: string;
  role: string;
  image: string;
}

interface SlideData {
  id: number;
  type: 'founders' | 'service';
  title: string;
  subtitle?: string;
  paragraphs?: string[];
  image?: string;
  tags?: string[];
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

const slides: SlideData[] = [
  {
    id: 1,
    type: 'founders',
    title: 'A Note From Our Founders',
    paragraphs: [
      "EagleEye Solution was built with a simple belief: security shouldn't create more problems or add unnecessary complexity. We started with the vision of making business operations more secure, practical, automated, and accurate.",
      'As we grew, our focus expanded beyond individual products toward building connected digital ecosystems. From surveillance and networking to software integration and industrial solutions, we bring scalable and reliable technology into everyday operational environments.',
      'Today, we continue to innovate with purpose — staying curious, building smarter solutions, creating lasting partnerships, and turning technology into something businesses can count on.',
    ],
  },
  {
    id: 2,
    type: 'service',
    title: 'CCTV Surveillance',
    subtitle:
      'Reliable surveillance solutions designed to protect people, assets, and operations with intelligent monitoring and dependable security infrastructure.',
    image: cctvImg,
    tags: [
      'CCTV Installation',
      'Site Survey & Planning',
      'System Configuration',
      'CCTV Network Setup',
      'Remote Monitoring',
      'Recording & Storage',
      'Mobile Viewing Setup',
      'System Upgrade',
      'Troubleshooting & Repair',
      'Preventative Maintenance',
      'System Expansion',
      'AMC & Technical Support',
    ],
  },
  {
    id: 3,
    type: 'service',
    title: 'Breath Analyser System',
    subtitle:
      'Automated alcohol screening and access control integration for safer industrial environments and controlled entry points.',
    image: breathImg,
    tags: [
      'Alcohol Screening',
      'Turnstile Integration',
      'Access Control Link',
      'Fast Verification',
      'Automated Gate Lock',
      'Real-time Analytics',
      'Audit Logging',
      'Industrial Compliance',
    ],
  },
];

export const WhoWeAre: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);
  const [direction, setDirection] =
    useState<'next' | 'prev'>('next');

  const changeSlide = (
    newDirection: 'next' | 'prev'
  ) => {
    if (animating) return;

    setDirection(newDirection);
    setAnimating(true);

    setTimeout(() => {
      setCurrentSlide((previous) => {
        if (newDirection === 'next') {
          return previous === slides.length - 1
            ? 0
            : previous + 1;
        }

        return previous === 0
          ? slides.length - 1
          : previous - 1;
      });

      setTimeout(() => {
        setAnimating(false);
      }, 30);
    }, 220);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide('next');
    }, 5000);

    return () => clearInterval(timer);
  }, [animating]);

  const goToSlide = (index: number) => {
    if (
      index === currentSlide ||
      animating
    ) {
      return;
    }

    setDirection(
      index > currentSlide
        ? 'next'
        : 'prev'
    );

    setAnimating(true);

    setTimeout(() => {
      setCurrentSlide(index);

      setTimeout(() => {
        setAnimating(false);
      }, 30);
    }, 220);
  };

  const slide = slides[currentSlide];

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
        height: {
          xs: 'auto',
          md: '100dvh',
        },
        minHeight: {
          md: '100dvh',
        },
        maxHeight: {
          md: '100dvh',
        },
        backgroundColor: 'rgba(10, 10, 10, 1)',
        color: '#FFFFFF',
        borderRadius: {
          xs: '16px',
          sm: '16px',
          md: '16px',
        },
        my: {
          xs: 2,
          md: 0,
        },
        p: {
          xs: '20px',
          sm: '24px',
          md: '24px',
          lg: '28px',
        },
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
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
          flexDirection: 'column',
          alignItems: 'flex-start',
          textAlign: 'left',
          flexShrink: 0,
          mb: {
            xs: '24px',
            md: '20px',
            lg: '20px',
          },
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 600,
            fontSize: {
              xs: '26px',
              sm: '30px',
              md: '34px',
              lg: '36px',
            },
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
            mb: '4px',
            m: 0,
          }}
        >
          Who we are?
        </Typography>

        <Typography
          component="p"
          sx={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 400,
            fontSize: {
              xs: '13px',
              md: '14px',
              lg: '15px',
            },
            lineHeight: 1.5,
            color: '#8E8E93',
            m: 0,
            maxWidth: '850px',
          }}
        >
          We build practical technology
          solutions that connect security,
          infrastructure, automation, and
          business operations.
        </Typography>
      </Box>

      {/* SLIDE AREA */}
      <Box
        sx={{
          flex: {
            xs: 'none',
            md: 1,
          },
          minHeight: {
            md: 0,
          },
          width: '100%',
          position: 'relative',
          opacity: animating ? 0 : 1,
          transform: animating
            ? direction === 'next'
              ? 'translateX(-15px)'
              : 'translateX(15px)'
            : 'translateX(0)',
          transition:
            'opacity 220ms ease, transform 220ms cubic-bezier(0.22, 1, 0.36, 1)',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
        {/* INNER CARD */}
        <Box
          sx={{
            width: '100%',
            height: {
              xs: 'auto',
              md: '100%',
            },
            minHeight: {
              md: 0,
            },
            p: {
              xs: '16px',
              sm: '20px',
              md: '16px',
              lg: '20px',
            },
            boxSizing: 'border-box',
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
            gap: {
              xs: '16px',
              md: '24px',
              lg: '28px',
            },
            alignItems: 'center',
            borderRadius: '16px',
            border: '1px solid rgba(39, 39, 39, 1)',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            overflow: 'hidden',
          }}
        >
          {/* FOUNDERS SLIDE */}
          {slide.type === 'founders' && (
            <>
              {/* LEFT - FOUNDER IMAGES */}
              <Box
                sx={{
                  width: '100%',
                  height: {
                    xs: '260px',
                    md: 'calc(100% - 0px)',
                  },
                  minHeight: 0,
                  display: 'grid',
                  gridTemplateColumns:
                    'repeat(2, minmax(0, 1fr))',
                  gap: {
                    xs: '8px',
                    md: '12px',
                  },
                }}
              >
                {founders.map((founder) => (
                  <Box
                    key={founder.id}
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      minHeight: 0,
                      borderRadius: '12px',
                      overflow: 'hidden',
                      backgroundColor: '#151515',
                    }}
                  >
                    <Box
                      component="img"
                      src={founder.image}
                      alt={founder.name}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />

                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(180deg, rgba(255, 87, 34, 0.25) 0%, rgba(255, 87, 34, 0.85) 100%)',
                        mixBlendMode: 'multiply',
                        pointerEvents: 'none',
                      }}
                    />

                    <Box
                      sx={{
                        position: 'absolute',
                        left: '12px',
                        bottom: '12px',
                        backgroundColor: '#FF6D00',
                        color: '#FFFFFF',
                        px: '12px',
                        py: '5px',
                        borderRadius: '6px',
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Sora', sans-serif",
                          fontWeight: 600,
                          fontSize: '12px',
                          lineHeight: 1,
                          color: '#FFFFFF',
                        }}
                      >
                        {founder.name}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              {/* RIGHT - FOUNDER NOTE */}
              <Box
                sx={{
                  width: '100%',
                  height: {
                    xs: 'auto',
                    md: '100%',
                  },
                  minHeight: 0,
                  p: {
                    xs: '16px',
                    md: '20px',
                    lg: '24px',
                  },
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  borderRadius: '12px',
                  backgroundColor: '#141414',
                  overflow: 'hidden',
                }}
              >
                <Box>
                  <Typography
                    component="h3"
                    sx={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 600,
                      fontSize: {
                        xs: '18px',
                        md: '22px',
                        lg: '24px',
                      },
                      lineHeight: 1.3,
                      color: '#FFFFFF',
                      mb: '12px',
                    }}
                  >
                    {slide.title}
                  </Typography>

                  {slide.paragraphs?.map((paragraph, index) => (
                    <Typography
                      key={index}
                      component="p"
                      sx={{
                        fontFamily: "'Sora', sans-serif",
                        fontWeight: 400,
                        fontSize: {
                          xs: '12px',
                          md: '12.5px',
                          lg: '13px',
                        },
                        lineHeight: 1.5,
                        color: '#B5B9C4',
                        mb:
                          index ===
                          slide.paragraphs!.length - 1
                            ? 0
                            : '10px',
                        m:
                          index ===
                          slide.paragraphs!.length - 1
                            ? 0
                            : undefined,
                      }}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </Box>

                <Typography
                  component="p"
                  sx={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 400,
                    fontSize: '12px',
                    color: '#6C727F',
                    mt: '14px',
                    mb: 0,
                  }}
                >
                  — Founders of EagleEye Solution
                </Typography>
              </Box>
            </>
          )}

          {/* SERVICE SLIDES */}
          {slide.type === 'service' && (
            <>
              {/* SERVICE IMAGE */}
              <Box
                sx={{
                  width: '100%',
                  height: {
                    xs: '260px',
                    md: '100%',
                  },
                  minHeight: 0,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#151515',
                }}
              >
                <Box
                  component="img"
                  src={slide.image}
                  alt={slide.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </Box>

              {/* SERVICE CONTENT */}
              <Box
                sx={{
                  width: '100%',
                  height: {
                    xs: 'auto',
                    md: '100%',
                  },
                  minHeight: 0,
                  p: {
                    xs: '16px',
                    md: '20px',
                    lg: '24px',
                  },
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: {
                    xs: '16px',
                    md: '18px',
                  },
                  borderRadius: '12px',
                  backgroundColor: '#141414',
                  overflow: 'hidden',
                }}
              >
                {/* TITLE + DESCRIPTION */}
                <Box
                  sx={{
                    flexShrink: 0,
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 600,
                      fontSize: {
                        xs: '20px',
                        sm: '22px',
                        md: '26px',
                        lg: '28px',
                      },
                      lineHeight: 1.2,
                      color: '#FFFFFF',
                      mb: '10px',
                      m: 0,
                    }}
                  >
                    {slide.title}
                  </Typography>

                  <Typography
                    component="p"
                    sx={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 400,
                      fontSize: {
                        xs: '12px',
                        md: '13px',
                        lg: '14px',
                      },
                      lineHeight: 1.5,
                      color: '#8E8E93',
                      m: 0,
                      display: '-webkit-box',
                      WebkitLineClamp: {
                        xs: 4,
                        md: 3,
                      },
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {slide.subtitle}
                  </Typography>
                </Box>

                {/* TAGS */}
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: {
                      xs: '7px',
                      md: '8px',
                    },
                    width: '100%',
                    maxHeight: {
                      xs: '180px',
                      md: '220px',
                    },
                    overflow: 'hidden',
                    alignContent: 'flex-start',
                  }}
                >
                  {slide.tags?.map((tag, index) => (
                    <Box
                      key={`${slide.id}-${index}`}
                      sx={{
                        px: {
                          xs: '11px',
                          md: '12px',
                        },
                        py: {
                          xs: '6px',
                          md: '7px',
                        },
                        borderRadius: '30px',
                        border: '1px solid rgba(255,255,255,0.2)',
                        boxSizing: 'border-box',
                        flexShrink: 0,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Sora', sans-serif",
                          fontWeight: 400,
                          fontSize: {
                            xs: '10.5px',
                            md: '11.5px',
                          },
                          lineHeight: 1.2,
                          color: '#FFFFFF',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {tag}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Box>

      {/* BOTTOM NAVIGATION */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          flexShrink: 0,
          mt: {
            xs: '16px',
            md: '10px',
          },
        }}
      >
        <IconButton
          onClick={() => changeSlide('prev')}
          disabled={animating}
          aria-label="Previous slide"
          sx={{
            width: {
              xs: '34px',
              md: '36px',
            },
            height: {
              xs: '34px',
              md: '36px',
            },
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#FFFFFF',
            '&:hover': {
              borderColor: '#FF6D00',
              color: '#FF6D00',
              backgroundColor: 'rgba(255,109,0,0.08)',
            },
          }}
        >
          <ArrowBackIosNewIcon
            sx={{
              fontSize: '13px',
            }}
          />
        </IconButton>

        {/* DOTS */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
          }}
        >
          {slides.map((item, index) => (
            <Box
              key={item.id}
              onClick={() => goToSlide(index)}
              sx={{
                width:
                  index === currentSlide
                    ? '24px'
                    : '6px',
                height: '6px',
                borderRadius: '10px',
                backgroundColor:
                  index === currentSlide
                    ? '#FF6D00'
                    : 'rgba(255,255,255,0.25)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            />
          ))}
        </Box>

        <IconButton
          onClick={() => changeSlide('next')}
          disabled={animating}
          aria-label="Next slide"
          sx={{
            width: {
              xs: '34px',
              md: '36px',
            },
            height: {
              xs: '34px',
              md: '36px',
            },
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#FFFFFF',
            '&:hover': {
              borderColor: '#FF6D00',
              color: '#FF6D00',
              backgroundColor: 'rgba(255,109,0,0.08)',
            },
          }}
        >
          <ArrowForwardIosIcon
            sx={{
              fontSize: '13px',
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default WhoWeAre;
