import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Image

const Contact = () => {
  return (
    <Container className="text-center">
      <br />
      <h1 className="text-center py-5">Pour me contacter :</h1>
      <Row className="py-5">
        <Col className="text-center"></Col>
        <Col className="text-center"></Col>
        <Col className="text-center"></Col>
      </Row>

      <p> ✉️ jessypatrice@gmail.com</p>
      <p> 👥 www.linkedin.com/in/jessypatrice</p>
      <p> 📞 0772311150</p>
    </Container>
  );
};

export default Contact;
