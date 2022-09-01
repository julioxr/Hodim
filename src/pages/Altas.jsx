import { useContext, useEffect } from "react";
import { CheckinContext } from "../context/CheckinContext";
import { StyledForm } from "../components/styles/StyledForm.style";

const Altas = () => {
    const { setSidebar } = useContext(CheckinContext);

    useEffect(() => {
        setSidebar(false);
    }, []);

    return (
        <>
            <h1>Crear interlocutores</h1>
            <StyledForm className="truck_data">
                <label>Ingrese patente Camión</label>
                <input type="text" />
                <label>Ingrese patente Acoplado</label>
                <input type="text" />
                <label>Ingrese nombre del conductor</label>
                <input type="text" />
                <button type="submit">CONFIRMAR</button>
            </StyledForm>
        </>
    );
};

export default Altas;
