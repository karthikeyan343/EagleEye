import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
} from '@mui/material';

import Logo from '../../assets/images/common/image360.png';

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#000000',
        color: '#FFFFFF',
        pt: { xs: 6, md: 8 },
        pb: 4,
        overflow: 'hidden',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        {/* TOP HEADER ROW */}
        <Box
          sx={{
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
            mb: {
              xs: 4,
              md: 6,
            },
            gap: 3,
          }}
        >
          {/* LOGO */}
          <Box
            component="a"
            href="#hero"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              height: {
                xs: '40px',
                sm: '48px',
                md: '64px',
              },
              textDecoration: 'none',
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="Eagle Eye Solution Logo"
              sx={{
                height: '100%',
                width: 'auto',
                maxWidth: {
                  xs: '200px',
                  sm: '280px',
                  md: '360px',
                },
                objectFit: 'contain',
              }}
            />
          </Box>

          {/* TAGLINE */}
          <Typography
            variant="body2"
            sx={{
              fontFamily:
                "'Trueno', 'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: {
                xs: '20px',
                sm: '28px',
                md: '36px',
              },
              lineHeight: 1.15,
              color: 'rgba(234, 234, 234, 1)',
              maxWidth: {
                md: '680px',
              },
              textAlign: 'left',
            }}
          >
            Built With Purpose. Powered By Technology. Designed For What&apos;s Next.
          </Typography>
        </Box>

        {/* BLUE FOOTER SECTION */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            background:
              'linear-gradient(110deg, #5B8DFF 0%, #3975F5 28%, #145BEA 58%, #0647C9 100%)',
            borderRadius: '8px',
            overflow: 'hidden',
            mb: 4,
            pt: { xs: 4, sm: 5, md: 6 },
            pb: { xs: 2, sm: 2.5, md: 3 },
            px: { xs: 2.5, sm: 4, md: 6 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxSizing: 'border-box',
          }}
        >
          {/* NAVIGATION AREA */}
<Box
  sx={{
    width: '100%',
    maxWidth: '1200px',
    display: 'grid',

    gridTemplateColumns: {
      xs: 'repeat(2, minmax(0, 1fr))',
      sm: 'repeat(3, 1fr)',
    },

    justifyItems: {
      xs: 'start',
      sm: 'center',
    },

    columnGap: {
      xs: '20px',
      sm: '30px',
      md: '40px',
    },

    rowGap: {
      xs: '16px',
      sm: '24px',
      md: '0px',
    },

    mb: {
      xs: 3,
      sm: 5,
      md: 6,
    },

    zIndex: 3,
  }}
>
  {/* COLUMN 1 */}

  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',

      gap: {
        xs: '8px',
        sm: '12px',
        md: '12px',
      },

      alignItems: {
        xs: 'flex-start',
        sm: 'flex-start',
      },

      minWidth: 0,
    }}
  >
    <MuiLink
      href="#products"
      sx={blueLinkStyle}
    >
      Products ↗
    </MuiLink>

    <MuiLink
      href="#services"
      sx={blueLinkStyle}
    >
      Services ↗
    </MuiLink>
  </Box>

  {/* COLUMN 2 */}

  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',

      gap: {
        xs: '8px',
        sm: '12px',
        md: '12px',
      },

      alignItems: {
        xs: 'flex-start',
        sm: 'flex-start',
      },

      minWidth: 0,
    }}
  >
    <MuiLink
      href="#who-we-are"
      sx={blueLinkStyle}
    >
      About EagleEye ↗
    </MuiLink>

    <MuiLink
      href="#contact"
      sx={blueLinkStyle}
    >
      Contact ↗
    </MuiLink>
  </Box>

  {/* COLUMN 3 - CONTACT INFO */}

  <Box
    sx={{
      display: 'flex',

      /*
       * XS: stack phone and email vertically.
       * SM/MD: keep your original column layout.
       */
      flexDirection: {
        xs: 'column',
        sm: 'column',
      },

      gap: {
        xs: '8px',
        sm: '12px',
        md: '12px',
      },

      alignItems: {
        xs: 'flex-start',
        sm: 'flex-start',
      },

      minWidth: 0,

      /*
       * XS: use the complete row.
       * SM/MD: original behavior.
       */
      gridColumn: {
        xs: '1 / -1',
        sm: 'auto',
      },

      width: {
        xs: '100%',
        sm: 'auto',
      },

      /*
       * Separate contact information from
       * the navigation above.
       */
      borderTop: {
        xs: '1px solid rgba(255, 255, 255, 0.20)',
        sm: 'none',
      },

      mt: {
        xs: '2px',
        sm: 0,
      },

      pt: {
        xs: '12px',
        sm: 0,
      },
    }}
  >
    <MuiLink
      href="tel:+919876543210"
      sx={{
        ...blueLinkStyle,

        /*
         * Make sure the phone number stays
         * on one line on XS.
         */
        whiteSpace: {
          xs: 'nowrap',
          sm: 'normal',
        },
      }}
    >
      +91 987 6543 210
    </MuiLink>

    <MuiLink
      href="mailto:info@eagleeyesolution.in"
      sx={{
        ...blueLinkStyle,

        /*
         * Email can wrap only when necessary.
         */
        overflowWrap: 'anywhere',
      }}
    >
      info@eagleeyesolution.in
    </MuiLink>
  </Box>
</Box>

          {/* LARGE EAGLEEYE SOLUTION TEXT */}
          <Typography
            aria-hidden="true"
            sx={{
              width: '100%',
              margin: 0,
              padding: 0,
              whiteSpace: 'nowrap',
              fontFamily:
                "'Trueno', 'Plus Jakarta Sans', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(1.7rem, 8.2vw, 9.4rem)',
              lineHeight: 0.85,
              letterSpacing: '-0.045em',
              color: 'rgba(210, 224, 255, 0.82)',
              pointerEvents: 'none',
              userSelect: 'none',
              textAlign: 'center',
              zIndex: 2,
            }}
          >
            EAGLEEYE SOLUTION
          </Typography>
        </Box>

        {/* BOTTOM LEGAL & COPYRIGHT BAR */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            justifyContent: 'space-between',
            alignItems: {
              xs: 'flex-start',
              sm: 'center',
            },
            pt: 2,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            gap: 2,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255, 255, 255, 0.55)',
              fontSize: '12.5px',
            }}
          >
            © {new Date().getFullYear()} Eagle Eye Solution.
            AI Powered Security System
          </Typography>

          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255, 255, 255, 0.55)',
              fontSize: '12.5px',
            }}
          >
            Designed & Developed by EthicSecur
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

const blueLinkStyle = {
  display: 'inline-block',
  width: 'fit-content',
  color: '#FFFFFF',
  fontFamily: "'Manrope', sans-serif",
  fontWeight: 600,
  fontSize: {
    xs: '13px',
    sm: '13.5px',
    md: '14px',
  },
  lineHeight: 1.35,
  letterSpacing: '-0.01em',
  textDecoration: 'none',
  wordBreak: 'break-word',
  transition: 'opacity 0.2s ease, transform 0.2s ease',
  '&:hover': {
    opacity: 0.8,
    transform: 'translateX(3px)',
  },
};

export default Footer;