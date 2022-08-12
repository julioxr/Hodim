import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        width: 200px;
        height: 30px;
        border: 1px solid black;
        margin: 15px 0;
    }

    button {
        width: 140px;
        height: 60px;
        border: 2px solid ${({ theme }) => `${theme.colors.primary}`};
        background-color: #f2f2f2;
    }
`;
