import styled from "styled-components";

export const StyledDetallePedido = styled.div`
    /* border: 1px solid black; */
    color: ${({ theme }) => `${theme.colors.primary}`};

    div {
        /* border: 1px solid red; */
        margin: 9px;
        display: flex;
        color: ${({ theme }) => `${theme.colors.primary}`};
        height: 20px;
        align-items: center;
    }

    .materiales {
        height: 150px;
    }

    h4 {
        margin-right: 8px;
    }

    p {
        margin-right: 8px;
    }

    td {
        /* border: 1px solid black; */
        /* padding: 5px 5px; */
    }
`;
