import { createContext, useState } from "react";

export const CheckinContext = createContext();

const CheckinContextProvider = ({ children }) => {
    const [initialState, setInitialState] = useState(true);
    const [sidebar, setSidebar] = useState(false);
    const [scanDni, setScanDni] = useState(false);
    const [pickAction, setPickAction] = useState(false);
    const [cargo, setCargo] = useState(false);
    const [descargo, setDescargo] = useState(false);

    const reset = () => {
        setInitialState(true);
        setPickAction(false);
        setScanDni(false);
    };

    return (
        <CheckinContext.Provider
            value={{
                initialState,
                sidebar,
                cargo,
                descargo,
                pickAction,
                scanDni,
                setInitialState,
                setSidebar,
                setPickAction,
                setScanDni,
                reset,
            }}
        >
            {children}
        </CheckinContext.Provider>
    );
};

export default CheckinContextProvider;
