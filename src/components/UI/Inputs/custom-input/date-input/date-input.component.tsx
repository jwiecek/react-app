import React, {Dispatch, ReactElement, useState} from 'react';
import './date-input.component.scss';
import {CustomDatePropsInterface} from '../../../../_interfaces/shared/inputs/custom-input/custom-date/props.interface';
import {DATE_FORMAT, NUMBER_OF_FULL_FILL_DATE, PROPS_DATE_FORMAT} from '../../../../_consts/inputs.const';
import DateFormatter, {TimezoneTypeEnum} from '../../../../_helpers/date-formatter';
import NumberFormat from 'react-number-format';
import {TextField} from '@material-ui/core';
import {PersonalInfoTypeEnum} from '../../../../_enums/personal-info-type.enum';
import {isDateValid} from '../../../../_helpers/isDateValid';
import moment from 'moment-timezone';

const currentYear = Number(moment().format('YYYY'));
const minimalYear = '1900';
const minimalUserYear = 14;
const MAXIMAL_NUMBER_TO_AUTOCOMPLETE = 2;
const maskFormat = ['M', 'M', 'D', 'D', 'Y', 'Y', 'Y', 'Y'];

interface DateValueInterface {
    formattedValue: string;
    value: string;
    floatValue: number;
}

const limit = (inputValue: string, maxNumber: number, minNumber = ''): string => {
    const max = maxNumber + '';

    if (typeof Number(inputValue) !== 'number' && Number.isNaN(Number(inputValue))) {
        return inputValue;
    }

    if (Number(inputValue) > maxNumber) {
        return max;
    }

    if (inputValue == '00' && max.length <= MAXIMAL_NUMBER_TO_AUTOCOMPLETE) {
        return '01';
    }

    const conditionToAutoComplete =
        minNumber
        && minNumber.length === inputValue.length
        && Number(inputValue) < Number(minNumber);

    if (conditionToAutoComplete) {
        return minNumber;
    }

    return inputValue;
};

const formatter = (inputValue: string): string => {
    const month =limit(inputValue.substring(0, 2), 12);
    const year = limit(inputValue.substring(4, 8), currentYear - minimalUserYear, minimalYear);

    let maxDayInMonth;
    maxDayInMonth = 31;
    const isYearFull = year && !Number.isNaN(Number(year)) && Number(year) > Number(minimalYear);
    if (isYearFull) {
        maxDayInMonth = DateFormatter.dateParserToMoment(TimezoneTypeEnum.NEW_YORK, [Number(year), Number(month) - 1]).endOf('month').date();
    }
    const day = limit(inputValue.substring(2, 4), maxDayInMonth);

    return `${month}${day}${year}`;
};

const valueFormatter = (propsValue: string): string => {
    if (!!propsValue && propsValue.length !== NUMBER_OF_FULL_FILL_DATE) {
        return '';
    }
    const formattedPropsValue = moment(propsValue).format(PROPS_DATE_FORMAT);

    return formatter(formattedPropsValue);
};

const onChangeDate = (
    selectedDate: string,
    setError: Dispatch<boolean>,
): string => {

    if (!selectedDate) {
        setError(false);
        return '';
    }

    const isValid = isDateValid(selectedDate);
    setError(!isValid);

    if (!isValid) {
        return '';
    }

    const formattedDate =
        DateFormatter.dateParserToMoment(TimezoneTypeEnum.NEW_YORK, selectedDate)
            .utcOffset(-new Date().getTimezoneOffset())
            .format(DATE_FORMAT);
    return formattedDate;
};

const Component = ({
    onChange,
    value = '',
    className = ''
}: CustomDatePropsInterface): ReactElement => {
    const [isError, setError] = useState(false);
    const [date, setDate] = useState(valueFormatter(value));

    return (
        <div className={`date-input-container date-input-border-line-visible ${className}`}>
            <NumberFormat
                customInput={TextField}
                format='##/##/####'
                placeholder='MM/DD/YYYY'
                mask={maskFormat}
                variant='standard'
                value={date}
                label={PersonalInfoTypeEnum.BIRTHDAY}
                className={`date-input-regular-input-width ${isError ? 'date-input-error' : ''}`}
                onValueChange={(values: DateValueInterface): void => {
                    setDate(formatter(values.value));
                    const validValue = onChangeDate(values.formattedValue, setError);
                    onChange(validValue);
                }}
            />
        </div>
    );
};

export default {
    Component,
    limit,
    formatter,
    valueFormatter,
    onChangeDate

};
