import React, { Component } from 'react';
import {getUser,setUser} from '../store/user';

class Index extends Component {
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
        console.log("externalUser",user);
    }
    render() {
        return (
            <div>
                hello world add
                <input type="text" onChange={this.changeName} value={this.state.name}/> 
                <input type="text" onChange={this.changeAge} value={this.state.age} />
                <br />
                <button onClick={this.submit}>submit</button><br />
                <button onClick={this.getExternalUser}> get User</button>
            </div>
        );
    }
}

export default Index;
