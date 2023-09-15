import styled from "styled-components";

export const Father = styled.main`
    display: flex;
    flex-direction: row;
    height: 450px;
    justify-content: center;
    align-items: center;
    padding-top: 60px;
    @media (max-width: 768px) {
        padding-top: 80px;
    }
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

export const Grandchild = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-left: 50px;
    margin-right: 50px;
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
        font-family: 'Habibi', serif;
        font-weight: 100;
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


export const Button1 = styled.button`
    margin-left: 20px;
    height: 40px;
    width: 200px;
    background-color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    &:hover{
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        color: white;
        background-color: black;
}
@media (max-width: 768px) {
    margin-left:4px;
    height: 40px;
    width: 140px;
}

`

export const Button2 = styled.button`
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
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        background-color: white;
        border: 2px solid ;
};
@media (max-width: 768px) {
    height: 40px;
    width: 140px;
}
`