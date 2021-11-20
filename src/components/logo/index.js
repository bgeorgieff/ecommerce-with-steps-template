import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import logoB from "../../images/Logo-blue.png";
import logoW from "../../images/Logo-white.png";

const Logo = ({ color }) => {
  return (
    <Link to="/" alt="Online Anahtar logo">
      <div className='logo'>
        <Image
          className="image-fluid me-1"
          src={color === "blue" ? logoB : logoW}
          alt="Logo Anaftar"
        />
      </div>
    </Link>
  );
};

export default Logo;