import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { projects } from "./projects";
import {
  Ul,
  Li,
  LiImg,
  LiDiv,
  SubDiv,
  Father,
  Button,
} from './styled';

export default function Projects() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const ulRef = useRef(null);
  const scrollStep = 100;

  useEffect(() => {
    ulRef.current.scrollLeft = ulRef.current.scrollWidth / 3.5;
  }, [currentPage]);

  return (
    <Father>
      <h1 style={{ fontSize: "50px", marginLeft: "40px", color:"rgb(12, 43, 151)", textDecoration:"underline" }}>{t("projectsT")}</h1>
      <p style={{ fontSize: "20px", marginLeft: "40px", marginRight: "20px" }}>{t("projectsD")}</p>
      <Ul ref={ulRef}>
        {projects.map((project, index) => (
          <Li key={index}>
              <LiDiv>
                <LiImg src={project.caminho} alt={project.titulo} />
                <SubDiv>
                    <a href={project.deploy} target="_blank"><Button>deploy</Button></a>
                  <span style={{color:"black",textDecoration:"underline",margin:"17px"}}>{project.titulo}</span>
                    <a href={project.code} target="_blank"><Button>source code</Button></a>
                </SubDiv>
              </LiDiv>
          </Li>
        ))}
      </Ul>
    </Father>
  );
}