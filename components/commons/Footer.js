import Link from "next/link";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer d-flex align-items-center">
      <Container className="text-center">
        <div className="col text-center">
          <div className="d-flex justify-content-center">
            <Link className="mx-4" href="/">
              Home
            </Link>
            <h5 className="mx-4">Carlos Fernandez</h5>
          </div>
        </div>
        <div className="col">
          Figma design: © 2022 MovieVilla by Tanmay Jitendra Thakare
        </div>
      </Container>
    </div>
  );
};

export default Footer;
