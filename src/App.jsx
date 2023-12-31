import React, { useState, useEffect } from "react";
import "./App.css";
import profile from "./assets/images/photo.jpg";
import dev from "./assets/images/dev.png";
import js from "./assets/images/js.png";
import as from "./assets/images/as.png";
import sql from "./assets/images/mysql.png";
import vite from "./assets/images/vite.png";
import python from "./assets/images/py.png";
import java from "./assets/images/java.webp";
import b from "./assets/images/boo.png";
import en from "./assets/images/en.webp";
import git from "./assets/images/git.png";
import ipjbe from "./assets/images/ipjbe.webp";
import cesde from "./assets/images/cesde.png";
import funlam from "./assets/images/funlam.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import Menu from "./assets/components/Menu";
import Footer from "./assets/components/Footer";

<Menu />;

function Card({ title, imageUrl }) {
  const [isHovered, setIsHovered] = useState(false);

  
  return (
    <div
      className={`card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

function App() {
  const [darknessMode, setDarknessMode] = useState(false);

  const handleDarknessMode = () => {
    setDarknessMode(!darknessMode);
  };

  const [isActive, setIsActive] = useState(false);

  // Función para verificar si el elemento está en el viewport
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Función para activar el efecto cuando el elemento está en el viewport
  function activateEffect() {
    const container = document.querySelector(".container2");
    
    if (container && isInViewport(container)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  // Agregar un event listener para el evento de scroll al montar el componente
  useEffect(() => {
    window.addEventListener("scroll", activateEffect);

    // Limpieza del event listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", activateEffect);
    };
  }, []);

  


  return (
    <section className="">
      <section className={`container1 ${darknessMode ? "nocturneMode" : ""}`}>
        <i
          className={`bi darkMode ${
            darknessMode ? "bi-moon-stars-fill" : "bi-moon-stars"
          }`}
          onClick={handleDarknessMode}
        ></i>

        <section className={`container2 ${isActive ? "active" : ""}`}>
          <img src={profile} alt="photo" />
          <h2>Adrian Jiménez Hernández</h2>
        </section>
        <h1> Web Developer</h1>
        <div className="description">
          <img className="rotating-image" src={dev} alt="post" />
          <div>
            <p>
              Soy un desarrollador de software con amplia experiencia en
              tecnologías clave como{" "}
              <span className="color">
                HTML, CSS, JavaScript, Java, Python y SQL Server
              </span>{" "}
              . Mi trayectoria incluye la creación de aplicaciones exitosas
              tanto para entornos de Windows como para la web, utilizando
              herramientas como{" "}
              <span className="color">Visual Studio Code.</span> <br />
              <br />
              Lo que me distingue es mi capacidad para{" "}
              <span className="color">trabajar en equipo </span> de manera
              efectiva, así como mi destreza en la resolución de problemas.{" "}
              <br />{" "}
              <span className="color">
                Colaboro de manera productiva con otros profesionales{" "}
              </span>{" "}
              y estoy acostumbrado a adaptarme a cambios en los requisitos y a
              enfrentar plazos ajustados sin sacrificar la calidad del trabajo.{" "}
              <br />
              <br />
              Además, considero que la comunicación es esencial en cualquier
              proyecto, y cuento con{" "}
              <span className="color">habilidades sólidas </span>en esta área.
              Mi verdadera pasión es la mejora continua, y estoy comprometido a
              aplicar la tecnología de manera innovadora para resolver los
              desafíos empresariales de manera eficiente.
            </p>
          </div>
        </div>

        <section className="components">
          <section className="component1">
            <h1>Skills</h1>
            <div className="cards">
              <Card imageUrl={js} />
              <Card imageUrl={as} />
              <Card imageUrl={vite} />
              <Card imageUrl={sql} />
              <Card imageUrl={python} />
              <Card imageUrl={java} />
              <Card imageUrl={b} />
              <Card imageUrl={en} />
              <Card imageUrl={git} />
            </div>
          </section>
          <section className="component2">
            <h1>Certificados</h1>
            <div className="colages">
              <img
                className="img3"
                src={ipjbe}
                alt="ipjbe"

                // Año inicio :06-2000
                //Año fin :09-2011
              />
              <img
                className="img1"
                src={funlam}
                alt="Funlam"
                title="Licenciatura en Inglés"
                p={"sdasadsadasd"}
                // Año inicio :02-2015
                //Año fin :09-2020
              />
              <img
                className="img2"
                src={cesde}
                alt="Cesde"
                title="Técnico en desarrollo de software"
                // Año inicio :06-2022
                //Año fin :09-2023
              />
            </div>
          </section>
        </section>
        <div className="experience">
          <h1>Formación académica</h1>
          <p>
            Durante el último año, he estado inmerso en el emocionante mundo del
            desarrollo web, y mi deseo constante de aprender y crecer en esta
            industria no ha hecho más que aumentar. Además, cuento con una
            formación técnica en el SESDE como desarrollador de software y
            también con una licenciatura en Inglés de la Universidad Católica
            Luis Amigó. Estas experiencias educativas me han brindado una sólida
            base de conocimientos y habilidades que estoy ansioso por aplicar y
            expandir en mi carrera en el desarrollo web.
          </p>
        </div>
        <Footer />
      </section>
    </section>
  );
}

export default App;
