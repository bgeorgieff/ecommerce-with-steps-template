import { useState } from "react";
import { useEffect, useRef } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getNav } from "../../utils/navigation";
import Logo from "../logo";
import NavLinks from "../navLinks";

const Navigation = () => {
  const user = useSelector((state) => state.authReducer?.authData);
  const [links, setLinks] = useState([]);
  const [open, setOpen] = useState(false);
  const menuBtn = useRef("");
  const navContainer = useRef("");

  useEffect(() => {
    if (open) {
      menuBtn.current.classList.add("open");
      navContainer.current.style.minHeight = "100vh";
    } else {
      menuBtn.current.classList.remove("open");
      navContainer.current.style.minHeight = "6vh";
    }
  }, [open]);

  useEffect(() => {
    setLinks(getNav(user));
  }, [user]);

  return (
    <header className={"nav-container"}>
      <Navbar bg="light" id="navbar-nav" className={open ? "openedNav" : ""}>
        <Container ref={navContainer} fluid className="mx-3 nav-cont">
          <div className="logo-cont my-2 align-self-start">
            <Logo color={"blue"} />
          </div>
          <Nav
            className={open ? "" : "justify-content-end align-items-center"}
            style={{ width: "100%" }}
            id={open ? "hidden" : ""}
          >
            <NavLinks options={links} />
          </Nav>

          <div
            ref={menuBtn}
            className="align-self-start menu-btn mt-2"
            onClick={() => setOpen(!open)}
          >
            <div className="menu-btn__burger"></div>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;
