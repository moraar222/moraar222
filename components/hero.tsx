import React from 'react';
import { Container, Box, Typography } from '@mui/material';

function Hero() {
  return (
    <Box sx={{ 
      backgroundColor: 'black', 
      color: 'white', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' }, // Column on small screens, row on medium and above
      alignItems: 'center',
      justifyContent: 'space-between', // Distribute space between elements
      textAlign: 'left', // Align text to the left
      position: 'relative', 
      overflow: 'hidden', 
    }}>
      <Container sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'flex-start', // Align content to the start of the flex container
        justifyContent: 'center',
        zIndex: 1, // Ensure content is above the background image
        width: { xs: '100%', md: '60%' }, // Responsive width
        padding: { xs: '2rem', md: '4rem' }, // Responsive padding
      }}>
        <Typography 
          variant="h1" 
          component="div" 
          sx={{ 
            fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, // Responsive font sizes
            fontWeight: 'bold',
          }}
        >
          Ruth Moraa
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            marginTop: 2,
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }, // Responsive font sizes
            padding: { xs: '0 1rem', sm: '0 2rem' }, // Responsive padding
          }}
        >
          Hello, my name is Ruth Moraa, nice to meet you. I would like to welcome you to my personal portfolio.
        </Typography>
      </Container>

      <Box 
        component="img"
        src="ruth.png" 
        alt="Ruth Moraah" 
        sx={{ 
          width: { xs: '100%', md: '40%' }, // Responsive width
          height: '100%',
          objectFit: 'cover',
          opacity: 0.7,
        }}
      />
    </Box>
  );
}

export default Hero;
