export interface InputProps{
    placeholder: string;
    value?: string;
    onChangeText?: (text: string) => void;
    entry?: boolean;
}