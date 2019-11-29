import React, {ReactElement} from "react";
import classes from './ItemDetails.module.scss';

export interface ItemDetailsPropsInterface {
    itemDetails: {};
}

const itemDetails = (props: ItemDetailsPropsInterface): ReactElement => {
    return (
        <div className={classes.ItemDetails}>itemDetails works</div>
    )
};

export default itemDetails;
