import { Container } from "@mui/material";
import Content from "./Content";

export default function Page() {
  return (
    <Container maxWidth="md" sx={{ py: 2 }}>
      <Content />
    </Container>
  );
}
