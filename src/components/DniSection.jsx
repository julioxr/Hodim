import { useContext } from "react";
import { StyledForm } from "./styles/StyledForm.style";
import { CheckinContext } from "../context/CheckinContext";

const DniSection = () => {
    const { setPickAction, setScanDni } = useContext(CheckinContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setScanDni(false);
        setPickAction(true);
        console.log("Avanzaste a seleccionar opcion");
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <label>Ingrese su DNI</label>
            <input type="text" />
            <button type="submit">CONFIRMAR</button>
        </StyledForm>
    );
};

export default DniSection;
