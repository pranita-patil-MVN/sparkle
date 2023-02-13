import React, { useState } from 'react'
import { FaAngleDown, FaAngleRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import SidebarSubMenu from './sidebarSubMenu'
const SidebarMenu = ({route,isOpen,toggle}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu =()=>setIsMenuOpen(!isMenuOpen)
    let activeClassName='activeMenuContainer'
  return (
    <>
    

                           { isOpen ? isMenuOpen ? 
                               <div className='menuActive' onClick={()=>{toggleMenu();}}>
                            <div className='menuItem'>
                            <div className='iconActive'>{route.icon}</div>
                            {isOpen &&<div className='linkTextactive'>{route.name}</div>}
                            </div>
                            <button id='dropdownActive' type='button' onClick={toggleMenu}>
                                <FaAngleDown/></button>
                            </div>: 
                            <div className='menu' onClick={()=>{toggleMenu();}} >
                            <div className='menuItem'>
                            <div className='icon'>{route.icon}</div>
                            {isOpen && <div className='linkText'>{route.name}</div>}
                            </div>
                            { isOpen && <button id='dropdown' onClick={toggleMenu}>
                                <FaAngleRight/>
                            </button>}
                            </div> : <div className='menu'><div className='icon' onClick={()=>{toggle();toggleMenu()}} >{route.icon}</div></div>}
                        
                            
                        
                        {isOpen && isMenuOpen && (<div className='menuContainer'>
                            {route.subRoutes.map((subRoute,i)=>{
                                    if(subRoute.subSubRoutes){
                                        return(
                                            <SidebarSubMenu subRoute={subRoute} key={subRoute.name}/>
                                           
                                        )
                                    }
                              return( <NavLink  to={subRoute.path} key={i}  className={({ isActive }) =>
                                isActive ? activeClassName : 'link'
                              }>
                                <div className='icon'>{subRoute.icon}</div>
                                <div className='linkText'>{subRoute.name}</div>
                            </NavLink>)

                            })}
                            </div>)}
                        </>
  )
}

export default SidebarMenu