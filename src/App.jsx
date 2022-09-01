import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/styles/Global.styles";
import Header from "./components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Altas from "./pages/Altas";
import Home from "./pages/Home";

const Theme = {
    colors: {
        primary: "#1D4370",
        secondary: "#04bbf1",
        green: "#94c12e",
    },
};

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/altas" element={<Altas />} />
                    <Route path="/crear-pedido" element={"Crear pedido"} />
                    <Route path="/check-in" element={<Home />} />
                    <Route path="*" element={"Pagina no encontrada"} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
