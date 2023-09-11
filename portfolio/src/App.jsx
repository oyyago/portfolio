import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./i18n/languageSwitcher/index";


export default function App() {
  const { t } = useTranslation();

  return (
    <>
      <LanguageSwitcher />  
      <h2>{t('welcome')}</h2>
    </>);
}