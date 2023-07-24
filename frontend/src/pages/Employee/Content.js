import * as React from 'react';
import EmployeeHousing from './EmployeeHousing';
export default function EmployeeContent(props) {
  if (props.category === "Personal Information"){
    return <div>Personal Information</div>
  }
  if (props.category === 'Visa Status Management') {
    return <div>Visa Status Management</div>
  } 
  if (props.category === 'Housing'){
      return <EmployeeHousing/>
  }
}
