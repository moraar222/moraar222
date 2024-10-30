import { Metadata } from "next";
import "./globals.css";
import { GlobalStyles, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/app/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"; // Ensure the correct path to this provider

export const metadata: Metadata = {
  title: "Ruth's Website",
  description: "My personal website showcasing UI/UX design and software development.",
  keywords: "portfolio, Ruth Moraa, UI/UX design, software development",
  viewport: "width=device-width, initial-scale=1.0", // Ensures proper scaling on mobile devices
  authors: [{ name: "Ruth Moraa" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* SEO and Social Media Preview Enhancements */}
        <meta name="description" content="Welcome to Ruth Moraa's personal portfolio website." />
        <meta name="keywords" content="portfolio, UI/UX design, software development, Ruth Moraa" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Ruth Moraa's Website" />
        <meta property="og:description" content="My personal website showcasing my journey in UI/UX design and software development." />
        <meta property="og:image" content="/path-to-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <CssBaseline />
          <GlobalStyles
            styles={{
              "--var(header-height)": "40px",
            }}
          />
          <ThemeProvider theme={theme}>
            <main>{children}</main> {/* Semantic element for better accessibility */}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
