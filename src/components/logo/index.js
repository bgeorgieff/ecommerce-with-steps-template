import { NavLink } from "react-router-dom";
import { Image } from "react-bootstrap";
import logoB from "../../images/Logo-blue.svg";
import logoW from "../../images/Logo-white.svg";

const Logo = ({ color, style }) => {
  return (
    <NavLink
      to="/"
      alt="Online Anahtar logo"
      style={{ textDecoration: "none" }}
    >
      <div className="logo ms-md-1 mx-auto">
        <Image
          className="image-fluid me-1"
          src={color === "blue" ? logoB : logoW}
          alt="Logo Anaftar"
          style={style}
        />
      </div>
    </NavLink>
  );
};

export default Logo;
