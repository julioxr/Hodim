import { useState, useContext } from "react";
import logo from "../assets/holcim_logo_color.svg";
import { StyledHeader } from "./styles/Header.styles";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./Sidebar";
import { CheckinContext } from "../context/CheckinContext";

import { NavLink } from "react-router-dom";

const Header = () => {
    const { sidebar, setSidebar } = useContext(CheckinContext);
    const showSidebar = () => {
        setSidebar(!sidebar);
    };

    return (
        <StyledHeader>
            <NavLink to="/">
                <img src={logo} alt="logo" />
            </NavLink>
            <AiOutlineMenu className="burger" onClick={showSidebar} />
            {sidebar && <Sidebar />}
            {/* <a href="#">Check In</a>
            <a href="#">Crear pedido</a>
            <a href="#">Altas</a> */}
        </StyledHeader>
    );
};

export default Header;
