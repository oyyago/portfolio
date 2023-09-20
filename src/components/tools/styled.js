import styled from "styled-components";


export const ScrollContainer = styled.div`
  display: flex;
  max-width: 100%; 
  flex-direction: column;
  padding: 10px;
  margin-top: 100px;
  @media (max-width: 768px) {
    margin-top: 600px;
    padding: 5px;
  }
  @media (max-width: 480px) {
    margin-top:1000px;
        padding: 3px;
  }
  h1{
    text-align: center;
    text-decoration: underline;
    font-family: 'Roboto Mono', monospace;
    font-weight: 800;
    margin-bottom: 40px;
  }
`;