import styled from "styled-components";

export const Father = styled.div`
    height: 44px;
    width: 280px;
    background-color: white;
    display: flex;
    flex-direction: row;
    margin-top: 70px;
    justify-content: center;
    align-items: center;
    a{
    height: 20px;
    margin-left: 17px;
    margin-bottom: 14px;
    }
    border-radius: 10px;
    box-shadow: 10px 5px 10px rgba(11,1,1,0.13);
    &:hover{
    margin-left: 2px;
    height: 48px;
    width: 290px;
    }
`

export const Img = styled.img`
    height: 33px;
    &:hover{
        height: 37px;
    }
`