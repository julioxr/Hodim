import { useContext } from "react";
import { GiTruck, GiMineTruck } from "react-icons/gi";
import { StyledSeleccionSection } from "./styles/SeleccionSection.style";
import { CheckinContext } from "../context/CheckinContext";

const SeleccionSection = () => {
    const { setPickAction, setCargo, cargo } = useContext(CheckinContext);

    const loadTruck = () => {
        setPickAction(false);
        setCargo(true);
        console.log("Avanzaste a seleccionar patentes");
    };

    return (
        <StyledSeleccionSection>
            <h3>Cargo</h3>
            <div className="card" onClick={() => loadTruck()}>
                <GiTruck />
            </div>

            <h3>Descargo</h3>
            <div className="card" onClick={() => loadTruck()}>
                <GiMineTruck />
            </div>
        </StyledSeleccionSection>
    );
};

export default SeleccionSection;
