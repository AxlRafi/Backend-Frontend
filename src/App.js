//import component Bootstrap React
import { Navbar, Container, Nav } from "react-bootstrap";
//import react router dom
import { Switch, Route, Link } from "react-router-dom";
//import component Home
import Home from "./pages/Home";
//import component Produk Index
import ProdukIndex from "./pages/produk/Index";
//import component Produk Create
import ProdukCreate from "./pages/produk/Create";
//import component Produk Edit
import ProdukEdit from "./pages/produk/Edit";
//import component Petugas Index
import PetugasIndex from "./pages/petugas/Index";
//import component Produk Create
import PetugasCreate from "./pages/petugas/Create";
//import component Produk Edit
import PetugasEdit from "./pages/petugas/Edit";
function App() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">EXPRESS.JS + REACT.JS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="nav-link">
                HOME
              </Nav.Link>
              <Nav.Link as={Link} to="/produk" className="navlink">
                PRODUK
              </Nav.Link>
              <Nav.Link as={Link} to="/petugas" className="navlink">
                PETUGAS
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/produk" component={ProdukIndex} />
        <Route exact path="/produk/create" component={ProdukCreate} />
        <Route exact path="/produk/edit/:id" component={ProdukEdit} />
        <Route exact path="/petugas" component={PetugasIndex} />
        <Route exact path="/petugas/create" component={PetugasCreate} />
        <Route exact path="/petugas/edit/:id" component={PetugasEdit} />
      </Switch>
    </div>
  );
}
export default App;
