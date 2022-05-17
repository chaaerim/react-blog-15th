import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
  :root{
    --ff-main: "Noto Sans KR", sans-serif;
  }

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
    h1 {
        margin-bottom: 20px;
    }
    h4 {
        margin: 20px 0px;
    }
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(211, 211, 211,0.5);
        border-radius: 3px;
    }
    &::-webkit-scrollbar-track {
        background-color: none;
    }
`;

export default GlobalStyle;
