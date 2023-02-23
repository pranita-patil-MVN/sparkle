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
        path: '/masters',
        name: 'Masters',
        icon: <FaRegAddressCard />,
        subRoutes: [
            {
                path: '/masters/employee',
                name: 'Employee',
                icon: <BiRadioCircleMarked />

            },
            {
                path: '/masters/Ra',
                name: 'Role Access',
                icon: <BiRadioCircleMarked />

            },
            {
                path: "/masters/customer",
                name: "Customer",
                icon: <BiRadioCircleMarked />,
                subSubRoutes: [
                    {
                        path: "/masters/customer/SiteMaster",
                        name: "Site",
                        icon: <BiRadioCircleMarked />,
                    },
                ],
            },
            {
                path: '/masters/activity',
                name: 'Activity',
                icon: <BiRadioCircleMarked />

            },
            {
                path: '/masters/shift',
                name: 'Shift',
                icon: <BiRadioCircleMarked />
            },
            {
                path: '/masters/itemMaster',
                name: 'Item',
                icon: <BiRadioCircleMarked />

            },
            {
              path: "/masters/vendor",
              name: "Vendor",
              icon: <BiRadioCircleMarked />,
            },
            {
                path: "/masters/capital",
                name: "Capital",
                icon: <BiRadioCircleMarked />,
              },
        ]
    },

    {
        path: '/attendance',
        name: 'Attendance',
        icon: <FaCalendarCheck />,
        subRoutes: [
            {
                path: '/attendance/Employee',
                name: 'Employee',
                icon: <BiRadioCircleMarked />

            },
            {
                path: '/attendance/Ra',
                name: 'Role Access',
                icon: <BiRadioCircleMarked />,
                subSubRoutes: [
                    {
                        path: '/attendance/Ra/Employee',
                        name: 'Employee',
                        icon: <BiRadioCircleMarked />

                    },
                    {
                        path: '/attendance/Ra/Edit',
                        name: 'Edit',
                        icon: <BiRadioCircleMarked />

                    },
                ]

            },
        ]
    },
  {
        path: "/attendance",
        name: "Attendance",
        icon: <FaCalendarCheck />,
        subRoutes: [
            {
                path: "/attendance/Employee",
                name: "Employee",
                icon: <BiRadioCircleMarked />,
            },
            {
                path: "/attendance/Ra",
                name: "Role Access",
                icon: <BiRadioCircleMarked />,
                subSubRoutes: [
                    {
                        path: "/attendance/Ra/Employee",
                        name: "Employee",
                        icon: <BiRadioCircleMarked />,
                    },
                    {
                        path: "/attendance/Ra/Edit",
                        name: "Edit",
                        icon: <BiRadioCircleMarked />,
                    },
                ],
            },
        ],
    },
    {
        path: "/inventory",
        name: "Inventory",
        icon: <FaClipboardCheck />,
    },
];

function SideBar({ children }) {
    const [isOpen, setisOpen] = useState(true);
    const toggle = () => {
        setisOpen(!isOpen);
    };

    let activeClassName = "active";
    return (
        <div className="main-container">
            <motion.div
                animate={{ width: isOpen ? "20%" : "4.5%" }}
                className="sidebar"
            >
                <div className="topSection">
                    {isOpen ? (
                        <h1 className="sidebarHeader">
                            <img src={SparkleLogo} alt="Logo" className="logoSidebar" />
                        </h1>
                    ) : (
                        <h2 className="sidebarHeader">
                            <MdOutlineBusiness className="sparkleLogo" />
                        </h2>
                    )}
                    {isOpen ? (
                        <div id="arrow" className="toggleSideBar">
                            <FaChevronCircleLeft onClick={toggle} />
                        </div>
                    ) : (
                        <div id="arrow" className="toggleSideBar">
                            <FaChevronCircleRight onClick={toggle} />
                        </div>
                    )}
                </div>
                {
                    <section className="routes">
                        {routes.map((route) => {
                            if (route.subRoutes) {
                                return (
                                    <SidebarMenu
                                        route={route}
                                        key={route.name}
                                        isOpen={isOpen}
                                        toggle={toggle}
                                        setIsOpen={setisOpen}
                                    />
                                );
                            }
                            return (
                                <NavLink
                                    to={route.path}
                                    key={route.name}
                                    className={({ isActive }) =>
                                        isActive ? activeClassName : "link"
                                    }
                                >
                                    <div className="iconRoot">{route.icon}</div>

                                    {isOpen && <div className="linkText">{route.name}</div>}
                                </NavLink>
                            );
                        })}
                    </section>
                }
            </motion.div>
            <main>{children}</main>
        </div>
    );
}

export default SideBar;
