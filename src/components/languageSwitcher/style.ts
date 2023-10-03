import styled from "styled-components";


export const FatherFlag =styled.div`
margin-top: 7px;
border: none;
margin-left: 4px;
display: flex;
text-align: center;


    p{
  background-image: linear-gradient(
    to right,
    #54b3d6,
    #54b3d6 50%,
    #000 50%
  );
  margin: 0;
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  position: relative;
  cursor: pointer;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
}

p:before{
  content: '';
  background: #54b3d6;
  display: block;
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 3px;
  transition: all 0.3s ease-in-out;
}

p:hover {
 background-position: 0;
}

p:hover::before{
  width: 100%;
}
`
export const Flag = styled.img`
height:35px;
margin-bottom: 0;
margin-right: 10px;
width:50px;
cursor: pointer;
border-radius: 7px;
` 

export const Father = styled.div`
width: "180px";
margin-right: 40px;
@media (max-width: 768px) {
    margin: 0;
} 
`
