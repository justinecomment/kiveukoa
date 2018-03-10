import React from 'react';

import classes from './Button.css';

const Button = (props) => (
    <div>
        <button className={[classes.button, classes[props.type]].join(' ')}
                onClick={props.clicked}
                disabled={props.disabled}>
            {props.children}
        </button>
    </div>
);

export default Button;