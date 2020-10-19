import React from 'react';

import classes from '../Logo/Logo.module.css'; 

import burgerLogo from '../../assets/images/burger-logo.png';


const logo=(props)=>
{
    return(
<div className={classes.Logo} style={{height: props.height}}>

<img src={burgerLogo} alt="My"/>

</div>
    );
}

export default logo;