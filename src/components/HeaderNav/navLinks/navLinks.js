import { Link } from "react-router-dom";
import styles from "../headerNav.module.scss";
import clsx from "clsx";

import facebookImg from "assets/icons/fb-nav-img.svg";
import instagramImg from "assets/icons/insta-nav-img.svg";
import { useSelector } from "react-redux";

const NavLinks = ({ children }) => {
  const user = useSelector((state) => state.authReducer?.authData);

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
        <Link
          key={i}
          className={clsx(
            "mx-2 my-2 align-self-lg-center",
            i === children.length - 1 && user
              ? styles.userLink
              : styles["navigation-links"]
          )}
          to={e.link}
        >
          {e.option}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
