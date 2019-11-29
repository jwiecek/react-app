import {ChangeEvent, MouseEvent} from 'react';

export interface CheckboxRadioInputInterface {
    type: string;
    onChange?(event: ChangeEvent<HTMLInputElement>): void;
    onClick?(event: MouseEvent<HTMLInputElement>): void;
    name: string;
    value: any;
    id?: string;
    disabled?: boolean;
    checked?: boolean;
}
