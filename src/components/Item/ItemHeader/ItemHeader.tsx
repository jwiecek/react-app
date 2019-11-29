import React, {ReactElement} from "react";
import classes from './ItemHeader.module.scss'

export interface ItemHeaderPropsInterface {
    title: string;
}

const itemHeader = (props: ItemHeaderPropsInterface): ReactElement => {
    return (
        <div className={classes.HeaderDetails}>
            <h2>{props.title}</h2>
        </div>
    )
};

export default itemHeader;
