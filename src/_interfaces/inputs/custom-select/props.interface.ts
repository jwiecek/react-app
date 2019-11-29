import {Dispatch, SetStateAction} from 'react';

export interface CustomSelectPropsInterface {
    value: string;
    placeholder: string;
    listItems: string[];
    isEditable?: boolean;
    className?: string;
    classContainer?: string;
    changeWidthByClass?: string;
    onChange(event: string);
    disabled?: boolean;
}

export interface KeyboardEventInterface {
    event: KeyboardEvent;
    keyCode: number;
    setOpened: Dispatch<SetStateAction<boolean>>;
    opened: boolean;
    list: HTMLElement | null;
    nextItem: HTMLElement | null;
    previousItem: HTMLElement | null;
    focusedContainer: HTMLElement | null;
    disabled: boolean;
    currentItemId: string | number;
    uniqueId: string;
}
