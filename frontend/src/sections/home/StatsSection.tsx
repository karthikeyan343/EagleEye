import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { statsData, foundedInfo } from '../../data/statistics';

export const StatsSection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        py: { xs: 4, md: '28px' },
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1552px',
          height: { xs: 'auto', md: '521px' },
          p: '24px',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Grid
          container
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '24px',
            overflow: 'hidden',
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 12px 40px rgba(0, 0, 0, 0.08)',
          }}
        >
          {/* Left Block — Mission & 2023 FOUNDED */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              p: { xs: 4, md: '40px' },
              borderRight: { md: '1px solid rgba(0, 0, 0, 0.06)' },
              borderBottom: { xs: '1px solid rgba(0, 0, 0, 0.06)', md: 'none' },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: { xs: '13.5px', sm: '14.5px' },
                lineHeight: 1.5,
                color: '#64748B',
                margin: 0,
              }}
            >
              {foundedInfo.description}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', mt: { xs: 4, md: 0 } }}>
              <Typography
                variant="h1"
                component="div"
                sx={{
                  fontFamily: "'Trueno', 'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: { xs: '54px', sm: '72px', md: '84px' },
                  lineHeight: '100%',
                  color: '#0052FF',
                  letterSpacing: '-0.03em',
                  margin: 0,
                }}
              >
                {foundedInfo.year}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontFamily: "'Trueno', 'Plus Jakarta Sans', 'Manrope', sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: '20px', sm: '24px' },
                  color: '#3B82F6',
                  mt: 1,
                  margin: 0,
                }}
              >
                {foundedInfo.title}
              </Typography>
            </Box>
          </Grid>

          {/* Right Block — 4 Metrics Grid */}
          <Grid item xs={12} md={7}>
            <Grid
              container
              sx={{
                width: '100%',
                height: '100%',
              }}
            >
              {statsData.map((stat, index) => {
                const isTopRow = index < 2;
                const isLeftCol = index % 2 === 0;

                return (
                  <Grid
                    item
                    xs={6}
                    key={stat.id}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      p: { xs: 3, md: '40px' },
                      borderBottom: isTopRow ? '1px solid rgba(0, 0, 0, 0.06)' : 'none',
                      borderRight: isLeftCol ? '1px solid rgba(0, 0, 0, 0.06)' : 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <Typography
                      variant="h2"
                      component="div"
                      sx={{
                        fontFamily: "'Trueno', 'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: { xs: '38px', sm: '48px', md: '64px' },
                        lineHeight: 1.1,
                        color: '#334155',
                        mb: 1.5,
                        margin: 0,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 500,
                        fontSize: { xs: '13.5px', sm: '15.5px' },
                        color: '#64748B',
                        margin: 0,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;
