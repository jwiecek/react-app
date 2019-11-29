export interface CustomInputPropsInterface {
    label: string;
    type: string;
    onChange(event: string, error?: boolean);
    value?: any;
    className?: string;
    isPassword?: boolean;
    isEditable?: boolean;
    multiline?: boolean;
    rows?: number | string;
    onFocus?();
    onBlur?();
    disabled?: boolean;
    errorClassName?: string;
}
