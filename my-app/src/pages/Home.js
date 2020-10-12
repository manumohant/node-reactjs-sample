import React, {Component} from 'react';
import {
  Typography,
} from '@material-ui/core';
import { getAllUsers,createUser } from '../services/UserService'



class Home extends Component {

  state = {
    user: {},
    title:['User Name','Name'],
    users: [],
    numberOfUsers: 0
  }
  getUsers = () => {
    getAllUsers()
      .then(users => {
        console.log(users)
        this.setState({users: users, numberOfUsers: users.length})
      });
  }
  addUser = (event) =>{
    event.preventDefault();
    createUser(this.state.user)
    .then(user => {
      console.log(user)
      this.getUsers();
    });
  }
  handleInputChange(event){
    this.state.user[event.target.name]  = event.target.value;
    // this.setState({[event.target.name]: event.target.value});
    console.log(this.state);
  }
  render() {
    return (
    <Typography variant="h4">
    <button onClick={this.getUsers}>Get Data</button>
    <div className="col-md-4">
        <div>{this.state.numberOfUsers}</div>
    </div>
    <div>
    <table className="MyClassName">
      <thead>
        <tr>
          {this.state.title.map(title =>
            <th key={title}>{title}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {this.state.users.map((row, i) =>
          <tr key={i}>
            <td >{row.userName}</td>
            <td >{row.name}</td>
          </tr>
        )}
      </tbody>
    </table>
    <div>
    <form onSubmit={this.addUser}>
        <label>
          UserName:
          </label>
          <input type="text" name="userName" onChange={this.handleInputChange.bind(this)} value={this.state.user.userName}  />    
          <label>
          Name:
          </label>
          <input type="text" name="name" onChange={this.handleInputChange.bind(this)} value={this.state.user.name}  />        
        <input type="submit" value="Submit" />
      </form>
    </div>
    </div>
  </Typography>
    );
  }
}
export default Home