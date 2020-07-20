import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
 html {
   box-sizing: border-box;
}

 *,
 *::before,
 *::after {
   box-sizing: inherit;
}
body {
  /* font-family: 'Noto Sans KR', sans-serif; */
  font-family: 'Source Sans Pro', sans-serif;
  font-size: clamp(1rem, 1vw, 2rem); 
  margin: 0;

}
`;

export default GlobalStyles;