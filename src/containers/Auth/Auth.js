import React, {Component} from 'react';

import Input from '../../components/Input/Input';

class Auth extends Component {
    state={
        controls:{
            email:{
                elementType: 'input',
                elementConfig:{
                    type: 'email',
                    placeholder:'Adresse email'
                },
                value : ''
            },
            password:{
                elementType: 'input',
                elementConfig:{
                    type: 'password',
                    placeholder:'Mot de passe'
                },
                value : ''
            }
        }
    }

    changeHandler = (event, inputType) =>{
        const form = { ...this.state.controls };
        const formUpdated = { ...form[inputType] };
        formUpdated.value = event.target.value;
        form[inputType] = formUpdated;
        this.setState({controls : form})
        console.log(this.state.controls);
    }

    render(){
        const formElements = [];
        for (let key in this.state.controls){
            formElements.push({
                id : key,
                config : this.state.controls[key]
            });
        }

        const form = formElements.map(formElement => {
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType} 
                value={formElement.config.value}
                changed={(event) => this.changeHandler(event, formElement.id)} />
        });


        return(
            <div>
                <form>
                    {form}
                    <button>Valider</button>
                </form>
            </div>
            
        );
    }
}

export default Auth;