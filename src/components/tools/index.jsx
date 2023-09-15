import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Carousel from './carousell'; // Importe o componente Carousel aqui

// Importe suas imagens aqui
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
import vscode from './assets/vscode.svg';

export default function Tools() {
  // Aqui você pode usar o componente Carousel
  return (
    <div>
      <Carousel items={[boot, css, express, figma, git, html, java, js, linux, mysql, postman, react, spring, sqlite, ts, vscode]} active={0} />
      {/* Outros elementos do seu componente Tools */}
    </div>
  );
}
