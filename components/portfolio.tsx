import React from 'react';
import { Container, Box, Typography, Button, Grid } from '@mui/material';

function Portfolio() {
  return (
    <Box sx={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: { xs: '1rem', sm: '2rem' }, position: 'relative' }}>
      <Container>
        <Box sx={{ textAlign: 'left', marginBottom: '2rem' }}>
          <Typography variant="h6" sx={{ color: 'brown' }}>Portfolio</Typography>
          <Typography variant="h3" component="div" sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, fontWeight: 'bold' }}>
            Selected works <br /> 2020-2023
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Box sx={{ textAlign: 'center' }}>
              <Box 
                component="img"
                src="https://i.pinimg.com/564x/6c/5a/10/6c5a10b006312f78cc438b94da863264.jpg" 
                alt="Work 1" 
                sx={{ 
                  width: '100%', 
                  height: 'auto',
                  objectFit: 'cover',
                }} 
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box sx={{ textAlign: 'center' }}>
              <Box 
                component="img"
                src="https://i.pinimg.com/564x/26/c0/ac/26c0aca1dd95491690ef39cefba1bcbc.jpg" 
                alt="Work 2" 
                sx={{ 
                  width: '100%', 
                  height: 'auto',
                  objectFit: 'cover',
                  marginBottom: '1rem',
                }} 
              />
              <Box 
                component="img"
                src="https://i.pinimg.com/564x/f3/98/d5/f398d53d1680fe3f3337fce3551fd228.jpg" 
                alt="Work 3" 
                sx={{ 
                  width: '100%', 
                  height: 'auto',
                  objectFit: 'cover',
                }} 
              />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'right', marginTop: '2rem' }}>
          <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
            Check out more portfolio I've worked on
          </Typography>
          <Button variant="outlined" sx={{ borderColor: 'white', color: 'white' }}>View More</Button>
        </Box>
      </Container>
      <Box sx={{ 
        position: 'absolute',
        bottom: 0,
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
    </Box>
  );
}

export default Portfolio;
