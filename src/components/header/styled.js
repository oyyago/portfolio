import styled from "styled-components";

export const Cabecalho = styled.header`
    height: 64px;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    position: relative;

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

export const Embeded = styled.div`
    display: flex;
    align-items: center;

    a {
        text-decoration: none;
        font-size: 20px;
        margin-left: 20px;
        color: black;
    }
    @media (max-width: 768px) {
        display: none;
        
    }
`;

export const Photo = styled.img`
    height: 50px;
    margin-right: 20px;
`;

export const MobileMenuWrapper = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {

    }
`;

export const MobileMenu = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-left: 1px solid #ddd;
    position: absolute;
    top: 64px;
    right: 0;

    a {
        text-decoration: none;
        font-size: 20px;
        margin-bottom: 10px;
        color: black;
    }

    @media (max-width: 768px) {

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
