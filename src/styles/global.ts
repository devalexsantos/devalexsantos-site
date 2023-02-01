import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }
    body {
        background-color: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.base};
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font: 400 1.2rem Nunito, sans-serif;
    }
    a {
    text-decoration: none;
    color: ${(props) => props.theme.base};
    &:hover {
        text-decoration: underline;
        }
    }
`