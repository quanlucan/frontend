import React, { Component } from 'react';
import {getUser,setUser} from '../store/user';

class Ano extends Component {
    constructor(props) {
        super(props);
        let user = getUser();
        this.state={
            name:user.name,
            age:user.age
        }
        this.changeName = this.changeName.bind(this);
        this.changeAge = this.changeAge.bind(this);
        this.submit = this.submit.bind(this);
        this.getExternalUser = this.getExternalUser.bind(this);
        console.log(user);
    }
    changeName(event){
        console.log(event.target.value)
        this.setState({
            name:event.target.value
        })
    }
    changeAge(event){
        this.setState({
            age:event.target.value
        })
    }
    submit(){
        setUser(
            this.state.name,
            this.state.age
        )
    }
    getExternalUser(){
        let user = getUser();
        console.log("ano....externalUser",user);
    }
    render() {
        return (
            <div>
                hello {this.state.name} ,your age is {this.state.age}
                <button onClick={this.getExternalUser}>click</button>
            </div>
        );
    }
}

export default Ano;