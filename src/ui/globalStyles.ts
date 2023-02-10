import styled, { createGlobalStyle } from "styled-components";
import { Color } from "ui";
import { ResetCSS } from "ui";

export const GlobalStyles = createGlobalStyle`
    ${ResetCSS}

    body {
      font-family: "Comfortaa";
      background: ${Color.Secondary};
      overflow: hidden;
    }
`;

export const Wrapper = styled.div`
    display: flex;

    width: 100vw;
    height: 100vh;
`;
