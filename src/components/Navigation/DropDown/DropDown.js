import React from 'react';

import classes from './DropDown.css';

const DropDown = (props) => (
    <div className={classes.Dropdown}>
        <button className={classes.Dropbtn}>
            {props.children}
            <i className="fas fa-sort-down"></i>
        </button>

        <div className={classes.DropdownContent}>
            <a href={props.link1}>{props.textLink1}</a>
            <a href={props.link2}>{props.textLink2}</a>
        </div>
    </div>
);

export default DropDown;
