import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";

// Images
import credit2 from "../medias/credit2.png";
import cancer from "../medias/cancer.jpeg";
import conversation from "../medias/conversation.png";

const Application = () => {
  // Back to the top when loading page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <br></br>
      <br></br>
      <br></br>
      <Row className="center-element">
        {" "}
        <Col>
          <h1 className="text-center py-5">Démos de trois API ⌨️</h1>
        </Col>
      </Row>
      <Row className="text-center">
        {/* CARD 1 */}
        <Col className="center-element ">
          {" "}
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={credit2} />
            <Card.Body>
              <Card.Title>
                Application d'accord
                <br></br>de prêt bancaire
              </Card.Title>
              <Card.Text>
                Cette interface permet de distinguer un client capable de
                rembourser un prêt d'un client présentant des risques de
                recouvrement.
                <br></br>
                <br></br>
                <Button
                  variant="success"
                  href="https://accordepret-webapp.herokuapp.com/"
                >
                  Voir la démo
                </Button>{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <br></br>
        <br></br>

        {/* CARD 2 */}

        <Col className="center-element py-3">
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={cancer} />
            <Card.Body>
              <Card.Title>
                API de détection
                <br></br>de cancer des poumons
              </Card.Title>
              <Card.Text>
                Conçue à partir d'une base d'images de scanners, cette interface
                facilite la détection de cancer des poumons.
                <br></br>
                <br></br>
                <Button
                  variant="success"
                  href="https://cancer-detection-am.herokuapp.com/"
                >
                  Voir la démo
                </Button>{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* CARD 3 */}

        <Col className="center-element py-3">
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={conversation} />
            <Card.Body>
              <Card.Title>
                Chatbot spécialisé
                <br></br>dans les conseils de santé
              </Card.Title>
              <Card.Text>
                Conçu à partir d'un LLM et de la librairie Langchain, vous
                pouvez converser avec ce bot sur des sujets de santé.
                <br></br>
                <br></br>
                <Button
                  variant="success"
                  href="https://chatbot-health-883b178801f4.herokuapp.com/"
                >
                  Voir la démo
                </Button>{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="text-center">
        <Col className="center-element py-5">
          <h1 className="text-center py-3">Mes compétences techniques ⚙️ </h1>
        </Col>
      </Row>

      <Row>
        <Table
          striped
          bordered
          hover
          variant="light"
          className=" text-center"
          size="sm"
        >
          <thead>
            <tr>
              <th>Langage de programmation</th>
              <td>Python / SQL</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Data analyse</th>
              <td>Pandas / Numpy</td>
            </tr>
            <tr>
              <th>DataViz</th>
              <td>Matplotlib / Plotly / Seaborn</td>
            </tr>
            <tr>
              <th>Machine Learning</th>
              <td>Scikit-learn / Xgboost / LightGBM</td>
            </tr>
            <tr>
              <th>Deep Learning</th>
              <td>TensorFlow / LLM </td>
            </tr>
            <tr>
              <th>Big data</th>
              <td>Pyspark / AWS</td>
            </tr>
            <tr>
              <th>Software Engineering</th>
              <td> FastAPI / Django / Streamlit / React </td>
            </tr>
            <tr>
              <th>CI/CD</th>
              <td>
                Git / GitHub actions / Docker / PEP8 (flake8, black, isort) /
                Test unitaire / Déploiement
              </td>
            </tr>
            <tr>
              <th>Anglais </th>
              <td> Niveau intermédiaire B2 </td>
            </tr>
          </tbody>
        </Table>
      </Row>

      <br></br>
      <Row className="center-element py-3">
        <h1 className="text-center">
          Acquisition en cours de nouvelles aptitudes✔️
        </h1>
        <Col>
          <h4 className="text-center">
            {" "}
            <br></br>
            🔵 Apprentissage de Réact en cours notamment pour la création de mon
            site personnel
            <br></br>
            <br></br>🔵 Montée en compétences en cours sur les modèles de LLM
            <br></br>
            <br></br>🔵 Formation prévisionnelle de Data engineer
          </h4>
          <br></br>
        </Col>
      </Row>
    </Container>
  );
};

export default Application;
