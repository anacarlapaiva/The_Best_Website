import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
  body {
    background: #fff;
    font-family: 'Visby', sans-serif;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

h1 {
  font-size: 3.4rem;
}
h2{
  font-size: 2.5rem;
}
`;

export default GlobalStyle;
