import { createContext, useState } from "react";

export const CheckinContext = createContext();

const CheckinContextProvider = ({ children }) => {
    const [initialState, setInitialState] = useState(true);
    const [sidebar, setSidebar] = useState(false);
    const [scanDni, setScanDni] = useState(false);
    const [pickAction, setPickAction] = useState(false);
    const [cargo, setCargo] = useState(false);
    const [descargo, setDescargo] = useState(false);
    const [pedido, setPedido] = useState(false);
    const [detallePedido, setDetallePedido] = useState(false);
    const [pedidoCompleto, setPedidoCompleto] = useState(false);

    const reset = () => {
        setInitialState(true);
        setPickAction(false);
        setScanDni(false);
        setCargo(false);
        setPedido(false);
        setPedidoCompleto(false);
    };

    return (
        <CheckinContext.Provider
            value={{
                initialState,
                setInitialState,
                sidebar,
                setSidebar,
                scanDni,
                setScanDni,
                pickAction,
                setPickAction,
                cargo,
                setCargo,
                descargo,
                setDescargo,
                pedido,
                setPedido,
                detallePedido,
                setDetallePedido,
                pedidoCompleto,
                setPedidoCompleto,
                reset,
            }}
        >
            {children}
        </CheckinContext.Provider>
    );
};

export default CheckinContextProvider;
