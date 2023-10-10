import { Social } from "./socials/social.js"
import { useTranslation } from "react-i18next";
import {
    Father, Son, Button1, Button2,
    Grandchild, LanguageSwitcherWrapper,
    BtnFather
} from './styled.ts';

export default function Main() {
    const { t } = useTranslation();
    return (
        <Father>
            <Son>
                <Grandchild>
                    <h1>{t('mainT')} <span>{t('name')} </span><span style={{color:"black"}}>{t("dev")}</span></h1>
                    <p>{t('mainD')}</p>
                </Grandchild>
                <BtnFather>
                        <Button1 href="mailto:yyagoaraujo@gmail.com" target="_blank">{t("btn1")}</Button1>
                        <Button2 href="https://www.linkedin.com/in/oyyago" target="_blank" >{t("btn2")}</Button2>
                </BtnFather>
                <LanguageSwitcherWrapper>
                <Social/>
            </LanguageSwitcherWrapper>
            </Son>
        </Father>
    );
}