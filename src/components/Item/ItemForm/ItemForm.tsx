import React, {ReactElement} from "react";
import classes from './ItemForm.module.scss';

export interface ItemFormPropsInterface {
    formData: {};
}

const itemForm = (props: ItemFormPropsInterface): ReactElement => {
    return (
        <div className={classes.ItemForm}>itemForm works</div>
    )
};

export default itemForm;
