import { Metadata } from "next";
import "./globals.css";
import { GlobalStyles, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/app/theme"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"; // Replace "your-module-path" with the actual path to the module

export const metadata: Metadata = {
  title: "Ruth's Website",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <CssBaseline />
          <GlobalStyles
            styles={{
              "--var(header-height)": "40px",
            }}
          />
          <ThemeProvider theme={theme}>{children} </ThemeProvider>
        </AppRouterCacheProvider>
           </body>
    </html>
  );
}