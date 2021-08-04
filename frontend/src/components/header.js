import React, {useState} from 'react'
import DropDown from './DropDown'

export default function Header() {
  const [showDropDown, setShowDropDown] = useState(false);

    return (
        <div className='hd-container'>
          <div><h1>Schedules</h1></div>
          <div className="menu-bar">
            <div>
                <i className="fa fa-bars fa-2x mb-icon" onClick={()=>setShowDropDown(!showDropDown)}></i>
            </div>
            <div className='drop-position'>
                {showDropDown && <DropDown></DropDown>}
            </div>
          </div>
        </div>
    )
}
