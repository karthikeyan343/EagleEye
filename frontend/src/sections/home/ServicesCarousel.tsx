import React, { useState, useEffect, useRef } from 'react';

import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
} from '@mui/material';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { servicesData } from '../../data/solutions';

import Frame12 from '../../assets/images/products/Camera.png';
import ANPR from '../../assets/images/products/anpr.png';
import Breathe from '../../assets/images/products/breathe.png';

export const ServicesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  // ==========================================================
  // DRAG STATE
  // ==========================================================

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // ==========================================================
  // CUSTOM SERVICE IMAGES
  // ==========================================================

  const modifiedServicesData = servicesData.map(
    (service, index) => {
      if (index === 0) {
        return {
          ...service,
          image: Frame12,
        };
      }

      if (index === 1) {
        return {
          ...service,
          image: ANPR,
        };
      }

      if (index === 2) {
        return {
          ...service,
          image: ANPR,
        };
      }

      if (index === 3) {
        return {
          ...service,
          image: Breathe,
        };
      }

      return service;
    }
  );

  const totalServices = modifiedServicesData.length;

  // ==========================================================
  // SCROLL TO CARD
  // ==========================================================

  const scrollToCard = (index: number) => {
    if (!containerRef.current) {
      return;
    }

    const cardElements = containerRef.current.children;

    if (!cardElements[index]) {
      return;
    }

    const card = cardElements[index] as HTMLElement;
    const container = containerRef.current;
    const cardLeft = card.offsetLeft;

    container.scrollTo({
      left: cardLeft,
      behavior: 'smooth',
    });
  };

  // ==========================================================
  // PREVIOUS
  // ==========================================================

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const nextIndex =
        prev === 0
          ? totalServices - 1
          : prev - 1;

      scrollToCard(nextIndex);

      return nextIndex;
    });
  };

  // ==========================================================
  // NEXT
  // ==========================================================

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const nextIndex =
        prev === totalServices - 1
          ? 0
          : prev + 1;

      scrollToCard(nextIndex);

      return nextIndex;
    });
  };

  // ==========================================================
  // MOUSE DRAG START
  // ==========================================================

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) {
      return;
    }

    setIsDragging(true);

    setStartX(
      e.pageX - containerRef.current.offsetLeft
    );

    setScrollLeft(containerRef.current.scrollLeft);
  };

  // ==========================================================
  // MOUSE DRAG MOVE
  // ==========================================================

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) {
      return;
    }

    e.preventDefault();

    const x =
      e.pageX - containerRef.current.offsetLeft;

    const walk = (x - startX) * 1.5;

    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // ==========================================================
  // MOUSE DRAG END
  // ==========================================================

  const handleMouseUpOrLeave = () => {
    if (!isDragging || !containerRef.current) {
      return;
    }

    setIsDragging(false);

    const container = containerRef.current;
    const children = Array.from(container.children) as HTMLElement[];

    if (!children.length) {
      return;
    }

    let closestIndex = 0;
    let closestDistance = Infinity;

    children.forEach((child, index) => {
      const distance = Math.abs(
        child.offsetLeft - container.scrollLeft
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setCurrentIndex(closestIndex);
    scrollToCard(closestIndex);
  };

  // ==========================================================
  // KEYBOARD NAVIGATION
  // ==========================================================

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      }

      if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Box
      id="services"
      component="section"
      sx={{
        width: '100%',
        height: {
          xs: 'auto',
          lg: '100dvh',
        },
        minHeight: {
          lg: 0,
        },
        boxSizing: 'border-box',
        backgroundColor: '#FFFFFF',
        py: {
          xs: 3,
          sm: 4,
          md: 5,
          lg: '12px',
        },
        overflow: {
          xs: 'visible',
          lg: 'hidden',
        },
        display: {
          xs: 'block',
          lg: 'flex',
        },
        flexDirection: {
          lg: 'column',
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: {
            xs: 2,
            sm: 3,
            md: 4,
            lg: 3,
          },
          height: {
            xs: 'auto',
            lg: '100%',
          },
          minHeight: {
            lg: 0,
          },
          boxSizing: 'border-box',
          display: {
            xs: 'block',
            lg: 'flex',
          },
          flexDirection: {
            lg: 'column',
          },
        }}
      >
        {/* BLACK MAIN CONTAINER */}
        <Box
          sx={{
            width: '100%',
            height: {
              xs: 'auto',
              lg: '100%',
            },
            minHeight: {
              lg: 0,
            },
            boxSizing: 'border-box',
            backgroundColor: 'rgba(10, 10, 10, 1)',
            borderRadius: {
              xs: '24px',
              sm: '28px',
              md: '32px',
            },
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
            p: {
              xs: 3,
              sm: 3.5,
              md: 4,
              lg: '32px',
            },
            display: {
              xs: 'block',
              lg: 'flex',
            },
            flexDirection: {
              lg: 'column',
            },
          }}
        >
          {/* HEADER */}
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
                md: 'center',
              },
              gap: {
                xs: 3,
                md: 2,
              },
              mb: {
                xs: 4,
                sm: 4,
                md: 4,
                lg: '28px',
              },
              flexShrink: 0,
            }}
          >
            {/* HEADER TEXT */}
            <Box
              sx={{
                maxWidth: {
                  xs: '100%',
                  md: '650px',
                  lg: '680px',
                },
              }}
            >
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontFamily: "'Trueno', 'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: {
                    xs: '26px',
                    sm: '32px',
                    md: '36px',
                    lg: '36px',
                  },
                  lineHeight: 1.18,
                  color: '#FFFFFF',
                  mb: '12px',
                }}
              >
                Proactive physical security,
                <br />
                powered by AI.
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  maxWidth: {
                    xs: '100%',
                    md: '620px',
                    lg: '650px',
                  },
                  fontFamily: "'Sora', sans-serif",
                  color: 'rgba(255, 255, 255, 0.72)',
                  fontSize: {
                    xs: '13px',
                    sm: '14px',
                    md: '15px',
                    lg: '15px',
                  },
                  fontWeight: 400,
                  lineHeight: 1.45,
                }}
              >
                Every variety follows its own growing rhythm. Reserve your batch
                <br className="desktop-break" />
                and we'll harvest it when it's ready not when it's convenient.
              </Typography>
            </Box>

            {/* NAVIGATION BUTTONS */}
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              sx={{
                flexShrink: 0,
              }}
            >
              <IconButton
                aria-label="previous service"
                onClick={handlePrev}
                sx={{
                  width: {
                    xs: 42,
                    md: 48,
                  },
                  height: {
                    xs: 42,
                    md: 48,
                  },
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  '&:hover': {
                    backgroundColor: '#E2E8F0',
                  },
                }}
              >
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>

              <IconButton
                aria-label="next service"
                onClick={handleNext}
                sx={{
                  width: {
                    xs: 42,
                    md: 48,
                  },
                  height: {
                    xs: 42,
                    md: 48,
                  },
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  '&:hover': {
                    backgroundColor: '#E2E8F0',
                  },
                }}
              >
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Box>

          {/* CAROUSEL */}
          <Box
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            sx={{
              width: '100%',
              flex: {
                xs: 'none',
                lg: 1,
              },
              minHeight: {
                lg: 0,
              },
              height: {
                xs: 'auto',
                lg: 'auto',
              },
              display: 'flex',
              alignItems: {
                xs: 'stretch',
                lg: 'flex-start',
              },
              gap: {
                xs: '16px',
                md: '20px',
                lg: '24px',
              },
              overflowX: 'auto',
              overflowY: 'hidden',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              cursor: isDragging ? 'grabbing' : 'grab',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              boxSizing: 'border-box',
              py: {
                xs: 2,
                lg: 0,
              },
              flexShrink: 0,
            }}
          >
            {modifiedServicesData.map((service, index) => (
              <Box
                key={service.id || index}
                sx={{
                  flex: {
                    xs: '0 0 100%',
                    lg: '0 0 calc(100% - 260px)',
                  },
                  width: {
                    xs: '100%',
                    lg: 'calc(100% - 260px)',
                  },
                  height: {
                    xs: 'auto',
                    lg: 'calc(100% - 24px)',
                  },
                  minHeight: {
                    xs: 'auto',
                    lg: 0,
                  },
                  maxHeight: {
                    lg: 'calc(100% - 24px)',
                  },
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    lg: 'minmax(0, 1fr) minmax(0, 1.08fr)',
                  },
                  gap: {
                    xs: 3,
                    md: 3,
                    lg: '28px',
                  },
                  alignItems: 'center',
                  p: {
                    xs: '14px',
                    sm: '20px',
                    lg: '14px',
                  },
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.45)',
                  scrollSnapAlign: 'start',
                  boxSizing: 'border-box',
                  userSelect: 'none',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                {/* IMAGE */}
                <Box
                  sx={{
                    width: '100%',
                    height: {
                      xs: '300px',
                      sm: '360px',
                      lg: 'calc(100% - 32px)',
                    },
                    minHeight: 0,
                    borderRadius: '16px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxSizing: 'border-box',
                  }}
                >
                  <Box
                    component="img"
                    src={service.image}
                    alt={service.title}
                    draggable={false}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      borderRadius: '16px',
                      pointerEvents: 'none',
                    }}
                  />
                </Box>

                {/* DETAILS */}
                <Box
                  sx={{
                    width: '100%',
                    minWidth: 0,
                    height: {
                      lg: 'calc(100% - 32px)',
                    },
                    minHeight: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: {
                      xs: '18px',
                      lg: '12px',
                    },
                    overflow: 'hidden',
                    boxSizing: 'border-box',
                  }}
                >
                  {/* TITLE + DESCRIPTION */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: {
                        xs: '10px',
                        lg: '8px',
                      },
                      flexShrink: 0,
                    }}
                  >
                    <Typography
                      variant="h3"
                      component="h3"
                      sx={{
                        fontFamily: "'Trueno', 'Plus Jakarta Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: {
                          xs: '24px',
                          sm: '28px',
                          md: '32px',
                          lg: '30px',
                        },
                        color: '#FFFFFF',
                        lineHeight: 1.1,
                        margin: 0,
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "'Manrope', sans-serif",
                        color: 'rgba(255, 255, 255, 0.72)',
                        fontSize: {
                          xs: '13px',
                          md: '14px',
                          lg: '13px',
                        },
                        lineHeight: 1.4,
                        margin: 0,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Box>

                  {/* CAPABILITY PILLS */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: {
                        xs: '8px',
                        lg: '7px',
                      },
                      width: '100%',
                      minWidth: 0,
                      maxHeight: {
                        lg: '100%',
                      },
                      overflow: 'hidden',
                      alignContent: 'flex-start',
                    }}
                  >
                    {service.capabilities?.map((pill: string, idx: number) => (
                      <Box
                        key={idx}
                        sx={{
                          minHeight: {
                            xs: '34px',
                            lg: '34px',
                          },
                          height: {
                            lg: '34px',
                          },
                          width: 'fit-content',
                          maxWidth: '100%',
                          backgroundColor: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          borderRadius: '46px',
                          px: {
                            xs: '16px',
                            lg: '18px',
                          },
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxSizing: 'border-box',
                          transition: 'all 0.2s ease',
                          flexShrink: 0,
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.12)',
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 700,
                            fontSize: {
                              xs: '10px',
                              lg: '10px',
                            },
                            lineHeight: 1,
                            color: '#FFFFFF',
                            textAlign: 'center',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {pill}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesCarousel;
