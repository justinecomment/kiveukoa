import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';
import DropDown from '../DropDown/DropDown';

const NavigationItem = (props) => {
    let navElement = null;

    switch (props.type){
        case ('button'):
            navElement = <NavLink className={classes.NavLink} 
                                  to={props.link}>
                                   {props.children}
                         </NavLink>
            break;
        case ('dropDown'):
            navElement = <DropDown link1="/"
                                    link2="/"
                                    textLink1="Consulter les déj"
                                    textLink2="Créer un déj">
                                    {props.children}
                        </DropDown>
            break;
            default:
            navElement = <NavLink className={classes.NavLink} 
                                  to={props.link}>
                                   {props.children}
                         </NavLink>
    }

    return(
        <li>
            {navElement}
            {/* <NavLink className={classes.NavLink} to={props.link}>{props.children}</NavLink>  */}
        </li>  
    );
};
   
    
export default NavigationItem;