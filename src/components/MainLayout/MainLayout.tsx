import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Header from "~/components/MainLayout/components/Header";
import Box from "@mui/material/Box";

function Copyright() {
  return (
    <Typography variant="body2" color="#6b6b6b" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/" underline="hover">
        MOVIE STORE
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#2d2d2f",
        fontFamily: "Oswald, Arial, Helvetica, sans-serif",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "1540px",
          width: "90%",
          margin: "0 auto",
          boxShadow: "0px 0px 53px -15px rgb(255 228 144 / 70%)",
          background:
            "radial-gradient(ellipse at center, rgb(63, 63, 66) 0%, rgba(45,45,47,1) 100%)",
          minHeight: "100vh",
        }}
      >
        <Header />
        <main style={{ minHeight: "calc(100vh - 180px)" }}>
          <Container sx={{ pb: 8 }} maxWidth="md">
            {children}
          </Container>
        </main>
        <Box
          component={"footer"}
          sx={{
            bgcolor: "rgb(45 45 47)",
            padding: 2,
            color: "#6b6b6b",
          }}
        >
          <Typography
            variant="subtitle1"
            align="center"
            color="#6b6b6b"
            component="p"
          >
            Thank you for your purchase!
          </Typography>
          <Copyright />
        </Box>
      </div>
    </div>
  );
};

export default MainLayout;
