import React from "react";
import { GiTruck, GiMineTruck } from "react-icons/gi";
import { StyledSeleccionSection } from "./styles/SeleccionSection.style";

const SeleccionSection = () => {
    return (
        <StyledSeleccionSection>
            <h3>Cargo</h3>
            <div className="card" onClick={{}}>
                <GiTruck />
            </div>

            <h3>Descargo</h3>
            <div className="card" onClick={{}}>
                <GiMineTruck />
            </div>
        </StyledSeleccionSection>
    );
};

export default SeleccionSection;
