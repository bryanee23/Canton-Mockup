import React from 'react';
import Logo from './images/logo.jpg';

export default function Header(props){
  return (
  <header>
      <img className="image" src={Logo} alt='weekly ad' />
      <ul id="location-text" className="text typeface">
        <li>750 S. Alameda Street</li>
        <li>Los Angeles, CA 90021</li>
        <li><strong>Tel:</strong> (213) 688-7707</li>
        <li><strong>Fax:</strong> (213) 688-1121</li>
        <li>
          <strong>Email: &nbsp; </strong>
          <a href="mailto:Corporate@cantonfoodcocom">
            Corporate@cantonfoodco.com
            </a>
        </li>
      </ul>
    </header>
  )
}
