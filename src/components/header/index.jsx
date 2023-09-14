import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../i18n/languageSwitcher/index';
import { Cabecalho, Photo, Embeded, MobileMenuWrapper, MobileMenu, LanguageSwitcherWrapper } from './styled';

export default function Header() {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <Cabecalho>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Photo src="https://i.postimg.cc/TwY74D31/profile-pic-8.png" alt="my photo" />
                    <h2>Yago</h2>
                </div>
                <Embeded>
                    <a href="#">{t('about')}</a>
                    <a href="#">{t('skils')}</a>
                    <a href="#">{t('projects')}</a>
                </Embeded>
                <LanguageSwitcherWrapper>
                    <LanguageSwitcher />
                </LanguageSwitcherWrapper>
                <div className="menu-icon" onClick={toggleMenu}>
                    <div className={`menu-bar ${menuOpen ? 'open' : ''}`}></div>
                    <div className={`menu-bar ${menuOpen ? 'open' : ''}`}></div>
                    <div className={`menu-bar ${menuOpen ? 'open' : ''}`}></div>
                </div>
            </Cabecalho>
            <MobileMenuWrapper>
                {menuOpen && (
                    <MobileMenu>
                        <a href="#">{t('about')}</a>
                        <a href="#">{t('skils')}</a>
                        <a href="#">{t('projects')}</a>
                        <LanguageSwitcher />
                    </MobileMenu>
                )}
            </MobileMenuWrapper>
        </>
    );
}
