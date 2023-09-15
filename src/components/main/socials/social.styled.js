import styled from "styled-components";

export const Father = styled.div`
    height: 230px;
    width: 40px;
    background-color: white;
    display: flex;
    flex-direction: column;
    flex-direction: column;
    margin-top: 70px;
    justify-content: center;
    align-items: center;
    a{
    height: 20px;
    margin-top: 17px;
    margin-bottom: 14px;
    }
    box-shadow: 10px 5px 10px rgba(11,1,1,0.13);
    &:hover{
    margin-left: 2px;
    height: 240px;
    width: 42px;
    }
`

export const Img = styled.img`
    height: 30px;
    filter: grayscale(100); 
    &:hover{
        filter: grayscale(0);
        height: 35px;
    }
`