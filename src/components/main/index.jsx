import { Social } from "./socials/social"
import { useTranslation } from "react-i18next";
import { Father, Son, Button1, Button2, Grandchild, LanguageSwitcherWrapper } from './styled.js';

export function Main() {
    const { t } = useTranslation();

    return (
        <Father>
            <LanguageSwitcherWrapper>
                <Social />
            </LanguageSwitcherWrapper>
            <Son>
                <Grandchild>
                    <h1>{t('mainT')} <span>{t('name')}</span></h1>
                    <p>{t('mainD')}</p>
                </Grandchild>
                <div style={{ marginLeft: "120px", marginTop:"40px" }}>
                    <Button1>get in touch</Button1>
                    <Button2>follow-me</Button2>
                </div>
            </Son>
        </Father>
    );
}