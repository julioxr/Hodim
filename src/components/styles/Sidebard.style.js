import styled from "styled-components";

export const StyledSidebar = styled.aside`
    width: 250px;
    height: 100%;
    background-color: rgba(17, 40, 66, 0.94);
    position: absolute;
    left: 0;
    bottom: 0;
    font-size: 20px;
    z-index: 10;

    .logo_bw {
        height: 80px;
        padding: 0 25px;
        display: flex;
        align-items: center;
    }

    img {
        height: 40px;
        width: auto;
    }

    .links {
        display: flex;
        flex-direction: column;
        margin-top: 40px;
    }

    a {
        color: white;
        padding-left: 20px;
        margin-top: 20px;
        text-decoration: none;
    }
`;
