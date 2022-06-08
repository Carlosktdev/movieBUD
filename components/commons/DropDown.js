import { NavDropdown } from "react-bootstrap";

const DropDown = ({ linkName, links }) => {
  return (
    <div className="mx-2">
      <NavDropdown title={linkName} id="navbarScrollingDropdown">
        {links.map((link, index) => {
          return (
            <div key={index}>
              <NavDropdown.Item href={link.linkDir}>
                {link.linkText}
              </NavDropdown.Item>
            </div>
          );
        })}
      </NavDropdown>
    </div>
  );
};

export default DropDown;
