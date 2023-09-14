import styled from "styled-components";

export const Father = styled.div`
    height: 280px;
    width: 50px;
    background-color: white;
    display: flex;
    flex-direction: column;
    flex-direction: column;
    margin-top: 70px;
    justify-content: center;
    border-radius: 8px;
    align-items: center;
    a{
    height: 34px;
    margin-top: 14px;
    margin-bottom: 14px;
    }
    box-shadow: 10px 5px 10px rgba(11,1,1,0.13);
    &:hover{
    height: 300px;
    width: 55px;
    }
`

export const Img = styled.img`
    height: 34px;

    filter: grayscale(10); 
    &:hover{
        filter: grayscale(0);
        height: 40px;
    }
`