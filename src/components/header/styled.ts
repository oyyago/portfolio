import styled from "styled-components";


export const Pai = styled.header`
    z-index: 10;
    height: 100%;
`

export const Cabecalho = styled.div`
    height: 54px;
    width: 100%;
    box-shadow: 20px 10px 10px rgba(11,1,1,0.13);
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 10;


    .menu-icon {
        display: none;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 20px;
        cursor: pointer;

        .menu-bar {
            background-color: black;
            height: 3px;
            width: 100%;
            transition: 0.4s;
            transform-origin: 1px;
        }

        &.open .menu-bar:nth-child(1) {
            transform: rotate(-45deg) translate(-2px, 2px);
        }

        &.open .menu-bar:nth-child(2) {
            opacity: 0;
        }

        &.open .menu-bar:nth-child(3) {
            transform: rotate(45deg) translate(-2px, -2px);
        }
    }

    @media (max-width: 768px) {
        .menu-icon {
            display: flex;
            margin-right: 40px;
        }
        .menu-icon, .menu-bar {
            z-index: 2;
        }
    }
`;

export const PhotoEmbeded= styled.div`
    display:flex; 
    flex-direction: row;
    align-items:center;
    font-size:15px;
    margin-left:35px;

    @media (max-width: 768px) {
        margin-left: 0;
    }

`

export const Embeded = styled.div`
    display: flex;
    align-items: center;

    a {
  background-image: linear-gradient(
    to right,
    #54b3d6,
    #54b3d6 50%,
    #000 50%
  );
  cursor: pointer;
  margin-left: 18px;
  font-size: 14px;
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 5px 0;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
}

a:before{
  content: '';
  background: #54b3d6;
  display: block;
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 3px;
  transition: all 0.3s ease-in-out;
}

a:hover {
 background-position: 0;
}

a:hover::before{
  width: 100%;
}
    @media (max-width: 768px) {
        display: none;
        
    }
`;

export const Photo = styled.img`
    height: 45px;
    margin-right: 10px;
    margin-left: 15px;
    border-radius: 90px;
    background-color: blue;
`;

export const MobileMenuWrapper = styled.div`
    display: flex;
    align-items: center;

`;

export const MobileMenu = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-left: 1px solid #ddd;
    position: fixed;
    top: 64px;
    right: 0;

    a {
        text-decoration: none;
        font-size: 20px;
        margin-bottom: 10px;
        color: black;
    }
`;

export const LanguageSwitcherWrapper = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const LanguageSwitcher = styled.div`
    margin-left: 20px;
`;
