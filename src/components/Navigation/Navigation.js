import React from 'react';
import { NavLink } from 'react-router-dom';

import Content from '../../hoc/Content/Content';
import classes from './Navigation.css';


const Navigation = () => (
    <Content>
        <nav>
            <ul className={classes.Navigation}>
                <li>
                    <NavLink className={classes.menu} to="/">home</NavLink>
                </li>
                <li>
                    <NavLink className={classes.menu} to="/Auth">Auth</NavLink>
                </li>
            </ul>
        </nav>
    </Content>
);

export default Navigation;