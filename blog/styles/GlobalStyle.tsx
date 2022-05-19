import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
const GlobalStyle = createGlobalStyle`
  
  ${normalize}
  
    body {
        margin: 0px;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 10pt;
    }
      a{
        text-decoration-line: none;
      }
    
`;

export default GlobalStyle;
