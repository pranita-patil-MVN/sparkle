import React, { useState } from 'react'
import { FaAngleDown, FaAngleRight } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom'
const SidebarSubMenu = ({subRoute}) => {
    const navigate = useNavigate();
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
    const toggleSubMenu = ()=> setIsSubmenuOpen(!isSubmenuOpen)
    let activeClassName='activeSubMenuContainer'
  return (
    <>
   { isSubmenuOpen ? 

<div className='submenuActive'  onClick={()=>{navigate(subRoute.path)}}>
         <div className='menuItem' >
             <div className='icon'>{subRoute.icon}</div>
             <div className='linkText'>{subRoute.name}</div>
      </div>
      <button id='dropdownActive' onClick={toggleSubMenu}>
                             <FaAngleDown/>
                         </button>
     
 </div>


:<div className='subMenu'  onClick={()=>{navigate(subRoute.path)}}>
         <div className='menuItem'>
             <div className='icon'>{subRoute.icon}</div>
             <div className='linkText'>{subRoute.name}</div>
      </div>
      <button id='dropdown' onClick={toggleSubMenu}>
                             <FaAngleRight/>
                         </button>
     
 </div>}
   { isSubmenuOpen && <div className='subMenuContainer'>
    {subRoute.subSubRoutes.map((subSubRoute,i)=>{
        
        return( <NavLink  to={subSubRoute.path} key={i} className={({ isActive }) =>
        isActive ? activeClassName : 'link'}>
            <div className='icon'>{subSubRoute.icon}</div>
            <div className='linkText'>{subSubRoute.name}</div>
        </NavLink>)
        })}

        </div>}
    </>
  )
}

export default SidebarSubMenu