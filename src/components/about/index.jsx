import { useTranslation } from "react-i18next";
import { Section, SubS, SubS2, Div, Div2, Osmose } from './styled'
import im from './im.png';


export default function About() {

    const { t } = useTranslation();

    return (
        <Section>
            <SubS>
                <h1>{t('aboutT')}</h1>
                    <Osmose />
                <p>{t('aboutSb')}</p>
            </SubS>
            <SubS2>
            <Div2>
                    <img  src={im} alt="Foto Yago" />
                </Div2>
                <Div>
                    <h2>{t('aboutT2')}</h2>
                    <p>{t('aboutSb2')}</p>
                    <p>{t('aboutSb3')}</p>
                </Div>
            </SubS2>
        </Section>
    )
}