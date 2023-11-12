import br from '../../assets/br.png';
import us from '../../assets/uk.png';

export interface LanguageOption {
    label: string;
    value: string;
    flag: string;
}

export const languageOptions: LanguageOption[] = [
    {
        label: "Português",
        value: "ptBR",
        flag: br,
    },
    {
        label: "English",
        value: "en",
        flag: us,
    }
];