import { StyledFooter } from "./styles/Footer.styles";

import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <StyledFooter>
            <div>
                <p>No tiene pedido?</p>
                <NavLink to="/crear-pedido">click acá</NavLink>
            </div>
            <div>
                <p>No tiene alta?</p>
                <NavLink to="/altas">click acá</NavLink>
            </div>
        </StyledFooter>
    );
};

export default Footer;
