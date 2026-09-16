import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

import {
  HeroVideoConfig,
  resolveHeroVideoUrl,
} from "../../../utils/videoLoader";

interface HeroVideoBackgroundProps {
  videos: HeroVideoConfig[];
}

const HeroVideoBackground: React.FC<
  HeroVideoBackgroundProps
> = ({ videos }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videos.length === 0) {
      return;
    }

    const currentVideo = videos[activeIndex];

    const duration =
      currentVideo?.duration &&
      currentVideo.duration > 0
        ? currentVideo.duration
        : 7500;

    const timer = window.setTimeout(() => {
      setActiveIndex(
        (previousIndex) =>
          (previousIndex + 1) % videos.length
      );
    }, duration);

    return () => {
      window.clearTimeout(timer);
    };
  }, [activeIndex, videos]);

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

  if (!videos || videos.length === 0) {
    return null;
  }

  const activeVideo = videos[activeIndex];

  const videoUrl = resolveHeroVideoUrl(
    activeVideo.fileName
  );

  console.log(
    "Playing hero video:",
    videoUrl
  );

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

      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.28)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Blue gradient */}
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

      {/* Navigation dots */}
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
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            zIndex: 3,
          }}
        >
          {videos.map((video, index) => (
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
                width: 36,
                height: 36,
                padding: 0,
                borderRadius: "50%",
                border:
                  "2px solid rgba(255,255,255,0.65)",
                backgroundColor:
                  index === activeIndex
                    ? "rgba(255,255,255,0.22)"
                    : "rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  opacity:
                    index === activeIndex ? 1 : 0.55,
                }}
              />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default HeroVideoBackground;