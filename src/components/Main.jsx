import { useContext } from "react";
import { StyledMain } from "./styles/Main.style";
import SeleccionSection from "./SeleccionSection";
import { CheckinContext } from "../context/CheckinContext";
import DniSection from "./DniSection";
import LoadPlates from "./LoadPlates";
import PedidoInput from "./PedidoInput";
import DetallePedido from "./DetallePedido";
import PedidoConfirmado from "./PedidoConfirmado";

const Main = () => {
    const {
        initialState,
        setInitialState,
        pickAction,
        scanDni,
        setScanDni,
        setCargo, // no se uso aun esta seccion
        cargo,
        pedido,
        detallePedido,
        pedidoCompleto,
        reset,
    } = useContext(CheckinContext);

    const startApp = () => {
        setInitialState(false);
        setScanDni(true);
        console.log("Avanzaste a ingresar DNI");
    };

    return (
        <StyledMain>
            <p className="back" onClick={reset}>
                Volver
            </p>
            {initialState && <h1 onClick={startApp}>Presione para comenzar</h1>}
            {scanDni && <DniSection />}
            {pickAction && <SeleccionSection />}
            {cargo && <LoadPlates />}
            {pedido && <PedidoInput />}
            {detallePedido && <DetallePedido />}
            {pedidoCompleto && <PedidoConfirmado />}
        </StyledMain>
    );
};

export default Main;
