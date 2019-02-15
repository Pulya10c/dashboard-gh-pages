import React, { Component } from 'react';
import CellData from './CellData';
import HeadLineTable from './HeadLineTable';
import PropTypes from 'prop-types';
import '../style/Table.css';

export class Table extends Component {

  HeadListTasks = (data, mentor) =>  <tr key={ data.mentors[mentor].id }><th>{'Name tasks'}</th>
  {data.mentors[mentor].students.map((stud) => <HeadLineTable key={ stud.id } student = { stud } />
)}</tr>;


  listTasks = (data, mentor) => 
    Object.keys(data.tasks)
      .map(item => <tr key={ data.tasks[item].id }><td className='tasks-mame'><a target={ '_blank' } href={ data.tasks[item].link }>{ item }</a></td>{ data.mentors[mentor].students
        .map((stud) => <CellData key={ stud.tasks[item].id } nameClass={ stud.tasks[item].className } />
      )}</tr> 
    );
  
  render() {
    let page;
    let head;
    
    const { data, mentor } = this.props;
    if (data && mentor) {

      head = this.HeadListTasks(data, mentor);
      page = this.listTasks(data, mentor);

    }

    else {

      head = <tr><td>{ 'not students' }</td></tr>;
      page = <tr><td>{ 'not data' }</td></tr>;
    
    }
    return (
      <table>
        <tbody>
          { head }
          { page }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  data: PropTypes.object.isRequired,
  mentor: PropTypes.string.isRequired
};
