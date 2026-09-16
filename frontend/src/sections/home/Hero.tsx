import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import HeroVideoBackground from "./components/HeroVideoBackground";
import heroVideosData from "../../data/heroVideos.json";

interface HeroProps {
  onExploreProducts: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onExploreServices,
}) => {
  return (
    <Box
      id="hero"
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: 0,
        overflow: "hidden",
        borderRadius: "inherit",
        color: "#ffffff",
      }}
    >
      {/* =====================================================
          BACKGROUND VIDEO
          ===================================================== */}

      <HeroVideoBackground videos={heroVideosData} />

      {/* =====================================================
          HERO CONTENT
          ===================================================== */}

      <Box
        sx={{
          position: "relative",
          zIndex: 4,

          width: "100%",
          height: "100%",

          boxSizing: "border-box",

          px: {
            xs: 3,
            sm: 4,
            md: 5,
            lg: 6,
          },

          pb: {
            xs: 4,
            sm: 5,
            md: 5,
            lg: 5,
          },

          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        {/* =================================================
            BOTTOM CONTENT
            ================================================= */}

        <Box
          sx={{
            width: "100%",

            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: "1.2fr 1fr",
            },

            alignItems: "end",

            justifyContent: "space-between",

            gap: {
              xs: 3,
              md: 4,
            },
          }}
        >
          {/* =================================================
              LEFT — HEADING
              ================================================= */}

          <Box>
            <Typography
              component="h1"
              sx={{
                m: 0,

                fontFamily:
                  '"Trueno", "Sora", sans-serif',

                fontSize: {
                  xs: "2rem",
                  sm: "2.6rem",
                  md: "3.2rem",
                  lg: "3.75rem",
                },

                fontWeight: 500,

                lineHeight: {
                  xs: 1.15,
                  sm: 1.12,
                  md: 1.08,
                  lg: 1.08,
                },

                letterSpacing: "-0.025em",

                color: "#ffffff",

                textShadow:
                  "0 2px 12px rgba(0, 0, 0, 0.45)",
              }}
            >
              AI to protect the
              <br />
              physical world
            </Typography>
          </Box>

          {/* =================================================
              RIGHT — DESCRIPTION + BUTTONS
              ================================================= */}

          <Box
            sx={{
              width: "100%",
              maxWidth: {
                xs: "100%",
                md: 550,
              },

              justifySelf: {
                xs: "start",
                md: "end",
              },
            }}
          >
            <Typography
              component="p"
              sx={{
                m: 0,

                mb: {
                  xs: 2,
                  sm: 2.2,
                  md: 2.5,
                },

                fontFamily:
                  '"Sora", sans-serif',

                color:
                  "rgba(255, 255, 255, 0.92)",

                fontSize: {
                  xs: "0.875rem",
                  sm: "0.9375rem",
                  md: "1.05rem",
                },

                fontWeight: 400,

                lineHeight: 1.55,

                textShadow:
                  "0 1px 8px rgba(0, 0, 0, 0.5)",
              }}
            >
              Empowering industries with cutting-edge
              proactive AI security solutions.
              Transforming raw surveillance into
              actionable intelligence in real time.
            </Typography>

            {/* =================================================
                MENTOR BUTTONS
                ================================================= */}

            <Stack
              direction="row"
              spacing={{
                xs: 1.5,
                sm: 1.5,
                md: 1.8,
              }}
              sx={{
                alignItems: "center",
              }}
            >
              {/* =================================================
                  ABOUT US — MENTOR STYLE
                  ================================================= */}

              <Button
                onClick={onExploreServices}
                variant="contained"
                sx={{
                  minWidth: {
                    xs: 105,
                    sm: 115,
                    md: 130,
                  },

                  height: {
                    xs: 42,
                    sm: 46,
                    md: 50,
                  },

                  px: {
                    xs: 2,
                    sm: 2.3,
                    md: 2.5,
                  },

                  borderRadius: {
                    xs: "8px",
                    sm: "9px",
                    md: "10px",
                  },

                  backgroundColor: "#ffffff",

                  color: "#111111",

                  border: "1px solid #ffffff",

                  textTransform: "none",

                  fontFamily:
                    '"Manrope", sans-serif',

                  fontSize: {
                    xs: "0.9rem",
                    sm: "0.95rem",
                    md: "1rem",
                  },

                  fontWeight: 500,

                  boxShadow: "none",

                  whiteSpace: "nowrap",

                  "&:hover": {
                    backgroundColor: "#ffffff",
                    color: "#111111",
                    boxShadow: "none",
                  },
                }}
              >
                About us
              </Button>

              {/* =================================================
                  EXPLORE — MENTOR STYLE
                  ================================================= */}

              <Button
                onClick={onExploreProducts}
                variant="outlined"
                endIcon={
                  <ArrowForwardIcon
                    sx={{
                      fontSize: {
                        xs: 16,
                        sm: 17,
                        md: 18,
                      },
                    }}
                  />
                }
                sx={{
                  minWidth: {
                    xs: 110,
                    sm: 120,
                    md: 140,
                  },

                  height: {
                    xs: 42,
                    sm: 46,
                    md: 50,
                  },

                  px: {
                    xs: 2,
                    sm: 2.3,
                    md: 2.5,
                  },

                  borderRadius: {
                    xs: "8px",
                    sm: "9px",
                    md: "10px",
                  },

                  /*
                   * Mentor button:
                   * dark / transparent background
                   * white text
                   * white border
                   */
                  backgroundColor:
                    "rgba(0, 0, 0, 0.25)",

                  color: "#ffffff",

                  border:
                    "1px solid rgba(255, 255, 255, 0.7)",

                  backdropFilter: "blur(6px)",

                  WebkitBackdropFilter:
                    "blur(6px)",

                  textTransform: "none",

                  fontFamily:
                    '"Manrope", sans-serif',

                  fontSize: {
                    xs: "0.9rem",
                    sm: "0.95rem",
                    md: "1rem",
                  },

                  fontWeight: 500,

                  whiteSpace: "nowrap",

                  "& .MuiButton-endIcon": {
                    color: "#ffffff",
                    marginLeft: {
                      xs: 0.5,
                      sm: 0.7,
                      md: 1,
                    },
                  },

                  "&:hover": {
                    backgroundColor:
                      "rgba(255, 255, 255, 0.18)",

                    color: "#ffffff",

                    borderColor: "#ffffff",
                  },
                }}
              >
                Explore
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;