import React from 'react';
import { Container, Box, Typography, Button, Grid } from '@mui/material';

function AboutMe() {
  return (
    <Box sx={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: { xs: '1rem', sm: '2rem' } }}>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ color: 'green' }}>About Me</Typography>
        </Box>
        <Grid container spacing={4} sx={{ marginTop: '2rem' }}>
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h3" 
              component="div" 
              sx={{ 
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, // Responsive font sizes
                fontWeight: 'bold',
              }}
            >
              I can deliver results that exceed your expectations.
            </Typography>
            <Button 
              variant="outlined" 
              sx={{ 
                marginTop: { xs: '1rem', sm: '2rem' }, 
                borderColor: 'white', 
                color: 'white' 
              }}
            >
              Hire Me Now
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography 
              variant="body1" 
              sx={{ 
                marginTop: { xs: '1rem', sm: '2rem' },
                fontSize: { xs: '1rem', sm: '1.25rem' }, // Responsive font sizes
              }}
            >
              Hi, I'm Amalia Sanchez. I have an understanding of the relationship between design and users through creative execution and proper user experience. 
              I love working on interesting and meaningful projects that I can be proud of, and always strive to create clean, pixel-perfect interfaces that are smoothly animated. 
              I prefer to prioritize not only connected but also quality, perfect graphic design and spend more day by day perfecting it.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ marginTop: '2rem', textAlign: 'center' }}>
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h4" 
              component="div" 
              sx={{ 
                fontSize: { xs: '1.5rem', sm: '2rem' }, // Responsive font sizes
                color: 'green' 
              }}
            >
              312+
            </Typography>
            <Typography variant="body1">Projects Completed</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h4" 
              component="div" 
              sx={{ 
                fontSize: { xs: '1.5rem', sm: '2rem' }, // Responsive font sizes
                color: 'green' 
              }}
            >
              281+
            </Typography>
            <Typography variant="body1">Works Clients</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h4" 
              component="div" 
              sx={{ 
                fontSize: { xs: '1.5rem', sm: '2rem' }, // Responsive font sizes
                color: 'green' 
              }}
            >
              10+
            </Typography>
            <Typography variant="body1">Years Experience</Typography>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ 
        position: 'absolute',
        bottom: '10%',
        left: '50%',
        transform: 'translate(-50%, 0)',
        backgroundColor: 'green',
        padding: { xs: '0.5rem', sm: '1rem' }, // Responsive padding
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        fontSize: { xs: '0.75rem', sm: '1rem' } // Responsive font sizes
      }}>
        UI/UX DESIGN  ·  DEVELOPMENT  ·  ICON DESIGN  ·  LOGO BRANDING
      </Box>
    </Box>
  );
}

export default AboutMe;
