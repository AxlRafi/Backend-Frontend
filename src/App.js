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
              <Nav.Link as={Link} to="/posts" className="navlink">
                POSTS
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={ProdukIndex} />
        <Route exact path="/posts/create" component={ProdukCreate} />
        <Route exact path="/posts/edit/:id" component={ProdukEdit} />
      </Switch>
    </div>
  );
}
export default App;
