import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    scroll-behavior: smooth;
  }

  body{
    /* background-image: url("https://www.transparenttextures.com/patterns/rocky-wall.png"); */
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Nunito Sans', sans-serif;
    transition: .2s;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3, h4, h5, h6{
    font-weight: bolder;
  }

  .container{
    position: relative;
    max-width: 1400px;
    margin: auto;
    padding: 0 15px;
  }
`;

export default GlobalStyle;
