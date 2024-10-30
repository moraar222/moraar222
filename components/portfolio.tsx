import React from 'react';
import { Container, Box, Typography, Link, Grid } from '@mui/material';

function Portfolio() {
  return (
    <Box
      id="portfolio"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        minHeight: '100vh',
        padding: { xs: '1rem', sm: '2rem' },
        position: 'relative',
      }}
    >
      <Container>
        <Box sx={{ textAlign: 'left', marginBottom: '2rem' }}>
          <Typography variant="h4" sx={{ color: 'brown' }}>
            Portfolio
          </Typography>
          <Typography
            variant="h3"
            component="div"
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              marginBottom: '1rem',
            }}
          >
            Selected Works <br /> 2020-2023
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '8px',
                '&:hover img': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            >
              <Box
                component="img"
                src="image4.png"
                alt="Work 1"
                sx={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            {[
              'image5.png',
              'image6.png',
         
            ].map((src, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  '&:hover img': {
                    transform: 'scale(1.05)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                <Box
                  component="img"
                  src={src}
                  alt={`Work ${index + 2}`}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '1rem',
                    transition: 'transform 0.3s ease-in-out',
                  }}
                />
              </Box>
            ))}
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'right', marginTop: '2rem' }}>
          <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
            Check out more portfolio I've worked on
          </Typography>
          <Link
            href="https://github.com/your-github-username" // Replace with your GitHub URL
            target="_blank"
            rel="noopener"
            sx={{
              border: '1px solid white',
              color: 'white',
              padding: '0.5rem 1rem',
              textDecoration: 'none',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: 'white',
                color: 'black',
                transition: 'background-color 0.3s ease-in-out',
              },
            }}
          >
            GitHub Profile
          </Link>
        </Box>
      </Container>

      
    </Box>
  );
}

export default Portfolio;
