import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-primary d-flex flex-row justify-content-between align-items-center p-3">
      <div className="footer_contactos d-flex flex-column flex-md-column justify-content-center gap-3 ps-4 ms-5">
        <div className="footer_contacto d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-telephone me-2"
            viewBox="0 0 16 16"
          >
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
          </svg>
          <a href="">+34 666 666 666</a>
        </div>
        <div className="footer_contacto d-flex align-items-center">
          <img src="../iconosSvg/mail.svg" alt="mail icon" className="me-2" />
          <a href="">mail@ejemplo.com</a>
        </div>
        <div className="footer_contacto d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-geo-alt me-2"
            viewBox="0 0 16 16"
          >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
          <a href="" target="_blank" rel="noopener noreferrer">
            Calle Malaga 123
          </a>
        </div>
      </div>

      <div className="footer_logo d-flex flex-column align-items-center mx-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="125"
          height="125"
          fill="currentColor"
          className="bi bi-book mb-2"
          viewBox="0 0 16 16"
        >
          <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
        </svg>
        <Link className="text-decoration-none" to="/about">
          © Información de la tienda
        </Link>
      </div>

      <div className="footer_socials d-flex flex-column justify-content-center gap-3 pe-4 me-5">
        <div className="footer_social d-flex align-items-center">
          <a href="" target="_blank" rel="noopener noreferrer" className="me-2">
            libreriaManolita
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-instagram"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.432-.174 1.942-.372a3.898 3.898 0 0 0 1.417-.923 3.9 3.9 0 0 0 .923-1.417c.198-.509.333-1.09.372-1.942.038-.853.048-1.125.048-3.297 0-2.172-.01-2.444-.048-3.297-.04-.852-.174-1.433-.372-1.942a3.9 3.9 0 0 0-.923-1.417 3.9 3.9 0 0 0-1.417-.923c-.51-.198-1.09-.333-1.942-.372C10.444.01 10.172 0 8 0zm0 1.439c2.134 0 2.378.008 3.22.046.776.034 1.2.162 1.48.27a2.455 2.455 0 0 1 .886.58c.248.249.429.555.58.885.11.28.236.704.27 1.48.038.842.045 1.087.045 3.221 0 2.134-.008 2.379-.045 3.22-.034.776-.16 1.2-.27 1.48a2.448 2.448 0 0 1-.58.885 2.45 2.45 0 0 1-.885.58c-.28.11-.705.236-1.48.27-.842.038-1.087.045-3.22.045-2.135 0-2.38-.007-3.221-.045-.777-.034-1.2-.16-1.48-.27a2.448 2.448 0 0 1-.885-.58 2.45 2.45 0 0 1-.58-.885c-.11-.28-.236-.705-.27-1.48-.038-.841-.046-1.086-.046-3.22 0-2.134.008-2.378.046-3.22.034-.776.16-1.2.27-1.48a2.455 2.455 0 0 1 .58-.885 2.453 2.453 0 0 1 .885-.58c.28-.11.705-.236 1.48-.27.842-.038 1.087-.045 3.221-.045zM8 3.838a4.163 4.163 0 1 0 0 8.326 4.163 4.163 0 0 0 0-8.326zm0 6.87a2.708 2.708 0 1 1 0-5.416 2.708 2.708 0 0 1 0 5.416zm4.406-6.845a.97.97 0 1 0 0 1.939.97.97 0 0 0 0-1.94z" />
          </svg>
        </div>
        <div className="footer_social d-flex align-items-center">
          <a href="" target="_blank" rel="noopener noreferrer" className="me-2">
            libreriaManolita
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-facebook"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.62-1.303 1.254v1.51h2.218l-.354 2.326H9.25v5.625c3.824-.604 6.75-3.934 6.75-7.95z" />
          </svg>
        </div>
        <div className="footer_social d-flex align-items-center">
          <a href="" target="_blank" rel="noopener noreferrer" className="me-2">
            libreriaManolita
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-twitter"
            viewBox="0 0 16 16"
          >
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.007-.422A6.67 6.67 0 0 0 16 3.542a6.557 6.557 0 0 1-1.889.518 3.295 3.295 0 0 0 1.444-1.817 6.573 6.573 0 0 1-2.084.797A3.283 3.283 0 0 0 7.88 6.03 9.325 9.325 0 0 1 1.11 2.1 3.283 3.283 0 0 0 2.13 7.86a3.203 3.203 0 0 1-1.487-.41v.041a3.283 3.283 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115c-.212 0-.418-.02-.615-.058a3.283 3.283 0 0 0 3.067 2.279A6.588 6.588 0 0 1 .78 13.58 6.32 6.32 0 0 1 0 13.545a9.344 9.344 0 0 0 5.026 1.465" />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
