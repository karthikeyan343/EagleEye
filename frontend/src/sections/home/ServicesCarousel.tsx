import React, { useState, useEffect, useRef, useCallback } from 'react';

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
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(0);
  const dragStartXRef = useRef(0);
  const dragScrollLeftRef = useRef(0);
  const isDraggingRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const scrollTimeoutRef = useRef<number | null>(null);

  const modifiedServicesData = servicesData.map((service, index) => {
    if (index === 0) return { ...service, image: Frame12 };
    if (index === 1) return { ...service, image: ANPR };
    if (index === 2) return { ...service, image: ANPR };
    if (index === 3) return { ...service, image: Breathe };
    return service;
  });

  const totalServices = modifiedServicesData.length;
  const COPY_COUNT = 5;
  const MIDDLE_COPY = 2;
  const infiniteServicesData = Array.from({ length: COPY_COUNT }, () => modifiedServicesData).flat();

  const setActiveIndex = useCallback((index: number) => {
    currentIndexRef.current = index;
    setCurrentIndex(index);
  }, []);

  const getCardElements = useCallback(() => {
    if (!containerRef.current) return [] as HTMLElement[];
    return Array.from(containerRef.current.children) as HTMLElement[];
  }, []);

  const getNormalizedIndex = useCallback(
    (index: number, total: number) => {
      if (total <= 0) return 0;
      const baseIndex = ((index % total) + total) % total;
      return total * MIDDLE_COPY + baseIndex;
    },
    [MIDDLE_COPY]
  );

  const scrollToCard = useCallback(
    (index: number, behavior: ScrollBehavior = 'smooth') => {
      const container = containerRef.current;
      if (!container) return;

      const cards = container.children;
      const card = cards[index] as HTMLElement | undefined;
      if (!card) return;

      container.scrollTo({
        left: card.offsetLeft,
        behavior,
      });
    },
    []
  );

  const findClosestCardIndex = useCallback(() => {
    const container = containerRef.current;
    if (!container) return 0;

    const cards = Array.from(container.children) as HTMLElement[];
    let closestIndex = currentIndexRef.current;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - container.scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    return closestIndex;
  }, []);

  const recenterIfNeeded = useCallback(() => {
    const container = containerRef.current;
    if (!container || totalServices <= 0 || isDraggingRef.current) return;

    const currentIdx = currentIndexRef.current;
    const normalizedIdx = getNormalizedIndex(currentIdx, totalServices);

    if (currentIdx !== normalizedIdx) {
      const cards = getCardElements();
      const currentCard = cards[currentIdx];
      const targetCard = cards[normalizedIdx];

      if (currentCard && targetCard) {
        const scrollOffset = targetCard.offsetLeft - currentCard.offsetLeft;

        // Teleport position instantly without visual scroll jump
        container.style.scrollBehavior = 'auto';
        container.style.scrollSnapType = 'none';

        container.scrollLeft += scrollOffset;

        // Force browser layout recalculation
        void container.offsetWidth;

        container.style.scrollSnapType = 'x mandatory';
        container.style.scrollBehavior = 'smooth';

        setActiveIndex(normalizedIdx);
      }
    }
  }, [getCardElements, getNormalizedIndex, setActiveIndex, totalServices]);

  const updateActiveFromScroll = useCallback(() => {
    if (!containerRef.current) return;

    const nearest = findClosestCardIndex();
    if (nearest !== currentIndexRef.current) {
      setActiveIndex(nearest);
    }
  }, [findClosestCardIndex, setActiveIndex]);

  const handleScroll = useCallback(() => {
    if (rafRef.current !== null) return;

    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      updateActiveFromScroll();

      if (scrollTimeoutRef.current !== null) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = window.setTimeout(() => {
        recenterIfNeeded();
      }, 150);
    });
  }, [recenterIfNeeded, updateActiveFromScroll]);

  const moveBy = useCallback(
    (delta: number) => {
      const container = containerRef.current;
      if (!container || totalServices === 0) return;

      const current = currentIndexRef.current;
      const target = current + delta;
      const cards = getCardElements();

      if (!cards[target]) return;

      setActiveIndex(target);
      scrollToCard(target, 'smooth');
    },
    [getCardElements, scrollToCard, setActiveIndex, totalServices]
  );

  const handlePrev = useCallback(() => moveBy(-1), [moveBy]);
  const handleNext = useCallback(() => moveBy(1), [moveBy]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    isDraggingRef.current = true;
    setIsDragging(true);
    dragStartXRef.current = e.pageX - container.offsetLeft;
    dragScrollLeftRef.current = container.scrollLeft;

    container.style.scrollBehavior = 'auto';
    container.style.scrollSnapType = 'none';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!isDraggingRef.current || !container) return;

    e.preventDefault();

    const x = e.pageX - container.offsetLeft;
    const walk = (x - dragStartXRef.current) * 1.5;
    container.scrollLeft = dragScrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    const container = containerRef.current;
    if (!isDraggingRef.current || !container) return;

    isDraggingRef.current = false;
    setIsDragging(false);

    container.style.scrollSnapType = 'x mandatory';
    container.style.scrollBehavior = 'smooth';

    const nearest = findClosestCardIndex();
    setActiveIndex(nearest);
    scrollToCard(nearest, 'smooth');
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container || totalServices === 0) return;

    const initialIndex = totalServices * MIDDLE_COPY;

    const frame = window.requestAnimationFrame(() => {
      container.style.scrollBehavior = 'auto';
      container.style.scrollSnapType = 'none';
      scrollToCard(initialIndex, 'auto');
      setActiveIndex(initialIndex);

      window.requestAnimationFrame(() => {
        container.style.scrollSnapType = 'x mandatory';
        container.style.scrollBehavior = 'smooth';
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [scrollToCard, setActiveIndex, totalServices]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScrollEnd = () => {
      recenterIfNeeded();
    };

    container.addEventListener('scrollend', handleScrollEnd);
    return () => {
      container.removeEventListener('scrollend', handleScrollEnd);
    };
  }, [recenterIfNeeded]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
      if (scrollTimeoutRef.current !== null) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Shared Arrow Controls Component
  const renderNavigationButtons = (
    <Stack direction="row" spacing={1.5} alignItems="center">
      <IconButton
        aria-label="previous service"
        onClick={handlePrev}
        sx={{
          width: { xs: 42, md: 48 },
          height: { xs: 42, md: 48 },
          backgroundColor: '#FFFFFF',
          color: '#000000',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          '&:hover': { backgroundColor: '#E2E8F0' },
        }}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>

      <IconButton
        aria-label="next service"
        onClick={handleNext}
        sx={{
          width: { xs: 42, md: 48 },
          height: { xs: 42, md: 48 },
          backgroundColor: '#FFFFFF',
          color: '#000000',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          '&:hover': { backgroundColor: '#E2E8F0' },
        }}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>
    </Stack>
  );

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
                xs: 2,
                md: 2,
              },
              mb: {
                xs: 2.5,
                sm: 3,
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

            {/* DESKTOP NAVIGATION BUTTONS */}
            <Box
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },
                flexShrink: 0,
              }}
            >
              {renderNavigationButtons}
            </Box>
          </Box>

          {/* CAROUSEL */}
          <Box
            ref={containerRef}
            onScroll={handleScroll}
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
              alignItems: 'center', // Centered to prevent top/bottom clipping when scaled
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
                xs: 2.5,
                lg: '20px', // Room provided so zoomed card (scale 1.02) won't get cut at top
              },
              flexShrink: 0,
            }}
          >
            {infiniteServicesData.map((service, index) => (
              <Box
                key={`${service.id || index}-${index}`}
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
                    lg: 'calc(100% - 16px)',
                  },
                  minHeight: {
                    xs: 'auto',
                    lg: 0,
                  },
                  maxHeight: {
                    lg: 'calc(100% - 16px)',
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
                  backgroundColor:
                    index === currentIndex
                      ? 'rgba(255, 255, 255, 0.075)'
                      : 'rgba(255, 255, 255, 0.02)',
                  boxShadow:
                    index === currentIndex
                      ? '0 0 0 1px rgba(255, 255, 255, 0.12), 0 24px 55px rgba(0, 0, 0, 0.65), 0 0 35px rgba(255, 255, 255, 0.08)'
                      : '0 20px 40px rgba(0, 0, 0, 0.45)',
                  filter: index === currentIndex ? 'brightness(1.12)' : 'brightness(0.58)',
                  transform: index === currentIndex ? 'scale(1.02)' : 'scale(1)',
                  transformOrigin: 'center center', // Ensures scaling grows evenly without moving top off-screen
                  opacity: index === currentIndex ? 1 : 0.72,
                  zIndex: index === currentIndex ? 2 : 1,
                  transition:
                    'transform 450ms ease, filter 450ms ease, opacity 450ms ease, box-shadow 450ms ease, background-color 450ms ease',
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
                      transition: 'filter 450ms ease',
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

          {/* MOBILE NAVIGATION BUTTONS AT BOTTOM */}
          <Box
            sx={{
              display: {
                xs: 'flex',
                md: 'none',
              },
              justifyContent: 'center',
              width: '100%',
              mt: 2,
              mb: 0.5,
              flexShrink: 0,
            }}
          >
            {renderNavigationButtons}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesCarousel;