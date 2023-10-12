import React from "react";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <div>
      <footer>
        <Container fluid="true" className="text-center ">
          <p style={{ color: "black" }}>
            <strong>
              "L'éducation est l'arme la plus tranchante pour changer le
              monde"🌱
            </strong>
            <br />
            Nelson Mandela
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
