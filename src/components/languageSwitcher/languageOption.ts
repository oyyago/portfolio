import br from '../../assets/br.svg';
import us from '../../assets/us.svg';
import es from '../../assets/es.svg';

export interface LanguageOption {
    label: string;
    value: string;
    flag: string;
}

export const languageOptions: LanguageOption[] = [
    {
        label: "English",
        value: "en",
        flag: us,
    },
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
];