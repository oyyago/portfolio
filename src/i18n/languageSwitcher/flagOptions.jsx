import React from "react";
import es from "../assets/es.svg";
import us from "../assets/us.svg";
import br from "../assets/br.webp";
import { Flag, Button } from "./style";

const languageOptions = [
    {
        name: "Spanish",
        value: "sp",
        flag: es
    },
    {
        name: "Portugues",
        value: "ptBR",
        flag: br
    },
    {
        name: "English",
        value: "en",
        flag: us
    },
]

export default function Options({ handleLanguageChange }) {
    return (
        <div className="options">
            {languageOptions.map((languageOption) => (
                <div key={languageOption.value}>
                    <Button  onClick={() => handleLanguageChange(languageOption)}>
                    <Flag src={languageOption.flag} alt={languageOption.name} />
                    <span style={{color:"black"}}>{languageOption.name}</span>
                      </Button>
                </div>
            ))}
        </div>
    )
}
