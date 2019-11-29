import React, {ReactElement, useState} from 'react';
import {
    CustomExpDatePropsInterface
} from '../../../../_interfaces/shared/inputs/custom-input/custom-date/props.interface';
import NumberFormat from 'react-number-format';
import {TextField} from '@material-ui/core';
import {cardDate} from '../../../../_consts/payment-method-modal.const';
import './expiration-date-input.component.scss';
import isExpDateValid from '../../../../_helpers/is-exp-date-valid';

const maskFormat = ['M', 'M', 'Y', 'Y'];

interface DateValueInterface {
    formattedValue: string;
    value: string;
    floatValue: number;
}

const limit = (value: string, max: string): string => {
    if (value.length === 2) {
        if (Number(value) === 0) {
            value = '01';
        } else if (value > max) {
            value = max;
        }
    }
    return value;
};

const cardExpiry = (value: string): string => {
    const month = limit(value.substring(0, 2), '12');
    const year = value.substring(2, 4);

    return month + (year.length ? '/' + year : '');
};

const Component = ({
    onChange,
    className = ''
}: CustomExpDatePropsInterface): ReactElement => {
    const [isError, setError] = useState(false);
    const [date, setDate] = useState('');

    return (
        <div className={`exp-date-input-container exp-date-input-border-line-visible ${className}`}>
            <NumberFormat
                customInput={TextField}
                format={cardExpiry}
                placeholder='MM/YY'
                mask={maskFormat}
                variant='standard'
                value={date}
                label={cardDate.expiration}
                className={`exp-date-input-regular-input-width ${isError ? 'exp-date-input-error' : ''}`}
                onValueChange={(values: DateValueInterface): void => {
                    setDate(values.formattedValue);
                    const validValue = isExpDateValid(values.formattedValue, setError);
                    onChange(validValue);
                }}
            />
        </div>
    );
};

export default {
    Component
};
