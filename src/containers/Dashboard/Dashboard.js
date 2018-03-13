import React, {Component} from 'react';

import Content from '../../hoc/Content/Content';
import classes from './Dashboard.css';
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
              this.setState({menuType : res.data});
            })
            .catch((err) => {
              console.log(err);
            })
        }
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

                {/* <button onClick={this.addDataToPost}>ajouter menuType</button> */}
            </div>
        </Content>
        );
    }
};

export default Dashboard;