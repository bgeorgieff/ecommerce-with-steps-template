import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import logoB from "assets/icons/Logo-blue.svg";
import logoW from "assets/icons/Logo-white.svg";
import styles from "./logo.module.scss";
import PropTypes from "prop-types";
import clsx from "clsx";

const Logo = (props) => {
  return (
    <Link to="/" alt="Online Anahtar logo" style={{ textDecoration: "none" }}>
      <div className={clsx(styles["logo"], "ms-md-1 mx-auto")}>
        <Image
          className="image-fluid me-1"
          src={props.color === "blue" ? logoB : logoW}
          alt="Logo Anaftar"
          style={props.style}
        />
      </div>
    </Link>
  );
};

Logo.propTypes = {
  style: PropTypes.object,
  color: PropTypes.string,
};

export default Logo;
