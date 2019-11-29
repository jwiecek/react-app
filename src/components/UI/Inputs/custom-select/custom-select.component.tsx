import React, {ReactElement, useEffect, useState} from 'react';
import './custom-select.component.scss';
import IconArrowDown from '../../../../assets/ui-icons/Icon_Arrow_Down.svg';
import IconArrowUp from '../../../../assets/ui-icons/Icon_Arrow_Up.svg';
import {Collapse, List, ListItem, ListItemText} from '@material-ui/core';
import {ONE_ELEMENT} from '../../../_consts/inputs.const';
import {
    CustomSelectPropsInterface,
    KeyboardEventInterface
} from '../../../_interfaces/shared/inputs/custom-select/props.interface';
import {KeyboardKeyIdEnum} from '../../../_enums/keyboard-key-id.enum';

export const keyboardEventHandler = ({
    event,
    keyCode,
    opened,
    setOpened,
    list,
    nextItem,
    previousItem,
    focusedContainer,
    disabled,
    currentItemId,
    uniqueId
}: KeyboardEventInterface): void => {
    switch (keyCode && keyCode.toString()) {
        case KeyboardKeyIdEnum.ARROW_DOWN:
            event.preventDefault();
            if (!disabled && !opened && currentItemId === uniqueId) {
                setOpened(true);
                list && list.focus();
            }
            if (!disabled && opened) {
                nextItem && nextItem.focus();
            }
            break;
        case KeyboardKeyIdEnum.ARROW_UP:
            if (!disabled && opened && document.activeElement) {
                previousItem && previousItem.focus();
            }
            break;
        case KeyboardKeyIdEnum.ENTER:
            if (opened) {
                setOpened(false);
                focusedContainer && focusedContainer.focus();
            }
            break;
        case KeyboardKeyIdEnum.TAB:
            if (opened) {
                event.preventDefault();
            }
            break;
        default:
            return;
    }
};

export const CustomSelectComponent = ({
    value,
    classContainer,
    changeWidthByClass,
    placeholder,
    className,
    listItems,
    onChange,
    disabled = false
}: CustomSelectPropsInterface): ReactElement => {
    const uniqueId = listItems[0] + listItems.length + listItems[listItems.length - 1];
    const [stateValue, setStateValue] = useState(value);
    const [opened, setOpened] = useState(false);

    useEffect((): void => {
        setStateValue(value);
    }, [value]);

    const selectHandler = (): void => {
        const currentItemId = document.activeElement ? document.activeElement.id : KeyboardKeyIdEnum.ZERO;

        document.onkeydown = function(event): void {
            const list = document.getElementById(KeyboardKeyIdEnum.ZERO.toString());
            const nextItem = document.getElementById(`${Number(currentItemId) + Number(KeyboardKeyIdEnum.ITERATOR)}`);
            const previousItem = document.getElementById(`${Number(currentItemId) - Number(KeyboardKeyIdEnum.ITERATOR)}`);
            const focusedContainer = document.getElementById(uniqueId);
            const keyCode = event.keyCode;

            keyboardEventHandler({event, keyCode, opened, setOpened, list, nextItem, previousItem, focusedContainer, disabled, currentItemId, uniqueId});
        };
    };

    return (
        <div
            className={
                `custom-select-container
                ${opened ? 'custom-select-open-box-shadow' : 'custom-select-close-box-shadow'}
                ${classContainer}
                ${disabled ? 'custom-select-dimmed' : ''}`
            }
            onClick={(): void => {
                if (!disabled) setOpened(!opened);
            }}
            tabIndex={0}
            onFocus={selectHandler}
            id={uniqueId}
            onBlur={(): void => {
                document.onkeydown = null;
            }}
        >
            <div
                className={`custom-select-text-field ${changeWidthByClass}`}
                onBlur={(): void => {
                    if (!disabled) setOpened(false);
                }}
            >
                <p
                    className={`custom-select-placeholder ${stateValue ? 'custom-select-shrink-placeholder' : ''}`}
                >
                    {placeholder}
                </p>
                {stateValue && <p className='custom-select-value'>{stateValue}</p>}
                {opened ? <img src={IconArrowUp} alt='Up'/> : <img src={IconArrowDown} alt='Down'/>}
            </div>
            <Collapse
                in={opened}
                timeout='auto'
                unmountOnExit
                className={`custom-select-item-list ${changeWidthByClass}`}
            >
                <List className={`custom-select-list-padding ${className}`}>
                    {
                        listItems.map((item, index): ReactElement =>
                            <ListItem
                                button
                                className={`${index < listItems.length - ONE_ELEMENT ? 'custom-select-border-between' : ''} custom-select-item`}
                                onClick={(): void => {
                                    onChange(item);
                                    setStateValue(item);
                                }}
                                key={index}
                                id={`${index}`}
                            >
                                <ListItemText primary={item}/>
                            </ListItem>
                        )
                    }
                </List>
            </Collapse>
            <div className={`custom-select-full-screen-container ${opened ? 'custom-select-show' : 'custom-select-hide'}`}
                onClick={(): void => setOpened(false)}>
            </div>
        </div>
    );
};
