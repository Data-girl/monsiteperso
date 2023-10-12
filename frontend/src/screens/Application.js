import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

// Images
import stats2 from "../medias/stats2.png";
import datascience from "../medias/datascience.jpg";

const Application = () => {
  return (
    <Container>
      <br />
      <Row className="center-element">
        {" "}
        <Col>
          <h1 className="text-center py-5">Démos des API</h1>
        </Col>
      </Row>
      <Row className="text-center">
        {/* CARD 1 */}
        <Col className="center-element ">
          {" "}
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={stats2} />
            <Card.Body>
              <Card.Title>Application de prêt bancaire</Card.Title>
              <Card.Text>
                Il s'agit d'une interface de prédiction de prêt.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* CARD 2 */}
        <Col className="center-element ">
          {" "}
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={datascience} />
            <Card.Body>
              <Card.Title>Data science</Card.Title>
              <Card.Text>
                La data science constitue la clé pour manipuler et exploiter de
                grands volumes de données. Avec 3 ans d'expérience en tant que
                data scientist, je connais tout le cycle de vie de la donnée :
                de la compréhension de la problématique métier à
                l'implémentation d'un modèle de machine learning dans une API.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Application;
