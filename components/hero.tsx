import React from 'react';
import { Container, Box, Typography } from '@mui/material';

function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        backgroundColor: 'black', // Retained the black background
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'left',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          zIndex: 1,
          width: { xs: '100%', md: '60%' },
          padding: { xs: '2rem', md: '4rem' },
        }}
      >
        <Typography
          variant="h1"
          component="div"
          sx={{
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
            letterSpacing: '0.05em',
            color: '#ff6347', // Bright coral for the name to make it stand out
            marginBottom: '1rem',
            fontWeight: 'bold',
            textShadow: '2px 2px 10px rgba(255, 99, 71, 0.5)', // Added a subtle glow effect
          }}
        >
          Ruth Moraa
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: '0.5rem',
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
            color: '#b0e0e6', // Light turquoise for a fresh, modern look
            maxWidth: '90%',
            lineHeight: '1.6',
          }}
        >
          Hello, I’m Ruth Moraa. Welcome to my personal portfolio, where I share my journey and passion in UI/UX design and software development.
        </Typography>
      </Container>

      <Box
        component="img"
        src="Ruth.jpeg"
        alt="Ruth Moraa"
        sx={{
          width: { xs: '100%', md: '40%' },
          height: { xs: 'auto', md: '100%' },
          maxHeight: { xs: '300px', sm: '400px', md: '500px' },
          objectFit: 'cover',
          borderRadius: '1rem',
          boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)',
          opacity: 0.9,
          transition: 'opacity 0.4s ease-in-out, transform 0.4s ease-in-out',
          '&:hover': {
            opacity: 1,
            transform: 'scale(1.05)',
          },
        }}
      />
    </Box>
  );
}

export default Hero;
