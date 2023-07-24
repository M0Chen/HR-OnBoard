
import Registration from "./Hiring/Invitation";
import Card from "../../components/Card";
import React from "react";
import ApplicationTable from "./Hiring/Applicationtable";



export default function Hiring() {

  return (
    <div>
      <Card content={<Registration />} />
      <Card content={<ApplicationTable/>}/>
    </div>
  );
}







