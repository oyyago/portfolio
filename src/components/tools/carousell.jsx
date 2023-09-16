import React, { useEffect, useState, useRef } from 'react';
import GlobalStyle from './styled';

import boot from './assets/bootstrap.svg';
import css from './assets/css.svg';
import express from './assets/express.svg';
import figma from './assets/figma.svg';
import git from './assets/git.svg';
import html from './assets/html.svg';
import java from './assets/java.svg';
import js from './assets/javascript.svg';
import linux from './assets/linux.svg';
import mysql from './assets/mysql.svg';
import postman from './assets/postman.svg';
import react from './assets/react.svg';
import spring from './assets/spring.svg';
import sqlite from './assets/sqlite.svg';
import ts from './assets/ts.svg';
import vscode from './assets/vscode.svg'
const imageList = [
  boot, css, express, figma, git, html, java, js, linux, mysql, postman, react, spring, sqlite, ts, vscode
];


export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const ulRef = useRef(null);
  const imagesPerPage = 16;
  const scrollStep = 150;

  useEffect(() => {
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const pageImages = imageList.slice(startIndex, endIndex);
    ulRef.current.scrollLeft = ulRef.current.scrollWidth / 3;
  }, [currentPage]);

  const handleScroll = () => {
    if (ulRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = ulRef.current;
      const maxScroll = scrollWidth - clientWidth;

      if (scrollLeft <= 0) {
        setCurrentPage((prevPage) => prevPage + 1);
        ulRef.current.scrollLeft = ulRef.current.scrollWidth / 3;
      } else if (scrollLeft >= maxScroll) {
        setCurrentPage((prevPage) => prevPage - 1);
        ulRef.current.scrollLeft = ulRef.current.scrollWidth / 3;
      }
    }
  };

  useEffect(() => {
    ulRef.current.addEventListener("scroll", handleScroll);
    return () => {
      ulRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <main>
      <GlobalStyle />
      <h1>Scroll Infinito de Imagens</h1>
      <h2>Página atual: {currentPage}</h2>
      <div className="scroll-container">
        <button onClick={handleScrollLeft}>{"<"}</button>
        <ul ref={ulRef}>
          {imageList.map((image, index) => (
            <li key={index}>
              <div>
                <img src={image} alt={`Image ${index + 1}`} />
              </div>
            </li>
          ))}
        </ul>
        <button onClick={handleScrollRight}>{">"}</button>
      </div>
    </main>
  );
}
