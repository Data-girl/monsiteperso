import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import Accordion from "react-bootstrap/Accordion";
import { useEffect } from "react";

// Images
import stats2 from "../medias/stats2.png";
import python from "../medias/python.jpg";
import datascience from "../medias/datascience.jpg";
import jessy from "../medias/jessy.png";

// Styling
import "bootstrap/dist/css/bootstrap.min.css";

const Presentation = () => {
  // Back to the top when loading page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container fluid="true">
      {/* SECTION 1 */}
      <br></br>
      <br></br>
      <br></br>
      <Row xs={12} md={8} className="center-element">
        <h1 className="text-center py-5">Quelques mots de présentation ✒️</h1>
        <Col xs={6} md={3} className="center-element">
          <Image className="center-element" src={jessy} thumbnail />
        </Col>

        <Col xs={12} md={8} className="center-element">
          <p class="text-center">
            Bienvenue sur ma page personnelle !<br></br>
            <b> Je suis Jessy PATRICE.</b>
            <br />
            <br />
            <p className="text-center">
              J'ai un parcours professionnel et universitaire
              pluridisciplinaire. Au delà de mes compétences en data science,
              notamment dans le domaine du machine learning ou du deep learning
              grâce au langage de programmation python, je suis diplomée d'un
              Doctorat en Sciences humaines et sociales(majeure en
              statistiques), d'un PostDoc et d'une certification professionnelle
              de Data scientist. Tout au long de mon parcours, j'ai acquis des
              compétences en statistiques, en sociologie et en programmation
              informatique.
            </p>
          </p>
        </Col>
        <Col></Col>
      </Row>

      {/* SECTION 2 */}
      <Row className="center-element py-3">
        {/* CARD 1 */}
        <Col className=" center-element py-3">
          {" "}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={stats2} />
            <Card.Body>
              <Card.Title className="text-center">Math/Stats</Card.Title>
              <Card.Text className="text-center">
                J'ai réalisé trois principales enquêtes sociologiques auprès de
                larges échantillons, ce qui m'a permis de développer des
                compétences en statistiques (avec notamment les moyennes, les
                médianes, la variance, les différentes distributions de
                probabilités) nécessaires lors de la manipulation et
                l'exploration de données.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* CARD 2 */}
        <Col className="center-element py-3">
          {" "}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={datascience} />
            <Card.Body>
              <Card.Title className="text-center">Data science</Card.Title>
              <Card.Text className="text-center">
                La data science constitue la clé pour manipuler et exploiter de
                grands volumes de données. Avec 3 ans d'expérience en tant que
                data scientist, je connais tout le cycle de vie de la donnée :
                de la compréhension de la problématique métier à
                l'implémentation d'un modèle de machine learning dans une API.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* CARD 3 */}
        <Col className="center-element py-3">
          {" "}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={python} />
            <Card.Body>
              <Card.Title className="text-center">Programmation</Card.Title>
              <Card.Text className="text-center">
                Je maîtrise le langage de programmation python non seulement
                pour l'analyse de données et dans l'élaboration et
                l'optimisation de modèles de machine learning mais aussi lors de
                la création d'API. Pour mettre en place le backend d'une API,
                j'utilise django et pour le frontend streamlit ou encore react
                js.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h1 className="text-center py-5">Mes expériences professionnelles💼</h1>

      {/* SECTION 3 */}
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>
              <b>Data Scientist </b>- Agence Markétic (Martinique){" "}
              <b>- 3 ans</b>
            </h5>
          </Accordion.Header>
          <Accordion.Body>
            J’ai évolué au sein de cette entreprise spécialisée dans l’analyse
            de données avec trois autres collaborateurs, sur un territoire
            dépourvu d’entreprises proposant des solutions de machine learning.
            L’objectif était d’apporter notre expertise à des entreprises et des
            organismes dans leur transformation digitale, en les accompagnant
            dans l’extraction, l’analyse, et l’utilisation de leurs données à
            des fins utiles pour leurs activités. Au sein de cette structure,
            mes missions étaient variées et impliquaient notamment d’aller au
            contact des clients, de recueillir leurs besoins, de définir les
            objectifs et le plan d’action permettant d’y parvenir dans un temps
            imparti.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <b>Mission 1 : Secteur bancaire (10 mois)</b>
          </Accordion.Header>
          <Accordion.Body>
            <b>
              • Elaboration d’une interface pour la réduction des risques
              (segmentation client, amélioration du système de prêt bancaire)
            </b>
            <br /> Nettoyage, analyse exploratoire, traitement des données,
            conception, évaluation et optimisation des modèles, dockérisation,
            déploiement.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            {" "}
            <b>Mission 2 : Secteur médical (12 mois)</b>
          </Accordion.Header>
          <Accordion.Body>
            <b>
              • Réalisation d’une plateforme de prédictions médicales : API
              permettant d’automatiser la détection de pathologies, grâce à la
              mise en production d’algorithmes de Machine Learning/Deep
              Learning.
            </b>
            <br /> Collecte des données, nettoyage, analyse exploratoire,
            feature engineering, encodage, standardisation, imputation,
            conception,évaluation et optimisation des modèles, versioning,
            testing, dockerisation et mise en production
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            {" "}
            <b>Mission 3 : Secteur du retail (6 mois)</b>
          </Accordion.Header>
          <Accordion.Body>
            <b>
              • Analyse du panier de la ménagère d’un magasin dans le but
              d’accroître ses ventes sur une période donnée
            </b>
            <br /> Nettoyage, analyse exploratoire, feature engineering,
            dévelopement et optimisation des algorithmes de machine learning,
            segmentation client / RFM / prédiction des ventes / time series
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* SECTION 4 */}
      <Row>
        <h1 className="text-center py-5">Mes diplômes et formations🎓</h1>
        <Col className="center-element">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="text-center">
                Doctorat en Sciences humaines et sociales (majeure en
                statistiques)
              </Card.Title>
              <Card.Subtitle className="text-center mb-2 text-muted">
                2013-2016
              </Card.Subtitle>
              <Card.Subtitle className="text-center">
                Université des Antilles/Paris Sorbonne
              </Card.Subtitle>
              <br />
              <Card.Text className="text-center">
                Ma thèse de Doctorat, réalisée sur trois ans, s'est basée sur
                des questions identitaires, sociales et culturelles auprès des
                Antillais installés en France et m'a permis de mener une enquête
                statistique par le biais des réseaux sociaux ayant recueilli
                plus de 1300 répondants.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <br></br>
        <Col className="center-element py-3">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="text-center">
                Master en Sciences de l'information et de la communication
              </Card.Title>
              <Card.Subtitle className=" text-center mb-2 text-muted">
                2010-2012
              </Card.Subtitle>
              <Card.Subtitle className="text-center">
                Université des Antilles
              </Card.Subtitle>
              <br />
              <Card.Text className="text-center">
                Mon mémoire a porté sur la communication autour du parloir d'un
                centre pénitentiaire, avec un regard porté sur la population
                féminine. Ma démarche s'est centrée sur les interactions et les
                rôles, en s'inspirant d'Erving Goffman. Une immersion au sein du
                cadre de recherche a été nécessaire.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="center-element py-3">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="text-center">
                Certification de
                <br />
                Data scientist
                <br />
                RNCP de niveau 7
              </Card.Title>
              <Card.Subtitle className=" text-center mb-2 text-muted">
                2022-2023
              </Card.Subtitle>
              <Card.Subtitle className="text-center">
                OPENCLASSROOM en partenariat avec Centrale Supélec
              </Card.Subtitle>
              <br />
              <Card.Text className="text-center">
                Les 8 projets m'ont permis de : Préparer les données en vue de
                l’analyse - Programmer des algorithmes de Machine Learning à
                l’aide du langage Python - Déployer des algorithmes dans le
                cloud avec les outils du Big Data - Communiquer les résultats à
                des spécialistes ou des néophytes.
              </Card.Text>
            </Card.Body>
          </Card>
          <br></br>
          <br></br>
        </Col>
      </Row>
    </Container>
  );
};

export default Presentation;
