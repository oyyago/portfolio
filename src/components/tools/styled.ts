import styled from "styled-components";


export const ScrollContainer = styled.div`
  display: flex;
  max-width: 100%; 
  flex-direction: column;
  
  padding: 10px;
  margin-top: 100px;
  margin-bottom: 100px;
  @media (max-width: 768px) {
    margin-top: 600px;
    padding: 5px;
  }
  @media (max-width: 480px) {
    margin-top:740px;
        padding: 3px;
  }
`;