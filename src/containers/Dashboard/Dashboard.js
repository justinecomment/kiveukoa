import React, {Component} from 'react';

import Content from '../../hoc/Content/Content';
import classes from './Dashboard.css';
import Button from '../../components/Button/Button';
import axios from '../../axios-menu';


class Dashboard extends Component {
    state={
        menuType: []
    }

    componentDidMount = () => {
        axios.get('https://kiveukoa.firebaseio.com/menu.json')
            .then( response => {
                const dataArray = [];
                for (let idElm in response.data){
                    dataArray.push({
                        config : response.data[idElm],
                        id : idElm
                    });
                }
                this.setState({menuType : dataArray});
            })
            .catch( error => {
                console.log(error);
            });
    };

   
    addDataToPost = () => {
        let dataToPost = {
            chinois:{
                label : "Chinois",
                description: "Description Chinois"
            },
            Japonais :{
                label : "Japonais",
                description: "Description Japonais"
            },
            Fastfood :{
                label : "Fastfood",
                description: "Description Fastfood"
            }
        };

        for(let oneData in dataToPost){
            axios.post('/menu.json', dataToPost[oneData])
            .then((res) => {
              console.log(res.data);
              this.setState({menuType : res.data});
            })
            .catch((err) => {
              console.log(err);
            })
        }
    }

    onClickToConsulter = () =>{
        this.props.history.push('/consulter');
    }
        
    onClickToAjouter = () => {
        this.props.history.push('/ajouter');
    }

    render(){
    
    return(
        <Content>
            <div className={classes.Dashboard}>
                <div>
                    <p>Menu classés par type</p>

                    <ul className={classes.listeMenus}>
                         {this.state.menuType.map((menu, id) => (
                            <li key={id}>{menu.config.label}</li>
                        ))}
                    </ul>
                </div>

                <Button type="Normal" clicked={this.onClickToConsulter}>Consulter l'ensemble des déj</Button>
                <Button type="Normal" clicked={this.onClickToAjouter}>Créer un déj</Button>
                {/* <button onClick={this.addDataToPost}>ajouter menuType</button> */}
            </div>
        </Content>
        );
    }
};

export default Dashboard;