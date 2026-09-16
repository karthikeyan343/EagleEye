const HERO_VIDEO_BASE_PATH = "/clips/Hero";

export interface HeroVideoConfig {
  id: string;
  fileName: string;
  title?: string;
  headline?: string;
  subtitle?: string;
  duration?: number;
  overlayOpacity?: number;
}

/**
 * Resolves a hero video filename to its public URL.
 *
 * Videos are stored in:
 * public/clips/Hero/
 *
 * Therefore Vite serves them from:
 * /clips/Hero/
 */
export const resolveHeroVideoUrl = (
  fileNameOrPath: string
): string => {
  if (!fileNameOrPath) {
    return "";
  }

  // Already a full URL
  if (
    fileNameOrPath.startsWith("http://") ||
    fileNameOrPath.startsWith("https://")
  ) {
    return fileNameOrPath;
  }

  // Remove any existing path and keep only filename
  const fileName =
    fileNameOrPath.split("/").pop() || fileNameOrPath;

  return `${HERO_VIDEO_BASE_PATH}/${fileName}`;
};