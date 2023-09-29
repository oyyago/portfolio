import styled from "styled-components";

export const Father = styled.div`
margin-top: 300px;
margin-bottom: 250px;
` 


export const Ul= styled.ul`
    display: flex;
    flex-direction:row;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

export const Li = styled.li`
    list-style: none;
    width:250px;
    height: 200px;
    background-color: #edece8;
    border: 2px solid black;
    margin: 30px;
    img {
    height: 141px;
    -webkit-filter: blur(1px);
    transition: transform 0.3s ease, filter 0.3s ease; 
    &:hover {
        -webkit-filter: blur(0);
    }
}
    @media (max-width: 768px) {
    width:300px;
    height: 250px;
    margin: 10;
    img {
    height: 168px;
    }
    }
`
export const Son=styled.div`
    display: flex;
    margin-top: 14px;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;

    span{
        text-decoration: underline;
    }

`

export const Button = styled.a`
    text-decoration: none;
    color: black;
    background-color: white;
    height: 20px;
    border: 2px solid black;
    display: flex;
    border-radius: 4px;
    &:hover{
        background-color: #B0B0E4;
    }
    span{
        text-align: center;
        margin: 1px;
}
`