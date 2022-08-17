import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';

const Navbar = () => {
return(
<div className={s.nav}>
    <div className={s.item}>
    <NavLink to="login" className={navData=>navData.isActive ? s.activlink : s.item}>login</NavLink>
    |||||||||
    <NavLink to="game" className={navData=>navData.isActive ? s.activlink : s.item}>Game</NavLink>
    </div>
</div>
);


}

export default Navbar;
export{};