import { StyledSidebar } from "./styles/Sidebard.style";
import logobw from "../assets/holcim_logo_bw.svg";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <StyledSidebar>
            <div className="logo_bw">
                <img src={logobw} alt="" />
            </div>
            <div className="links">
                <NavLink to="/">Check In</NavLink>
                <NavLink to="crear-pedido">Crear pedido</NavLink>
                <NavLink to="altas">Altas</NavLink>
            </div>
        </StyledSidebar>
    );
};

export default Sidebar;
