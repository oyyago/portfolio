import styled from 'styled-components';


export const ScrollContainer = styled.div`
  display: flex;
  height: 150px;
  width: 1200px;

  @media (max-width: 920px) {
    /* Estilos para telas com largura máxima de 480px */
    margin-top: 900px;
  }

`;

export default ScrollContainer;


export const Ul = styled.ul`
  max-height: 150px;
  padding: 0; 
  overflow-x: auto;
  overflow-y: hidden;
  background-color: #ddd;
  margin: 0;
  display: flex;
  justify-content: flex-start;

  /* Estilizar a barra de rolagem horizontal */
  &::-webkit-scrollbar {
    height: 10px; /* Altura da barra de rolagem */
  }

  &::-webkit-scrollbar-track {
    background-color: #ddd; /* Cor de fundo da área de rastreamento da barra de rolagem */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888; /* Cor do polegar (a parte arrastável) da barra de rolagem */
    border-radius: 5px; /* Raio de borda do polegar */
  }
`;

export const Li = styled.li`
  width: 150px;
  height: 110px;
  padding: 15px;
  transition: transform 0.3s ease;
  display: inline-block;
`;

export const LiImg = styled.img`
  --size: 50px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
`;

export const LiDiv = styled.div`
  padding: 15px;
  background-color: #fff;
  height: calc(100% - 30px);
`;
