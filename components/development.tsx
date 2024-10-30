import React from 'react';
import { Container, Box, Typography, Grid, Link as MuiLink } from '@mui/material';
import Link from 'next/link';

function Development() {
  return (
    <Box
      id="development"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        minHeight: '100vh',
        padding: { xs: '2rem', sm: '3rem' },
        position: 'relative',
      }}
    >
      <Container>
        <Box sx={{ textAlign: 'left', marginTop: '2rem' }}>
          <Typography variant="h2" component="div" sx={{ fontSize: '1.5rem', color: 'brown' }}>
           Projects
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '1rem', fontSize: { xs: '1rem', sm: '1.125rem' }, lineHeight: '1.75' }}>
            Create, learn, iterate, and improve. We understand how to extract logic and order from chaos. That's how we develop products that transcend the initial effort and evolve into something greater.
          </Typography>
        </Box>
        <Grid container spacing={3} sx={{ marginTop: '3rem', textAlign: 'center' }}>
          {[
            {
              title: 'Nyumba Web Development',
              description: 'A site that allows one to buy or rent houses or land using blockchain.',
              link: 'https://nyumba-web3.vercel.app/',
            },
            {
              title: 'Beautier Website',
              description: 'A site that allows beautys techies,that is women in tech to buy beauty products online.',
              link: 'https://vercel.com/api/toolbar/link/beautier-self.vercel.app?via=project-dashboard-alias-list&p=1&page=/',
            },
            {
              title: 'German Online Classes',
              description: 'A site that allows one to book online classes and attend them online.',
              link: 'https://german-onlineclasses.vercel.app/',
            },
            {
              title: 'Insurance Website',
              description: 'A site that helps users learn about insurance and make informed decisions on investments.',
              link: 'https://insurance-a2la.vercel.app/',
            },
          ].map((project, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  border: '1px solid #444',
                  padding: '1.5rem',
                  borderRadius: '10px',
                  backgroundColor: '#1e1e1e',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <Typography variant="h6" sx={{ color: '#00adb5', marginBottom: '1rem' }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: '1rem', fontSize: '0.95rem', color: '#ddd' }}>
                  {project.description}
                </Typography>
                <Link href={project.link} passHref>
                  <MuiLink
                    sx={{
                      color: '#00adb5',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      '&:hover': {
                        textDecoration: 'underline',
                        color: '#66fcf1',
                      },
                    }}
                    target="_blank"
                  >
                    Visit Site
                  </MuiLink>
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Development;
