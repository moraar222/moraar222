import React from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";

function AboutMe() {
  return (
    <Box
      id="aboutme"
      sx={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: { xs: "1rem", sm: "2rem" },
        position: "relative",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" sx={{ color: "brown" }}>
            About Me
          </Typography>
        </Box>
        <Grid container spacing={4} sx={{ marginTop: "2rem" }}>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Typography variant="h2" >
                  Ruth Moraa
                </Typography>
              </Grid>
              
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.75rem", sm: "2.5rem" },
              }}
            >
              Delivering results that exceed expectations.
            </Typography>
            <Button
              href="https://www.linkedin.com/in/ruth-moraa-5666a5233/"
              variant="contained"
              sx={{
                marginTop: { xs: "1rem", sm: "2rem" },
                backgroundColor: "brown",
                color: "white",
                "&:hover": {
                  backgroundColor: "darkbrown",
                },
              }}
            >
              Hire Me Now
            </Button>
            <Button
              href="https://github.com/moraar222"
              variant="outlined"
              sx={{
                marginTop: { xs: "1rem", sm: "2rem" },
                marginLeft: "1rem",
                borderColor: "white",
                color: "white",
                "&:hover": {
                  borderColor: "brown",
                  color: "brown",
                },
              }}
            >
              GitHub Profile
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              sx={{
                marginTop: { xs: "1rem", sm: "2rem" },
                fontSize: { xs: "1rem", sm: "1.25rem" },
              }}
            >
              I am a software developer and UI/UX designer with expertise in creating seamless user experiences and crafting clean, aesthetically pleasing interfaces. I am passionate about delivering high-quality work, whether it's through pixel-perfect designs or efficient software development.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ marginTop: "3rem", textAlign: "center" }}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "1.75rem", sm: "2.25rem" }, color: "brown" }}
            >
              312+
            </Typography>
            <Typography variant="body1">Projects Completed</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "1.75rem", sm: "2.25rem" }, color: "brown" }}
            >
              281+
            </Typography>
            <Typography variant="body1">Satisfied Clients</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "1.75rem", sm: "2.25rem" }, color: "brown" }}
            >
              3+
            </Typography>
            <Typography variant="body1">Years of Experience</Typography>
          </Grid>
        </Grid>
      </Container>
      
    </Box>
  );
}

export default AboutMe;
