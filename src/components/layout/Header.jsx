import { Link } from "react-router-dom";
import carrito from "../../assets/iconosSvg/carritoOscuro.svg";
import libro from "../../assets/iconosSvg/libroIcono.svg";

const Header = () => {
  return (
    <header className="bg-primary d-flex flex-row justify-content-between align-items-center position-sticky p-2">
      <div className="d-flex flex-row align-items-center ps-5 header_logo">
        <Link to="/">
          <img src={libro} alt="libro" />
        </Link>
        <Link to="/">
          <h3 className="ms-3 header__title">Librería Manolita</h3>
        </Link>
      </div>

      <nav className="header__nav d-flex align-items-center p-2">
        <ul className="header__nav-list d-flex flex-row list-unstyled mb-0">
          <li>
            <Link to="/search" className="nav-link px-3 py-2">
              Explorar
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link px-3 py-2">
              Contacto
            </Link>
          </li>
          <li>
            <input
              type="text"
              className="input_Search form-control form-control-sm"
              placeholder="Buscar..."
            />
          </li>
          <li>
            <Link to="/bookFile" className="nav-link px-3 py-2">
              <img
                src={carrito}
                alt="Carrito de la compra"
                className="carrito"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
