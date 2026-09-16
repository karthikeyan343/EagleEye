import React, {
  useRef,
  useEffect,
  useCallback,
} from "react";

import {
  Typography,
  Button,
  Box,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  productsData,
} from "../../data/products";

import { ProductCard } from "../../components/cards/ProductCard";

import Camera from "../../assets/images/products/Camera.png";
import Breathe from "../../assets/images/products/breathe.png";
import ANPR from "../../assets/images/products/anpr.png";

gsap.registerPlugin(ScrollTrigger);

export const ProductsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  /*
   * ================================
   * SCROLL TO SECTION
   * ================================
   */

  const scrollTo = useCallback((id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  /*
   * ================================
   * PRODUCT IMAGES
   * ================================
   */

  const productImages = [
    ANPR,
    Breathe,
    Camera,
  ];

  /*
   * ================================
   * GSAP HORIZONTAL SCROLL
   * ================================
   */

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) {
      return;
    }

    const ctx = gsap.context(() => {
      /*
       * Calculate how far the product
       * track needs to move horizontally.
       */

      const calculateDistance = () => {
        const trackWidth = track.scrollWidth;
        const windowWidth = window.innerWidth;

        return Math.max(
          0,
          trackWidth -
            windowWidth +
            (windowWidth > 1200 ? 120 : 60)
        );
      };

      const scrollDistance = calculateDistance();

      /*
       * Only create horizontal animation
       * when there is actually content
       * outside the viewport.
       */

      if (scrollDistance > 0) {
        const horizontalTween = gsap.to(track, {
          x: () => -calculateDistance(),
          ease: "none",

          scrollTrigger: {
            trigger: section,

            /*
             * Keep the section fixed while
             * the horizontal cards move.
             */

            pin: true,

            /*
             * Smooth connection between
             * vertical scroll and horizontal movement.
             */

            scrub: 0.8,

            start: "top top",

            /*
             * The amount of vertical scrolling
             * required to complete horizontal movement.
             */

            end: () => `+=${calculateDistance()}`,

            anticipatePin: 1,

            invalidateOnRefresh: true,
          },
        });

        /*
         * ================================
         * IMAGE PARALLAX
         * ================================
         */

        const cardImages = track.querySelectorAll(
          ".product-parallax-img"
        );

        cardImages.forEach((img) => {
          gsap.fromTo(
            img,
            {
              xPercent: -5,
            },
            {
              xPercent: 5,
              ease: "none",

              scrollTrigger: {
                trigger: section,

                start: "top top",

                end: () =>
                  `+=${calculateDistance()}`,

                scrub: 0.8,
              },
            }
          );
        });

        return () => {
          horizontalTween.kill();
        };
      }
    }, sectionRef);

    /*
     * Refresh GSAP when browser size changes.
     */

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      ctx.revert();

      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  /*
   * ================================
   * RENDER
   * ================================
   */

  return (
    <Box
      id="products"
      ref={sectionRef}
      component="section"
      sx={{
        width: "100%",

        /*
         * White section
         */

        backgroundColor: "#FFFFFF",

        /*
         * Full viewport section
         */

        minHeight: "100vh",
        height: "100vh",

        display: "flex",
        flexDirection: "column",

        justifyContent: "space-between",

        /*
         * Keep horizontal scrolling clipped,
         * but give the product track enough
         * vertical space for card titles.
         */

        overflow: "hidden",

        position: "relative",

        boxSizing: "border-box",

        /*
         * Responsive top spacing
         */

        pt: {
          xs: "40px",
          sm: "50px",
          md: "60px",
        },

        /*
         * Bottom spacing
         */

        pb: {
          xs: 2,
          sm: 2.5,
          md: 3.5,
        },
      }}
    >
      {/* =========================================
          SECTION HEADER
          ========================================= */}

      <Box
        sx={{
          width: "100%",

          px: {
            xs: "18px",
            sm: "22px",
            md: "24px",
            lg: "40px",
          },

          display: "flex",

          flexDirection: {
            xs: "column",
            md: "row",
          },

          justifyContent: "space-between",

          alignItems: {
            xs: "flex-start",
            md: "flex-end",
          },

          gap: 2,

          mb: {
            xs: 1.5,
            md: 2,
          },

          boxSizing: "border-box",
        }}
      >
        {/* =========================================
            LEFT CONTENT
            ========================================= */}

        <Box
          sx={{
            maxWidth: {
              xs: "100%",
              md: "680px",
            },
          }}
        >
          <Typography
            component="h2"
            sx={{
              margin: 0,

              fontFamily:
                '"Trueno", "Plus Jakarta Sans", "Outfit", "Montserrat", sans-serif',

              fontSize: {
                xs: "28px",
                sm: "32px",
                md: "36px",
              },

              fontWeight: 500,

              fontStyle: "normal",

              color: "#303030",

              lineHeight: 1.15,

              letterSpacing: "0%",
            }}
          >
            Proactive physical security,
            <br />

            <Box
              component="span"
              sx={{
                color: "#0052FF",
                fontWeight: 500,
              }}
            >
              powered by AI.
            </Box>
          </Typography>

          <Typography
            component="p"
            sx={{
              margin: 0,

              marginTop: "12px",

              fontFamily:
                '"Manrope", sans-serif',

              color: "#737373",

              fontSize: {
                xs: "14px",
                sm: "15px",
                md: "16px",
              },

              fontWeight: 400,

              lineHeight: 1.5,

              maxWidth: "520px",
            }}
          >
            Transforming raw surveillance feeds
            into actionable, real-time intelligence.
            Detect anomalies, prevent incidents, and
            protect critical assets.
          </Typography>
        </Box>

        {/* =========================================
            EXPLORE SERVICES BUTTON
            ========================================= */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",

            flexShrink: 0,
          }}
        >
          <Button
            onClick={() =>
              scrollTo("services")
            }
            endIcon={
              <ArrowForwardIcon
                sx={{
                  fontSize: 18,
                }}
              />
            }
            sx={{
              borderRadius: "12px",

              backgroundColor: "#0C0F19",

              color: "#FFFFFF",

              fontFamily:
                '"Manrope", sans-serif',

              fontWeight: 600,

              fontSize: "14px",

              px: {
                xs: 2.5,
                sm: 3,
                md: 3.5,
              },

              py: 1.5,

              minHeight: "48px",

              whiteSpace: "nowrap",

              textTransform: "none",

              cursor: "pointer",

              gap: "8px",

              boxShadow: "none",

              "& .MuiButton-endIcon": {
                marginLeft: "8px",
                marginRight: 0,

                "& svg": {
                  fontSize: "18px",
                },
              },

              "&:hover": {
                backgroundColor: "#1E293B",

                color: "#FFFFFF",

                boxShadow: "none",

                transform:
                  "translateY(-2px)",
              },

              transition:
                "transform 0.25s ease, background-color 0.25s ease",
            }}
          >
            Explore Services
          </Button>
        </Box>
      </Box>

      {/* =========================================
          HORIZONTAL PRODUCTS
          ========================================= */}

      <Box
        sx={{
          width: "100%",

          /*
           * Allow card content to remain visible.
           */

          overflow: "visible",

          position: "relative",

          px: {
            xs: "18px",
            sm: "22px",
            md: "32px",
            lg: "40px",
          },

          my: "auto",

          boxSizing: "border-box",

          /*
           * Extra bottom space for product titles.
           */

          pb: {
            xs: "15px",
            sm: "20px",
            md: "25px",
          },
        }}
      >
        <Box
          ref={trackRef}
          sx={{
            display: "flex",

            gap: {
              xs: "20px",
              sm: "24px",
              md: "28px",
            },

            width: "max-content",

            alignItems: "flex-start",

            py: 0,

            willChange: "transform",

            /*
             * Extra space below every card.
             */

            pb: {
              xs: "25px",
              sm: "30px",
              md: "35px",
            },
          }}
        >
          {productsData.map(
            (product, index) => {
              /*
               * Preserve existing image
               * mapping for the first 3 products.
               */

              const productWithImage =
                index < productImages.length
                  ? {
                      ...product,
                      image:
                        productImages[index],
                    }
                  : product;

              return (
                <Box
                  key={product.id}
                  sx={{
                    width: {
                      xs: "340px",
                      sm: "320px",
                      md: "350px",
                      lg: "360px",
                    },

                    /*
                     * Increased height so the
                     * product title has enough room.
                     */

                    height: {
                      xs: "445px",
                      sm: "385px",
                      md: "415px",
                      lg: "435px",
                    },

                    borderRadius: {
                      xs: "22px",
                      md: "26px",
                    },

                    /*
                     * Do not cut the title.
                     */

                    overflow: "visible",

                    position: "relative",

                    flexShrink: 0,

                    boxSizing: "border-box",
                  }}
                >
                  <ProductCard
                    product={
                      productWithImage
                    }
                  />
                </Box>
              );
            }
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductsSection;