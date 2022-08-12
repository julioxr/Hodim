import { StyledSidebar } from "./styles/Sidebard.style";
import logobw from "../assets/holcim_logo_bw.svg";

const Sidebar = () => {
    return (
        <StyledSidebar>
            <div className="logo_bw">
                <img src={logobw} alt="" />
            </div>
            <div className="links">
                <a href="#">Check In</a>
                <a href="#">Crear pedido</a>
                <a href="#">Altas</a>
            </div>
        </StyledSidebar>
    );
};

export default Sidebar;
