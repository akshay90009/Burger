import React from 'react';

// import classes from '../NavigationItems/NavigationItems.module.css';
import classes from '../../../Naviation/NavigationItems/NavigationItem/NavigationItem.module.css';

// import classes from  '../NavigationItem/NavigationItem.mo';
// import NavigationItem from './NavigationItem/NavigationItem';

const navigationItem = ( props ) => (
    <li className={classes.NavigationItem}>
        <a 
            href={props.link} 
            className={props.active ? classes.active : null}>{props.children}</a>
    </li>
);

export default navigationItem;


