import React from 'react';
import { Container, Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

function Services() {
  return (
    <Box
      id="service"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        minHeight: '100vh',
        padding: { xs: '2rem', sm: '4rem' },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container sx={{ zIndex: 2, position: 'relative' }}>
        <Box sx={{ textAlign: 'center', marginBottom: '4rem' }}>
          
          <Typography
            variant="h3"
            component="div"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
              color: 'white',
            }}
          >
            What I Can Do For You
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginTop: '1rem',
              fontSize: { xs: '0.875rem', sm: '1rem' },
              color: '#d1d1d1',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            I specialize in creating unique, functional, and beautiful designs that provide exceptional user experiences. Each solution is tailored to meet the needs of real people with real challenges.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ marginTop: '2rem' }}>
          {/* Service 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                backgroundColor: 'transparent',
                color: 'white',
                border: '1px solid #3a3a3a',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image="/image1.png"
                alt="UI/UX Design"
                sx={{
                  objectFit: 'cover',
                  opacity: 0.9,
                  '&:hover': {
                    opacity: 1,
                    transition: 'opacity 0.3s ease-in-out',
                  },
                }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  UI/UX Design
                </Typography>
                <Typography variant="body2" sx={{ color: '#d1d1d1' }}>
                  Creating beautiful, intuitive interfaces that improve user engagement and satisfaction.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Add more services as needed */}
          {/* Service 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                backgroundColor: 'transparent',
                color: 'white',
                border: '1px solid #3a3a3a',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image="/image2.png"
                alt="Icon Design"
                sx={{
                  objectFit: 'cover',
                  opacity: 0.9,
                  '&:hover': {
                    opacity: 1,
                    transition: 'opacity 0.3s ease-in-out',
                  },
                }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  UI/UX Design
                </Typography>
                <Typography variant="body2" sx={{ color: '#d1d1d1' }}>
                  Crafting visually appealing and highly functional designs to enhance digital products.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Service 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                backgroundColor: 'transparent',
                color: 'white',
                border: '1px solid #3a3a3a',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image="image3.png"
                alt="Logo Branding"
                sx={{
                  objectFit: 'cover',
                  opacity: 0.9,
                  '&:hover': {
                    opacity: 1,
                    transition: 'opacity 0.3s ease-in-out',
                  },
                }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Logo Branding
                </Typography>
                <Typography variant="body2" sx={{ color: '#d1d1d1' }}>
                  Developing memorable and impactful brand logos that resonate with audiences.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Services;
