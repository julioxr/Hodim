import styled from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    height: 100%;
    flex-direction: column;
    text-align: center;
    padding: 0 25px;

    h1 {
        color: ${({ theme }) => `${theme.colors.primary}`};
        position: relative;
        padding-bottom: 25px;
        cursor: pointer;
    }

    h1:after {
        content: "";
        position: absolute;
        background-color: ${({ theme }) => `${theme.colors.primary}`};
        height: 3px;
        width: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        bottom: 0px;
        transition: 0.2s ease-out;
    }

    h1:hover:after {
        width: 40%;
        background-color: ${({ theme }) => `${theme.colors.green}`};
        height: 3px;
    }

    span {
        color: ${({ theme }) => `${theme.colors.secondary}`};
    }

    .back {
        position: absolute;
        top: 100px;
        right: 15px;
        font-size: 18px;
        color: ${({ theme }) => `${theme.colors.primary}`};
        cursor: pointer;
    }
`;
