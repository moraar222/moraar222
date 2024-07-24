// App.js
import React from 'react';
import { AppBar, Toolbar, Button, Typography, Container, Box } from '@mui/material';

function PortfolioPage() {
  return (
    <Box sx={{ 
      backgroundColor: 'black', 
      color: 'white', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>★</Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Service</Button>
          <Button color="inherit">Portfolio</Button>
          <Button color="inherit">Blog</Button>
          <Button color="inherit">Contact</Button>
          <Button variant="outlined" color="inherit" sx={{ marginLeft: 'auto' }}>Get in Touch</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Typography variant="h1" component="div" sx={{ fontSize: '4rem', fontWeight: 'bold' }}>
          Amalia Sanchez
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          Hello, my name is Amalia Sanchez, nice to meet you. I would like to welcome you to my personal portfolio.
        </Typography>
      </Container>

      <Box 
        component="img"
        src="/path/to/your/image.png" 
        alt="Amalia Sanchez" 
        sx={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.7,
        }}
      />
      <Box 
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '20%',
          height: '20%',
          backgroundColor: 'green',
          opacity: 0.5,
        }}
      />
    </Box>
  );
}

export default PortfolioPage;
