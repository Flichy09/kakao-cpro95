import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "@chakra-ui/react";

export default function Layout(props) {
  return (
    <Container maxW="container.xl" p={0}>
      <Header />
      {props.children}
      <Footer />
    </Container>
  );
}
