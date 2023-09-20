import styled from "styled-components";

export const Father = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Ul = styled.ul`
  max-height: 450px;
  padding: 0;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: #ddd;
  margin: 0;
  display: flex;
  margin-left: 60px;
  margin-right: 60px;
  justify-content: flex-start;
  @media (max-width: 420px) {
    margin:0; 
  }

  &::-webkit-scrollbar {
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #ddd;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
  }
`;


export const Button = styled.button`
height: 30px;
border-radius: 30px;
background-color: black;
color: white;
cursor: pointer;

:hover{
  background-color: white;
color: black;
}
`;

export const SubDiv = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  align-items: center;
  margin: 0;

`;


export const Li = styled.li`
  width: 350px;
  height: 330px;
  padding: 15px;
  transition: transform 0.3s ease;
  display: inline-block;
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

export const LiDiv = styled.div`
  display: flex;
  height: 330px;
  background-color: #d1d0cd;
  border-radius: 10px;
  margin-bottom: 0;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;