import React, { useState } from "react";
import Select from "react-select";
import { LanguageOption,languageOptions } from "./languageOption";
import { Flag, Father, FatherFlag } from './style';
import { useTranslation } from "react-i18next";

const CustomOption: React.FC<{
    innerProps: any;
    label: string;
    data: LanguageOption;
}> = ({ innerProps, label, data }) => {
    const { i18n } = useTranslation();
    return (
        <FatherFlag {...innerProps}>
            <div style={{ margin: "0" }} onClick={() => { i18n.changeLanguage(data.value) }}>
                <Flag src={data.flag} alt={label} />
                <p>{label}</p>
            </div>
        </FatherFlag>
    );
};
const LanguageSwitcher: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>(languageOptions[0]);

    const handleChange = (selectedOption: LanguageOption | null) => {
        if (selectedOption) {
            setSelectedLanguage(selectedOption);
        }
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

export default LanguageSwitcher;
