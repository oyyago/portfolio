import styled from "styled-components";

export const Father = styled.section`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  
  @media (max-width: 590px) {
    height: 700px;
    width: 590px;
  }
`;

export const Ul = styled.ul`
  max-height: 350px;
  max-width: 500px;
  padding: 0;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: #ddd;
  margin: 0;
  display: flex;
  flex-direction: row; /* Inicialmente, renderizado em linha */
  flex-wrap: wrap; /* Permite que os elementos quebrem para a próxima linha */
  justify-content: center; /* Centralizar elementos na linha */
  width: 100%;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #ddd;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Alteração para renderizar em coluna */
  }
`;

export const Li = styled.li`
  width: 45%; /* Ajuste conforme necessário para controlar o número de elementos por linha */
  height: 200px;
  padding: 15px;
  transition: transform 0.3s ease;
  @media (max-width: 768px) {
    width: 100%; /* Em dispositivos menores, ocupe 100% da largura */
  }
`;


export const Button = styled.button`
  height: 30px;
  border-radius: 30px;
  background-color: black;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export const SubDiv = styled.div`
 /* Espaçamento entre elementos em SubDiv */
`;

export const LiImg = styled.img`
  --size: 350px;
  width: var(--size);
  height: 80%;
  margin: 0;
  filter: blur(1px);

  &:hover {
    filter: none;
    transition: filter 0.7s ease;
  }
`;

