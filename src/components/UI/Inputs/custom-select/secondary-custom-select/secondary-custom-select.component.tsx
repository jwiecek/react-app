import React, {ReactElement, useState} from 'react';
import './secondary-custom-select.component.scss';
import IconArrowDown from '../../../../../assets/ui-icons/Icon_Arrow_Down.svg';
import IconArrowUp from '../../../../../assets/ui-icons/Icon_Arrow_Up.svg';
import {Collapse, List, ListItem, ListItemText} from '@material-ui/core';
import {SecondaryCustomSelectComponentPropsInterface} from '../../../../_interfaces/shared/inputs/custom-select/secondary-custom-select/secondary-custom-select.interface';
import {ONE_ELEMENT} from '../../../../_consts/inputs.const';

export const SecondaryCustomSelectComponent = ({
    value,
    placeholder,
    isActive,
    className,
    listItems,
    onChange
}: SecondaryCustomSelectComponentPropsInterface): ReactElement => {
    const [stateValue, setStateValue] = useState(value);
    const [opened, setOpened] = useState(false);

    return (
        <div
            className={
                `custom-select-container-small
                ${opened ? 'custom-select-open-box-shadow' : 'custom-select-close-box-shadow'}`
            }
            onClick={(): void => setOpened(!opened)}
        >
            <div className='custom-select-text-field' onBlur={(): void => setOpened(false)}>
                <p
                    className={`custom-select-placeholder ${stateValue ? 'custom-select-placeholder-hidden' : ''}`}
                >
                    {placeholder}
                </p>
                {stateValue &&
                    <p
                        className={
                            `custom-select-value
                            ${isActive ? 'custom-select-value-on' : 'custom-select-value-off'}`
                        }
                    >
                        {value}
                    </p>
                }
                {opened ? <img src={IconArrowUp} alt='Up'/> : <img src={IconArrowDown} alt='Down'/>}
            </div>
            <Collapse in={opened} timeout='auto' unmountOnExit className='custom-select-item-list'>
                <List className={`custom-select-list-padding ${className}`}>
                    {
                        listItems.map((item, index): ReactElement =>
                            <ListItem
                                button
                                className={
                                    `${index < listItems.length - ONE_ELEMENT ? 'custom-select-border-between' : ''}
                                    custom-select-item`
                                }
                                onClick={(): void => {
                                    onChange(item);
                                    setStateValue(item);
                                }}
                                key={index}
                            >
                                <ListItemText primary={item}/>
                            </ListItem>
                        )
                    }
                </List>
            </Collapse>

            <div
                className={
                    `custom-select-full-screen-container
                    ${opened ? 'custom-select-show' : 'custom-select-hide'}`
                }
                onClick={(): void => setOpened(false)}>
            </div>
        </div>
    );
};
