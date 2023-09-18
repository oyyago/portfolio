import styled from 'styled-components';


export const ScrollContainer = styled.div`
  display: flex;
  height: 150px;
  max-width: 100%; 
  margin-top: 30px;
  padding: 10px;

  @media (max-width: 768px) {
    margin-top: 400px;
    padding: 5px;
  }

  @media (max-width: 480px) {
    margin-top:1200px;
    padding: 3px;
  }
`;


export const Button = styled.button`
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    font-size: 20px;
    outline:none;
    width:120px
`

export const Ul = styled.ul`
  max-height: 150px;
  padding: 0; 
  overflow-x: auto;
  overflow-y: hidden;
  background-color: #ddd;
  margin: 0;
  display: flex;
  justify-content: flex-start;
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

export const Li = styled.li`
  width: 150px;
  height: 130px;
  padding: 15px;
  transition: transform 0.3s ease;
  display: inline-block;
    filter: grayscale(9); 
    &:hover{
        filter: grayscale(0);
        height: 35px;
    }
`;

export const LiImg = styled.img`
  --size: 50px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
`;

export const LiDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 15px;
  height: calc(100% - 30px);
`;
