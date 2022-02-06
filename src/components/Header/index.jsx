import logo from "../../assets/rick.png";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="content-container mainBack">
      <section className="container mainBack d-flex justify-content-between align-items-center">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <img src={logo} alt="Logo" width={240} />
        </Link>
        <Link
          to={"/favorite"}
          activeStyle={{
            fontWeight: "bold",
          }}
          style={{
            textDecoration: "none",
            color: "white"
          }}
        >
          FAVORITOS
        </Link>
      </section>
    </header>
  );
};

export default Header;
