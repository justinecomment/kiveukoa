import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Content from '../../../hoc/Content/Content';
import Button from '../../../components/Button/Button';
import classes from './Ajouter.css';


class Ajouter extends Component {
    render() {
        return (
            <Content>
                <div className={classes.Ajouter}>
                    <NavLink to="/">
                        <Button type="Normal">Revenir en arrière</Button>
                    </NavLink>
                    <p>Ajouter</p>
                </div>
            </Content>
        );
    }
};

export default Ajouter;