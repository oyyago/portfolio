import styled from "styled-components";

export const Section=styled.section`
 height: 900px;
    margin-top: 120px;

    h1 {
        font-family: 'Gudea', sans-serif;
        font-size: 45px;
        margin-bottom: 0;
    }

    p {
        font-family: 'Habibi', serif;
        font-size: 24px;
    }
    
@media (max-width: 1200px) {
    height: 900px;
}
@media (max-width: 300px) {
    height: 1200px;
}
`

export const SubS = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-left: 70px;
    margin-right: 70px;
    p{
        font-family: 'Roboto Mono', monospace;
        font-weight: 300;
    }
    @media (max-width: 1200px) {
    margin: 20px;
    }


`

export const SubS2= styled.div`
    display: flex;
    flex-direction: row-reverse;

    h2{
        font-size: 35px;
        font-family: 'Gudea', sans-serif;
    }
    img{
        height: 360px;
        border-radius: 1000px;
    }
    @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 0;
    }
`

export const Div=styled.div`
    margin-left: 60px;
    margin-right: 150px;
    p{
    font-family: 'Roboto Mono', monospace;
    font-weight: 300;
}
    @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
    p{
        margin-top: 50px;
        margin-left: 0px;
        margin-right: 0px;
    }
}
`

export const Div2= styled.div`
    @media (max-width: 768px) {
        margin-left: 60px;
    margin-right: 50px;
    margin-top: 40px;
    margin-bottom: 60px;
    }
            display: flex;
            justify-content: center;
            align-items: center;
        margin-right: 150px;
`

export const Osmose= styled.div`
    background-color:  #4700b3;
    height: 9px;
    width: 40px;
    border-radius: 30px;
    margin: 0;
    margin-bottom: 30px;
    margin-top: 5px;
`