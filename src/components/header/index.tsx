import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../languageSwitcher/index';
import { Cabecalho, Photo, Embeded, MobileMenuWrapper, MobileMenu, LanguageSwitcherWrapper, Pai, PhotoEmbeded } from './styled.ts';
import im from '../../assets/EMOJIZE.webp'
import { Link } from 'react-scroll';
import FlagsSwitcher from './flagSwitcher.tsx';

export default function Header() {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <Pai>
            <Cabecalho>
                <PhotoEmbeded style={{  }}>
                    <Photo src={im} alt="my photo" />
                    <h2 >Yago</h2>
                </PhotoEmbeded>
                <Embeded>
                    <Link style={{fontSize:"20px", fontFamily:"Gudea"}} to="about" smooth={true} duration={500}>
                        {t('about')}
                    </Link >
                    <Link style={{fontSize:"20px", fontFamily:"Gudea"}} to="skils" smooth={true} duration={500}
                    >{t('skills')}
                    </Link>
                    <Link style={{fontSize:"20px", fontFamily:"Gudea"}} to="projects" smooth={true} duration={500}>{t('projects')}</Link>
                </Embeded>
                <LanguageSwitcherWrapper>
                    <FlagsSwitcher />
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
