import styled from "styled-components";
import br from '../assets/br.svg';

export const Flag = styled.img`
height: 40px;
width: 70px;
`

export const Seta = styled.img`
height: 50px;
margin: 0;
`

export const Option1 = styled.option`
background-image: url(${br}); 
background-repeat: "no-repeat"; 
padding-left: "10px";
`

export const Button = styled.button`
display: flex;
width: 130px;
padding: 0;
flex-direction: column;
background-color: white;
border: none;
`