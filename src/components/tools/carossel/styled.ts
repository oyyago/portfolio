import styled from 'styled-components';

export const Father = styled.div`
display:flex; 
flex-direction:column;
margin:0px 25px 0px 25px;
@media (max-width: 1200px) {
margin-top: 350px;
}
`
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
    filter: grayscale(90%); 
    &:hover{
        filter: grayscale(0);
        height: 35px;
    }
    @media (max-width: 1200px) {
      filter: grayscale(0);
  }
`;

export const LiImg = styled.img`
  --size: 80px;
  width: var(--size);
  height: var(--size);
  border-radius: 10%;
  `;

export const LiDiv = styled.div`
display: flex;
--size:60px ;

&:hover{
  width: 110px;
height: 100px;
background-color: #cfdbe3;
border-radius: 20px;
}
margin-bottom: 0;
flex-direction: column;
cursor: pointer;
align-items: center;
padding: 15px;
`;
