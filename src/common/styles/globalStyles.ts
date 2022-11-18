import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@font-face {
      font-family: "Marhey";
      src: url('https://fonts.googleapis.com/css2?family=Marhey:wght@300;400;500;600;700&display=swap');
    }
::selection {background: rgba(194, 53, 66, 0.5); color:#fff;}
::-moz-selection {background: rgba(194, 53, 66, 0.5); color:#fff;}
::-webkit-selection {background: rgba(194, 53, 66, 0.5); color:#fff;}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin: auto;
}

body {
  background-color: #000;
  color: #fff;
  font-family: 'Marhey', cursive;
  font-size: 1rem;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
button {
  background-color: #000;
  color: #fff;
}
`
