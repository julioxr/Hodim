import { useContext } from "react";
import { StyledForm } from "./styles/StyledForm.style";
import { CheckinContext } from "../context/CheckinContext";

const DniSection = () => {
    const { setPickAction, setScanDni } = useContext(CheckinContext);
    const handleSubmit = (e) => {
        setScanDni(false);
        setPickAction(true);
        e.preventDefault();
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
