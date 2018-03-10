import React, {Component} from 'react';

import Input from '../../components/Input/Input';
import classes from './Auth.css';
import Button from '../../components/Button/Button';

class Auth extends Component {
    state={
        login:{
            email:{
                elementType: 'input',
                elementConfig:{
                    type: 'email',
                    placeholder:'Adresse email'
                },
                value : '',
                valid : false,
                touched : false,
                validation:{
                    required : true
                }
            },
            password:{
                elementType: 'input',
                elementConfig:{
                    type: 'password',
                    placeholder:'Mot de passe'
                },
                value : '',
                valid : false,
                touched : false,
                validation:{
                    required: true
                }
            }
        },
        formIsValid : false
    }

    changeHandler = (event, inputType) =>{
        const form = { ...this.state.login };
        const formUpdated = { ...form[inputType] };
        formUpdated.value = event.target.value;

        // VERIF INPUT
        formUpdated.valid = this.checkValidity(formUpdated.value, formUpdated.validation);
        formUpdated.touched = true;
        form[inputType] = formUpdated;

        let formIsValid = true;
        for (let key in form){
            formIsValid = form[key].valid && formIsValid
        }

        this.setState({login : form, formIsValid : formIsValid})
    }

    submitHandler = (event) => {
        event.preventDefault();
        const formData={};
        for (let key in this.state.login){
            formData[key] = this.state.login[key].value;
        }
        console.log(formData);
    }

    checkValidity = (value, validation) => {
        let shouldValidate = true;
        if(validation.required){
            shouldValidate = value.trim() !== '' && shouldValidate;
        }
        if (validation.minLength){
            shouldValidate = value.length >= validation.minLength && shouldValidate
        }
        if (validation.maxLength){
            shouldValidate = value.length <= validation.maxLength && shouldValidate
        }
        return shouldValidate;
    }

    render(){
        let formElements = [];
        for (let key in this.state.login){
            formElements.push({
                id : key,
                config : this.state.login[key]
            });
        }

        const form = (
            <form onSubmit={this.submitHandler} className={classes.form}>
                {formElements.map(formElement => (
                <Input
                    key={formElement.id}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    changed={(event) => this.changeHandler(event, formElement.id)} 
                    shouldValidate ={formElement.config.validation}
                    touched = {formElement.config.touched}
                    invalid={!formElement.config.valid}/>
                ))}
                <Button disabled={!this.state.formIsValid}>Se Connecter</Button>
            </form>
        );
        
        return(
            <div>
                {form}
            </div>
            
        );
    }
}

export default Auth;