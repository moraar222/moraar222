import React from 'react';
import { Container, Box, Typography, Button, Grid, Link } from '@mui/material';

function Collaboration() {
  return (
    <Box
      id="footer"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: { xs: '2rem 1rem', sm: '3rem 2rem' },
        position: 'relative',
      }}
    >
      <Container sx={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Typography
          variant="h4"
          component="div"
          sx={{
            fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3rem' },
            marginBottom: '1rem',
            color: 'white',
          }}
        >
          Let's Collaborate
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'grey',
            marginBottom: '2rem',
            fontSize: '0.875rem',
          }}
        >
          I am always open to new opportunities and collaborations in both development and design.
        </Typography>
        <Box sx={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Button
            href="mailto:moraar976@gmail.com"
            variant="contained"
            sx={{
              backgroundColor: 'brown',
              color: 'black',
              padding: '0.5rem 1.5rem',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'darkred',
              },
            }}
          >
            Get in Touch
          </Button>
          <Button
            href="https://www.linkedin.com/in/ruth-moraa-5666a5233/"
            variant="outlined"
            sx={{
              borderColor: 'white',
              color: 'white',
              padding: '0.5rem 1.5rem',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'white',
                color: 'black',
              },
            }}
          >
            Hire Me Now
          </Button>
        </Box>
      </Container>

      <Container sx={{ textAlign: 'center', marginTop: '3rem' }}>
        <Grid container spacing={2} justifyContent="center">
          {['Instagram', 'Facebook', 'Twitter', 'LinkedIn'].map((platform, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Link
                href="#"
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                {platform}
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
        <Typography
          variant="caption"
          sx={{
            color: 'grey',
            fontSize: '0.75rem',
          }}
        >
          © Ruth Moraa. All rights reserved 2024
        </Typography>
      </Box>
    </Box>
  );
}

export default Collaboration;
