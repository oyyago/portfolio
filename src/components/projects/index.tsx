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
          color:" rgb(12, 43, 151)",textDecoration:"underline"
        }}>{t("projectsT")}</h1>
        <p >{t("projectsD")}</p>
      </div>
      <Ul>
        {projects.map((project, index) => (
          <Li key={index}>
            <img src={project.caminho} alt={project.titulo} />
            <Son><Button target="_blank" href={project.deploy}><span>deploy</span></Button> <span>{project.titulo}</span> <Button href={project.code} target="_blank"><span>Code</span></Button></Son>
          </Li>
        ))}
      </Ul>
    </Father>
  );
}