import React from 'react';

import Content from '../../hoc/Content/Content';
import classes from './Admin.css';
import Button from '../../components/Button/Button';

const Admin = () => (
    <Content>
        <div className={classes.Admin}>
            <Button type="Normal">Créer un resto</Button>
            <Button type="Normal">Créer un type de bouffe</Button>
            <Button type="Normal">Créer un menu</Button>
        </div>
    </Content>
);

export default Admin;