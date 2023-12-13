import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        line-height: 1.5;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    /* Reset CSS */
    html,
    body,
    div,
    span,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    a,
    img,
    ul,
    ol,
    li,
    form,
    label,
    input,
    textarea,
    button,
    table,
    tr,
    td {
        margin: 0;
        padding: 0;
        /* border: 0; */
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    /* Set base font size */
    html {
        font-size: 62.5%; /* 1rem = 10px */
    }

    /* Set font for everything */
    body {
        font-size: 1.6rem; /* 16px */
    }

    html,
    body {
        font-family: "Open Sans","San Francisco","Roboto","Arial",sans-serif;
        font-weight: 400;
        color: #30383a;
    }

    /* Override box-sizing for all elements */
    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
