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
        padding: 0;
}
`

export const Li = styled.li`
    list-style: none;
    border-radius: 15px;
    width:250px;
    height: 200px;
    background-color: #edece8;
    border: 2px solid black;
    margin: 30px;
    img {  
    border-radius: 10px;
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

`

export const Button = styled.a`
    text-decoration: none;
    color: black;
    background-color: white;
    height: 30px;
    width: 60px;
    border: 2px solid black;
    display: flex;
    border-radius: 4px;
    text-align: center;

    &:hover{
        background-color: black;
        color: white;
    }
    span{
        margin: 0;
        text-align: center;
        margin: 3px;
}
`