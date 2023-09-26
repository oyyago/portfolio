import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../i18n/languageSwitcher/index';
import { Cabecalho, Photo, Embeded, MobileMenuWrapper, MobileMenu, LanguageSwitcherWrapper, Pai } from './styled';
import im from '../../../public/EMOJIZE.webp'
import { Link } from 'react-scroll';

export default function Header() {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Pai>
            <Cabecalho>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", fontSize: "15px" }}>
                    <Photo src={im} alt="my photo" />
                    <h2>Yago</h2>
                </div>
                <Embeded>
                    <Link to="about" smooth={true} duration={500}>
                        {t('about')}
                    </Link>
                    <Link to="skils" smooth={true} duration={500}
                    >{t('skils')}
                    </Link>
                    <Link to="projects" smooth={true} duration={500}>{t('projects')}</Link>
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
                        <Link to="about" smooth={true} duration={500}>
                            {t('about')}
                        </Link>
                        <Link to="skils" smooth={true} duration={500}
                        >{t('skils')}
                        </Link>
                        <Link to="projects" smooth={true} duration={500}>{t('projects')}</Link>
                        <LanguageSwitcher />
                    </MobileMenu>
                )}
            </MobileMenuWrapper>
        </Pai>
    );
}
