import React from 'react';
import '../css/SidebarOption.css';

export const SidebarOption = ({title,Icon}) => {

  return (
    <div className='sidebarOption'>
      {Icon && <Icon className='sidebarOption_Icon'/>}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  )
}
