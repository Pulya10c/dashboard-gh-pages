import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import '../style/selectValue.css';


export class SelectValue extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMentor: localStorage.getItem("Mentor-Dashboard") ? JSON.parse(localStorage.getItem("Mentor-Dashboard")) : {value: null, label: null},
    }
  }
  
  handleChange = (selectedMentor) => {
    this.setState({ selectedMentor });
    this.props.onMentorSelection(selectedMentor.value);
    localStorage.setItem("Mentor-Dashboard", JSON.stringify(selectedMentor));
  }

  async componentDidMount() {
    await this.props.onMentorSelection(this.state.selectedMentor.value);
  }

  
  render() {
    
    const { selectedMentor} = this.state;
    const { data } = this.props;
    const option = Object.keys(data.mentors).map(item=>{ 
      return {value: data.mentors[item].mentorGithub, label: data.mentors[item].mentorGithub 
  }
  });

    return (
        <Select
          value={selectedMentor}
          onChange={this.handleChange}
          options={option}
        />
    );
  }
}

SelectValue.propTypes = {
  data: PropTypes.object.isRequired,
  onMentorSelection: PropTypes.func.isRequired
};

