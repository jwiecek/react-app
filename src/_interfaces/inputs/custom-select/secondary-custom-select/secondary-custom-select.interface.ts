export interface SecondaryCustomSelectComponentPropsInterface {
    value: string;
    placeholder: string;
    listItems: string[];
    className?: string;
    isActive?: boolean;
    onChange(event: string): any;
}
