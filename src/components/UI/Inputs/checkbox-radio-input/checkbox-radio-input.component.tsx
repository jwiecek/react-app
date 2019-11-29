import React, {ChangeEvent, MouseEvent, ReactElement, useEffect, useState} from 'react';
import './checkbox-radio-input.component.scss';
import {CheckboxRadioInputInterface} from '../../../_interfaces/shared/inputs/checkbox-radio-input/props.interface';

export const CheckboxRadioInputComponent = ({
    type,
    checked,
    onChange,
    onClick,
    id,
    name,
    value,
    disabled
}: CheckboxRadioInputInterface): ReactElement => {
    const [isChecked, setChecked] = useState(checked);

    useEffect((): void => {
        setChecked(checked);
    }, [checked]);

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
        if (onChange) {
            onChange(event);
        }
    };
    const onClickInput = (event: MouseEvent<HTMLInputElement>): void => {
        if (onClick) {
            onClick(event);
        }
    };

    return (
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            className={'checkbox-radio-input-select-input'}
            disabled={disabled}
            onChange={onChangeInput}
            onClick={onClickInput}
            checked={isChecked}
        />
    );
};
