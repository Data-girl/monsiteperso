import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
// Image

const Contact = () => {
  // Back to the top when loading page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container className="text-center">
      <br />
      <br />
      <br />
      <h1 className="text-center py-5">Pour me contacter :</h1>
      <Row className="py-5">
        <Col className="text-center"></Col>
        <Col className="text-center"></Col>
      </Row>
      <p> ✉️ jessypatrice@gmail.com</p>
      <p> 👥 www.linkedin.com/in/jessypatrice</p>
      <p> 📞 0772311150</p>
      <br></br>
      <Button
        variant="success"
        href="https://drive.google.com/file/d/1YwHEcVSYbzDzmhCH9xkPc6WOgcP-A_Z5/view?usp=drive_link"
      >
        Télécharger mon CV
      </Button>{" "}
    </Container>
  );
};

export default Contact;
