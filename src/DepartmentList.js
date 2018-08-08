import React from 'react';
import DepartmentDetails from './DepartmentDetails';

const DepartmentList = ({ selectDepartment, departments, selectedDepartment }) => {
  return (
    <div className="container">
      <div className="jumbotron">
        <div className="container text-center">
          <h1>Departments</h1>
        </div>
      </div>
      <div className="row">
        <ul className="list-group col-sm-3 offset-sm-2">
          { departments.map( department => {
            const isSelected = selectedDepartment.id === department.id;
            const status = isSelected ? " active" : "";
              return ( 
                <li onClick={ () => selectDepartment( department.id ) } className={"list-group-item list-group-item-action" + status} key={ department.id }>
                  { department.name } | { department.users.length }
                </li> 
              )
            })
          }
        </ul>
        { selectedDepartment.id ? <DepartmentDetails department={ selectedDepartment }/>: '' }
      </div>
    </div>
  )
};

export default DepartmentList;
