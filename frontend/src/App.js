import Container from "react-bootstrap/Container";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Styling
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Projets from "./screens/Projets";
import Contact from "./screens/Contact";
import Presentation from "./screens/Presentation";
import Loisirs from "./screens/Loisirs";

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Presentation />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/loisirs" element={<Loisirs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
