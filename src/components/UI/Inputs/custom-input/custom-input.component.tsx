import React, {ChangeEvent, ReactElement, useEffect, useState} from 'react';
import {TextField} from '@material-ui/core';
import './custom-input.component.scss';
import {CustomInputPropsInterface} from '../../../../_interfaces/inputs/custom-input/props.interface';

export const CustomInputComponent = ({
    isEditable,
    label,
    className,
    onChange,
    onBlur,
    onFocus,
    rows,
    multiline,
    value,
    disabled = false,
    errorClassName = ''
}: CustomInputPropsInterface): ReactElement => {

    const [stateValue, setStateValue] = useState(value || '');
    const [isError, setError] = useState(false);

    useEffect((): void => {
        setStateValue(value);
    }, [value]);


    const onChangeValue = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
        const input = event.target.value;
        setStateValue(input);
        setError(false);
        onChange(input);
    };

    return (
        <div className={`custom-input-container custom-input-border-line-visible ${className} ${disabled ? 'custom-input-dimmed' : ''}`}>
            <TextField
                disabled={isEditable || disabled}
                multiline={multiline}
                rows={rows}
                label={label}
                value={stateValue}
                onChange={(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void =>
                    onChangeValue(event)}
                onFocus={onFocus}
                onBlur={onBlur}
                className={`custom-input-regular-input-width ${isError ? 'custom-input-error' : ''} ${errorClassName}`}
            />
        </div>
    );
};
