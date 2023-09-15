import { useTranslation } from "react-i18next";


export default function About() {

    const { t } = useTranslation();

    return (
        <>
            <h1>{t('aboutT')}</h1>
            <p>{t('aboutSb')}</p>
            <h2>{t('aboutT2')}</h2>
            <p>{t('aboutSb2')}</p>
            <p>{t('aboutSb3')}</p>

        </>
    )
}