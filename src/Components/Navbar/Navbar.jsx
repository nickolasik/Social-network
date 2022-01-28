import React from "react";
import { NavLink } from "react-router-dom";
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li className={style.item}>
                    <NavLink className={navData => navData.isActive ? style.active : style.notActive} to="/Profile">Profile</NavLink>
                </li>
                <li className={style.item}>
                    <NavLink className={navData => navData.isActive ? style.active : style.notActive} to="/Dialogs">Dialogs</NavLink>
                </li>
                <li className={style.item}>
                    <NavLink className={navData => navData.isActive ? style.active : style.notActive} to="/Users">Users</NavLink>
                </li>
                <li className={style.item}>
                    <NavLink className={navData => navData.isActive ? style.active : style.notActive} to="/News">News</NavLink></li>
                <li className={style.item}>
                    <NavLink className={navData => navData.isActive ? style.active : style.notActive} to="/Music">Music</NavLink>
                </li>
                <li className={style.item}>
                    <NavLink className={navData => navData.isActive ? style.active : style.notActive} to="/Settings">Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;