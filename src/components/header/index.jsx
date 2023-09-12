import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../i18n/languageSwitcher/index";
import { Cabecalho, Photo, Embeded } from "./styled";

export default function Header() {
    const { t } = useTranslation();

    return (<>
        <Cabecalho>
            <div style={{display:"flex", flexDirection:"row"}}>
                <Photo src="https://i.postimg.cc/TwY74D31/profile-pic-8.png" alt="my photo" />
                <h2>Yago</h2>
            </div>
            <Embeded>
            <a href="#">About</a>
            <a href="#">Skils</a>
            <a href="#">Projects</a>
            </Embeded>
            <LanguageSwitcher />
        </Cabecalho>
    </>
    )
}
{/*<h2>{t('welcome')}</h2>*/ }
