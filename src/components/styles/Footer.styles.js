import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    font-size: 14px;
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 20px;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    a {
        color: ${({ theme }) => `${theme.colors.secondary}`};
        font-weight: 600;
        margin-top: 3px;
        text-decoration: none;
    }
`;
