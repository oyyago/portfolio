import styled from 'styled-components';

const SectionContainer = styled.section`
  margin-top: 28px;
  margin-bottom: 12px;
  padding: 2px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;
`;

const ProjectsContainer = styled.section`
width: 100%;
    margin-top: 8px;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
    animation: fade-up;
    justify-items: center;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 894px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  animation: fade-up;

  button {
    color: white;
  }
`;

const Button=styled.button`
background-color: #4287f5;
color: white;
font-family: Gudea;
height: 30px;
border:0;
cursor: pointer;

:hover{
  background-color: #0087F5;
}
`
export { ProjectsContainer, SectionContainer,Button };
;
