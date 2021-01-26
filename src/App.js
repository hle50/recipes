import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/home";
import Camera from "./pages/camera/camera";
import Recipes from "./pages/recipes/recipes";

function App() {
  return (
    <Router>
      <Container fluid>
        <Navbar className="sNav" expand="lg">
          <Navbar.Brand href="/">Simulation recipes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/camera">
                Camera
              </Link>
              <Link className="nav-link" to="/recipes">
                Recipes
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <br/>       
        <Switch>
          <Route path="/camera">
            <Camera />
          </Route>
          <Route path="/recipes">
            <Recipes />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
