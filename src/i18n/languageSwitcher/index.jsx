import React, { useState } from "react";
import Select from "react-select";
import br from '../assets/teste.webp';
import us from '../assets/us.svg';
import es from '../assets/es.svg';
import { Flag } from './style'

const languageOptions = [
    {
        label: "Portugues",
        value: "ptBR",
        flag: br,
    },
    {
        label: "Spanish",
        value: "sp",
        flag: es,
    },
    {
        label: "English",
        value: "en",
        flag: us,
    }
]

export const LanguageSwitcher = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);

    const handleChange = (selectedOption) => {
        setSelectedLanguage(selectedOption);
    };

    return (
        <div>
            <Select
                value={selectedLanguage}
                onChange={handleChange}
                options={languageOptions}
                isSearchable={false}
                styles={{
                    control: (provided) => ({
                        ...provided,
                        width: "170px",
                    }),
                }}
                components={{
                    Option: CustomOption,
                }}
            />
        </div>
    );
}

const CustomOption = ({ innerProps, label, data }) => (
    <div {...innerProps}>
        <Flag src={data.flag} alt={label} style={{ marginRight: "10px" }} />
        {label}
    </div>
);

export default LanguageSwitcher;
