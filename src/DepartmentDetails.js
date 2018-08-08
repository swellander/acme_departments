import React from 'react';

const DepartmentDetails = ({ department }) => {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <strong>{ department.name }</strong>
      </li>
      { department.users.map( user => {
        return (
          <li key={ user.id } className="list-group-item">{ user.name }</li> 
        )
      }) }
    </ul>
  )
}

export default DepartmentDetails;
