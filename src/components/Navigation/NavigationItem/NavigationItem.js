import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

const NavigationItem = (props) => (
    <li>
        <NavLink className={classes.NavLink} to={props.link}>{props.children}</NavLink> 
    </li>  
);
   
    
export default NavigationItem;