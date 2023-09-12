import React, { useState } from "react";
import seta from '../assets/seta.svg';
import br from "../assets/br.svg";
import { useTranslation } from "react-i18next";
import Options from "./flagOptions";

const languageOptions = [
    {
        name: "Portugues",
        value: "ptBR",
        flag: br
    },
]

export default function LanguageSwitcher() {
    const [open, setOpen] = useState(false);
    const [selectedFlag, setSelectedFlag] = useState(br);
    const { i18n } = useTranslation();

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleLanguageChange = (languageOption) => {
        i18n.changeLanguage(languageOption.value);
        setSelectedFlag(languageOption.flag);
        setOpen(false); 
    }
    return (
        <div className="dropdown">
            <button onClick={handleOpen}>
                <p>etaamsdka</p>
                <img src={seta} alt="" />
                <img src={selectedFlag} alt="" />
            </button>
            {open ? (<Options handleLanguageChange={handleLanguageChange} />) : null}
        </div>
    )
}
