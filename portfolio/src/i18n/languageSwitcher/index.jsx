import { useTranslation } from "react-i18next"
import 'bootstrap/dist/css/bootstrap.min.css';
const languageOptions = [
    {
        name: "Portugues",
        value: "ptBR",
    },
    {
        name: "spanish",
        value: "sp",
    },
    {
        name: "english",
        value: "en",
    }
]

export const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <span>
                {t("select your language")}
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                    </button>
                    {languageOptions.map((languageOption) => (
                        <div key={languageOption.value}>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button className="dropdown-item" type="button" onClick={() => { i18n.changeLanguage(languageOption.value) }}>
                                    {languageOption.name}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </span>
        </>

    )
} 