import { Link } from "react-router-dom";
import telefono from "../../assets/iconosSvg/telefonoIcono.svg";
import mail from "../../assets/iconosSvg/mail.svg";
import ubicacion from "../../assets/iconosSvg/ubicacionIcono.svg";
import libro from "../../assets/iconosSvg/libroIcono.svg";
import instagram from "../../assets/iconosSvg/instagramIcono.svg";
import facebook from "../../assets/iconosSvg/facebookIcono.svg";
import twitter from "../../assets/iconosSvg/twitterIcono.svg";

const Footer = () => {
  return (
    <footer className="footer bg-primary d-flex flex-row justify-content-around align-items-center p-3">
      <div className="footer_contactos d-flex flex-column justify-content-center gap-3 ps-5 ms-5">
        <div className="footer_contacto d-flex align-items-center">
          <img src={telefono} alt="telefono icon" className="me-2" />
          <a href="">+34 666 666 666</a>
        </div>
        <div className="footer_contacto d-flex align-items-center">
          <img src={mail} alt="mail icon" className="me-2" />
          <a href="">mail@ejemplo.com</a>
        </div>
        <div className="footer_contacto d-flex align-items-center">
          <img src={ubicacion} alt="ubicacion icon" className="me-2" />
          <a href="" target="_blank" rel="noopener noreferrer">
            Calle Malaga 123
          </a>
        </div>
      </div>

      <div className="footer_logo d-flex flex-column align-items-center mx-4">
        <img src={libro} alt="libro icon" className="me-2 w-75" />
        <Link className="text-decoration-none" to="/about">
          © Información de la tienda
        </Link>
      </div>

      <div className="footer_socials d-flex flex-column justify-content-center gap-3 pe-4 me-5">
        <div className="footer_social d-flex align-items-center">
          <a href="" target="_blank" rel="noopener noreferrer" className="me-2">
            libreriaManolita
          </a>
          <img src={instagram} alt="instagram icon" className="me-2" />
        </div>
        <div className="footer_social d-flex align-items-center">
          <a href="" target="_blank" rel="noopener noreferrer" className="me-2">
            libreriaManolita
          </a>
          <img src={facebook} alt="facebook icon" className="me-2" />
        </div>
        <div className="footer_social d-flex align-items-center">
          <a href="" target="_blank" rel="noopener noreferrer" className="me-2">
            libreriaManolita
          </a>
          <img src={twitter} alt="twitter icon" className="me-2" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
