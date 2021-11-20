import { Link } from "react-router-dom";

const NavLinks = ({ options }) => {
  return (
    <>
      {options.map((e, i) => (
        <Link key={i} className="mx-2 navigation-links my-2 align-self-lg-center" to={e.link}>
          {e.option}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;