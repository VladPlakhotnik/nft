import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@font-face {
      font-family: "Press Start 2P";
      src: url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap')
    }

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin: auto;
}

body {
  color: #000;
  font-family: 'Press Start 2P', cursive;
  font-weight: 400;
  font-size: 1rem;
}

a {
  text-decoration: none;

}
ul {
  list-style: none;
}
`
