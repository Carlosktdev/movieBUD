import { NavDropdown } from "react-bootstrap";

const DropDown = ({ linkName, link1, link2, link3 }) => {
  return (
    <div className="mx-2">
      <NavDropdown title={linkName} id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">{link1}</NavDropdown.Item>
        <NavDropdown.Item href="#action4">{link2}</NavDropdown.Item>
        <NavDropdown.Item href="#action5">{link3}</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};

export default DropDown;
