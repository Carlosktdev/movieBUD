import { Container } from "react-bootstrap";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <Container>
        <NavBar />
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
