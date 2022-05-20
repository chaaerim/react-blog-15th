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
        font-size: 10pt;
    }

    a{
        text-decoration-line: none;
      }

      ::-webkit-scrollbar {
    width: 0.9rem;
    margin: 0;
  }

  ::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: #c2bbbb;
    border-radius: 10px;
    background-clip: padding-box;
    border: 0.3rem solid transparent;
  }
    
`;

export default GlobalStyle;
