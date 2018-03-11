import React from 'react';

import Content from '../../hoc/Content/Content';
import classes from './Navigation.css';
import NavigationItem from './NavigationItem/NavigationItem';


const Navigation = () => (
    <Content>
        <ul className={classes.Navigation}>
            <NavigationItem type="dropDown" >Dashboard</NavigationItem>
            <NavigationItem type="button" link='/admin'>Admin</NavigationItem>
            <NavigationItem type="button" link='/login' className={classes.Icon}>
                <i className="fas fa-user-circle"></i>
            </NavigationItem>
        </ul>
    </Content>
);

export default Navigation;
