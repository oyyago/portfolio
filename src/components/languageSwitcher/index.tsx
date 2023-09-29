import React, { useState } from "react";
import Select from "react-select";
import br from '../../assets/br.svg';
import us from '../../assets/us.svg';
import es from '../../assets/es.svg';
import { Flag, Father, FatherFlag } from './style';
import { useTranslation } from "react-i18next";

const languageOptions = [
    {
        label: "English",
        value: "en",
        flag: us,
    }
    ,{
        label: "Portugues",
        value: "ptBR",
        flag: br,
    },
    {
        label: "Spanish",
        value: "sp",
        flag: es,
    },

];

export const LanguageSwitcher = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);

    const handleChange = (selectedOption) => {
        setSelectedLanguage(selectedOption);
    };
    return (
        <Father>
            <Select
                value={selectedLanguage}
                onChange={handleChange}
                options={languageOptions}
                isSearchable={false}
                styles={{
                    control: (provided) => ({
                        ...provided,
                        width: "180px",
                        border: "none",
                        cursor: "pointer",
                    }),
                }}
                components={{
                    Option: CustomOption,
                }}
            />
        </Father>
    );
};

function CustomOption({ innerProps, label, data }) {
    const { i18n } = useTranslation();

    return (
        <FatherFlag {...innerProps}>
            <div style={{margin:"0"}} onClick={() => { i18n.changeLanguage(data.value) }}>
                <Flag  src={data.flag} alt={label} />
                <p>{label}</p>
            </div>
        </FatherFlag>
    )
};

export default LanguageSwitcher;