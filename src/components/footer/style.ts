import styled from 'styled-components';

export const MainFooter = styled.footer`
  background-color: #00b0d9;
  color: #00b0d9;
  font-size: 0.875em;
  margin-top: 70px;
`;

export const Img=styled.img`
  height: 40px;
`


export const Links= styled.div`
    height: 44px;
    margin-top: 0;
    margin-right: 80px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`;
export const Sub= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
margin-left: 80px;
}
  

`


export const Content = styled.div`
  float: left;
  width: 90%;
  padding: 5em 0;
  background-color: black;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h2{
    font-size: 40px;
  }
  h3{
    font-size: 30px;
    margin-right:80px;
  }
  p{
    font-size: 15px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
}
`;
export const Cont=styled.div`
margin-left: 40px;

@media (max-width: 768px) {
 margin:20px;
}
`

export const Line = styled.div`
height: 1px;
width: 700px;
background-color: white;
`

export const A = styled.a`
    height: 20px;
    margin-right: 17px;
    margin-bottom: 14px;
`


export const MainFooterCopy = styled.div`
  background-color: #01a2c8;
  width: 100%;
  float: left;
  text-align: center;
  padding: 1.em 0em;

  p {
    font-family: 'open_sanslight';
    font-size: 1em;
    color: #e1e0e0;
    height: 20px;
  }

  .m-b-footer {
    margin-bottom: 0.5em;
  }

  .by {
    font-size: 0.96em;
  }

  .by a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .by i {
    font-size: 0.96em;
    margin-right: 3px;
    color: #e82626;
  }

`;
