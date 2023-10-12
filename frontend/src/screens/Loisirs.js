import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// Images
import piano from "../medias/piano.png";
import haltere from "../medias/haltere.png";
import environnement2 from "../medias/environnement2.png";

const Loisirs = () => {
  return (
    <Container>
      <br></br>
      <Row className="center-element py-5">
        <h1 className="text-center">Mes loisirs 🧩</h1>
        <br></br>
        <br></br>

        <Col className="center-element py-5">
          <Card style={{ width: "19rem" }}>
            <Card.Img variant="top" src={piano} />
            <Card.Body>
              <br></br>
              <Card.Title>La musique</Card.Title>
              <Card.Text class="justify-content">
                Je suis passionnée par la musique, particulièrement le chant et
                le piano que j'ai appris en autodidacte. Je dirige également un
                groupe virtuel de chants depuis bientôt 3 ans.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="center-element py-5">
          <Card style={{ width: "19rem" }}>
            <Card.Img variant="top" src={haltere} />
            <Card.Body>
              <Card.Title>La musculation</Card.Title>
              <Card.Text class="justify-content">
                Je pratique la musculation 3 fois par semaine depuis près de 4
                ans. Mes exercices favoris sont le squat avec la barre, le
                soulevé de terre ainsi que les fentes avec haltères.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="center-element py-5">
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={environnement2} />
            <Card.Body>
              <Card.Title>Association environnementale</Card.Title>
              <Card.Text class="justify-content">
                Je suis membre de l'association SEE(Sociétés, Educations,
                Environnement) qui oeuvre dans les actions éducatives et
                environnementales pour l'amélioration de la société.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Loisirs;
