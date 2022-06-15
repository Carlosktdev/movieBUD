import {
  Button,
  Container,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import DropDown from "./DropDown";
import styles from "../../styles/Home.module.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import Form from "react-bootstrap/Form";

const navPages = [
  {
    linkName: "Movies",
    links: [
      { linkText: "Latest movies", linkDir: "#" },
      { linkText: "Now playing", linkDir: "#" },
      { linkText: "Popular movies", linkDir: "#" },
      { linkText: "Top rated", linkDir: "#" },
      { linkText: "Upcoming movies", linkDir: "#" },
    ],
  },
  {
    linkName: "Tv Show",
    links: [
      { linkText: "Latest shows", linkDir: "#" },
      { linkText: "Airing today", linkDir: "#" },
      { linkText: "On the air", linkDir: "#" },
      { linkText: "Popular shows", linkDir: "#" },
      { linkText: "Top rated shows", linkDir: "#" },
    ],
  },
  {
    linkName: "Genres",
    links: [
      { linkText: "Action", linkDir: "/movies/28" },
      { linkText: "Adventure", linkDir: "/movies/12" },
      { linkText: "Animation", linkDir: "/movies/16" },
      { linkText: "Comedy", linkDir: "/movies/35" },
      { linkText: "Crime", linkDir: "/movies/80" },
      { linkText: "Documentary", linkDir: "/movies/99" },
      { linkText: "Drama", linkDir: "/movies/18" },
      { linkText: "Family", linkDir: "/movies/10751" },
      { linkText: "Fantasy", linkDir: "/movies/14" },
      { linkText: "History", linkDir: "/movies/36" },
      { linkText: "Horror", linkDir: "/movies/27" },
      { linkText: "Music", linkDir: "/movies/10402" },
      { linkText: "Mystery", linkDir: "/movies/9648" },
      { linkText: "Romance", linkDir: "/movies/10749" },
      { linkText: "Science Fiction", linkDir: "/movies/878" },
      { linkText: "TV Movie", linkDir: "/movies/10770" },
      { linkText: "Thriller", linkDir: "/movies/53" },
      { linkText: "War", linkDir: "/movies/10752" },
      { linkText: "Western", linkDir: "/movies/37" },
    ],
  },
];

const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="my-2">
      <Navbar expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">MovieBUD</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {navPages.map((page) => {
                return (
                  <DropDown
                    linkName={page.linkName}
                    links={page.links}
                    key={page.linkName}
                  />
                );
              })}
            </Nav>
            <div className="d-flex">
              <div>
                <Form>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </Form>
              </div>

              <Offcanvas show={show} onHide={handleClose} backdrop={false}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Some text as placeholder. In real life you can have the
                  elements you have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
