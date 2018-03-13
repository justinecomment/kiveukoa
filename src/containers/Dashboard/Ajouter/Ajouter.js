import React, { Component } from 'react';

import Content from '../../../hoc/Content/Content';
import classes from './Ajouter.css';


class Ajouter extends Component {
    render() {
        return (
            <Content>
                <div className={classes.Ajouter}>
                    <p>Vous pouvez créer un déjeuner</p>
                </div>
            </Content>
        );
    }
};

export default Ajouter;