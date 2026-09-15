import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import logoSvg from '../../assets/logos/Logo1.png';
import { navigationLinks } from '../../data/navigation';

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenQuote,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  /*
   * Tracks whether the page has been scrolled.
   *
   * false = transparent/glass navbar
   * true  = blue navbar
   */
  const [, setIsScrolled] = useState(false);

  /*
   * Detect page scrolling.
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /*
   * IMPORTANT:
   * Only phones use the drawer.
   * Tablets still receive desktop navigation, but smaller.
   */
  const isMobile = useMediaQuery('(max-width: 599px)');

  const navLinks = navigationLinks;

  const handleDrawerToggle = () => {
    setMobileOpen((previous) => !previous);
  };

  const handleNavClick = (href: string) => {
    setMobileOpen(false);

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      {/* =====================================================
          FIXED HEADER
      ===================================================== */}
      <Box
        component="header"
        sx={{
          position: 'absolute',
          top: {
            xs: '12px',
            sm: '16px',
            md: '20px',
            lg: '23px',
          },
          left: {
            xs: '12px',
            sm: '16px',
            md: '20px',
            lg: '24px',
          },
          right: {
            xs: '12px',
            sm: '16px',
            md: '20px',
            lg: '24px',
          },
          zIndex: 20,
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: {
              xs: '54px',
              sm: '60px',
              md: '68px',
              lg: '70px',
            },
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            px: {
              xs: '12px',
              sm: '16px',
              md: '20px',
              lg: '28px',
            },
            borderRadius: {
              xs: '10px',
              sm: '11px',
              md: '13px',
              lg: '16px',
            },
            backgroundColor: 'rgba(0, 0, 0, 0.20)',
            border: '1px solid rgba(255,255,255,0.20)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            transition: 'background-color 0.3s ease',
          }}
        >
          {/* =================================================
              LOGO
          ================================================= */}
          <Box
            component="a"
            href="#hero"
            onClick={(event) => {
              event.preventDefault();
              handleNavClick('#hero');
            }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
              height: {
                xs: '30px',
                sm: '34px',
                md: '38px',
                lg: '50px',
              },
              textDecoration: 'none',
              maxWidth: {
                xs: '110px',
                sm: '125px',
                md: '145px',
                lg: '170px',
              },
            }}
          >
            <Box
              component="img"
              src={logoSvg}
              alt="EagleEye Solution"
              sx={{
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </Box>

          {/* =================================================
              DESKTOP / TABLET NAVIGATION
          ================================================= */}
          {!isMobile && (
            <Box
              component="nav"
              sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: {
                  sm: '16px',
                  md: '20px',
                  lg: '28px',
                  xl: '32px',
                },
                mx: {
                  sm: '12px',
                  md: '20px',
                  lg: '30px',
                },
                minWidth: 0,
              }}
            >
              {navLinks.map((link) => (
                <Typography
                  key={link.title}
                  component="a"
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavClick(link.href);
                  }}
                  sx={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: {
                      sm: '11px',
                      md: '13px',
                      lg: '15px',
                      xl: '16px',
                    },
                    fontWeight: 500,
                    lineHeight: 1,
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    '&:hover': {
                      opacity: 0.7,
                    },
                  }}
                >
                  {link.title}
                </Typography>
              ))}
            </Box>
          )}

          {/* =================================================
              GET QUOTE / MOBILE MENU
          ================================================= */}
          <Box
            sx={{
              marginLeft: isMobile ? 'auto' : undefined,
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {/* DESKTOP GET QUOTE */}
            {!isMobile && (
              <Button
                onClick={onOpenQuote}
                sx={{
                  width: {
                    sm: '90px',
                    md: '102px',
                    lg: '126px',
                  },
                  height: {
                    sm: '34px',
                    md: '40px',
                    lg: '46px',
                  },
                  minWidth: 0,
                  px: {
                    sm: '8px',
                    md: '12px',
                    lg: '24px',
                  },
                  borderRadius: {
                    sm: '9px',
                    md: '10px',
                    lg: '12px',
                  },
                  backgroundColor: '#FFFFFF',
                  color: '#111111',
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: {
                    sm: '10px',
                    md: '12px',
                    lg: '16px',
                  },
                  fontWeight: 500,
                  textTransform: 'none',
                  boxShadow: 'none',
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    backgroundColor: '#FFFFFF',
                    boxShadow: 'none',
                  },
                }}
              >
                Get Quote
              </Button>
            )}

            {/* MOBILE MENU BUTTON */}
            {isMobile && (
              <IconButton
                onClick={handleDrawerToggle}
                aria-label="open menu"
                sx={{
                  color: '#FFFFFF',
                  p: '5px',
                }}
              >
                <MenuIcon
                  sx={{
                    fontSize: '22px',
                  }}
                />
              </IconButton>
            )}
          </Box>
        </Box>
      </Box>

      {/* =====================================================
          MOBILE DRAWER
      ===================================================== */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: {
              xs: '280px',
              sm: '320px',
            },
            backgroundColor: 'white',
            color: 'black',
            p: 3,
          },
        }}
      >
        {/* DRAWER HEADER */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 4,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: '20px',
              fontWeight: 700,
            }}
          >
            Menu
          </Typography>

          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              color: '#000000',
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* MOBILE NAVIGATION LINKS */}
        <List sx={{ p: 0 }}>
          {navLinks.map((link) => (
            <ListItem
              key={link.title}
              disablePadding
              sx={{
                mb: 1,
              }}
            >
              <ListItemButton
                onClick={() => handleNavClick(link.href)}
                sx={{
                  minHeight: '50px',
                  borderRadius: '10px',
                  px: 2,
                  '&:hover': {
                    backgroundColor: 'rgba(164, 158, 203, 0.1)',
                    color: 'blue',
                  },
                }}
              >
                <ListItemText
                  primary={link.title}
                  primaryTypographyProps={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '17px',
                    fontWeight: 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* MOBILE GET QUOTE */}
        <Box sx={{ mt: 4 }}>
          <Button
            fullWidth
            onClick={() => {
              setMobileOpen(false);
              onOpenQuote();
            }}
            endIcon={<ArrowForwardIcon />}
            sx={{
              height: '48px',
              borderRadius: '10px',
              backgroundColor: '#FFFFFF',
              color: '#0052FF',
              fontFamily: "'Manrope', sans-serif",
              fontSize: '15px',
              fontWeight: 700,
              textTransform: 'none',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#FFFFFF',
                boxShadow: 'none',
              },
            }}
          >
            Get Quote
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
