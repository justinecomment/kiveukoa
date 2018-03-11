import React from 'react';

import Content from '../../hoc/Content/Content';
import classes from './Navigation.css';
import NavigationItem from './NavigationItem/NavigationItem';


const Navigation = () => (
    <Content>
        <ul className={classes.Navigation}>
            <NavigationItem link='/'>Dashboard</NavigationItem>
            <NavigationItem link='/admin'>Admin</NavigationItem>
            <NavigationItem link='/login' className={classes.Icon}>
                <i className="fas fa-user-circle"></i>
            </NavigationItem>
            
        </ul>
    </Content>
);

export default Navigation;
