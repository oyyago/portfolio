import styled from "styled-components";

export const Father = styled.main`
    display: flex;
    flex-direction: row;
    height: 450px;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    margin-bottom: 400px;
    @media (max-width: 768px) {
        padding-top: 60px;
        margin-bottom: 190px;
    }
    `

export const LanguageSwitcherWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 10px;
`;

export const Son = styled.main`
    display: flex;
    flex-direction: column;    
    margin-top: 70px;
`

export const Grandchild = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-left: 50px;
    margin-top:130px;
    margin-right: 50px;
    margin-bottom: 50px;
    @media (max-width: 768px) {
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 35px;
    }
    h1{
        margin-bottom:10px;
        margin-top: 70px;
        font-size: 44px;
        font-family: 'Gudea', sans-serif;
        font-weight: bolder;
        @media (max-width: 768px) {
            font-size: 37px;
            margin-top: 0px;
        }
    }
    p{
        margin-bottom: 50px;
        font-family: 'Roboto Mono', monospace;
        font-weight: 300;
        font-size: 25px;
        @media (max-width: 768px) {
            font-size: 17px;
        }
    }
    span{
        color:rgb(12, 43, 151)
    }
`

export const BtnFather = styled.div`
    margin-left: 120px;
    margin-top:50px;
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
        margin: 0;
    }

` 


export const Button1 = styled.a`
  padding: 0.75rem 1.25rem;
  border-radius: 10rem;
  color: #fff;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  height: 15px;
  border: 1px solid;
    width: 140px;
    text-align: center;
&:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  border-radius: 20px;
  z-index: -2;
}
&:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: #161716;
  transition: all 0.9s;
  
  border-radius: 10rem;
  z-index: -1;
}
&:hover {
  color: #fff;
}
&:hover:before {
  width: 100%;
}
@media (max-width: 768px) {
    margin-left:4px;
    height: 15px;
    width: 125px;
}

`

export const Button2 = styled.a`
   padding: 0.75rem 1.25rem;
  border-radius: 10rem;
  color: black;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  height: 15px;
  border: 1px solid;
    width: 140px;
    text-align: center;
    margin-left: 20px;
&:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  z-index: -2;
}
&:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: #161716;
  transition: all 0.9s;
  
  border-radius: 10rem;
  z-index: -1;
}
&:hover {
  color: #fff;
}
&:hover:before {
  width: 100%;
}
@media (max-width: 768px) {
    margin-left:4px;
    height: 15px;
    width: 125px;
}

`