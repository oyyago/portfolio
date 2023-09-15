import styled from "styled-components";

export const Father = styled.main`
    display: flex;
    flex-direction: row;
    height: 450px;
    justify-content: center;
    align-items: center;
`

export const LanguageSwitcherWrapper = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const Son = styled.main`
    display: flex;
    flex-direction: column;    
    margin-top: 70px;
`

export const Button1= styled.button`
    margin-left: 20px;
    height: 40px;
    width: 200px;
    background-color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    &:hover{
        border: rgb(80, 182, 222) 2px solid;
        background-color: black;
        color: white;
}
`

export const Button2= styled.button`
    margin-left: 20px;
    height: 40px;
    width: 200px;
    background-color: white;
    border: none;
    border-radius: 20px;
    border: 2px solid;
    background-color: transparent;
    cursor: pointer;
    &:hover{
        border: rgb(80, 182, 222) 2px solid;
        background-color: black;
        color: white;
};
`


export const Grandchild = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-left: 50px;
    margin-right: 50px;
    h1{
        margin-bottom:10px;
        margin-top: 70px;
        font-size: 44px;
    }
    p{
        margin-bottom: 50px;
        font-size: 25px;
    }
    span{
        color:rgb(12, 43, 151)
    }
`
