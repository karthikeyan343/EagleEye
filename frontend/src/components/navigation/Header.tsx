import React, { useEffect, useRef, useState } from "react";

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
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import logoSvg from "../../assets/logos/Logo1.png";
import { navigationLinks } from "../../data/navigation";

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenQuote,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  /*
   * ---------------------------------------------------------
   * NAVBAR STATES
   * ---------------------------------------------------------
   *
   * isScrolled
   *   false -> original/top navbar appearance
   *   true  -> gray floating appearance
   *
   * isHidden
   *   false -> visible
   *   true  -> hidden while scrolling down
   */
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  /*
   * Keep previous scroll position without causing
   * the scroll listener to be recreated.
   */
  const lastScrollY = useRef(0);

  /*
   * ---------------------------------------------------------
   * SCROLL DETECTION
   * ---------------------------------------------------------
   *
   * TOP:
   *   Original navbar state.
   *
   * AFTER 80px:
   *   Gray navbar state.
   *
   * SCROLL DOWN:
   *   Hide navbar.
   *
   * SCROLL UP:
   *   Show navbar.
   */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      /*
       * -------------------------------------------------------
       * TOP OF PAGE
       * -------------------------------------------------------
       *
       * Always restore the original navbar state.
       */
      if (currentScrollY <= 80) {
        setIsScrolled(false);
        setIsHidden(false);

        lastScrollY.current = currentScrollY;
        return;
      }

      /*
       * -------------------------------------------------------
       * SCROLLED STATE
       * -------------------------------------------------------
       */
      setIsScrolled(true);

      /*
       * Difference between current and previous position.
       */
      const difference =
        currentScrollY - lastScrollY.current;

      /*
       * Ignore very small movements.
       * This prevents navbar flickering.
       */
      if (Math.abs(difference) < 5) {
        return;
      }

      /*
       * -------------------------------------------------------
       * SCROLL DOWN
       * -------------------------------------------------------
       */
      if (currentScrollY > lastScrollY.current) {
        setIsHidden(true);
      }

      /*
       * -------------------------------------------------------
       * SCROLL UP
       * -------------------------------------------------------
       */
      if (currentScrollY < lastScrollY.current) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    /*
     * Initial state.
     */
    lastScrollY.current = window.scrollY;

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * Phones use drawer.
   * Tablets and desktop use normal navigation.
   */
  const isMobile = useMediaQuery(
    "(max-width: 599px)"
  );

  const navLinks = navigationLinks;

  /*
   * ---------------------------------------------------------
   * MOBILE DRAWER
   * ---------------------------------------------------------
   */
  const handleDrawerToggle = () => {
    setMobileOpen((previous) => !previous);
  };

  /*
   * ---------------------------------------------------------
   * NAVIGATION
   * ---------------------------------------------------------
   */
  const handleNavClick = (href: string) => {
    setMobileOpen(false);

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* =====================================================
          MAIN NAVBAR
          ===================================================== */}

      <Box
        component="header"
        sx={{
          /*
           * ---------------------------------------------------
           * POSITION
           * ---------------------------------------------------
           *
           * THESE ARE YOUR BASE VALUES.
           *
           * Do not change these when scrolling.
           */
          position: "fixed",

          top: {
            xs: 12,
            sm: 16,
            md: 40,
            lg: 50,
          },

          left: 0,
          right: 0,

          width: "100%",

          display: "flex",
          justifyContent: "center",

          /*
           * Your BASE horizontal padding values.
           */
px: {
  xs: isScrolled ? 12 : 8,
  sm: isScrolled ? 16 : 10,
  md: isScrolled ? 20 : 12,
  lg: isScrolled ? 6 : 12,
},

          pointerEvents: isHidden
            ? "none"
            : "auto",

          zIndex: 1200,

          /*
           * ---------------------------------------------------
           * HIDE / SHOW
           * ---------------------------------------------------
           *
           * The navbar moves upward when hidden.
           * Its top position itself never changes.
           */
          transform: isHidden
            ? "translateY(-150%)"
            : "translateY(0)",

          opacity: isHidden ? 0 : 1,

          transition:
            "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), " +
            "opacity 0.25s ease",

          /*
           * ---------------------------------------------------
           * IMPORTANT
           * ---------------------------------------------------
           *
           * We intentionally do NOT animate top.
           *
           * This prevents the navbar from jumping between
           * different vertical positions.
           */
        }}
      >
        <Box
          sx={{
            /*
             * -------------------------------------------------
             * MAIN NAVBAR WIDTH
             * -------------------------------------------------
             */
            width: "100%",

            maxWidth: {
              xs: "none",
              sm: "none",
              md: "1500px",
              lg: "1500px",
            },

            /*
             * -------------------------------------------------
             * HEIGHT
             * -------------------------------------------------
             */
            height: {
              xs: "54px",
              sm: "60px",
              md: "68px",
              lg: "70px",
            },

            boxSizing: "border-box",

            display: "flex",
            alignItems: "center",

            /*
             * -------------------------------------------------
             * INTERNAL PADDING
             * -------------------------------------------------
             *
             * When at the TOP:
             *
             * md = 20px
             * lg = 28px
             *
             * When SCROLLED:
             *
             * md = 28px
             * lg = 36px
             *
             * This gives the navbar more breathing room after
             * scrolling.
             */
            px: {
              xs: "12px",
              sm: "16px",
              md: isScrolled ? "28px" : "20px",
              lg: isScrolled ? "56px" : "38px",
            },

            borderRadius: {
              xs: "10px",
              sm: "11px",
              md: "13px",
              lg: "16px",
            },

            /*
             * -------------------------------------------------
             * BACKGROUND
             * -------------------------------------------------
             *
             * INITIAL:
             *   transparent glass
             *
             * SCROLLED:
             *   gray/dark gray glass
             */
            backgroundColor: isScrolled
              ? "rgba(34, 30, 30, 0.94)"
              : "rgba(10, 20, 34, 0.42)",

            /*
             * -------------------------------------------------
             * BORDER
             * -------------------------------------------------
             */
            border: isScrolled
              ? "1px solid rgba(128, 128, 128, 0.30)"
              : "1px solid rgba(12, 11, 11, 0.2)",

            /*
             * -------------------------------------------------
             * GLASS EFFECT
             * -------------------------------------------------
             */
            backdropFilter: "blur(14px)",

            WebkitBackdropFilter:
              "blur(14px)",

            /*
             * -------------------------------------------------
             * SHADOW
             * -------------------------------------------------
             */
            boxShadow: isScrolled
              ? "0 10px 30px rgba(0,0,0,0.20)"
              : "none",

            /*
             * Smooth visual transition when scrolling.
             */
            transition:
              "background-color 0.35s ease, " +
              "border-color 0.35s ease, " +
              "box-shadow 0.35s ease, " +
              "padding 0.35s ease",
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
              handleNavClick("#hero");
            }}
            sx={{
              display: "flex",
              alignItems: "center",

              flexShrink: 0,

              height: {
                xs: "30px",
                sm: "34px",
                md: "38px",
                lg: "50px",
              },

              textDecoration: "none",

              maxWidth: {
                xs: "110px",
                sm: "125px",
                md: "145px",
                lg: "170px",
              },
            }}
          >
            <Box
              component="img"
              src={logoSvg}
              alt="EagleEye Solution"
              sx={{
                display: "block",

                width: "100%",
                height: "100%",

                objectFit: "contain",
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

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                gap: {
                  sm: "16px",
                  md: "20px",
                  lg: "28px",
                  xl: "32px",
                },

                mx: {
                  sm: "12px",
                  md: "20px",
                  lg: "30px",
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
                    fontFamily:
                      "'Manrope', sans-serif",

                    fontSize: {
                      sm: "11px",
                      md: "13px",
                      lg: "15px",
                      xl: "16px",
                    },

                    fontWeight: 500,

                    lineHeight: 1,

                    color: "#FFFFFF",

                    textDecoration: "none",

                    whiteSpace: "nowrap",

                    transition:
                      "opacity 0.2s ease",

                    "&:hover": {
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
              marginLeft: isMobile
                ? "auto"
                : undefined,

              flexShrink: 0,

              display: "flex",
              alignItems: "center",
            }}
          >
            {/* =================================================
                DESKTOP GET QUOTE
                ================================================= */}

            {!isMobile && (
              <Button
                onClick={onOpenQuote}
                sx={{
                  width: {
                    sm: "90px",
                    md: "102px",
                    lg: "126px",
                  },

                  height: {
                    sm: "34px",
                    md: "40px",
                    lg: "46px",
                  },

                  minWidth: 0,

                  px: {
                    sm: "8px",
                    md: "12px",
                    lg: "24px",
                  },

                  borderRadius: {
                    sm: "9px",
                    md: "10px",
                    lg: "12px",
                  },

                  backgroundColor: "#FFFFFF",

                  color: "#111111",

                  fontFamily:
                    "'Manrope', sans-serif",

                  fontSize: {
                    sm: "10px",
                    md: "12px",
                    lg: "16px",
                  },

                  fontWeight: 500,

                  textTransform: "none",

                  boxShadow: "none",

                  whiteSpace: "nowrap",

                  "&:hover": {
                    backgroundColor: "#FFFFFF",
                    boxShadow: "none",
                  },
                }}
              >
                Get Quote
              </Button>
            )}

            {/* =================================================
                MOBILE MENU
                ================================================= */}

            {isMobile && (
              <IconButton
                onClick={handleDrawerToggle}
                aria-label="open menu"
                sx={{
                  color: "#FFFFFF",
                  p: "5px",
                }}
              >
                <MenuIcon
                  sx={{
                    fontSize: "22px",
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
              xs: "280px",
              sm: "320px",
            },

            backgroundColor: "#FFFFFF",

            color: "#000000",

            p: 3,
          },
        }}
      >
        {/* =================================================
            DRAWER HEADER
            ================================================= */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            mb: 4,
          }}
        >
          <Typography
            sx={{
              fontFamily:
                "'Manrope', sans-serif",

              fontSize: "20px",

              fontWeight: 700,
            }}
          >
            Menu
          </Typography>

          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              color: "#000000",
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* =================================================
            MOBILE NAVIGATION LINKS
            ================================================= */}

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
                onClick={() =>
                  handleNavClick(link.href)
                }
                sx={{
                  minHeight: "50px",

                  borderRadius: "10px",

                  px: 2,

                  "&:hover": {
                    backgroundColor:
                      "rgba(164, 158, 203, 0.1)",

                    color: "#0052FF",
                  },
                }}
              >
                <ListItemText
                  primary={link.title}
                  primaryTypographyProps={{
                    fontFamily:
                      "'Manrope', sans-serif",

                    fontSize: "17px",

                    fontWeight: 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* =================================================
            MOBILE GET QUOTE
            ================================================= */}

        <Box sx={{ mt: 4 }}>
          <Button
            fullWidth
            onClick={() => {
              setMobileOpen(false);
              onOpenQuote();
            }}
            endIcon={<ArrowForwardIcon />}
            sx={{
              height: "48px",

              borderRadius: "10px",

              backgroundColor: "#FFFFFF",

              color: "#0052FF",

              fontFamily:
                "'Manrope', sans-serif",

              fontSize: "15px",

              fontWeight: 700,

              textTransform: "none",

              boxShadow: "none",

              "&:hover": {
                backgroundColor: "#FFFFFF",
                boxShadow: "none",
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