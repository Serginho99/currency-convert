import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   body{
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva', 'Verdana', 'sans-serif';
      margin: 0;
      height: 100vh;
      font-size: 14px;
  letter-spacing: 0.03em;
  background-color: #f5f4fa;
   }
   P,
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
`;
