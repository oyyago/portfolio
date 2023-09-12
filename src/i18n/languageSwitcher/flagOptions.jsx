import React from "react";
import es from "../assets/es.svg";
import us from "../assets/us.svg";

const languageOptions = [
    {
        name: "Spanish",
        value: "sp",
        flag: es
    },
    {
        name: "English",
        value: "en",
        flag: us
    }
]

export default function Options({ handleLanguageChange }) {
    return (
        <div className="options">
            {languageOptions.map((languageOption) => (
                <div key={languageOption.value}>
                    <button type="button" onClick={() => handleLanguageChange(languageOption)}>
                        {languageOption.name}
                    </button>
                    <img src={languageOption.flag} alt="" />
                </div>
            ))}
        </div>
    )
}
