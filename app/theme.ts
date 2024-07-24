"use client";
import { Inter } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      light: "#d2a679",   // Light brown
      main: "#8B4513",    // SaddleBrown
      dark: "#5c2e0d",    // Darker brown
      contrastText: "#fff",
    },
    secondary: {
      light: "#e3d3c3",   // Light tan
      main: "#a1887f",    // Brownish
      dark: "#5d4037",    // Dark brown
      contrastText: "#ffffffb3",
    },
    text: {
      primary: "#4E342E", // Dark brown text
      secondary: "#795548", // Lighter brown text
      disabled: "#BDBDBD",
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#e3d3c3",
              borderWidth: "2px",
            },
            "&:hover fieldset": {
              borderColor: "#a1887f",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#8B4513",
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          border: "2px solid #e3d3c3",
          outline: "none",
          "&:hover": {
            borderColor: "#a1887f",
            outline: "none",
          },
          "&:focus": {
            borderColor: "#8B4513",
            outline: "none",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "& .MuiSvgIcon-root": {
            fontSize: 20,
            borderWidth: 0.5,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#5c2e0d",
            color: "#fff",
            transition: "scale 0.5s ease",
            scale: "1.05",
            borderColor: "#5c2e0d",
          },
          transition: "scale 0.5s ease",
          scale: "0.99",
        },
      },
    },
  },
});

export default theme;