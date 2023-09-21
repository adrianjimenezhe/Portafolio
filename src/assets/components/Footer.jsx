import React, {useState} from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Contacto from "./Contacto";

const Footer = () => {
  const linkedinURL ="https://www.linkedin.com/in/adrian-alexis-jimenez-hernandez-a9a393241/";
  const githubURL = "https://github.com/adrianjimenezhe";

  const [clickContact, setclickContact] = useState(false)
  const handleClick = () =>{
    setclickContact(!clickContact)
  }

  return (
    <section className="containerF">
      {clickContact && (<Contacto/>)}
      <div className="footer">
        <div className="footers">
          <a href={githubURL} target="_blank">
            <i className="bi bi-github"></i>
          </a>
          <a href={linkedinURL} target="_blank">
            <i className="bi bi-linkedin"></i>
          </a>
          <a onClick={handleClick} target="_blank">
            <i className="bi bi-envelope-check"></i>
          </a>
        </div>
        <p>© 2022 Adrian Jiménez. Derechos Reservados .</p>
      </div>
    </section>
  );
};

export default Footer;
