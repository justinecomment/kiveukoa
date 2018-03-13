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
        case ('dropDown1'):
            navElement = <DropDown link1="/dashboard"
                                   link2="/consulter"
                                   link3="/ajouter"
                                   textLink1="Dashboard"
                                   textLink2="Consulter les déj"
                                   textLink3="Créer un déj">
                                    {props.children}
                        </DropDown>
            break;
        case ('dropDown2'):
            navElement = <DropDown link1="/create-restaurant"
                                   link2="/create-type-menu"
                                   link3="/create-menu"
                                   textLink1="Créer un restaurant"
                                   textLink2="Créer un Type de Menu"
                                   textLink3="Créer un Menu">
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
        </li>  
    );
};
   
    
export default NavigationItem;