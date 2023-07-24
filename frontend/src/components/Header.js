import * as React from 'react';

import "../styles/header.css";


function Header(props) {
 const {header} = props

  return (
    <div className='header'><h1>{header}</h1></div>
  );
}



export default Header;