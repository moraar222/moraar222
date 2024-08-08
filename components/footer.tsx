import React from 'react';
import { Container, Box, Typography, Button, Grid, Link } from '@mui/material';

function Collaboration() {
  return (
    <Box sx={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: { xs: '1rem', sm: '2rem' }, position: 'relative' }}>
      <Container sx={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Typography variant="h6" sx={{ color: 'brown' }}>Collaboration</Typography>
        <Typography variant="h3" component="div" sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, fontWeight: 'bold', marginTop: '1rem' }}>
          Let's talk to Collaboration
        </Typography>
        <Box sx={{ marginTop: '2rem' }}>
          <Button variant="contained" sx={{ backgroundColor: 'brown', color: 'black', marginRight: '1rem' }}>Get in Touch</Button>
          <Button variant="outlined" sx={{ borderColor: 'white', color: 'white' }}>Hire Me Now</Button>
        </Box>
      </Container>
      <Container sx={{ textAlign: 'center', marginTop: '2rem' }}>
        <Typography variant="body2" sx={{ color: 'grey', marginBottom: '2rem' }}>
          Working in development and design has given me a stronger sense of how structured everything should operate.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Link href="#" sx={{ color: 'white', textDecoration: 'none' }}>Instagram</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link href="#" sx={{ color: 'white', textDecoration: 'none' }}>Facebook</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link href="#" sx={{ color: 'white', textDecoration: 'none' }}>Twitter</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link href="#" sx={{ color: 'white', textDecoration: 'none' }}>LinkedIn</Link>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
        <Typography variant="body2" sx={{ color: 'grey' }}>
          © Ruth Moraa. All rights reserved 2024
        </Typography>
      </Box>
    </Box>
  );
}

export default Collaboration;
