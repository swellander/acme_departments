import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import DepartmentList from './DepartmentList';

class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedDepartment: {},      
      departments: []   
    }
    this.selectDepartment = this.selectDepartment.bind(this);
  }

  componentDidMount() {
    axios.get('/api/departments')
      .then( response => {
        this.setState({ departments: response.data })
      })
      .catch(err => console.log(err))
  }

  selectDepartment(id) {
    axios.get('/api/departments/' + id)
      .then( response => {
        this.setState({ selectedDepartment: response.data })
      });
    console.log('Clicked', id);
  }

  render() {
    return (
      <div className="container">
        <DepartmentList 
          departments={ this.state.departments } 
          selectedDepartment={ this.state.selectedDepartment }
          selectDepartment={ this.selectDepartment }
        /> 
      </div>
    ); 
  }
};


ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
