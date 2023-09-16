import React, { useEffect, useState, useRef } from 'react';
import { ScrollContainer, Ul, Li, LiImg, LiDiv } from './styled'; // Substitua 'SeuArquivoDeEstilos' pelo caminho correto

import boot from '../assets/bootstrap.svg';
import css from '../assets/css.svg';
import express from '../assets/express.svg';
import figma from '../assets/figma.svg';
import git from '../assets/git.svg';
import html from '../assets/html.svg';
import java from '../assets/java.svg';
import js from '../assets/javascript.svg';
import linux from '../assets/linux.svg';
import mysql from '../assets/mysql.svg';
import postman from '../assets/postman.svg';
import react from '../assets/react.svg';
import spring from '../assets/spring.svg';
import sqlite from '../assets/sqlite.svg';
import ts from '../assets/ts.svg';
import vscode from '../assets/vscode.svg';

const imageList = [
  boot, css, express, figma, git, html, java, js, linux, mysql, postman, react, spring, sqlite, ts, vscode,
  boot, css, express, figma, git, html, java, js, linux, mysql, postman, react, spring, sqlite, ts, vscode
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const ulRef = useRef(null);
  const scrollStep = 100;

  useEffect(() => {
    ulRef.current.scrollLeft = ulRef.current.scrollWidth / 2.3;
  }, [currentPage]);

  const handleScrollLeft = () => {
    if (ulRef.current) {
      ulRef.current.scrollLeft -= scrollStep;
    }
  };

  const handleScrollRight = () => {
    if (ulRef.current) {
      ulRef.current.scrollLeft += scrollStep;
    }
  };

  return (
      <ScrollContainer>
        <button onClick={handleScrollLeft}>{"<"}</button>
        <Ul ref={ulRef}>
          {imageList.map((image, index) => (
            <Li key={index}>
              <LiDiv>
                <LiImg src={image} alt={`Image ${index + 1}`} />
              </LiDiv>
            </Li>
          ))}
        </Ul>
        <button onClick={handleScrollRight}>{">"}</button>
      </ScrollContainer>
  );
}
