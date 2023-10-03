import br from '../../assets/br.png';
import us from '../../assets/uk.png';
import es from '../../assets/es.png';

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