import { useContext } from "react";
import { StyledForm } from "./styles/StyledForm.style";
import { CheckinContext } from "../context/CheckinContext";

const PedidoInput = () => {
    const { setPedido, setDetallePedido } = useContext(CheckinContext);

    const handleSubmitPedido = (e) => {
        e.preventDefault;
        setPedido(false);
        setDetallePedido(true);
        console.log("Avanzaste a detalle de pedido");
    };

    return (
        <StyledForm onSubmit={(e) => handleSubmitPedido(e)}>
            <label>Colocar número de pedido</label>
            <input type="text" />
            <button>ENVIAR</button>
        </StyledForm>
    );
};

export default PedidoInput;
