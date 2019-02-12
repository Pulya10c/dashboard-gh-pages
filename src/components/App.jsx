import React, { Component, Fragment } from 'react';
import { SelectValue } from './selectValue.jsx';
import { Table } from './Table.jsx'
import Description from './NotationDescriptions.jsx'
import Loader from './Loader.jsx';
import '../style/App.css'; 


export class App extends Component {
  state = {
    isLoading: true,
    data: null,
    mentor: null,
  }

  onMentorSelection = (nickName) => {
    this.setState({ mentor: nickName })
 }

  async componentDidMount() {
    await fetch('./data.json')
      .then(response => response.json())
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch(err => console.log(err));
  }

  render() {

  const {data, isLoading, mentor} = this.state;
  
  if (isLoading) {
    return (
      <Loader />
    );
  } else
    return (
      <Fragment>
        <div className='headline'>
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
  }
}
