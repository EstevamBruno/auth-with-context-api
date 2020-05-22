import { createGlobalStyle } from "styled-components";
import 'font-awesome/css/font-awesome.css'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    font: 400 14px Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyle;
