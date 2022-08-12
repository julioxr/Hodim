import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Lato', sans-serif;
    }

    body{
        height: 100vh;
        background-color: white;
    }

    #root{
        display: flex;
        flex-direction: column;
        height: -webkit-fill-available;

    }

    body, html {
        height: -webkit-fill-available;
    }

`;
