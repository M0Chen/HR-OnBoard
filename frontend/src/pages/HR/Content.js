import * as React from 'react';
import Hiring from './Hiring';
import Housing from './Housing';
import EmployeeProfile from './EmployeeProfile';

export default function HRContent(props) {
  if (props.category === "Employee Profiles"){
    return <EmployeeProfile/>
  }
  if (props.category === 'Visa Status Management') {
    return <div>Visa Status Management</div>
  } 
  if (props.category === 'Hiring Management'){
      return <Hiring/>
  }
  if (props.category === 'Housing Management'){
    return <Housing/>
}
}
