import React, { useState } from "react";
import seta from '../assets/seta.svg';
import br from "../assets/br.svg";
import { useTranslation } from "react-i18next";
import Options from "./flagOptions";
import { Flag, Seta, Button, Father } from "./style";

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
    const [selectedName, setSelectedName] = useState(languageOptions[0].name)
    const { i18n } = useTranslation();

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleLanguageChange = (languageOption) => {
        i18n.changeLanguage(languageOption.value);
        setSelectedFlag(languageOption.flag);
        setSelectedName(languageOption.name)
        setOpen(false);
    }
    return (
        <Father>
            <Button style={{ color: "black" }} onClick={handleOpen}>
                <span><Flag src={selectedFlag} />
                    <Seta src={seta} /></span>
                <p>{selectedName}</p>
            </Button>
            {open ? (<Options handleLanguageChange={handleLanguageChange} />) : null}
        </Father>)
}
