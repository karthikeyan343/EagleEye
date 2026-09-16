import React, { useEffect, useRef, useState } from "react";
import { keyframes } from "@emotion/react";
import { Box } from "@mui/material";

import {
  HeroVideoConfig,
  resolveHeroVideoUrl,
} from "../../../utils/videoLoader";

/* =========================================================
   CIRCULAR PROGRESS ANIMATION

   The line starts at 0%
   and progressively draws the complete circle.
   ========================================================= */

const circleProgress = keyframes`
  from {
    stroke-dashoffset: 100;
  }

  to {
    stroke-dashoffset: 0;
  }
`;

/* =========================================================
   PROPS
   ========================================================= */

interface HeroVideoBackgroundProps {
  videos: HeroVideoConfig[];
}

/* =========================================================
   COMPONENT
   ========================================================= */

const HeroVideoBackground: React.FC<
  HeroVideoBackgroundProps
> = ({ videos }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  /* =======================================================
     NO VIDEOS
     ======================================================= */

  if (!videos || videos.length === 0) {
    return null;
  }

  /* =======================================================
     ACTIVE VIDEO
     ======================================================= */

  const activeVideo = videos[activeIndex];

  /* =======================================================
     DURATION

     Example:
     7500 = 7.5 seconds
     6000 = 6 seconds
     ======================================================= */

  const duration =
    activeVideo?.duration &&
    activeVideo.duration > 0
      ? activeVideo.duration
      : 7500;

  /* =======================================================
     VIDEO URL
     ======================================================= */

  const videoUrl = resolveHeroVideoUrl(
    activeVideo.fileName
  );

  /* =======================================================
     PLAY ACTIVE VIDEO

     Runs whenever activeIndex changes.
     ======================================================= */

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.load();

    video.play().catch((error) => {
      console.warn(
        "Hero video autoplay failed:",
        error
      );
    });
  }, [activeIndex]);

  /* =======================================================
     LOG
     ======================================================= */

  console.log(
    "Playing hero video:",
    videoUrl
  );

  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,

        width: "100%",
        height: "100%",

        overflow: "hidden",

        zIndex: 0,

        backgroundColor: "#001B5C",
      }}
    >
      {/* ===================================================
          BACKGROUND VIDEO
          =================================================== */}

      <Box
        component="video"
        ref={videoRef}
        key={videoUrl}
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={() => {
          console.log(
            "Hero video loaded successfully:",
            videoUrl
          );
        }}
        onError={() => {
          console.error(
            "Hero video failed to load:",
            videoUrl
          );
        }}
        sx={{
          position: "absolute",
          inset: 0,

          width: "100%",
          height: "100%",

          objectFit: "cover",
          objectPosition: "center",

          display: "block",

          zIndex: 0,
        }}
      />

      {/* ===================================================
          DARK OVERLAY
          =================================================== */}

      <Box
        sx={{
          position: "absolute",
          inset: 0,

          backgroundColor:
            "rgba(0, 0, 0, 0.28)",

          zIndex: 1,

          pointerEvents: "none",
        }}
      />

      {/* ===================================================
          BLUE GRADIENT
          =================================================== */}

      <Box
        sx={{
          position: "absolute",
          inset: 0,

          background:
            "linear-gradient(180deg, rgba(0, 35, 110, 0.12) 0%, rgba(0, 20, 70, 0.35) 100%)",

          zIndex: 2,

          pointerEvents: "none",
        }}
      />

      {/* ===================================================
          VIDEO NAVIGATION
          =================================================== */}

      {videos.length > 1 && (
        <Box
          sx={{
            position: "absolute",

            right: {
              xs: 16,
              sm: 20,
              md: 24,
            },

            top: "50%",

            transform:
              "translateY(-50%)",

            display: "flex",

            flexDirection: "column",

            gap: 2,

            zIndex: 3,
          }}
        >
          {videos.map((video, index) => {
            const isActive =
              index === activeIndex;

            return (
              <Box
                key={video.id || index}
                component="button"
                type="button"
                onClick={() => {
                  setActiveIndex(index);
                }}
                aria-label={`Show hero video ${
                  index + 1
                }`}
                sx={{
                  position: "relative",

                  width: 36,
                  height: 36,

                  padding: 0,

                  borderRadius: "50%",

                  border:
                    "2px solid rgba(255,255,255,0.65)",

                  backgroundColor: isActive
                    ? "rgba(255,255,255,0.15)"
                    : "rgba(255,255,255,0.08)",

                  display: "flex",

                  alignItems: "center",

                  justifyContent:
                    "center",

                  cursor: "pointer",

                  boxSizing: "border-box",

                  transition:
                    "background-color 0.2s ease",

                  "&:hover": {
                    backgroundColor:
                      "rgba(255,255,255,0.18)",
                  },
                }}
              >
                {/* =================================================
                    ACTIVE CIRCULAR PROGRESS
                    ================================================= */}

                {isActive ? (
                  <Box
                    component="svg"
                    key={`progress-${activeIndex}`}
                    viewBox="0 0 36 36"
                    sx={{
                      position: "absolute",

                      top: 0,
                      left: 0,

                      width: "100%",
                      height: "100%",

                      transform:
                        "rotate(-90deg)",

                      pointerEvents: "none",
                    }}
                  >
                    {/* =============================================
                        CIRCULAR PROGRESS LINE
                        ============================================= */}

                    <Box
                      component="circle"
                      cx="18"
                      cy="18"
                      r="14"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      pathLength="100"
                      strokeDasharray="100"
                      strokeDashoffset="100"
                      sx={{
                        animation: `${circleProgress} ${duration}ms linear 1`,

                        filter:
                          "drop-shadow(0 0 2px rgba(255,255,255,0.7))",
                      }}
                      onAnimationEnd={() => {
                        /*
                         * IMPORTANT:
                         *
                         * The next video starts ONLY
                         * after the circular line has
                         * completed 100%.
                         */

                        if (
                          index === activeIndex
                        ) {
                          setActiveIndex(
                            (previousIndex) =>
                              (previousIndex + 1) %
                              videos.length
                          );
                        }
                      }}
                    />

                    {/* =============================================
                        CENTER DOT
                        ============================================= */}

                    <Box
                      component="circle"
                      cx="18"
                      cy="18"
                      r="4"
                      fill="#ffffff"
                      sx={{
                        transform:
                          "rotate(90deg)",
                        transformOrigin:
                          "18px 18px",
                      }}
                    />
                  </Box>
                ) : (
                  /* =================================================
                     INACTIVE DOT
                     ================================================= */

                  <Box
                    sx={{
                      width: 8,
                      height: 8,

                      borderRadius:
                        "50%",

                      backgroundColor:
                        "#ffffff",

                      opacity: 0.55,
                    }}
                  />
                )}
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default HeroVideoBackground;