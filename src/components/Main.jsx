import { useContext } from "react";
import { StyledMain } from "./styles/Main.styles";
import SeleccionSection from "./SeleccionSection";
import { CheckinContext } from "../context/CheckinContext";

import DniSection from "./DniSection";

const Main = () => {
    const {
        initialState,
        setInitialState,
        pickAction,
        setPickAction,
        scanDni,
        setScanDni,
        reset,
    } = useContext(CheckinContext);

    const startApp = () => {
        setInitialState(false);
        setScanDni(true);
    };

    return (
        <StyledMain>
            <p className="back" onClick={reset}>
                Volver
            </p>

            {scanDni && <DniSection />}

            {initialState && <h1 onClick={startApp}>Presione para comenzar</h1>}

            {pickAction && <SeleccionSection />}
        </StyledMain>
    );
};

export default Main;
