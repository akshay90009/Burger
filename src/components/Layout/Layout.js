import React,{Component} from 'react';
import Aux from '../../hoc/auxiliary';
// import   './Layout.css';
import Toolbar from '../Naviation/Toolbar';
import classes from './Layout.module.css'; 
 import sideDrawer from '../Naviation/SideDrawer/SideDrawer';

class Layout extends Component{
state={
   showSideDrawer:true
}



sideDrawerClosedHandler=()=>
{
this.setState({showSideDrawer:false});
}


sideDrawerToggleHandler=()=>{

    this.setState((prevState)=>{
    return {showSideDrawer: !(this.state.showSideDrawer)};
});
}

    render() {
        return (


            <Aux>    

            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <sideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
     
        <main className={classes.Content}>
            {this.props.children}
       
        </main>
    
        </Aux>
        )

    };
}

export default Layout;