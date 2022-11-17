import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
      font-family: "Oswald";
      src: url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500&display=swap')
    }

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  color: #fff;
  font-family: 'Oswald', sans-serif;
  font-size: 1rem;
}

a {
  text-decoration: none;
}
ul {
  list-style: none;
}
`;