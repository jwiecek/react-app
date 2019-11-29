import React from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import classes from './Layout.module.scss'

const Layout = (props: any) => {

    return (
        <React.Fragment>
            <Toolbar/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </React.Fragment>
    );
};

export default Layout;
