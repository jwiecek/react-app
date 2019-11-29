import React, {ReactElement, useEffect, useState} from 'react';
import ItemHeader from '../../components/Item/ItemHeader/ItemHeader';
import classes from './ContentItem.module.scss';
import ItemService from '../../_services/item.service';
import ItemForm from "../../components/Item/ItemForm/ItemForm";
import ItemDetails from "../../components/Item/ItemDetails/ItemDetails";

const ContentItem = (): ReactElement => {

    const [title, setTitle] = useState('');
    const [formData, setFormData]= useState();
    const [itemDetails, setItemDetails] = useState();

    useEffect(() => {
        ItemService.getContentItem().then((response): void => {
            console.log(response);
            setTitle(response.data.name);
            setFormData(response.data.elements);
            setItemDetails(response.data.elements);
        })
    },[]);

    return (

        <section className={classes.ContentItem}>
            {/*<p>Spinner</p>*/}
            <ItemHeader title={title}/>
            <div className={classes.ItemBody}>
                <ItemForm formData={formData}/>
                <ItemDetails itemDetails={itemDetails}/>
            </div>
        </section>
    );
};

export default ContentItem;
