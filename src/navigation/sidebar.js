import React, { useState } from "react";
import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";
import {
    FaRegAddressCard,
    FaChevronCircleLeft,
    FaChevronCircleRight,
    FaCalendarCheck,
    FaClipboardCheck,
} from "react-icons/fa";

import { BiRadioCircleMarked } from 'react-icons/bi'
import { MdDashboard, MdOutlineBusiness } from 'react-icons/md'
import '../css/components.css'
import SparkleLogo from '../assets/Images/sparklelogo.png'
import SidebarMenu from '../navigation/sidebarMenu';
const routes = [
    {
        path: '/',
        name: 'Dashboard',
        icon: <MdDashboard />
    },
   

    {
        path: '/attendance',
        name: 'Attendance',
        icon: <FaCalendarCheck />,
        subRoutes: [
         
            {
                path: '/attendance/Employee',
                name: 'Employee',
                icon: <BiRadioCircleMarked />,
                subSubRoutes:[
                    {
                        path:'/assignEmployee',
                        name:'Assign Employee',
                        icon:<BiRadioCircleMarked/>
                    },
                    {
                        path:'/attendance/ViewAttendance',
                        name: 'View Attendance',
                        icon:<BiRadioCircleMarked/>,
                    },
                ]

            },
            {
                path:'/attendance/shoededuction',
                name:'Shoe Deduction',
                icon:<BiRadioCircleMarked/>
            },
            {
                path: '/attendance/Ra',
                name: 'Role Access',
                icon: <BiRadioCircleMarked />,
            },
            {
                path: '/attendance/shift',
                name: 'Shift',
                icon: <BiRadioCircleMarked />,
            }
        ]
    },
    {
        path:'/operation',
        name:'Operation',
        icon:<FaClipboardCheck/>,
        subRoutes:[
            {
                path: "/operation/customer",
                name: "Customer",
                icon: <BiRadioCircleMarked />,
             
            },
            {
                path: "/masters/customer/SiteMaster",
                name: "Site",
                icon: <BiRadioCircleMarked />,
            },
            {
                path:'/operation/capitalAssets',
                name:'Capital Assets',
                icon:<BiRadioCircleMarked/>
            },
            
                {
                    path:'/operation/activity',
                    name:'Activity',
                    icon:<BiRadioCircleMarked/>,
    
                },
                // {
                //     path:'/operation/capitalAssets',
                //     name:'Capital Assets',
                //     icon:<BiRadioCircleMarked/>,
                // }
            
        ]
    },
    {
        path: "/inventory",
        name: "Inventory",
        icon: <FaClipboardCheck />,
        subRoutes:[
            {
                path: "/inventory/vendor",
                name: "Vendor",
                icon: <BiRadioCircleMarked />,
              },
              {
                path:'/inventory/item',
                name:'Item',
                icon:<BiRadioCircleMarked/>,
              }
        ]
    },
   
    
];

function SideBar({ children }) {
    const [isOpen, setisOpen] = useState(true);
    const toggle = () => {
        setisOpen(!isOpen);
    };

    let activeClassName = "active";
    return (
        <div className='main-container'>
            <motion.div animate={{width:isOpen ? '20%':'4.5%'}} className='sidebar'>
                <div className='topSection'>
    
                    { isOpen ? <h1 className='sidebarHeader'><img src={SparkleLogo} alt='Logo' className='logoSidebar'/></h1>:<h2 className='sidebarHeader'><MdOutlineBusiness className='sparkleLogo'/></h2>}
                    {isOpen ? <div id ='arrow' className='toggleSideBarOn'><FaChevronCircleLeft onClick={toggle}/></div>:<div id ='arrow' className='toggleSideBar'><FaChevronCircleRight  onClick={toggle}/></div>}
                </div>
               {  <section className='routes'>
                    {routes.map((route)=>{
                        if(route.subRoutes){
                            return (
                                //calls for sidebar submenu function if submenus exist
                                <SidebarMenu route={route} key={route.name} isOpen={isOpen} toggle={toggle} setIsOpen={setisOpen}/>
                            )
                        }
                       return(
                        //renders sidebar links and icons
                    <NavLink  to={route.path} key={route.name}   className={({ isActive }) =>
                    isActive ? activeClassName : 'link'
                  }
                  
                    >
                        <div className='iconRoot'>{route.icon}</div>
    
                        {isOpen&& <div className='linkText'>{route.name}</div>}
                    </NavLink>
                       )
    }   )}
                </section>}
            </motion.div>
            <main>{children}</main>
        </div>
      )
}

export default SideBar;
