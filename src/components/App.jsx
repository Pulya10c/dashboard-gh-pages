import React, { Component, Fragment } from 'react';
import { SelectValue } from './selectValue.jsx';
import { Table } from './Table.jsx';
import Description from './NotationDescriptions.jsx';
import fb from './firebase.service.js';
// import buttonLoad from './buttonLogin.jsx';
import Loader from './Loader.jsx';
import '../style/App.css';
import '../style/login.css'; 


export class App extends Component {
  state = {
    user: null,
    isLoading: true,
    data: null,
    mentor: '',
  };

  login = () => {
    fb.login().then(({ user }) => {
      this.setState({ user });
    }).catch(function(error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  logout = () => {
    fb.logout().then(() => {
      this.setState({ user: null });
    });
  }

  onMentorSelection = (nickName) => {
    this.setState({ mentor: nickName })
 };

  async componentDidMount() {
    await fetch('./data.json')
      .then(response => response.json())
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch(err => console.log(err));
  };

  render() {

  const {data, isLoading, mentor, user} = this.state;

  if (!user) {
    return (
      <div className='wrapper-login'>
        <h1>Mentor-dashboard</h1>
        <span className='text-login'>Please log in with your github account:</span>
        <div className='button-login' onClick={this.login}></div>
      </div>
    );
  } else
    if (!isLoading) {
      return (
        <Fragment>
          <div className='headline'>
            <div className='user'>
              <p className='user-name'>{user.displayName}</p>
              <img className="avatar" alt="avatar" title={user.displayName} src={user.photoURL}></img>
              <button className="button-out" type="button" onClick={this.logout}>LogOut</button>
            </div>
            <h1>Mentor dashboard</h1>
          </div>
          <div className='wrapper-search'>
            <p>Select mentor: </p>
            <SelectValue 
              data={data}
              onMentorSelection = {this.onMentorSelection}
            />
          </div>
          <Table mentor = {mentor} data = {data} />
          <Description />
        </Fragment>
      );
    } else {
        return (
          <Loader />
        )
      }
  }
}
