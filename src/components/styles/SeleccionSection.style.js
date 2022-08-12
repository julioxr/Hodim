import styled from "styled-components";

export const StyledSeleccionSection = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    h3 {
        color: ${({ theme }) => `${theme.colors.primary}`};
        font-size: 24px;
    }

    .card {
        width: 260px;
        height: 220px;
        background-color: ${({ theme }) => `${theme.colors.primary}`};
        margin: 15px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 100px;
        color: #f2f2f2;
        cursor: pointer;

        transition: 0.1s;
    }

    .card:hover {
        background-color: ${({ theme }) => `${theme.colors.green}`};
    }
`;
