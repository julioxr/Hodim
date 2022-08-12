import styled from "styled-components";

export const StyledHeader = styled.header`
    height: 80px;
    display: flex;
    flex-shrink: 0;

    align-items: center;
    justify-content: space-between;
    padding: 0 25px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    img {
        height: 40px;
        width: auto;
    }

    .burger {
        font-size: 30px;
    }
`;
