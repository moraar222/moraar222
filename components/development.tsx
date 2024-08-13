import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';

function Development() {
  return (
    <Box id="development" sx={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: { xs: '1rem', sm: '2rem' }, position: 'relative' }}>
      <Container>
        <Box sx={{ textAlign: 'left', marginTop: '2rem' }}>
          <Typography variant="h5" component="div" sx={{ fontSize: '1.25rem', color: 'brown' }}>
            02. Development
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '1rem', fontSize: { xs: '0.875rem', sm: '1rem' } }}>
            Create, learn, iterate, and iterate. We understand how to extract logic and order from chaos. It's how we develop products that go beyond the first effort and become the next.
          </Typography>
        </Box>
        <Grid container spacing={2} sx={{ marginTop: '2rem', textAlign: 'center' }}>
          <Grid item xs={12} sm={6} md={2.4}>
            <Box sx={{ border: '1px solid white', padding: '1rem' }}>
              <Typography variant="body1">iOS Development</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <Box sx={{ border: '1px solid white', padding: '1rem' }}>
              <Typography variant="body1">Website Development</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <Box sx={{ border: '1px solid white', padding: '1rem' }}>
              <Typography variant="body1">Android Development</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <Box sx={{ border: '1px solid white', padding: '1rem' }}>
              <Typography variant="body1">Backend Development</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <Box sx={{ border: '1px solid white', padding: '1rem' }}>
              <Typography variant="body1">Webflow Development</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Development;
