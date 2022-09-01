import { useContext } from "react";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { CheckinContext } from "../context/CheckinContext";

const Home = () => {
    const { initialState } = useContext(CheckinContext);

    return (
        <>
            <Main />
            {initialState && <Footer />}
        </>
    );
};

export default Home;
