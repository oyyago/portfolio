import { Social } from "./socials/social"
import { useTranslation } from "react-i18next";
import {
    Father, Son, Button1, Button2,
    Grandchild, LanguageSwitcherWrapper,
    BtnFather
} from './styled.js';

export function Main() {
    const { t } = useTranslation();

    return (
        <Father>
            <Son>
                <Grandchild>
                    <h1>{t('mainT')} <span>{t('name')} </span><span style={{color:"black"}}>{t("dev")}</span></h1>
                    <p>{t('mainD')}</p>
                </Grandchild>
                <BtnFather>
                    <Button1>get in touch</Button1>
                    <Button2>follow-me</Button2>
                </BtnFather>
                <LanguageSwitcherWrapper>
                <Social/>
            </LanguageSwitcherWrapper>
            </Son>
        </Father>
    );
}