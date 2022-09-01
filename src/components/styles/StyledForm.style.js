import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => `${theme.colors.primary}`};
    font-weight: 600;
    height: 100%;

    input {
        width: 220px;
        height: 40px;
        border: 2px solid ${({ theme }) => `${theme.colors.primary}`};
        margin: 15px 0;
        color: #555;
        font-weight: 600;
        font-size: 18px;
        text-align: center;
    }

    input:focus {
        border: none;
    }

    button {
        width: 130px;
        height: 50px;
        background-color: ${({ theme }) => `${theme.colors.primary}`};
        color: #f2f2f2;
        border: none;
    }
`;
