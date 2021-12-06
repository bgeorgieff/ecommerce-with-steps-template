import { NavLink } from "react-router-dom";

import facebookImg from "../../images/fb-nav-img.svg";
import instagramImg from "../../images/insta-nav-img.svg";

const NavLinks = ({ options }) => {
  return (
    <>
      <div id="nav-bar-socials">
        <a href="#">
          <img src={facebookImg} alt="facebook" />
        </a>
        <a href="#">
          <img src={instagramImg} alt="instagram" />
        </a>
      </div>
      {options.map((e, i) => (
        <NavLink
          key={i}
          className="mx-2 navigation-links my-2 align-self-lg-center"
          to={e.link}
        >
          {e.option}
        </NavLink>
      ))}
    </>
  );
};

export default NavLinks;
