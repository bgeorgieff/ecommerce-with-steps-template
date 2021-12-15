import { NavLink } from "react-router-dom";
import styles from "../headerNav.module.scss";
import clsx from "clsx";

import facebookImg from "assets/icons/fb-nav-img.svg";
import instagramImg from "assets/icons/insta-nav-img.svg";

const NavLinks = ({ children }) => {
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
      {children.map((e, i) => (
        <NavLink
          key={i}
          className={clsx(
            styles["navigation-links"],
            "mx-2 my-2 align-self-lg-center"
          )}
          to={e.link}
        >
          {e.option}
        </NavLink>
      ))}
    </>
  );
};

export default NavLinks;
