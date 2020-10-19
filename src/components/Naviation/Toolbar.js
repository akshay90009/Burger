import React from 'react'
import Logo from '../Logo/Logo';

// import NavigationItems from './NavigationItems';
import DrawerToggle from '../Naviation/SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../Naviation/NavigationItems/NavigationItems';
import classes from './Toolbar.module.css';

const toolbar=(props)=>{
return(

<header className={classes.Toolbar}>
<DrawerToggle clicked={props.drawerToggleClicked}/>
 
     <div className={classes.Logo}> 
     <Logo/>
   
 </div>
<nav className={classes.DesktopOnly}>
<NavigationItems/>
</nav>

</header>

);
}


export default toolbar;