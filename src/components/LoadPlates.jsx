import { useContext } from "react";
import { StyledForm } from "./styles/StyledForm.style";
import { CheckinContext } from "../context/CheckinContext";

const Load = () => {
    const { setPedido, setCargo } = useContext(CheckinContext);

    const handleSubmitTruck = (e) => {
        e.preventDefault();
        setCargo(false);
        setPedido(true);
        console.log("Avanzaste a colocar Pedido");
    };
    return (
        <StyledForm
            className="truck_data"
            onSubmit={(e) => handleSubmitTruck(e)}
        >
            <label>Ingrese patente Camión</label>
            <input type="text" />
            <label>Ingrese patente Acoplado</label>
            <input type="text" />
            <button type="submit">CONFIRMAR</button>
        </StyledForm>
    );
};

export default Load;
