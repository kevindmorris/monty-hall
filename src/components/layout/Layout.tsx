import Footer from "@/components/footer";
import Header from "@/components/header";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Container
      maxWidth="md"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}
