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
                xs: '48px',
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
                width: {
                  xs: '220px',
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
                xs: '24px',
                sm: '30px',
                md: '36px',
              },
              lineHeight: '100%',
              letterSpacing: '0%',
              color: 'rgba(234, 234, 234, 1)',
              maxWidth: {
                md: '680px',
              },
              textAlign: {
                xs: 'left',
                md: 'left',
              },
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
            height: {
              xs: '175px',
              sm: '185px',
              md: '195px',
            },
            background:
              'linear-gradient(110deg, #5B8DFF 0%, #3975F5 28%, #145BEA 58%, #0647C9 100%)',
            borderRadius: '6px',
            overflow: 'hidden',
            mb: 4,
            boxSizing: 'border-box',
          }}
        >
          {/* NAVIGATION AREA */}
          <Box
            sx={{
              position: 'absolute',
              top: {
                xs: '18px',
                sm: '20px',
                md: '22px',
              },
              left: {
                xs: '20px',
                sm: '25px',
                md: '28px',
              },
              right: {
                xs: '20px',
                sm: '25px',
                md: '28px',
              },
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr 1fr',
                sm: '1fr 1fr 1fr 1fr',
              },
              columnGap: {
                xs: '25px',
                sm: '35px',
                md: '50px',
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
                  xs: '12px',
                  sm: '13px',
                  md: '14px',
                },
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
                  xs: '12px',
                  sm: '13px',
                  md: '14px',
                },
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

            {/* COLUMN 3 */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: {
                  xs: '12px',
                  sm: '13px',
                  md: '14px',
                },
              }}
            >
              <MuiLink
                href="#story"
                sx={blueLinkStyle}
              >
                Our Story ↗
              </MuiLink>

              <MuiLink
                href="#featured-works"
                sx={blueLinkStyle}
              >
                Featured Works ↗
              </MuiLink>
            </Box>

            {/* COLUMN 4 */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: {
                  xs: '12px',
                  sm: '13px',
                  md: '14px',
                },
              }}
            >
              <MuiLink
                href="tel:+919876543210"
                sx={blueLinkStyle}
              >
                +91 987 6543 210
              </MuiLink>

              <MuiLink
                href="mailto:info@eagleeyesolution.in"
                sx={blueLinkStyle}
              >
                info@eagleeyesolution.in
              </MuiLink>
            </Box>
          </Box>

          {/* SPACE BETWEEN NAVIGATION AND LARGE TEXT */}
          <Box
            sx={{
              position: 'absolute',
              top: {
                xs: '85px',
                sm: '88px',
                md: '92px',
              },
              left: 0,
              right: 0,
              height: {
                xs: '20px',
                md: '25px',
              },
              zIndex: 1,
            }}
          />

          {/* LARGE EAGLEEYE SOLUTION TEXT */}
          <Typography
            aria-hidden="true"
            sx={{
              position: 'absolute',
              left: {
                xs: '14px',
                sm: '18px',
                md: '22px',
              },
              bottom: {
                xs: '12px',
                sm: '14px',
                md: '16px',
              },
              margin: 0,
              padding: 0,
              whiteSpace: 'nowrap',
              fontFamily:
                "'Trueno', 'Plus Jakarta Sans', sans-serif",
              fontWeight: 900,
              fontSize: {
                xs: '35px',
                sm: '8.2vw',
                md: '8.5vw',
              },
              lineHeight: 0.85,
              letterSpacing: '-0.045em',
              color: 'rgba(210, 224, 255, 0.82)',
              pointerEvents: 'none',
              userSelect: 'none',
              zIndex: 2,
            }}
          >
            EAGLEEYE SOLUTION
          </Typography>
        </Box>

        {/* LEGAL DISCLAIMER */}
        <Box
          sx={{
            mb: 4,
            px: 0.5,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: {
                xs: '11px',
                md: '12.5px',
              },
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.55)',
            }}
          >
            By accessing or using the EagleEye Solution website and services,
            you agree to comply with our Terms & Conditions, Privacy Policy,
            and Pricing Policy. These policies outline the terms governing
            the use of our website and services, our responsibilities and
            limitations, how we collect, use, store, and protect user and
            client information, and how pricing, payments, subscriptions,
            refunds, cancellations, and additional service charges are
            handled. Service availability, features, deliverables,
            timelines, and pricing may vary depending on the scope and
            requirements of each project. By engaging with EagleEye
            Solution, you acknowledge that you have reviewed and accepted
            these policies and any specific terms agreed upon with us.
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
    xs: '12px',
    sm: '13px',
    md: '14px',
  },
  lineHeight: 1.35,
  letterSpacing: '-0.01em',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'opacity 0.2s ease, transform 0.2s ease',
  '&:hover': {
    opacity: 0.8,
    transform: 'translateX(3px)',
  },
};

export default Footer;
