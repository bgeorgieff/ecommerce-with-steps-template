import { NavLink } from "react-router-dom";
import styles from "../headerNav.module.scss";
import PropTypes from "prop-types";

import facebookImg from "../../../assets/icons/fb-nav-img.svg";
import instagramImg from "../../../assets/icons/insta-nav-img.svg";

const NavLinks = ({ options }) => {
  return (
    <>
      <div id={styles["nav-bar-socials"]}>
        <button>
          <img src={facebookImg} alt="facebook" />
        </button>
        <button>
          <img src={instagramImg} alt="instagram" />
        </button>
      </div>
      {options.map((e, i) => (
        <NavLink
          key={i}
          className={`${styles["navigation-links"]} mx-2 my-2 align-self-lg-center`}
          to={e.link}
        >
          {e.option}
        </NavLink>
      ))}
    </>
  );
};

NavLinks.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.exact({
      option: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};

export default NavLinks;
