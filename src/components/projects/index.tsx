import { useTranslation } from "react-i18next";
import { projects } from "./projects";
import {
  Ul,
  Li,
  Son,
  Button,
  Father
} from './styled.ts';

export default function Projects() {
  const { t } = useTranslation();
  return (
    <Father id="projects">
      <div style={{ textAlign: "center" }}>
        <h1 style={{
          fontSize: "40px",
          color: " rgb(12, 43, 151)", textDecoration: "underline", fontFamily: 'Gudea'
        }}>{t("projectsT")}</h1>
        <p style={{
          fontFamily: 'Roboto Mono', fontSize: "20px"
        }}>{t("projectsD")}</p>
      </div>
      <Ul>
        {projects.map((project, index) => (
          <Li key={index}>
            <img src={project.caminho} alt={project.titulo} />
            <Son><Button target="_blank" href={project.deploy}><span style={{
          fontFamily: 'Gudea'}} >deploy</span></Button> <span style={{fontSize:"20px"}}>{project.titulo}</span> <Button href={project.code} target="_blank"><span style={{
            fontFamily: 'Gudea'}} >Code</span></Button></Son>
          </Li>
        ))}
      </Ul>
    </Father>
  );
}