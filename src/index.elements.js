import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
}
body {
   font-family: 'Poppins', sans-serif;
   background:var(--color-primary);
   color:var(--color-secondary);
   
}
:root {
  --color-primary:#ece7e1;
  --color-secondary:#1A1818;
}

.main-container{
  max-width:70%;
  margin: 0 auto;

  @media (min-width:240px) and (max-width:880px) {
    max-width:90%;
  }
}
`;
export default GlobalStyle