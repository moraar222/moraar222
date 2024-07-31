import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';

function Services() {
  return (
    <Box sx={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: { xs: '1rem', sm: '2rem' }, position: 'relative' }}>
      <Box sx={{ 
        position: 'absolute',
        top: 0,
        width: '100%',
        backgroundColor: 'brown',
        padding: { xs: '0.5rem', sm: '1rem' }, // Responsive padding
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        fontSize: { xs: '0.75rem', sm: '1rem' }, // Responsive font sizes
        zIndex: 1,
      }}>
        UI/UX DESIGN  · SOFTWARE DEVELOPMENT  ·  ICON DESIGN  ·  LOGO BRANDING
      </Box>
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Typography variant="h6" sx={{ color: 'brown' }}>Services</Typography>
          <Typography variant="h3" component="div" sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, fontWeight: 'bold' }}>
            Available services that I can work on
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'left', marginTop: '2rem' }}>
          <Typography variant="h5" component="div" sx={{ fontSize: '1rem', color: 'brown' }}>
            01. Design Visual
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '1rem', fontSize: { xs: '0.875rem', sm: '1rem' } }}>
            Design that is unique, functional, and beautiful is at the heart of everything we create.
            We obsess about user experience, designing not for ourselves but for real people with real problems.
          </Typography>
        </Box>
        <Grid container spacing={2} sx={{ marginTop: '2rem', textAlign: 'center' }}>
          <Grid item xs={12} sm={6} md={2.4}>
            <Box sx={{ border: '1px solid white', padding: '1rem' }}>
              <Typography variant="body1">UI/UX Design</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <Box sx={{ border: '1px solid white', padding: '1rem' }}>
              <Typography variant="body1">Mockup Design</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <Box sx={{ border: '1px solid white', padding: '1rem' }}>
              <Typography variant="body1">Design Graphic</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <Box sx={{ border: '1px solid white', padding: '1rem' }}>
              <Typography variant="body1">Icon Design</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <Box sx={{ border: '1px solid white', padding: '1rem' }}>
              <Typography variant="body1">Logo Design</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Services;
