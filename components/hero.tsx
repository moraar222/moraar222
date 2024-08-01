import React from 'react';
import { Container, Box, Typography } from '@mui/material';

function Hero() {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
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
          alignItems: 'flex-start',
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
            fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
            fontWeight: 'bold',
            marginBottom: 0,
          }}
        >
          Ruth Moraa
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: '0.5rem', // Add spacing between the two texts
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
            padding: 0,
          }}
        >
          Hello, my name is Ruth Moraa, nice to meet you. I would like to welcome you to my personal portfolio.
        </Typography>
      </Container>

      <Box
        component="img"
        src="ruth.png"
        alt="Ruth Moraa"
        sx={{
          width: { xs: '100%', md: '40%' },
          height: { xs: 'auto', md: '100%' },
          maxHeight: { xs: '300px', sm: '400px', md: '500px' },
          objectFit: 'cover',
          opacity: 0.7,
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          backgroundColor: 'brown',
          padding: { xs: '0.5rem', sm: '1rem' },
          color: 'black',
          fontWeight: 'bold',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          fontSize: { xs: '0.75rem', sm: '1rem' },
        }}
      >
        UI/UX DESIGN · SOFTWARE DEVELOPMENT · ICON DESIGN · LOGO BRANDING
      </Box>
    </Box>
  );
}

export default Hero;
