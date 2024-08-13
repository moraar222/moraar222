import React from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";

function AboutMe() {
  return (
    <Box id="aboutme"
      sx={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: { xs: "1rem", sm: "2rem" },
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
          <Typography variant="h6" sx={{ color: "brown" }}>
            About Me
          </Typography>
        </Box>
        <Grid container spacing={4} sx={{ marginTop: "2rem" }}>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Typography variant="h3" component="div" sx={{ fontWeight: "bold" }}>
                  Ruth Moraa
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5" component="div">
                  Hello, my name is Ruth Moraa, nice to meet you. I would like to welcome you to my personal portfolio.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="div"
              sx={{
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                fontWeight: "bold",
              }}
            >
              I can deliver results that exceed your expectations.
            </Typography>
            <Button href="https://www.linkedin.com/in/ruth-moraa-5666a5233/"
              variant="outlined"
              sx={{
                marginTop: { xs: "1rem", sm: "2rem" },
                borderColor: "white",
                color: "white",
              }}
            >
              Hire Me Now
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
              Hi, I'm Ruth Moraa. I am a software developer and UI/UX designer
              with a deep understanding of the relationship between design and
              users through creative execution and proper user experience. I
              love working on interesting and meaningful projects that I can be
              proud of, and always strive to create clean, pixel-perfect
              interfaces that are smoothly animated. I prioritize not only
              connectivity but also quality and perfect graphic design,
              continually refining my skills in both software development and
              design day by day.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={4}
          sx={{ marginTop: "2rem", textAlign: "center" }}
        >
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              component="div"
              sx={{
                fontSize: { xs: "1.5rem", sm: "2rem" },
                color: "brown",
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
                fontSize: { xs: "1.5rem", sm: "2rem" },
                color: "brown",
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
                fontSize: { xs: "1.5rem", sm: "2rem" },
                color: "brown",
              }}
            >
              3+
            </Typography>
            <Typography variant="body1">Years Experience</Typography>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
          backgroundColor: "brown",
          padding: { xs: "0.5rem", sm: "1rem" },
          color: "black",
          fontWeight: "bold",
          textAlign: "center",
          whiteSpace: "nowrap",
          fontSize: { xs: "0.75rem", sm: "1rem" },
        }}
      >
        UI/UX DESIGN · SOFTWARE DEVELOPMENT · ICON DESIGN · LOGO BRANDING
      </Box>
    </Box>
  );
}

export default AboutMe;
