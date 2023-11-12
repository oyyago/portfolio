import styled from 'styled-components';

const HoverEffectContainer = styled.div`
  transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  transition: transform 0.1s ease-in-out,box-shadow 0.1s ease-in-out;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    height: 130px;
    width: 300px;
    border-radius: 10px;
    margin-top: 40px;
`;

const EllipsisText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 23px;
  margin: 0;
 font-family: Gudea;
font-weight: bold;
`;

const FlexList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  gap: 4px;
`;

const FlexListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1px;
  margin: 0;
`;

const FlexContainer = styled.div`
margin-top: 4px;
    display: flex;
    padding: 0;
    gap: 2px;
    flex-direction: row;
    height: 200px;
    width: 40px;
    justify-content: space-around;
a{
  margin: 10px;
}
`;

export const Button1 = styled.a`
  img{
    height: 30px;
  }
`

export { HoverEffectContainer, EllipsisText, FlexList, FlexListItem, FlexContainer };
