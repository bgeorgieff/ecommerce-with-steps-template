import { useState } from "react";
import { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getNav } from "../../utils/navigation";
import Logo from "../logo";
import NavLinks from "../navLinks";

const Navigation = () => {
  const user = useSelector(state => state.authReducer?.authData)
  const [links, setLinks] = useState([]);
  
  useEffect(() => {
    setLinks(getNav(user));
  }, [user])

  return (
    <div className='nav-container'>
      <Navbar bg="light" expand="lg">
        <Container fluid className="mx-5">
          <Logo color={"blue"} />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex justify-content-end align-items-center" style={{ width: "100%" }}>
              <NavLinks options={links} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
};

export default Navigation;