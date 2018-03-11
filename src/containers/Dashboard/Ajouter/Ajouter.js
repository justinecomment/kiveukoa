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
                        <Button type="Normal">
                        <i className="fas fa-long-arrow-alt-left"></i>
                        </Button>
                    </NavLink>
                    <p>Vous pouvez créer un déjeuner</p>
                </div>
            </Content>
        );
    }
};

export default Ajouter;