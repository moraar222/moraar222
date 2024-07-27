'use client'
import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const drawer = (
    <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {['Home', 'Service', 'Portfolio', 'Blog', 'Contact'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <ListItem button>
          <Button variant="outlined" color="inherit" fullWidth>
            Get in Touch
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}>★</Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>Home</Button>
            <Button color="inherit" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>Service</Button>
            <Button color="inherit" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>Portfolio</Button>
            <Button color="inherit" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>Blog</Button>
            <Button color="inherit" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>Contact</Button>
            <Button 
              variant="outlined" 
              color="inherit" 
              sx={{ 
                fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                padding: { xs: '0.25rem 0.5rem', sm: '0.5rem 1rem' }, // Responsive padding
                marginLeft: 'auto',
              }}
            >
              Get in Touch
            </Button>
          </Box>
          <IconButton 
            color="inherit" 
            edge="start" 
            sx={{ display: { xs: 'block', md: 'none' } }} 
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </>
  );
}

export default NavBar;
