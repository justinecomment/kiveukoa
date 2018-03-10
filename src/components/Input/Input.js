import React from 'react';

import classes from './Input.css';

const Input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.styleInput];

    if (props.invalid &&  props.shouldValidate && props.touched ){
        inputClasses.push(classes.Invalid);
    }

    switch (props.inputType) {
        case ('input'):
            inputElement = <input
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
                className={inputClasses.join(' ')} />
            break;
        case ('select'):
            inputElement = <select></select>
            break;
        default:
            inputElement = <input
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} 
                className={inputClasses.join(' ')}  />
    }

    return (
        <div>
            {inputElement}
        </div>
    );
}

export default Input;