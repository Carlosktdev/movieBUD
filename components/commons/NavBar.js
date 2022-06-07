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

const NavBar = () => {
  return (
    <div className="my-2">
      <Navbar expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">MovieBUD</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <DropDown
                linkName="Movies"
                link1="Link 1"
                link2="Link 2"
                link3="Link 3"
              />
              <DropDown
                linkName="Tv Show"
                link1="Link 1"
                link2="Link 2"
                link3="Link 3"
              />
              <DropDown
                linkName="Genres"
                link1="Link 1"
                link2="Link 2"
                link3="Link 3"
              />
              <DropDown
                linkName="Web series"
                link1="Link 1"
                link2="Link 2"
                link3="Link 3"
              />
              <DropDown
                linkName="Anime"
                link1="Link 1"
                link2="Link 2"
                link3="Link 3"
              />
            </Nav>
            <div>
              <Button className={`${styles.navFirstBtn} mx-3`}>SignUp</Button>
              <Button className={`${styles.navSecondBtn}`}>log in</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
