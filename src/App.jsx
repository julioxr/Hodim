import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/styles/Global.styles";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { CheckinContext } from "./context/CheckinContext";

const Theme = {
    colors: {
        primary: "#1D4370",
        secondary: "#04bbf1",
        green: "#94c12e",
    },
};

function App() {
    const { initialState } = useContext(CheckinContext);

    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Header />
            <Main />
            {initialState && <Footer />}
        </ThemeProvider>
    );
}

export default App;
