import "./projects.css";
import NavbarFocus from "../../components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";

function Projects() {
  return (
    <>
      <NavbarFocus />
      <div className="projects-page">
      <div className="projects-block">
        <h1 style={{color: "#024AAC"}}><strong>Nosso projeto</strong></h1>
        <h2 style={{color: "#62B6CB"}}>FixIt</h2>
        <Image className="photo-code" src="./fixit-logo.jpg" alt="logo" fluid style={{height: "400px", width: "400px"}}/>
      </div>
      <div className="projects-home">
        <p>A FixIt é um software em desenvolvimento, criada por um time <strong>qualificado</strong> e <strong>apaixonado</strong> por tecnologia.</p>
        <p>Nosso frontend será feito em Javascript + framework React, e nosso backend feito na linguagem Java + framework Spring.</p>
        <p style={{color: "#024AAC"}}>Mais informações em breve!</p>
        <Image className="github-logo"  src="./image-3.png" alt="logo" fluid style={{height: "100px", width: "100px", color: "black"}}/>
        <a>https://github.com/maluvasc/Focus</a>
        <Image className="github-logo" src="./image-3.png" alt="logo" fluid style={{height: "100px", width: "100px", color: "black"}}/>
        <a>https://github.com/maluvasc/FixIt</a>
      </div>
      </div>
      <footer>
        <p>
          2024 © FOCUS. Todos os direitos reservados.
        </p>
      </footer>
    </>
  );
}

export default Projects;