import React from "react";
import classes from './Toolbar.module.scss';
import logo from '../../../assets/img/logo.png';


const navigations = () => {
    return (
        <header className={classes.Toolbar}>
            <div className={classes.Logo}>
                <img src={logo} alt="logo"/>
            </div>
            <nav>
                <p>items</p>
            </nav>
        </header>
    )
};

export default navigations;
